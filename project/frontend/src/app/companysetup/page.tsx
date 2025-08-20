'use client';
import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CompanySetup() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    // Company Information - mapped to backend fields
    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [address, setAddress] = useState(""); // mapped to location in original
    const [industry, setIndustry] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [customCompanySize, setCustomCompanySize] = useState("");
    const [customIndustry, setCustomIndustry] = useState("");
    const [color, setColor] = useState("#000000");
    const [companyLogo, setCompanyLogo] = useState<File | null>(null);
    const [existingLogoUrl, setExistingLogoUrl] = useState("");
    const [bio, setBio] = useState("");
    const [collabType, setCollabType] = useState("");
    const logoInputRef = useRef<HTMLInputElement>(null);

    // Point of Contact - this will be the contact_email for the company
    const [fullname, setFullname] = useState("");
    const [contactEmail, setContactEmail] = useState(""); // mapped from email
    const [position, setPosition] = useState("");
    const [contactNumber, setContactNumber] = useState("");

    // Loading and error states
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // New states for company management
    const [hasExistingCompany, setHasExistingCompany] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [originalCompanyData, setOriginalCompanyData] = useState<any>(null);
    const [companyId, setCompanyId] = useState("");

    // Convert company size number to display string
    const sizeToString = (size: number): string => {
        if (size <= 10) return "1-10";
        if (size <= 50) return "11-50";
        if (size <= 200) return "51-200";
        if (size <= 500) return "201-500";
        if (size <= 1000) return "501-1000";
        if (size > 1000) return "1000+";
        return "Other";
    };

    // Fetch user data and company data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem("access_token");
            if (!token) return;

            try {
                // Fetch user data first
                const resUser = await fetch(`${API}/api/auth/protected`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (resUser.ok) {
                    const userData = await resUser.json();
                    const user = userData.user;

                    setFullname(`${user.first_name} ${user.last_name}`);
                    setContactEmail(user.email);
                    setPosition(user.position);
                }

                // Try to fetch existing company data
                const resCompany = await fetch(`${API}/api/company`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (resCompany.ok) {
                    const companyData = await resCompany.json();
                    
                    // Pre-fill all company fields
                    setCompanyName(companyData.name || "");
                    setCompanyWebsite(companyData.website || "");
                    setAddress(companyData.address || "");
                    setIndustry(companyData.industry || "");
                    setPosition(companyData.position || "");
                    setBio(companyData.bio || "");
                    setColor(companyData.color || "#000000");
                    setCollabType(companyData.collab_type || "");
                    
                    // Handle company size
                    if (companyData.size) {
                        const sizeString = sizeToString(companyData.size);
                        if (sizeString === "Other") {
                            setCompanySize("Other");
                            setCustomCompanySize(companyData.size.toString());
                        } else {
                            setCompanySize(sizeString);
                        }
                    }

                    // Handle industry
                    const predefinedIndustries = [
                        "Financial Technology", "Healthcare", "Education", "Technology", 
                        "Manufacturing", "Retail", "Finance", "Consulting", "Real Estate", 
                        "Media & Entertainment"
                    ];
                    if (companyData.industry && !predefinedIndustries.includes(companyData.industry)) {
                        setIndustry("Other");
                        setCustomIndustry(companyData.industry);
                    }

                    // Store existing logo URL
                    if (companyData.logo) {
                        setExistingLogoUrl(companyData.logo);
                    }
                    
                    setHasExistingCompany(true);
                    setCompanyId(companyData.id);
                    
                    // Store original data for cancel functionality
                    setOriginalCompanyData({
                        name: companyData.name || "",
                        website: companyData.website || "",
                        address: companyData.address || "",
                        industry: companyData.industry || "",
                        size: companyData.size,
                        bio: companyData.bio || "",
                        position: companyData.position || "",
                        color: companyData.color || "#000000",
                        collab_type: companyData.collab_type || "",
                        logo: companyData.logo || ""
                    });
                } else if (resCompany.status === 404) {
                    // No company exists, user can create one
                    setHasExistingCompany(false);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };

        fetchData();
    }, [API]);

    // Convert file to base64
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    // Handle Logo Upload
    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCompanyLogo(e.target.files[0]);
            setExistingLogoUrl(""); // Clear existing logo when new one is uploaded
        }
    };
    
    const handleLogoDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setCompanyLogo(e.dataTransfer.files[0]);
            setExistingLogoUrl(""); // Clear existing logo when new one is uploaded
        }
    };

    // Handle edit mode toggle
    const handleEditClick = () => {
        setIsEditMode(true);
        setError("");
        setSuccess("");
    };

    // Handle cancel edit
    const handleCancelEdit = () => {
        if (originalCompanyData) {
            // Restore original values
            setCompanyName(originalCompanyData.name);
            setCompanyWebsite(originalCompanyData.website);
            setAddress(originalCompanyData.address);
            setBio(originalCompanyData.bio);
            setColor(originalCompanyData.color);
            setCollabType(originalCompanyData.collab_type);
            setExistingLogoUrl(originalCompanyData.logo);
            setCompanyLogo(null);

            // Handle industry restoration
            const predefinedIndustries = [
                "Financial Technology", "Healthcare", "Education", "Technology", 
                "Manufacturing", "Retail", "Finance", "Consulting", "Real Estate", 
                "Media & Entertainment"
            ];
            if (originalCompanyData.industry && !predefinedIndustries.includes(originalCompanyData.industry)) {
                setIndustry("Other");
                setCustomIndustry(originalCompanyData.industry);
            } else {
                setIndustry(originalCompanyData.industry);
                setCustomIndustry("");
            }

            // Handle size restoration
            if (originalCompanyData.size) {
                const sizeString = sizeToString(originalCompanyData.size);
                if (sizeString === "Other") {
                    setCompanySize("Other");
                    setCustomCompanySize(originalCompanyData.size.toString());
                } else {
                    setCompanySize(sizeString);
                    setCustomCompanySize("");
                }
            } else {
                setCompanySize("");
                setCustomCompanySize("");
            }
        }
        setIsEditMode(false);
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!companyName.trim() || !contactEmail.trim()) {
            setError("Company name and contact email are required fields.");
            return;
        }

        setIsLoading(true);

        try {
            let logoBase64 = "";
            if (companyLogo) {
                logoBase64 = await fileToBase64(companyLogo);
            } else if (existingLogoUrl && !companyLogo) {
                // Keep existing logo if no new logo is uploaded
                logoBase64 = existingLogoUrl;
            }

            const finalIndustry = industry === "Other" ? customIndustry : industry;
            const finalSizeString = companySize === "Other" ? customCompanySize : companySize;

            let finalSize: number | undefined;
            if (finalSizeString) {
                if (finalSizeString.includes("-")) {
                    const parts = finalSizeString.split("-");
                    finalSize = parseInt(parts[1]) || parseInt(parts[0]);
                } else if (finalSizeString.includes("+")) {
                    finalSize = parseInt(finalSizeString.replace("+", ""));
                } else {
                    finalSize = parseInt(finalSizeString);
                }
                if (isNaN(finalSize)) finalSize = undefined;
            }

            const payload: any = {
                name: companyName,
                contact_email: contactEmail,
            };

            if (address.trim()) payload.address = address;
            if (companyWebsite.trim()) payload.website = companyWebsite;
            if (color.trim()) payload.color = color;
            if (logoBase64) payload.logo = logoBase64;
            if (bio.trim()) payload.bio = bio;
            if (finalIndustry && finalIndustry.trim()) payload.industry = finalIndustry;
            if (finalSize !== undefined) payload.size = finalSize;
            if (collabType && collabType.trim()) payload.collab_type = collabType;

            const token = sessionStorage.getItem("access_token");
            if (!token) {
                setError("Authentication required. Please log in first.");
                return;
            }

            console.log("Token being sent:", token);
            console.log("Payload being sent:", payload);

            // Use PUT for existing company, POST for new company
            const method = hasExistingCompany ? "PUT" : "POST";
            const response = await fetch(`${API}/api/company`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            console.log("Response:", response.status, data);

            if (response.ok) {
                if (hasExistingCompany) {
                    setSuccess(`Company "${data.company.name}" updated successfully!`);
                    setIsEditMode(false);
                    
                    // Update original data with new values for future cancellations
                    setOriginalCompanyData({
                        name: data.company.name,
                        website: data.company.website || "",
                        address: data.company.address || "",
                        industry: data.company.industry || "",
                        size: data.company.size,
                        bio: data.company.bio || "",
                        color: data.company.color || "#000000",
                        collab_type: data.company.collab_type || "",
                        logo: data.company.logo || ""
                    });
                } else {
                    setSuccess(`Company "${data.company.name}" created successfully!`);
                    setHasExistingCompany(true);
                    setCompanyId(data.company.id);
                    
                    // Store the newly created company data
                    setOriginalCompanyData({
                        name: data.company.name,
                        website: data.company.website || "",
                        address: data.company.address || "",
                        industry: data.company.industry || "",
                        size: data.company.size,
                        bio: data.company.bio || "",
                        color: data.company.color || "#000000",
                        collab_type: data.company.collab_type || "",
                        logo: data.company.logo || ""
                    });

                    // Redirect to Proposal Form page after successful creation
                    setTimeout(() => {
                        window.location.href = "/proposalform"; // Adjust this path as needed
                    }, 2000);
                }
            } else {
                setError(data.error || `Failed to ${hasExistingCompany ? 'update' : 'create'} company (${response.status})`);
            }
        } catch (err) {
            console.error("Error with company operation:", err);
            setError(`An unexpected error occurred while ${hasExistingCompany ? 'updating' : 'creating'} the company.`);
        } finally {
            setIsLoading(false);
        }
    };

    // Check if fields should be read-only
    const isReadOnly = hasExistingCompany && !isEditMode;

    // Get button text based on state
    const getButtonText = () => {
        if (isLoading) {
            if (hasExistingCompany) {
                return isEditMode ? "SAVING..." : "LOADING...";
            }
            return "SETTING UP COMPANY...";
        }
        
        if (hasExistingCompany) {
            return isEditMode ? "SAVE CHANGES" : "EDIT COMPANY";
        }
        
        return "SETUP COMPANY";
    };

    // Handle button click
    const handleButtonClick = (e: React.FormEvent) => {
        if (hasExistingCompany && !isEditMode) {
            e.preventDefault();
            handleEditClick();
        } else {
            handleSubmit(e);
        }
    };

    return (
        <ProtectedRoute allowedRoles={["user"]}>
        <div className="min-h-screen bg-white flex flex-col items-center px-[10%] py-8">
            {/* Header */}
            <div className="relative flex items-center w-full mt-2 mb-10">
                {/* Back Button */}
                <button
                    onClick={() => router.push("/dashboard")}
                    className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10]"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back</span>
                </button>

                {/* Title */}
                <div className="text-center w-full">
                    <h1 className="text-2xl sm:text-4xl font-bold text-[#B11016] pb-4">
                        Company Setup Form
                    </h1>
                    <p className="text-md text-black mb-6">
                        {hasExistingCompany
                        ? "Manage your company information"
                        : "Set up your company that's aiming to partner with BPI"}
                    </p>
                    <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
                </div>
            </div>

            {/* Error/Success Messages */}
            {error && (
                <div className="w-full mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}
            {success && (
                <div className="w-full mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    {success}
                </div>
            )}

            <form onSubmit={handleButtonClick} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                    {/* LEFT COLUMN - COMPANY INFO */}
                    <div className="space-y-6">
                        <h2 className="flex items-center space-x-3 text-[#B11016] text-2xl font-bold">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#B11016] text-base font-bold leading-none">
                                1
                            </span>
                            <span>Company Information</span>
                        </h2>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                COMPANY NAME *
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    placeholder="Enter Company Name"
                                    readOnly={isReadOnly}
                                    className={`appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`}
                                    required
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016]
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>

                        {/* Website */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                COMPANY WEBSITE LINK
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="url"
                                    value={companyWebsite}
                                    onChange={(e) => setCompanyWebsite(e.target.value)}
                                    placeholder="Enter Website Link (https://...)"
                                    readOnly={isReadOnly}
                                    className={`appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`}
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                COMPANY ADDRESS
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter Company Address"
                                    readOnly={isReadOnly}
                                    className={`appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`}
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>

                        {/* Company Bio */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                COMPANY BIO
                            </label>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Brief description of your company..."
                                readOnly={isReadOnly}
                                className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none resize-vertical
                                ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                rows={3}
                            />
                        </div>

                        {/* Company Size */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-4">
                                COMPANY SIZE (Number of Employees)
                            </label>
                            <select
                                value={companySize}
                                onChange={(e) => setCompanySize(e.target.value)}
                                disabled={isReadOnly}
                                className={`border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full
                                ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                            >
                                <option value="">Select Company Size</option>
                                <option value="1-10">1-10 employees</option>
                                <option value="11-50">11-50 employees</option>
                                <option value="51-200">51-200 employees</option>
                                <option value="201-500">201-500 employees</option>
                                <option value="501-1000">501-1000 employees</option>
                                <option value="1000+">1000+ employees</option>
                                <option value="Other">Other (specify number)</option>
                            </select>
                            
                            {companySize === "Other" && (
                                <input
                                    type="number"
                                    value={customCompanySize}
                                    onChange={(e) => setCustomCompanySize(e.target.value)}
                                    placeholder="Enter exact number of employees"
                                    readOnly={isReadOnly}
                                    className={`w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                    min="1"
                                />
                            )}
                        </div>

                        {/* Industry */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-4">
                                COMPANY INDUSTRY
                            </label>
                            <select
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                disabled={isReadOnly}
                                className={`border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full
                                ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                            >
                                <option value="">Select Industry</option>
                                <option>Financial Technology</option>
                                <option>Healthcare</option>
                                <option>Education</option>
                                <option>Technology</option>
                                <option>Manufacturing</option>
                                <option>Retail</option>
                                <option>Finance</option>
                                <option>Consulting</option>
                                <option>Real Estate</option>
                                <option>Media & Entertainment</option>
                                <option value="Other">Other</option>
                            </select>
                            {industry === "Other" && (
                                <input
                                    type="text"
                                    value={customIndustry}
                                    onChange={(e) => setCustomIndustry(e.target.value)}
                                    placeholder="Enter industry"
                                    readOnly={isReadOnly}
                                    className={`w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                />
                            )}
                        </div>

                        {/* Logo & Color Picker in 1 Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Company Logo */}
                            <div>
                                <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                    COMPANY LOGO
                                </label>
                                <div
                                    onDrop={!isReadOnly ? handleLogoDrop : undefined}
                                    onDragOver={!isReadOnly ? (e) => e.preventDefault() : undefined}
                                    className={`border-2 border-dashed border-[#B11016] rounded-lg p-6 text-center
                                    ${!isReadOnly ? 'cursor-pointer hover:border-[#B11016]' : 'cursor-not-allowed bg-gray-100'}`}
                                    onClick={!isReadOnly ? () => logoInputRef.current?.click() : undefined}
                                >
                                    {existingLogoUrl && !companyLogo ? (
                                        <div>
                                            <img 
                                                src={existingLogoUrl} 
                                                alt="Company Logo" 
                                                className="max-w-full max-h-24 mx-auto mb-2"
                                            />
                                            <p className="text-gray-500 text-sm">Current logo</p>
                                        </div>
                                    ) : (
                                        <p className="text-gray-500">
                                            {isReadOnly ? "Logo upload disabled" : 
                                            "Drag & drop logo or "} 
                                            {!isReadOnly && <span className="underline text-[#B11016]">Browse</span>}
                                        </p>
                                    )}
                                    <input
                                        type="file"
                                        accept=".jpeg,.jpg,.png"
                                        ref={logoInputRef}
                                        className="hidden"
                                        onChange={handleLogoChange}
                                        disabled={isReadOnly}
                                    />
                                </div>
                                {companyLogo && (
                                    <p className="text-green-700 mt-2 text-sm">
                                        New upload: {companyLogo.name}
                                    </p>
                                )}
                            </div>

                            {/* Brand Color */}
                            <div>
                                <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                    BRAND COLOR
                                </label>
                                <div className="flex items-center space-x-3">
                                    <input
                                        type="color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        disabled={isReadOnly}
                                        className={`w-12 h-12 border rounded
                                        ${isReadOnly ? 'cursor-not-allowed' : ''}`}
                                    />
                                    <input
                                        type="text"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        readOnly={isReadOnly}
                                        className={`border border-gray-300 rounded px-3 py-2 font-mono
                                        ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - POINT OF CONTACT */}
                    <div className="space-y-6">
                        <h2 className="flex items-center space-x-3 text-[#B11016] text-2xl font-bold">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#B11016] text-base font-bold leading-none">
                                2
                            </span>
                            <span>Point of Contact</span>
                        </h2>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                FULL NAME
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    value={fullname}
                                    readOnly
                                    placeholder="Loading..."
                                    className="appearance-none w-full px-2 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-gray-100 
                                    focus:outline-none text-sm sm:text-base cursor-not-allowed"
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016]
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>
                        
                        {/* Contact Email */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                CONTACT EMAIL *
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="email"
                                    value={contactEmail}
                                    readOnly
                                    placeholder="Loading..."
                                    className="appearance-none w-full px-2 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-gray-100 
                                    focus:outline-none text-sm sm:text-base cursor-not-allowed"
                                    required
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016]
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>
                       
                        {/* Position/Title */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                POSITION/TITLE
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="text"
                                    value={position}
                                    onChange={(e) => setPosition(e.target.value)}
                                    placeholder="Enter Position/Title"
                                    readOnly={isReadOnly}
                                    className={`appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`}
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016]
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>
                       
                        {/* Contact Number */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                CONTACT NUMBER
                            </label>
                            <div className="relative w-full group">
                                <input
                                    type="tel"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)}
                                    placeholder="Enter your Contact Number"
                                    readOnly={isReadOnly}
                                    className={`appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`}
                                />
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                                    transition-transform duration-300 ease-in-out 
                                    origin-center scale-x-0 w-full 
                                    group-focus-within:scale-x-100" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="w-full mt-10">
                    {hasExistingCompany && isEditMode ? (
                        <div className="flex space-x-4">
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="flex-1 bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {getButtonText()}
                            </button>
                            <button 
                                type="button"
                                onClick={handleCancelEdit}
                                disabled={isLoading}
                                className="flex-1 bg-white border-2 border-[#B11016] text-[#B11016] py-3 px-6 font-bold text-lg hover:bg-[#B11016] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                CANCEL
                            </button>
                        </div>
                    ) : (
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {getButtonText()}
                        </button>
                    )}
                </div>
            </form>
        </div>
        </ProtectedRoute>
    );
    
}