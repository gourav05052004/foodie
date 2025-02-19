import React from 'react';
import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { SignInButton, SignedIn, SignedOut, UserButton, SignOutButton } from "@clerk/nextjs"

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-amber-600">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          FoodieDelight
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-text hover:text-primary">
            Home
          </Link>
          <Link href="/recipes" className="text-text hover:text-primary">
            Recipes
          </Link>
          <Link href="/about" className="text-text hover:text-primary">
            About
          </Link>
          <Link href="/contact" className="text-text hover:text-primary">
            Contact
          </Link>
          <SignedIn>
            <Link href="/secret" className="text-text hover:text-primary">
              Secret Recipes
            </Link>
          </SignedIn>
        </nav>

        <div className="flex items-center space-x-6">
          <Search className="h-6 w-6 text-text cursor-pointer" />
          <SignedOut>
            <SignInButton>
              <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center space-x-4">
              <UserButton afterSignOutUrl="/" />
              <SignOutButton>
                <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
                  Sign Out
                </button>
              </SignOutButton>
            </div>
          </SignedIn>
          <Menu className="h-6 w-6 text-text cursor-pointer md:hidden" />
        </div>
      </div>
    </header>
  )
}

export default Header; 