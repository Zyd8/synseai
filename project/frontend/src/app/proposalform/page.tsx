'use client';
import React, { useState } from 'react';
export default function proposalform() {
    const [fullname, setFullname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position, setPosition] = useState<string>('');
    const [contactNumber, setContactNumber] = useState<string>('');

    return (
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
                                    className="hidden peer"
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
                                    className="hidden peer"
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
                        value={fullname}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
                        placeholder="Enter your Name"
                        className="appearance-none w-full px-0 py-3 border-0 
                        placeholder-gray-400 text-gray-900 bg-transparent 
                        focus:outline-none text-base sm:text-lg"
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
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter your Website"
                        className="appearance-none w-full px-0 py-3 border-0 
                        placeholder-gray-400 text-gray-900 bg-transparent 
                        focus:outline-none text-base sm:text-lg"
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
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        placeholder="Enter your Location"
                        className="appearance-none w-full px-0 py-3 border-0 
                        placeholder-gray-400 text-gray-900 bg-transparent 
                        focus:outline-none text-base sm:text-lg"
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
                                className="appearance-none w-full border border-gray-300 rounded-md py-3 px-4 pr-8
                   focus:outline-none focus:border-red-700 text-gray-900 text-base"
                            >
                                <option>Financial Technology</option>
                                <option>Healthcare</option>
                                <option>Education</option>
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
                                className="appearance-none w-full border border-gray-300 rounded-md py-3 px-4 pr-8
                   focus:outline-none focus:border-red-700 text-gray-900 text-base"
                            >
                                <option>200-300</option>
                                <option>300-500</option>
                                <option>500+</option>
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
                        value={fullname}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullname(e.target.value)}
                        placeholder="Enter your Name"
                        className="appearance-none w-full px-0 py-3 border-0 
                        placeholder-gray-400 text-gray-900 bg-transparent 
                        focus:outline-none text-base sm:text-lg"
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

                    {/* EXPECTED SUPPORT FROM BPI */}
                    <div className="w-full">
                        <div className="w-full text-red-700 text-xl font-normal">
                            EXPECTED SUPPORT FROM BPI
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


            </div>

        </div>

    );
};