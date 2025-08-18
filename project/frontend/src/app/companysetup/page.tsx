'use client';
import React, { useState, useRef } from "react";
import { useEffect } from "react";

export default function CompanySetup() {
    const API = process.env.NEXT_PUBLIC_API_URL;

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

    // Fetch user data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem("access_token");
            if (!token) return;

            try {
                // Fetch user data
                const resUser = await fetch(`${API}/api/auth/protected`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (resUser.ok) {
                    const data = await resUser.json();
                    const user = data.user;

                    setFullname(`${user.first_name} ${user.last_name}`);
                    setContactEmail(user.email);
                }
            } catch (err) {
                console.error("Error fetching user data:", err);
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
        }
    };
    
    const handleLogoDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setCompanyLogo(e.dataTransfer.files[0]);
        }
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

            const response = await fetch(`${API}/api/company`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            console.log("Response:", response.status, data);

            if (response.ok) {
                setSuccess(`Company "${data.company.name}" created successfully!`);
                // Optionally reset form after success
                // resetForm();
            } else {
                setError(data.error || `Failed to create company (${response.status})`);
            }
        } catch (err) {
            console.error("Error creating company:", err);
            setError("An unexpected error occurred while creating the company.");
        } finally {
            setIsLoading(false);
        }
    };

    // Optional: Function to reset form
    const resetForm = () => {
        setCompanyName("");
        setCompanyWebsite("");
        setAddress("");
        setIndustry("");
        setCompanySize("");
        setCustomCompanySize("");
        setCustomIndustry("");
        setColor("#000000");
        setCompanyLogo(null);
        setBio("");
        setCollabType("");
        setFullname("");
        setContactEmail("");
        setPosition("");
        setContactNumber("");
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center px-[10%] py-8">
            {/* Header */}
            <div className="text-center mt-2 w-full mb-10">
                <h1 className="text-2xl sm:text-4xl font-bold text-[#B11016] pb-4">
                    Company Setup Form
                </h1>
                <p className="text-md text-black mb-6">
                    Set up your company that's aiming to partner with BPI
                </p>
                <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
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

            <form onSubmit={handleSubmit} className="w-full">
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
                                    className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-sm sm:text-base"
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
                                    className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-sm sm:text-base"
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
                                    className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-sm sm:text-base"
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
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none resize-vertical"
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
                                className="border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full"
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
                                    className="w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2"
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
                                className="border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full"
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
                                    className="w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2"
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
                                    onDrop={handleLogoDrop}
                                    onDragOver={(e) => e.preventDefault()}
                                    className="border-2 border-dashed border-[#B11016] rounded-lg p-6 text-center cursor-pointer hover:border-[#B11016]"
                                    onClick={() => logoInputRef.current?.click()}
                                >
                                    <p className="text-gray-500">
                                        Drag & drop logo or{" "}
                                        <span className="underline text-[#B11016]">Browse</span>
                                    </p>
                                    <input
                                        type="file"
                                        accept=".jpeg,.jpg,.png"
                                        ref={logoInputRef}
                                        className="hidden"
                                        onChange={handleLogoChange}
                                    />
                                </div>
                                {companyLogo && (
                                    <p className="text-green-700 mt-2 text-sm">
                                        Uploaded: {companyLogo.name}
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
                                        className="w-12 h-12 border rounded"
                                    />
                                    <input
                                        type="text"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                        className="border border-gray-300 rounded px-3 py-2 font-mono"
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
                                    className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-sm sm:text-base"
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
                                    className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-sm sm:text-base"
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

                {/* Submit */}
                <div className="w-full mt-10">
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "SETTING UP COMPANY..." : "SETUP COMPANY"}
                    </button>
                </div>
            </form>
        </div>
    );
}