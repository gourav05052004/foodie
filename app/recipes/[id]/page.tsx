import Image from "next/image"
import Link from "next/link"
import { Clock, Users, ChefHat, Utensils } from "lucide-react"

// This would typically come from a database
const recipeDetails = {
  1: {
    title: "Homemade Margherita Pizza",
    description: "Classic Italian pizza with fresh basil, mozzarella, and tomatoes",
    time: "30 mins",
    servings: "2",
    chef: "Chef Maria",
    difficulty: "Medium",
    image: "/image/recipe-1.jpg",
    ingredients: [
      "2 1/2 cups all-purpose flour",
      "1 tsp salt",
      "1 tsp sugar",
      "2 1/4 tsp active dry yeast",
      "1 cup warm water",
      "2 tbsp olive oil",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "2-3 ripe tomatoes",
      "Extra virgin olive oil"
    ],
    instructions: [
      {
        step: 1,
        text: "In a large bowl, combine flour, salt, sugar, and yeast. Add warm water and olive oil."
      },
      {
        step: 2,
        text: "Knead the dough for about 10 minutes until smooth and elastic. Place in a greased bowl and let rise for 1 hour."
      },
      {
        step: 3,
        text: "Preheat oven to 450°F (230°C). Roll out the dough on a floured surface."
      },
      {
        step: 4,
        text: "Top with sliced tomatoes, torn mozzarella, and drizzle with olive oil."
      },
      {
        step: 5,
        text: "Bake for 15-20 minutes until crust is golden. Add fresh basil leaves after baking."
      }
    ],
    tips: [
      "Use room temperature ingredients for best results",
      "Let the dough rest for better texture",
      "Preheat your oven thoroughly"
    ]
  },
  2: {
    title: "Butter Chicken",
    description: "Rich and creamy chicken curry with a blend of spices",
    time: "45 mins",
    servings: "4",
    chef: "Chef Anjali",
    difficulty: "Medium",
    image: "/image/recipe-2.jpg",
    ingredients: [
      "500g chicken breast",
      "2 tbsp butter",
      "1 cup tomato puree",
      "1/2 cup cream",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tsp ginger paste",
      "1 tsp garam masala",
      "Salt and pepper",
      "Cilantro for garnish"
    ],
    instructions: [
      {
        step: 1,
        text: "Heat butter in a pan and sauté onions, garlic, and ginger until golden."
      },
      {
        step: 2,
        text: "Add chicken and cook until browned."
      },
      {
        step: 3,
        text: "Stir in tomato puree, cream, and spices. Simmer for 20 minutes."
      },
      {
        step: 4,
        text: "Season with salt and pepper. Garnish with cilantro before serving."
      }
    ],
    tips: [
      "Marinate chicken in yogurt and spices for extra flavor",
      "Use fresh cream for a richer taste",
      "Serve with naan or rice"
    ]
  },
  3: {
    title: "Sushi Roll",
    description: "Delicious sushi rolls with fresh fish and vegetables",
    time: "60 mins",
    servings: "4",
    chef: "Chef Sato",
    difficulty: "Hard",
    image: "/image/recipe-3.jpeg",
    ingredients: [
      "2 cups sushi rice",
      "3 cups water",
      "1/4 cup rice vinegar",
      "1 tbsp sugar",
      "1 tsp salt",
      "Nori sheets",
      "Fresh fish (salmon, tuna)",
      "Cucumber, sliced",
      "Avocado, sliced",
      "Soy sauce and wasabi for serving"
    ],
    instructions: [
      {
        step: 1,
        text: "Rinse sushi rice until water runs clear. Cook with water."
      },
      {
        step: 2,
        text: "Mix rice vinegar, sugar, and salt. Stir into cooked rice."
      },
      {
        step: 3,
        text: "Place nori on a bamboo mat. Spread rice over nori."
      },
      {
        step: 4,
        text: "Add fish, cucumber, and avocado. Roll tightly and slice."
      }
    ],
    tips: [
      "Use a sharp knife for clean cuts",
      "Keep hands wet to prevent rice sticking",
      "Serve immediately for best taste"
    ]
  }
  // Add more recipes as needed
}

export default function RecipeDetail({ params }: { params: { id: string } }) {
  const recipeId = Number(params.id); // Convert id to a number
  const recipe = recipeDetails[recipeId as keyof typeof recipeDetails]

  if (!recipe) {
    return <div>Recipe not found</div>
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        {/* Recipe Header */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md overflow-hidden mb-8">
          <div className="relative h-[400px]">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{recipe.title}</h1>
                <p className="text-white/90 text-lg mb-4">{recipe.description}</p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Users className="w-5 h-5" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <ChefHat className="w-5 h-5" />
                    <span>{recipe.chef}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Utensils className="w-5 h-5" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Instructions</h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {instruction.step}
                    </div>
                    <p className="text-gray-600 mt-1">{instruction.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-amber-100 rounded-3xl p-6 mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro Tips</h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-600 font-bold">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mt-8">
          <Link
            href="/recipes"
            className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  )
}