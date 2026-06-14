"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  validateEmail: (email: string) => string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provedores de webmail permitidos
const ALLOWED_WEBMAIL_PROVIDERS = [
  "gmail",
  "googlemail",
  "hotmail",
  "outlook",
  "live",
  "yahoo",
  "yahoo.br",
  "ymail",
  "rocketmail",
  "icloud",
  "me",
  "mac",
  "protonmail",
  "proton",
  "pm",
  "aol",
  "zoho",
  "gmx",
  "mail",
  "yandex",
  "tutanota",
  "tuta",
  "fastmail",
  "hey",
  "inbox",
]

// Siglas de pais validas (ISO 3166-1 alpha-2 + alpha-3 principais)
const VALID_COUNTRY_CODES = new Set([
  // alpha-2
  "br", "pt", "us", "uk", "ar", "bo", "cl", "co", "cr", "cu", "do", "ec", "es",
  "gt", "hn", "mx", "ni", "pa", "pe", "pr", "py", "sv", "uy", "ve",
  "fr", "de", "it", "nl", "be", "at", "ch", "ie", "se", "no", "fi", "dk",
  "pl", "cz", "sk", "hu", "ro", "bg", "gr", "ru", "ua", "tr", "jp", "kr",
  "cn", "tw", "hk", "sg", "my", "th", "id", "ph", "vn", "in", "pk", "bd",
  "ae", "sa", "eg", "za", "au", "nz", "ca",
  // alpha-3
  "bra", "prt", "usa", "gbr", "arg", "chl", "col", "mex", "esp", "fra",
  "deu", "ita", "nld", "bel", "che", "swe", "nor", "fin", "dnk", "pol",
  "rus", "ukr", "tur", "jpn", "kor", "chn", "twn", "sgp", "mys", "tha",
  "idn", "phl", "vnm", "ind", "are", "sau", "egy", "zaf", "aus", "nzl", "can",
])

// Valida o email: exige (local)@(provedor de webmail).com
// Aceita opcionalmente uma sigla de pais valida no final (ex: .com.br, .com.pt)
export function validateEmail(email: string): string | null {
  if (!email) return "E-mail obrigatorio"

  // formato: local@provider.com ou local@provider.com.<pais>
  const re = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9-]+)\.com(?:\.([a-zA-Z]{2,3}))?$/
  const match = email.toLowerCase().match(re)

  if (!match) {
    return "Formato de e-mail invalido. Use algo como usuario@gmail.com"
  }

  const provider = match[2]
  const country = match[3]

  if (!ALLOWED_WEBMAIL_PROVIDERS.includes(provider)) {
    return "Provedor nao permitido. Use um webmail (gmail, outlook, yahoo, icloud, etc.)"
  }

  if (country && !VALID_COUNTRY_CODES.has(country)) {
    return "Sigla de pais invalida"
  }

  return null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string): Promise<boolean> => {
    if (!validateEmail(email)) {
      if (email && password) {
        setUser({
          id: "1",
          name: email.split("@")[0],
          email,
        })
        return true
      }
      return false
    }
    return false
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    if (name && email && password) {
      setUser({
        id: Date.now().toString(),
        name,
        email,
      })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        validateEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider")
  }
  return context
}
