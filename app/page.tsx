import Link from "next/link"
import AsciiLogo from "@/components/ascii-logo"
import { Button } from "@/components/ui/button"
import FeaturedPosts from "@/components/featured-posts"
import HowItWorks from "@/components/how-it-works"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-cyan-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-violet-600 font-bold text-2xl">ASCII Social</div>
        <div className="space-x-2">
          <Link href="/login">
            <Button variant="outline" className="border-violet-400 text-violet-600 hover:bg-violet-100">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-violet-600 hover:bg-violet-700">Sign Up Free</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <AsciiLogo />
          <h1 className="text-3xl md:text-5xl font-bold text-violet-900 mt-8 mb-6">Where Characters Create Culture</h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            ASCII Social is a space to share art, thoughts, and vibes using only characters. No photos. No filters. Just
            you and the keys.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-lg px-8 py-6">
              Join the Community
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <FeaturedPosts />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <footer className="bg-violet-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ASCII Social</h3>
              <p className="text-violet-200">Express yourself through the art of ASCII. Join our community today!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-violet-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community Guidelines
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-violet-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-violet-800 mt-8 pt-8 text-center text-violet-300">
            <p>© {new Date().getFullYear()} ASCII Social. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
