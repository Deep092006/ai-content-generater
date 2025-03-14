"use client"
import React from 'react'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="bg-primary flex justify-between items-center w-full h-12 px-4 py-2 shadow-md">
      <div className="text-2xl font-bold text-white">
        DeepWrite AI
      </div>
      <div>
        <SignedOut>
          <SignInButton/>
          <SignUpButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
