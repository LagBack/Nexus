"use client"

import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: "gazelle-white-1",
    name: "Tenis Y-3 GAZELLE",
    brand: "Y-3",
    price: 2199.99,
    images: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uOAJwehFR3gLTrxhQHkS5WyQGyni9Z.png", angle: "Lateral" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FskbAdWp8kL5Y11jz0tGwu9uex5yJH.png", angle: "Topo" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pJEtnwuuytqeywhatk2fObF6eezfeK.png", angle: "Par" },
    ],
    colors: 3,
    isNew: true,
  },
  {
    id: "centennial-high-2",
    name: "Tenis Y-3 Centennial High",
    brand: "Y-3",
    price: 2399.99,
    images: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UmuwedCn8XoZYDJr8j32oaIMnHxxzO.png", angle: "Lateral" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WM0zTHMoablOQPqnYwQzCM24zsjx2D.png", angle: "Traseira" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n8BL96xdY1edXQUJ8pRKkq64SlYKD7.png", angle: "Par" },
    ],
    colors: 2,
    isNew: true,
  },
  {
    id: "taekwondo-mei-3",
    name: "Tenis Adidas X Artemisi Taekwondo Mei W",
    brand: "Originals",
    price: 1199.99,
    images: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VAMaGN6KxBOTK3PIziiD2ogez3OR7r.png", angle: "Lateral" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wcy5kMGYOPZ583mqHPiQrVbRw0rW2n.png", angle: "Topo" },
    ],
    colors: 1,
    isNew: false,
  },
  {
    id: "gazelle-black-4",
    name: "Tenis Y-3 GAZELLE",
    brand: "Y-3",
    price: 2199.99,
    images: [
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iRs5C7Z9e3wv38LnYEGIF2K0CxqzWz.png", angle: "Lateral" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xPIONh0EknHBjJuXT47m3mGBVzud40.png", angle: "Topo" },
      { url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yiKn4FbTCl0GVOqAoM6fu0LrZ5aOGU.png", angle: "Par" },
    ],
    colors: 3,
    isNew: false,
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 animate-fade-up">
          <div>
            <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-2">
              Coleção em Destaque
            </p>
            <h2 className="text-3xl lg:text-5xl font-mono font-bold text-foreground tracking-tight">
              Produtos Premium
            </h2>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={product.price}
                images={product.images}
                colors={product.colors}
                isNew={product.isNew}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
