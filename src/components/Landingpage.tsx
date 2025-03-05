"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Landingpage() {
  const [showQR] = useState(true); // QR code is now visible by default

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image 
            src="/grlogo.png" 
            alt="Drivisory Logo" 
            width={200} 
            height={200} 
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
        <p className="text-gray-600 mb-6">Scan the QR code to install the app!</p>
        

        {showQR && (
          <div className="mt-6">
            <img
              src="https://via.placeholder.com/200x200.png?text=QR+Code"
              alt="QR Code"
              className="w-48 h-48 mx-auto"
            />
          
          </div>
        )}
      </div>
    </div>
  );
}
