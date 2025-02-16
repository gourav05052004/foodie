import Link from "next/link"
import { ArrowRight, Clock, Users, ChefHat } from "lucide-react"
import Image from "next/image"

const featuredRecipes = [
  {
    id: 1,
    title: "Homemade Margherita Pizza",
    description: "Classic Italian pizza with fresh basil, mozzarella, and tomatoes",
    time: "30 mins",
    servings: "2",
    chef: "Chef Maria",
    image: "/image/recipe-1.jpg",
  },
  {
    id: 2,
    title: "Creamy Butter Chicken",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    time: "45 mins",
    servings: "4",
    chef: "Chef Raj",
    image: "/image/recipe-2.jpg",
  },
  {
    id: 3,
    title: "Japanese Sushi Roll",
    description: "Fresh and delicious California rolls with avocado",
    time: "40 mins",
    servings: "3",
    chef: "Chef Yuki",
    image: "/image/recipe-3.jpeg",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      
      <main>
        <section className="relative h-[70vh] flex items-center justify-center bg-amber-200">
          <div className="relative z-10 text-center text-gray-800">
            <h1 className="text-5xl font-bold mb-4">Discover Culinary Delights</h1>
            <p className="text-xl mb-8">Explore our collection of mouthwatering recipes</p>
            <Link
              href="/recipes"
              className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
            >
              Start Cooking
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Recipes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of delicious recipes that are perfect for any occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div 
                key={recipe.id} 
                className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{recipe.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{recipe.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{recipe.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{recipe.servings} servings</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <ChefHat className="w-4 h-4" />
                      <span className="text-sm">{recipe.chef}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/recipes/${recipe.id}`}
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    View Recipe 
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/recipes"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-full font-semibold 
                       hover:bg-amber-700 transition duration-300"
            >
              Explore All Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
    </div>
  )
}

