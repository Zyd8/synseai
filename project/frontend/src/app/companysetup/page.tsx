'use client';
import React, { useState, useRef } from "react";

export default function CompanySetup() {
    // Company Information
    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [location, setLocation] = useState("");
    const [industry, setIndustry] = useState("");
    const [companySize, setCompanySize] = useState("");
    const [customCompanySize, setCustomCompanySize] = useState("");
    const [customIndustry, setCustomIndustry] = useState("");
    const [companyColor, setCompanyColor] = useState("#000000");
    const [companyLogo, setCompanyLogo] = useState<File | null>(null);
    const logoInputRef = useRef<HTMLInputElement>(null);

    // Point of Contact
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [contactNumber, setContactNumber] = useState("");

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !companyName.trim() ||
            !companyWebsite.trim() ||
            !location.trim() ||
            !industry.trim() ||
            !companySize.trim() ||
            !fullname.trim() ||
            !email.trim() ||
            !position.trim() ||
            !contactNumber.trim()
        ) {
            alert("Please fill in all required fields.");
            return;
        }

        const payload = {
            companyName,
            companyWebsite,
            location,
            companySize,
            industry,
            companyColor,
            logoName: companyLogo?.name ?? null,
            fullname,
            email,
            position,
            contactNumber
        };

        console.log("Company Setup Payload", payload);
        alert("Company setup submitted (demo). Check console for payload.");
    };

    return (
        <form onSubmit={handleSubmit}>
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
                                COMPANY NAME
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
                            />
            
                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
            
                            {/* Red animated underline */}
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
                                type="text"
                                value={companyWebsite}
                                onChange={(e) => setCompanyWebsite(e.target.value)}
                                placeholder="Enter Website Link (https://...)"
                                className="appearance-none w-full px-0 py-3 border-0 
                                placeholder-gray-400 text-gray-900 bg-transparent 
                                focus:outline-none text-sm sm:text-base"
                            />
            
                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
            
                            {/* Red animated underline */}
                            <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                                transition-transform duration-300 ease-in-out 
                                origin-center scale-x-0 w-full 
                                group-focus-within:scale-x-100" />
                            </div>
                        </div>
                        

                        {/* Location */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                COMPANY ADDRESS
                            </label>
                            <div className="relative w-full group">
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter Company Address"
                                className="appearance-none w-full px-0 py-3 border-0 
                                placeholder-gray-400 text-gray-900 bg-transparent 
                                focus:outline-none text-sm sm:text-base"
                            />
            
                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
            
                            {/* Red animated underline */}
                            <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                                transition-transform duration-300 ease-in-out 
                                origin-center scale-x-0 w-full 
                                group-focus-within:scale-x-100" />
                            </div>
                        </div>
                        

                        {/* Company Size */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-4">
                                COMPANY SIZE
                            </label>
                            <select
                                value={companySize}
                                onChange={(e) => setCompanySize(e.target.value)}
                                className="border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full"
                            >
                                <option value="">Select Company Size</option>
                                <option>1-10</option>
                                <option>11-50</option>
                                <option>51-200</option>
                                <option>201-500</option>
                                <option>501-1000</option>
                                <option>1000+</option>
                                <option value="Other">Other</option>
                            </select>
                            
                            {companySize === "Other" && (
                                
                                <input
                                    type="text"
                                    value={customCompanySize}
                                    onChange={(e) => setCustomCompanySize(e.target.value)}
                                    placeholder="Enter company size"
                                    className="w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2"
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
                                        value={companyColor}
                                        onChange={(e) => setCompanyColor(e.target.value)}
                                        className="w-12 h-12 border rounded"
                                    />
                                    <input
                                        type="text"
                                        value={companyColor}
                                        onChange={(e) => setCompanyColor(e.target.value)}
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
                                onChange={(e) => setFullname(e.target.value)}
                                readOnly
                                className="w-full px-3 py-3 border-0 
                                            bg-[#E7E7E7] text-gray-900
                                            focus:outline-none text-sm sm:text-base"
                                placeholder=""
                            />
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
            
                          
                            
                            </div>
                        </div>
                        
                        {/* Email */}
                        <div>
                            <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                                EMAIL
                            </label>
                            <div className="relative w-full group">
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                readOnly
                                className="w-full px-3 py-3 border-0 
                                            bg-[#E7E7E7] text-gray-900
                                            focus:outline-none text-sm sm:text-base"
                                placeholder=""
                            />
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
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
                                readOnly
                                className="w-full px-3 py-3 border-0 
                                            bg-[#E7E7E7] text-gray-900
                                            focus:outline-none text-sm sm:text-base"
                                placeholder=""
                            />
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
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
            
                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
            
                            {/* Red animated underline */}
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
                    <button className="w-full bg-[#B11016] border-2 border-transparent  text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors">
                        SETUP COMPANY
                    </button>
                </div>
            </div>
        </form>
    );
}
