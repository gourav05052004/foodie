import Link from "next/link"
import { Search, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          FoodieDelight
        </Link>
        <nav className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-600 hover:text-amber-600">
            Home
          </Link>
          <Link href="/recipes" className="text-gray-600 hover:text-amber-600">
            Recipes
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-amber-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-amber-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="h-6 w-6 text-gray-400 cursor-pointer" />
          <Menu className="h-6 w-6 text-gray-400 cursor-pointer md:hidden" />
        </div>
      </div>
    </header>
  )
} 