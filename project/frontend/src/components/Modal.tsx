// components/Modal.tsx
"use client";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export default function Modal({ isOpen, title, message, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
        <h2 className="text-lg font-bold text-red-700 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-red-700 text-white font-semibold hover:bg-red-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
