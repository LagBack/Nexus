import { Truck, Shield, RefreshCw, Headphones } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Envio Rápido",
    description: "Entrega em até 24h para capitais e regiões metropolitanas",
  },
  {
    icon: Shield,
    title: "Garantia Premium",
    description: "6 meses de garantia em todos os produtos originais",
  },
  {
    icon: RefreshCw,
    title: "Troca Fácil",
    description: "30 dias para trocar ou devolver sem burocracia",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento especializado disponível a qualquer momento",
  },
]

export function FeaturesSection() {
  return (
    <section id="sobre" className="py-16 lg:py-24 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:items-start lg:text-left animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mb-4 transition-smooth hover:scale-110 cursor-default">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-mono font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
