"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProductsInCollection } from "./lib/shopify"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Search, Menu, ShoppingBag } from "lucide-react"

export default function LandingPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsInCollection().then(setProducts)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Announcement Bar */}
      <div className="bg-old-money text-white text-center text-sm py-2.5 px-4">Free shipping on orders over $150</div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Menu className="h-6 w-6 lg:hidden" />
            <Link href="/" className="text-xl font-light tracking-widest">
              WORK
            </Link>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-12">
              <li>
                <Link href="#shop" className="text-sm hover:opacity-50 transition-opacity">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#collection" className="text-sm hover:opacity-50 transition-opacity">
                  Collection
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm hover:opacity-50 transition-opacity">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <Search className="h-5 w-5" />
            <ShoppingBag className="h-5 w-5" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center p-8 lg:p-16"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6 tracking-tight text-balance">
              Designed for the way you work
            </h1>
            <p className="text-old-money mb-8 text-lg">Minimal designs. Maximum functionality.</p>
            <Button
              variant="outline"
              className="w-fit border-old-money text-old-money rounded-none hover:bg-old-money hover:text-white transition-all duration-300"
            >
              Discover the collection
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[60vh] lg:h-auto"
          >
            <Image src="/placeholder.svg" alt="Hero Image" layout="fill" objectFit="cover" className="grayscale" />
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="shop" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map(({ node: product }, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] mb-4 bg-old-money-light product-hover">
                  <Image
                    src={product.images.edges[0].node.originalSrc || "/placeholder.svg"}
                    alt={product.images.edges[0].node.altText}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-light mb-1">{product.title}</h3>
                <p className="text-old-money">${product.priceRange.minVariantPrice.amount}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="relative h-screen">
        <Image src="/placeholder.svg" alt="Lifestyle Image" layout="fill" objectFit="cover" className="grayscale" />
        <div className="absolute inset-0 flex items-center justify-center bg-old-money/30">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl lg:text-7xl font-light mb-6 text-balance">Form meets function</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto">Every detail considered. Every feature intentional.</p>
            <Button
              variant="outline"
              className="border-white text-white rounded-none hover:bg-white hover:text-old-money transition-all duration-300"
            >
              Explore features
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-old-money-light">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl lg:text-4xl font-light mb-6 text-balance">Our approach</h2>
          <p className="text-old-money text-lg leading-relaxed mb-12">
            We believe in the power of simplicity. Each bag is a testament to minimalist design principles, crafted to
            enhance your daily experience without unnecessary complexity. This is elevated essentials, redefined.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-2">Design</h3>
              <p className="text-old-money">Form that follows function, stripped of excess.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Materials</h3>
              <p className="text-old-money">Premium fabrics selected for durability and feel.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Craft</h3>
              <p className="text-old-money">Attention to detail in every stitch and seam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-old-money-light py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Footer content remains the same, but with updated hover states */}
            <div>
              <h4 className="text-sm font-medium mb-4">Contact</h4>
              <p className="text-old-money text-sm">hello@work.co</p>
              <p className="text-old-money text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-old-money text-sm hover:text-black transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-old-money text-sm hover:text-black transition-colors">
                    Best Sellers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-old-money text-sm hover:text-black transition-colors">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 text-sm hover:text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm hover:text-black">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-sm hover:text-black">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-4">Newsletter</h4>
              <p className="text-gray-600 text-sm mb-4">
                Subscribe to receive updates and early access to new releases.
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-black"
              />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-old-money-light">
            <p className="text-old-money text-sm">&copy; {new Date().getFullYear()} Work. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

