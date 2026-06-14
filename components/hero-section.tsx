import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-4 animate-fade-up">
              Nova Coleção 2026
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-mono font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-6 animate-fade-up-delay-1">
              O Futuro do
              <span className="block">Streetwear</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-md mx-auto lg:mx-0 mb-8 animate-fade-up-delay-2">
              Design inovador encontra tecnologia de ponta. Descubra tênis que redefinem o conceito de estilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up-delay-3">
              <Link
                href="#colecoes"
                className="inline-flex items-center justify-center rounded-lg text-background font-medium px-8 py-6 text-base hover:opacity-90 transition-smooth cursor-pointer group bg-foreground"
              >
                Explorar Coleção
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-350 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href="#produtos"
                className="inline-flex items-center justify-center rounded-lg font-medium px-8 py-6 text-base hover:bg-secondary border border-border transition-smooth cursor-pointer"
              >
                Ver Lançamentos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border animate-fade-up-delay-4">
              <div>
                <p className="text-2xl lg:text-3xl font-mono font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Modelos Exclusivos</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-mono font-bold text-foreground">10k+</p>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-mono font-bold text-foreground">24h</p>
                <p className="text-sm text-muted-foreground">Envio Rápido</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative aspect-square max-w-lg mx-auto animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-muted/30 to-transparent rounded-full blur-3xl" />

              {/* Main product image */}
              <div className="relative z-10 bg-secondary/50 rounded-3xl p-8 backdrop-blur-sm border border-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UmuwedCn8XoZYDJr8j32oaIMnHxxzO.png"
                  alt="Tenis Y-3 Centennial High - Design premium em branco"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-foreground text-background px-4 py-2 rounded-full font-mono text-sm font-bold z-20">
                Novo Lançamento
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono uppercase tracking-widest animate-pulse">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
