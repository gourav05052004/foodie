import Link from "next/link"
import { ArrowRight, Search, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            FoodieDelight
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-amber-600">
              Recipes
            </Link>
            <Link href="#" className="text-gray-600 hover:text-amber-600">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-amber-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-400 cursor-pointer" />
            <Menu className="h-6 w-6 text-gray-400 cursor-pointer md:hidden" />
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-[70vh] flex items-center justify-center bg-amber-200">
          <div className="relative z-10 text-center text-gray-800">
            <h1 className="text-5xl font-bold mb-4">Discover Culinary Delights</h1>
            <p className="text-xl mb-8">Explore our collection of mouthwatering recipes</p>
            <Link
              href="#"
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
            >
              Start Cooking
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`w-full h-48 bg-amber-${[100, 200, 300][i-1]}`} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Delicious Recipe {i}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link href="#" className="text-amber-600 font-semibold flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Latest Recipes</h2>
            <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter and never miss a delicious update!</p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button
                type="submit"
                className="bg-amber-600 text-white px-6 py-2 rounded-r-full font-semibold hover:bg-amber-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">FoodieDelight</h3>
              <p className="text-gray-400">Discover and share amazing recipes from around the world.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FoodieDelight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

