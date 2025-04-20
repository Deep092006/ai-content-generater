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
    <div className='bg-red-600 flex justify-between items-center w-full h-11 px-3 py-1'>
      <div className='text-2xl text-center text-black border-e-violet-200 font-medium'>
        ContentAI AI
      </div>
      <div>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar