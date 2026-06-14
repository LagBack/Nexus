"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("[v0] Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase mb-4">
            Newsletter
          </p>
          <h2 className="text-3xl lg:text-5xl font-mono font-bold text-foreground tracking-tight mb-6 text-balance">
            Fique por dentro das novidades
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba em primeira mão os lançamentos exclusivos, ofertas especiais e conteúdo sobre tendências do streetwear.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12"
            />
            <Button type="submit" size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium">
              Inscrever
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            Ao se inscrever, você concorda com nossa política de privacidade.
          </p>
        </div>
      </div>
    </section>
  )
}
