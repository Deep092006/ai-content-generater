"use client"
import React, { useState } from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 border-b border-gray-800 flex justify-between items-center w-full h-16 px-6 py-2 shadow-lg sticky top-0 z-50">
      {/* Logo - Navigation to Home */}
      <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-all">
        DeepWrite AI
      </Link>

      {/* Desktop Navigation and Auth Buttons - Hidden on Mobile */}
      <div className="hidden md:flex items-center gap-8">
        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link href="/templates" className="text-gray-300 hover:text-blue-400 transition-all">
            Templates
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-blue-400 transition-all">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-all">
            About
          </Link>
        </nav>
        {/* Authentication Buttons */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-all">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Menu Button (Right Corner) - Visible on Mobile */}
      <button
        className="md:hidden text-gray-300 hover:text-blue-400 transition-all"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu - Conditionally Rendered */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 border-b border-gray-800 flex flex-col items-center gap-4 py-4">
          {/* Mobile Navigation Links */}
          <Link href="/templates" className="text-gray-300 hover:text-blue-400 transition-all">
            Templates
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-blue-400 transition-all">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-all">
            About
          </Link>

          {/* Mobile Authentication Buttons */}
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-2 bg-transparent border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition-all">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
              <span className="text-gray-300">Profile</span>
            </div>
          </SignedIn>
        </div>
      )}
    </div>
  )
}

export default Navbar