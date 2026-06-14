"use client"

import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CollectionsSection } from "@/components/collections-section"
import { ProductsSection } from "@/components/products-section"
import { FeaturesSection } from "@/components/features-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <AuthProvider>
      <CartProvider>
        <main className="min-h-screen bg-background">
          <Header />
          <HeroSection />
          <CollectionsSection />
          <ProductsSection />
          <FeaturesSection />
          <NewsletterSection />
          <Footer />
        </main>
      </CartProvider>
    </AuthProvider>
  )
}
