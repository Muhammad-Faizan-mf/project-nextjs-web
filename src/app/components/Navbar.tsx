"use client"
 
import Image from "next/image"
import Link from "next/link"
import HeroSection from "./HeroSection"
import React, { use, useState } from "react";
 


export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <div className="flex flex-row items-center justify-between bg-black text-white p-5">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="rounded-full"
        />
      
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/About" className="hover:text-gray-300">About</Link>
          <Link href="/Contact" className="hover:text-gray-300">Contact</Link>
          <button className="bg-white rounded-md text-black font-semibold p-2 transition-transform duration-300 hover:scale-110">
            Login
          </button>
        </div>
      
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </button>
      
        {showMobileMenu && (
          <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 md:hidden">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/About" className="hover:text-gray-300">About</Link>
            <Link href="/Contact" className="hover:text-gray-300">Contact</Link>
            <button className="bg-white rounded-md text-black font-semibold p-2 transition-transform duration-300 hover:scale-110">
              Login
            </button>
          </div>
        )}
      </div>
      
    )
}