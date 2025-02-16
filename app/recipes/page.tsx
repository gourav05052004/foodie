import Image from "next/image"
import Link from "next/link"
import { Search, Clock, Users } from "lucide-react"

const recipes = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    category: "Italian",
    time: "45 mins",
    servings: "4",
    difficulty: "Medium",
    image: "/image/recipe-1.jpg",
  },
  {
    id: 2,
    title: "Butter Chicken",
    category: "Indian",
    time: "60 mins",
    servings: "6",
    difficulty: "Medium",
    image: "/image/recipe-2.jpg",
  },
  {
    id: 3,
    title: "Sushi Roll",
    category: "Japanese",
    time: "40 mins",
    servings: "2",
    difficulty: "Hard",
    image: "/image/recipe-3.jpeg",
  },
  // Add more recipes as needed
]

const categories = ["All", "Italian", "Indian", "Japanese", "Mexican", "Chinese"]

export default function Recipes() {
  return (
    <div className="min-h-screen bg-amber-50">
      
      {/* Hero Section */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
            Explore Our Recipes
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-full px-6 py-4 rounded-full border-2 border-amber-200 focus:outline-none focus:border-amber-400 pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white hover:bg-amber-600 hover:text-white transition-colors
                          border border-amber-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                    {recipe.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {recipe.servings} servings
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
                  <p className="text-gray-500 mb-4">{recipe.category}</p>
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="inline-block bg-amber-600 text-white px-6 py-2 rounded-full font-semibold 
                             hover:bg-amber-700 transition duration-300"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <div className="text-center pb-16">
        <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold border-2 border-amber-600 
                          hover:bg-amber-600 hover:text-white transition duration-300">
          Load More Recipes
        </button>
      </div>
    </div>
  )
}