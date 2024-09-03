import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";

export default function page() {
  return (
    <div>
      <p>Home</p>
    </div>
  )
}
