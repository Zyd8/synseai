'use client';
import React, { useState, useRef } from "react";
export default function ProposalForm() {
    // Point of Contact
    const [salutation, setSalutation] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [contactNumber, setContactNumber] = useState<string>('');

    // Company Information
    const [companyName, setCompanyName] = useState<string>('');
    const [companyWebsite, setCompanyWebsite] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');
    const [companySize, setCompanySize] = useState<string>('');

    // Collaboration Request
    const [proposalTitle, setProposalTitle] = useState<string>('');
    const [collaborationType, setCollaborationType] = useState<string>('');
    const [expectedSupport, setExpectedSupport] = useState<string>('');

    // File Upload
    const [confirm, setConfirm] = useState<boolean>(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setUploadedFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setUploadedFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!salutation.trim() ||
            !gender.trim() ||
            !fullname.trim() ||
            !email.trim() ||
            !position.trim() ||
            !proposalTitle.trim() ||
            !companyName.trim() ||
            !companyWebsite.trim() ||
            !location.trim() ||
            !industry.trim() ||
            !companySize.trim() ||
            !collaborationType.trim() ||
            !expectedSupport.trim() ||
            !contactNumber.trim()
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!fullname.trim() || !email.trim()) {
            alert('Please provide your full name and email.');
            return;
        }

        if (!confirm) {
            alert('Please confirm that your information is accurate.');
            return;
        }

        const payload = {
            salutation,
            gender,
            fullname,
            email,
            position,
            contactNumber,
            companyName,
            companyWebsite,
            location,
            industry,
            companySize,
            proposalTitle,
            collaborationType,
            expectedSupport,
            uploadedFileName: uploadedFile?.name ?? null,
        };

        console.log('Proposal payload', payload);
        alert('Proposal submitted (demo). Check the console for payload.');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="min-h-screen bg-white flex flex-col items-center sm:px-[30%] px-[15%] py-6 sm:py-8">
                <div className="block w-full text-2xl sm:text-4xl font-bold text-red-700 border-b-3 border-red-700 mb-4 pb-12 text-center">
                    BPI Collaboration Proposal Form
                </div>
                <div className="block w-full flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-700 bg-white text-red-700 font-bold text-xl p-4">
                        1
                    </div>
                    <span className="w-full mb-[0.2%] ml-[1.5%] text-red-700 text-2xl font-bold">
                        Point of Contact
                    </span>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 mb-3">
                    {/* SALUTATION */}
                    <div>
                        <div className="text-red-700 text-xl font-normal mb-3">SALUTATION</div>
                        <div className="flex space-x-8">
                            {["Mr.", "Mrs.", "Ms."].map((label) => (
                                <label key={label} className="flex items-center space-x-1 sm:space-x-2 cursor-pointer text-lg">
                                    {/* Radio input */}
                                    <input
                                        type="radio"
                                        name="salutation"
                                        value={label}
                                        checked={salutation === label}
                                        onChange={(e) => setSalutation(e.target.value)}
                                        className="sr-only peer"
                                    />

                                    {/* Square with check mark */}
                                    <div className="w-5 h-5 border border-black rounded-md flex items-center justify-center 
                          peer-checked:bg-red-700 peer-checked:[&>svg]:block">
                                        <svg
                                            className="w-3 h-3 text-white hidden"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>

                                    {/* Label text */}
                                    <span className="text-black">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* GENDER */}
                    <div>
                        <div className="text-red-700 text-xl font-normal mb-3">GENDER</div>
                        <div className="flex space-x-8">
                            {["Male", "Female", "Others"].map((label) => (
                                <label key={label} className="flex items-center space-x-1 sm:space-x-2 cursor-pointer text-lg">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={label}
                                        checked={gender === label}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-5 h-5 border border-black rounded-md flex items-center justify-center 
                          peer-checked:bg-red-700 peer-checked:[&>svg]:block">
                                        <svg
                                            className="w-3 h-3 text-white hidden"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-black">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full mb-5">
                    <div className="w-full text-red-700 text-xl font-normal">
                        FULL NAME
                    </div>
                    {/* FULL NAME INPUT */}
                    <div className="w-full relative group mb-5">
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
                            placeholder="Enter your Name"
                            className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-base sm:text-lg"
                        />

                        {/* Base underline */}
                        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                        {/* Red animated underline */}
                        <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                                  transition-transform duration-300 ease-in-out 
                                  origin-center scale-x-0 w-full 
                                  group-focus-within:scale-x-100" />
                    </div>


                    <div className="w-full text-red-700 text-xl font-normal">
                        EMAIL
                    </div>
                    {/* EMAIL INPUT */}
                    <div className="w-full relative group">
                        <input
                            type="text"
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            placeholder="Enter your Name"
                            className="appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 bg-transparent 
                                    focus:outline-none text-base sm:text-lg"
                        />

                        {/* Base underline */}
                        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                        {/* Red animated underline */}
                        <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                                  transition-transform duration-300 ease-in-out 
                                  origin-center scale-x-0 w-full 
                                  group-focus-within:scale-x-100" />
                    </div>

                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                    {/* POSITION/TITLE */}
                    <div className="w-full">
                        <div className="w-full text-red-700 text-xl font-normal">
                            POSITION/TITLE
                        </div>
                        <div className="w-full relative group mb-5">
                            <input
                                type="text"
                                value={position}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setPosition(e.target.value)
                                }
                                placeholder="Enter your Name"
                                className="appearance-none w-full px-0 py-3 border-0 
                   placeholder-gray-400 text-gray-900 bg-transparent 
                   focus:outline-none text-base sm:text-lg"
                            />
                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                            {/* Red animated underline */}
                            <div
                                className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                   transition-transform duration-300 ease-in-out 
                   origin-center scale-x-0 w-full 
                   group-focus-within:scale-x-100"
                            />
                        </div>
                    </div>

                    {/* CONTACT NUMBER */}
                    <div className="w-full">
                        <div className="w-full text-red-700 text-xl font-normal">
                            CONTACT NUMBER
                        </div>
                        <div className="w-full relative group mb-5">
                            <input
                                type="text"
                                value={contactNumber}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setContactNumber(e.target.value)
                                }
                                placeholder="Enter your Email"
                                className="appearance-none w-full px-0 py-3 border-0 
                   placeholder-gray-400 text-gray-900 bg-transparent 
                   focus:outline-none text-base sm:text-lg"
                            />
                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                            {/* Red animated underline */}
                            <div
                                className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                   transition-transform duration-300 ease-in-out 
                   origin-center scale-x-0 w-full 
                   group-focus-within:scale-x-100"
                            />
                        </div>
                    </div>
                </div>

                <div className="block w-full flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-700 bg-white text-red-700 font-bold text-xl p-4">
                        2
                    </div>
                    <span className="w-full mb-[0.2%] ml-[1.5%] text-red-700 text-2xl font-bold">
                        Company Information
                    </span>
                </div>

                <div className="w-full mb-5">
                    <div className="w-full text-red-700 text-xl font-normal">
                        COMPANY NAME
                    </div>
                    {/* COMPANY NAME INPUT */}
                    <div className="w-full relative group mb-5">
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="Enter your company name"
                            className="appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-base sm:text-lg"
                            aria-label="Company name"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                        <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                        transition-transform duration-300 ease-in-out 
                        origin-center scale-x-0 w-full 
                        group-focus-within:scale-x-100" />
                    </div>

                    <div className="w-full text-red-700 text-xl font-normal">
                        COMPANY WEBSITE LINK
                    </div>
                    {/* COMPANY WEBSITE LINK INPUT */}
                    <div className="w-full relative group mb-5">
                        <input
                            type="text"
                            value={companyWebsite}
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                            placeholder="Enter your company website (https://...)"
                            className="appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-base sm:text-lg"
                            aria-label="Company website"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                        <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                        transition-transform duration-300 ease-in-out 
                        origin-center scale-x-0 w-full 
                        group-focus-within:scale-x-100" />
                    </div>

                    <div className="w-full text-red-700 text-xl font-normal">
                        LOCATION
                    </div>
                    {/* LOCATION INPUT */}
                    <div className="w-full relative group mb-5">
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Enter company location"
                            className="appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-base sm:text-lg"
                            aria-label="Company location"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                        <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                        transition-transform duration-300 ease-in-out 
                        origin-center scale-x-0 w-full 
                        group-focus-within:scale-x-100" />
                    </div>

                    {/* 2-COLUMN DROPDOWNS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                        {/* INDUSTRY */}
                        <div>
                            <label className="block text-red-700 text-sm font-medium mb-1">
                                INDUSTRY
                            </label>
                            <div className="relative">
                                <select
                                    value={industry}
                                    onChange={(e) => setIndustry(e.target.value)}
                                    className="appearance-none w-full border border-gray-300 rounded-md py-3 px-4 pr-8 focus:outline-none focus:border-red-700 text-gray-900 text-base"
                                    aria-label="Industry"
                                >
                                    <option value="">Select Industry</option>
                                    <option value="Financial Technology">Financial Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                </select>
                                {/* Custom arrow */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-red-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Company Size */}
                        <div>
                            <label className="block text-red-700 text-sm font-medium mb-1">
                                COMPANY SIZE
                            </label>
                            <div className="relative">
                                <select
                                    value={companySize}
                                    onChange={(e) => setCompanySize(e.target.value)}
                                    className="appearance-none w-full border border-gray-300 rounded-md py-3 px-4 pr-8 focus:outline-none focus:border-red-700 text-gray-900 text-base"
                                    aria-label="Company size"
                                >
                                    <option value="">Select Company Size</option>
                                    <option value="200-300">200-300</option>
                                    <option value="300-500">300-500</option>
                                    <option value="500+">500+</option>
                                </select>
                                {/* Custom arrow */}
                                <svg
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-red-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block w-full flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-700 bg-white text-red-700 font-bold text-xl p-4">
                        3
                    </div>
                    <span className="w-full mb-[0.2%] ml-[1.5%] text-red-700 text-2xl font-bold">
                        Collaboration Request
                    </span>
                </div>


                <div className="w-full mb-5">
                    <div className="w-full text-red-700 text-xl font-normal">
                        PROPOSAL TITLE
                    </div>
                    {/* PROPOSAL TITLE INPUT */}
                    <div className="w-full relative group mb-5">
                        <input
                            type="text"
                            value={proposalTitle}
                            onChange={(e) => setProposalTitle(e.target.value)}
                            placeholder="Enter proposal title"
                            className="appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-base sm:text-lg"
                            aria-label="Proposal title"
                        />
                        <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                        <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                        transition-transform duration-300 ease-in-out 
                        origin-center scale-x-0 w-full 
                        group-focus-within:scale-x-100" />
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 ">
                        {/* TYPE OF COLLABORATION */}
                        <div className="w-full">
                            <div className="w-full text-red-700 text-xl font-normal">
                                TYPE OF COLLABORATION
                            </div>
                            <div className="w-full relative group mb-5">
                                <input
                                    type="text"
                                    value={collaborationType}
                                    onChange={(e) => setCollaborationType(e.target.value)}
                                    placeholder="Enter type of collaboration"
                                    className="appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-base sm:text-lg"
                                    aria-label="Type of collaboration"
                                />
                                {/* Base underline */}
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                {/* Red animated underline */}
                                <div
                                    className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                   transition-transform duration-300 ease-in-out 
                   origin-center scale-x-0 w-full 
                   group-focus-within:scale-x-100"
                                />
                            </div>
                        </div>

                        {/* EXPECTED SUPPORT FROM BPI */}
                        <div className="w-full">
                            <div className="w-full text-red-700 text-xl font-normal">
                                EXPECTED SUPPORT FROM BPI
                            </div>
                            <div className="w-full relative group mb-5">
                                <input
                                    type="text"
                                    value={expectedSupport}
                                    onChange={(e) => setExpectedSupport(e.target.value)}
                                    placeholder="Enter expected support from BPI"
                                    className="appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-base sm:text-lg"
                                    aria-label="Expected support"
                                />
                                {/* Base underline */}
                                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                                {/* Red animated underline */}
                                <div
                                    className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                   transition-transform duration-300 ease-in-out 
                   origin-center scale-x-0 w-full 
                   group-focus-within:scale-x-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="w-full text-red-700 text-xl font-normal mb-3">
                        PROPOSAL LETTER
                    </div>

                    {/* Drag and Drop Area */}
                    <div
                        onDrop={handleDrop}
                        onDragOver={(e) => e.preventDefault()}
                        className="border-2 border-dashed border-red-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-500 transition"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <img
                            src="/images/uploadicon.png"
                            alt="Upload Icon"
                            className="mx-auto h-12 w-12 object-contain"
                        />

                        <p className="mt-2 text-gray-600">
                            Drag & drop files or{" "}
                            <span className="text-red-600 underline">Browse</span>
                        </p>
                        <p className="text-sm text-gray-400">
                            Supported formats: JPEG, PNG, PDF, DOCX
                        </p>

                        <input
                            type="file"
                            accept=".jpeg,.jpg,.png,.pdf,.docx"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>

                    {/* Uploaded File Preview */}
                    {uploadedFile && (
                        <div className="mt-3 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-sm">
                            Uploaded: {uploadedFile.name}
                        </div>
                    )}

                    {/* Checkbox */}
                    <div className="flex items-center mt-4">
                        <input id="confirm" type="checkbox" checked={confirm} onChange={(e) => setConfirm(e.target.checked)} className="mr-2" />
                        <span className="text-sm text-gray-700">
                            I confirm that all information provided is accurate and true.
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-2 sm:mt-4 w-full flex justify-center py-3 sm:py-3 px-3 border border-transparent 
                rounded-md text-sm font-bold text-white bg-[#B11016] hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg"
                    >
                        SUBMIT PROPOSAL
                    </button>
                </div>

            </div>
        </form>
    );
};