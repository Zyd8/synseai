'use client';
import React, { useState, useRef } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect } from "react";

export default function ProposalForm() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    useEffect(() => {
        const fetchUser = async () => {
            const token = sessionStorage.getItem("access_token"); 
            if (!token) return;

            try {
                const res = await fetch(`${API}/api/auth/protected`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    const user = data.user;

                    setFullname(`${user.first_name} ${user.last_name}`);
                    setEmail(user.email);
                } else if (res.status === 401) {
                    sessionStorage.removeItem("access_token");
                    window.location.href = "/login";
                }
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        };

        fetchUser();
    }, []);

    const [salutation, setSalutation] = useState<string>("");
    const [gender, setGender] = useState<string>("");

    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    // Company Information
    const [companyName, setCompanyName] = useState<string>('');

    // Collaboration Request
    const [proposalTitle, setProposalTitle] = useState<string>('');
    const [collaborationType, setCollaborationType] = useState<string>('');
    const [description, setDescription] = useState<string>('');

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
            !proposalTitle.trim() ||
            !companyName.trim() ||
            !collaborationType.trim() ||
            !description.trim()
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
            companyName,
            proposalTitle,
            collaborationType,
            description,
            uploadedFileName: uploadedFile?.name ?? null,
        };

        console.log('Proposal payload', payload);
        alert('Proposal submitted (demo). Check the console for payload.');
    };

    return (
        <ProtectedRoute>
            <form onSubmit={handleSubmit}>
                <div className="min-h-screen bg-white flex flex-col items-center sm:px-[30%] px-[15%] py-6 sm:py-8">
                    <div className="block w-full text-2xl sm:text-4xl font-bold text-red-700 border-b-3 border-red-700 mb-2 pb-8 text-center">
                        BPI Collaboration Proposal Form
                    </div>
                    <div className="block w-full flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-700 bg-white text-red-700 font-bold text-base p-4">
                            1
                        </div>
                        <span className="w-full mb-[0.2%] ml-[1.5%] text-red-700 text-base font-bold">
                            Point of Contact
                        </span>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 mb-3">
                        {/* SALUTATION */}
                        <div>
                            <div className="text-red-700 text-base font-normal mb-3">SALUTATION</div>
                            <div className="flex space-x-8">
                                {["Mr.", "Mrs.", "Ms."].map((label) => (
                                    <label key={label} className="flex items-center space-x-1 sm:space-x-2 cursor-pointer text-base">
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
                                        <div className="w-5 h-5 border border-black rounded-sm flex items-center justify-center 
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
                            <div className="text-red-700 text-base font-normal mb-3">GENDER</div>
                            <div className="flex space-x-8">
                                {["Male", "Female", "Others"].map((label) => (
                                    <label key={label} className="flex items-center space-x-1 sm:space-x-2 cursor-pointer text-base">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={label}
                                            checked={gender === label}
                                            onChange={(e) => setGender(e.target.value)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 border border-black rounded-sm flex items-center justify-center 
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
                        <div className="w-full text-red-700 text-base font-normal">
                            FULL NAME
                        </div>
                        {/* FULL NAME INPUT */}
                        <div className="w-full relative group mb-5">
                            <input
                                type="text"
                                value={fullname}
                                readOnly
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
                                className="appearance-none w-full px-2 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base bg-gray-100 cursor-not-allowed"
                            />

                            {/* Base underline */}
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                            {/* Red animated underline */}
                            <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                                  transition-transform duration-300 ease-in-out 
                                  origin-center scale-x-0 w-full 
                                  group-focus-within:scale-x-100" />
                        </div>


                        <div className="w-full text-red-700 text-base font-normal">
                            EMAIL
                        </div>
                        {/* EMAIL INPUT */}
                        <div className="w-full relative group">
                            <input
                                type="text"
                                value={email}
                                readOnly
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                className="appearance-none w-full px-2 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base bg-gray-100 cursor-not-allowed"
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

                    <div className="block w-full flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-700 bg-white text-red-700 font-bold text-base p-4">
                            2
                        </div>
                        <span className="w-full mb-[0.2%] ml-[1.5%] text-red-700 text-base font-bold">
                            Company Information
                        </span>
                    </div>

                    <div className="w-full mb-5">
                        <div className="w-full text-red-700 text-base font-normal">
                            COMPANY NAME
                        </div>
                        {/* COMPANY NAME INPUT */}
                        <div className="w-full relative group mb-5">
                            <input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="Enter your company name"
                                className="appearance-none w-full px-2 py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                                aria-label="Company name"
                            />
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                            <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                        transition-transform duration-300 ease-in-out 
                        origin-center scale-x-0 w-full 
                        group-focus-within:scale-x-100" />
                        </div>
                    </div>

                    <div className="block w-full flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-red-700 bg-white text-red-700 font-bold text-base p-4">
                            3
                        </div>
                        <span className="w-full mb-[0.2%] ml-[1.5%] text-red-700 text-base font-bold">
                            Collaboration Request
                        </span>
                    </div>


                    <div className="w-full mb-5">
                        <div className="w-full text-red-700 text-base font-normal">
                            PROPOSAL TITLE
                        </div>
                        {/* PROPOSAL TITLE INPUT */}
                        <div className="w-full relative group mb-5">
                            <input
                                type="text"
                                value={proposalTitle}
                                onChange={(e) => setProposalTitle(e.target.value)}
                                placeholder="Enter proposal title"
                                className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                                aria-label="Proposal title"
                            />
                            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                            <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                        transition-transform duration-300 ease-in-out 
                        origin-center scale-x-0 w-full 
                        group-focus-within:scale-x-100" />
                        </div>

                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 ">
                            {/* TYPE OF COLLABORATION */}
                            <div className="w-full">
                                <div className="w-full text-red-700 text-base font-normal">
                                    TYPE OF COLLABORATION
                                </div>
                                <div className="w-full relative group mb-5">
                                    <input
                                        type="text"
                                        value={collaborationType}
                                        onChange={(e) => setCollaborationType(e.target.value)}
                                        placeholder="Enter type of collaboration"
                                        className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
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

                            {/* Description */}
                            <div className="w-full">
                                <div className="w-full text-red-700 text-base font-normal">
                                    DESCRIPTION
                                </div>
                                <div className="w-full relative group mb-5">
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Write a description"
                                        className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                                        aria-label="Description"
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
                        <div className="w-full text-red-700 text-base font-normal mb-3">
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

                            <p className="mt-2 text-gray-600 text-md">
                                Drag & drop files or{" "}
                                <span className="text-red-600 underline">Browse</span>
                            </p>
                            <p className="text-xs text-gray-400">
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
                            <div className="mt-3 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-xs">
                                Uploaded: {uploadedFile.name}
                            </div>
                        )}

                        {/* Checkbox */}
                        <div className="flex items-center mt-4">
                            <label className="flex items-center space-x-2 cursor-pointer text-base">
                                {/* Hidden checkbox */}
                                <input
                                    id="confirm"
                                    type="checkbox"
                                    checked={confirm}
                                    onChange={(e) => setConfirm(e.target.checked)}
                                    className="sr-only peer"
                                />

                                {/* Square with check mark */}
                                <div className="w-5 h-5 border border-black rounded-sm flex items-center justify-center 
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
                                <span className="text-xs text-gray-700">
                                    I confirm that all information provided is accurate and true.
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-2 sm:mt-4 w-full flex justify-center py-3 sm:py-3 px-3 border border-transparent 
                rounded-md text-xs font-bold text-white bg-[#B11016] hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            SUBMIT PROPOSAL
                        </button>
                    </div>

                </div>
            </form>
        </ProtectedRoute>
    );
};