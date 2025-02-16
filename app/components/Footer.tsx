import Link from "next/link"
import Image from "next/image"
export default function Footer() {
  return (
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
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-400 hover:text-white">
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            <a 
                  href="https://www.facebook.com/" 
                  className="text-gray-600 hover:text-amber-600 flex items-center gap-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/image/facebook.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  className="text-gray-600 hover:text-amber-600 flex items-center gap-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/image/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                  Instagram
                </a>
                <a 
                  href="https://twitter.com/" 
                  className="text-gray-600 hover:text-amber-600 flex items-center gap-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/image/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
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
  )
} 