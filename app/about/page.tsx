import Image from "next/image"
import Link from "next/link"
import { ChefHat, Users, Award, Utensils } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Bringing Food Lovers Together
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                FoodieDelight is more than just recipes - it&apos;s a community of passionate food lovers sharing their culinary adventures.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative w-full h-[300px] rounded-3xl overflow-hidden">
                <Image
                  src="/image/logo.jpg"
                  alt="Cooking together"
                  fill
                  className="object-contain mask mask-rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-6 text-center shadow-md">
              <ChefHat className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Unique Recipes</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-md">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-md">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600">Cooking Awards</p>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center shadow-md">
              <Utensils className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">100+</h3>
              <p className="text-gray-600">Expert Chefs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Story</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              Founded in 2020, FoodieDelight began as a small blog sharing family recipes. Today, it has grown into a vibrant community of food enthusiasts from around the world.
            </p>
            <p>
              Our mission is to make cooking accessible and enjoyable for everyone. Whether you&apos;re a beginner or an experienced chef, you&apos;ll find recipes, tips, and inspiration to create delicious meals.
            </p>
            <p>
              We believe that food brings people together, and through our platform, we&apos;ve created countless connections between food lovers who share their passion for cooking.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Sarah Johnson", role: "Founder & Head Chef", image: "/image/team-1.jpg" },
              { name: "Michael Chen", role: "Recipe Curator", image: "/image/team-2.jpg" },
              { name: "Emily Rodriguez", role: "Food Photographer", image: "/image/team-3.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-md overflow-hidden max-w-sm mx-auto w-full">
                <div className="relative w-full aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Join Our Culinary Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our growing family of food enthusiasts and share your culinary journey with us.
          </p>
          <Link
            href="/recipes"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  )
}