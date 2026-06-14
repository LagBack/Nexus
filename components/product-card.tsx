"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { cn } from "@/lib/utils"

interface ProductImage {
  url: string
  angle: string
}

interface ProductCardProps {
  id: string
  name: string
  brand: string
  price: number
  images: ProductImage[]
  colors?: number
  isNew?: boolean
  freeShipping?: boolean
}

export function ProductCard({
  id,
  name,
  brand,
  price,
  images,
  colors = 1,
  isNew = false,
  freeShipping = true,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isAdding, setIsAdding] = useState(false)

  const { addItem } = useCart()

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  const currentImage = images[activeImageIndex]

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem({
      id,
      name,
      brand,
      price,
      image: images[0].url,
    })
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary/50 rounded-2xl overflow-hidden mb-4 border border-border">
        {/* New badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-foreground text-background px-3 py-1 rounded-full text-xs font-mono font-bold z-10">
            NOVO
          </div>
        )}

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background",
            isLiked && "text-red-500"
          )}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
          <span className="sr-only">Adicionar aos favoritos</span>
        </Button>

        {/* Product Image */}
        <div className="relative w-full h-full p-6 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={currentImage.url}
            alt={`${name} - ${currentImage.angle}`}
            fill
            className="object-contain transition-all duration-400"
          />
        </div>

        {/* Image Angle Tabs */}
        {images.length > 1 && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  activeImageIndex === index
                    ? "bg-foreground w-6"
                    : "bg-foreground/30 hover:bg-foreground/60"
                )}
                aria-label={`Ver ${img.angle}`}
              />
            ))}
          </div>
        )}

        {/* Angle Labels */}
        {images.length > 1 && (
          <div 
            className={cn(
              "absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 transition-all duration-300",
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            )}
          >
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={cn(
                  "px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full transition-all duration-200 border",
                  activeImageIndex === index
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background/80 text-foreground/70 border-border hover:bg-background hover:text-foreground"
                )}
              >
                {img.angle}
              </button>
            ))}
          </div>
        )}

        {/* Quick add button */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button
            className={cn(
              "w-full font-medium transition-all duration-200",
              isAdding
                ? "bg-green-600 text-white hover:bg-green-600"
                : "bg-foreground text-background hover:bg-foreground/90"
            )}
            onClick={handleAddToCart}
          >
            {isAdding ? "Adicionado!" : "Adicionar ao Carrinho"}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-lg font-mono font-bold text-foreground">{formattedPrice}</p>
        <h3 className="font-medium text-foreground hover:underline cursor-pointer">{name}</h3>
        <p className="text-sm text-muted-foreground">{brand}</p>
        {colors > 1 && (
          <p className="text-sm text-muted-foreground">{colors} cores</p>
        )}
        {freeShipping && (
          <p className="text-xs font-medium text-foreground uppercase tracking-wide">
            Frete Gratis Membros
          </p>
        )}
      </div>
    </div>
  )
}
