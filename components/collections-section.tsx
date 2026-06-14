"use client"

import Image from "next/image"
import { useState } from "react"

const collections = [
  {
    id: "y3-gazelle",
    name: "Y-3 Gazelle",
    description: "Classico reinventado com design Y-3",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uOAJwehFR3gLTrxhQHkS5WyQGyni9Z.png",
        alt: "Y-3 Gazelle Branco - Vista Lateral",
        variant: "Branco"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FskbAdWp8kL5Y11jz0tGwu9uex5yJH.png",
        alt: "Y-3 Gazelle Branco - Vista Superior",
        variant: "Branco"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pJEtnwuuytqeywhatk2fObF6eezfeK.png",
        alt: "Y-3 Gazelle Branco - Par",
        variant: "Branco"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iRs5C7Z9e3wv38LnYEGIF2K0CxqzWz.png",
        alt: "Y-3 Gazelle Preto - Vista Lateral",
        variant: "Preto"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xPIONh0EknHBjJuXT47m3mGBVzud40.png",
        alt: "Y-3 Gazelle Preto - Vista Superior",
        variant: "Preto"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yiKn4FbTCl0GVOqAoM6fu0LrZ5aOGU.png",
        alt: "Y-3 Gazelle Preto - Par",
        variant: "Preto"
      },
    ]
  },
  {
    id: "y3-centennial",
    name: "Y-3 Centennial High",
    description: "Cano alto com acabamento premium",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UmuwedCn8XoZYDJr8j32oaIMnHxxzO.png",
        alt: "Y-3 Centennial High - Vista Lateral",
        variant: "Off-White"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WM0zTHMoablOQPqnYwQzCM24zsjx2D.png",
        alt: "Y-3 Centennial High - Vista Traseira",
        variant: "Off-White"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n8BL96xdY1edXQUJ8pRKkq64SlYKD7.png",
        alt: "Y-3 Centennial High - Detalhes",
        variant: "Off-White"
      },
    ]
  },
  {
    id: "adidas-taekwondo",
    name: "Adidas x Artemisi Taekwondo Mei",
    description: "Colaboracao exclusiva com design artistico",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VAMaGN6KxBOTK3PIziiD2ogez3OR7r.png",
        alt: "Adidas Taekwondo Mei - Vista Lateral",
        variant: "Branco/Prata"
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wcy5kMGYOPZ583mqHPiQrVbRw0rW2n.png",
        alt: "Adidas Taekwondo Mei - Vista Superior",
        variant: "Branco/Prata"
      },
    ]
  },
]

export function CollectionsSection() {
  const [activeCollection, setActiveCollection] = useState(collections[0].id)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const currentCollection = collections.find(c => c.id === activeCollection) || collections[0]

  const handleCollectionChange = (id: string) => {
    setActiveCollection(id)
    setActiveImageIndex(0)
  }

  const imageKey = `${activeCollection}-${activeImageIndex}`

  return (
    <section className="py-20 lg:py-32 bg-secondary/30" id="colecoes">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-4">
            Explore
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-foreground tracking-tight text-balance animate-fade-up-delay-1">
            Nossas Colecoes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
            Navegue por todas as imagens e angulos de cada modelo da nossa linha premium
          </p>
        </div>

        {/* Collection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => handleCollectionChange(collection.id)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-smooth cursor-pointer ${
                activeCollection === collection.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {collection.name}
            </button>
          ))}
        </div>

        {/* Collection Display */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Main Image */}
          <div className="relative animate-scale-in" key={imageKey}>
            <div className="aspect-square bg-[#e8e4df] rounded-2xl overflow-hidden border border-border">
              <Image
                src={currentCollection.images[activeImageIndex].src}
                alt={currentCollection.images[activeImageIndex].alt}
                width={800}
                height={800}
                className="w-full h-full object-contain p-8"
                priority
              />
            </div>

            {/* Variant Badge */}
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium border border-border transition-smooth">
              {currentCollection.images[activeImageIndex].variant}
            </div>
          </div>

          {/* Thumbnails and Info */}
          <div className="flex flex-col animate-fade-up-delay-2">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-mono font-bold text-foreground mb-2 transition-smooth">
                {currentCollection.name}
              </h3>
              <p className="text-muted-foreground">
                {currentCollection.description}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {currentCollection.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square bg-[#e8e4df] rounded-lg overflow-hidden border-2 transition-smooth cursor-pointer ${
                    activeImageIndex === index
                      ? "border-foreground ring-2 ring-foreground/20"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain p-2 transition-transform duration-350 hover:scale-110"
                  />
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <p className="text-sm text-muted-foreground mb-6">
              Imagem {activeImageIndex + 1} de {currentCollection.images.length}
            </p>
          </div>
        </div>

        {/* All Images Gallery */}
        <div className="mt-20">
          <h3 className="text-xl font-mono font-bold text-foreground mb-6 text-center animate-fade-up">
            Galeria Completa - {currentCollection.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {currentCollection.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className="group relative aspect-square bg-[#e8e4df] rounded-xl overflow-hidden border border-border transition-smooth cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain p-3 transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
