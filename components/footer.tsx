import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

const footerLinks = {
  loja: [
    { label: "Todos os Produtos", href: "/produtos" },
    { label: "Lançamentos", href: "/lancamentos" },
    { label: "Mais Vendidos", href: "/mais-vendidos" },
    { label: "Promoções", href: "/promocoes" },
  ],
  ajuda: [
    { label: "FAQ", href: "/faq" },
    { label: "Envio e Entregas", href: "/envio" },
    { label: "Trocas e Devoluções", href: "/trocas" },
    { label: "Rastrear Pedido", href: "/rastrear" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Carreiras", href: "/carreiras" },
    { label: "Contato", href: "/contato" },
    { label: "Imprensa", href: "/imprensa" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-mono font-bold tracking-tighter text-foreground">
                NEXUS
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              O futuro do streetwear. Tênis premium com design inovador e tecnologia de ponta para quem não segue tendências, mas as cria.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono font-bold text-foreground mb-4 uppercase text-sm tracking-wider">
              Loja
            </h3>
            <ul className="space-y-3">
              {footerLinks.loja.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-foreground mb-4 uppercase text-sm tracking-wider">
              Ajuda
            </h3>
            <ul className="space-y-3">
              {footerLinks.ajuda.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-foreground mb-4 uppercase text-sm tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 NEXUS. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link href="/termos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
