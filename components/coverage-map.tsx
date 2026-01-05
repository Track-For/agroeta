"use client"

import { useEffect, useRef } from "react"
import { MapPin } from "lucide-react"

// Coordenadas aproximadas das cidades
const cities = {
  sc: [
    { name: "Descanso", lat: -27.1928, lng: -53.4889, state: "SC" },
    { name: "Dionísio Cerqueira", lat: -26.2639, lng: -53.6361, state: "SC" },
    { name: "Iporã do Oeste", lat: -26.9889, lng: -53.5361, state: "SC" },
    { name: "Itapiranga", lat: -27.1667, lng: -53.7167, state: "SC" },
    { name: "Palma Sola", lat: -26.8833, lng: -53.2833, state: "SC" },
    { name: "São José do Cedro", lat: -26.4556, lng: -53.5028, state: "SC" },
    { name: "Saudades", lat: -26.9278, lng: -53.0028, state: "SC" },
    { name: "Tunápolis", lat: -27.0333, lng: -53.6167, state: "SC" },
    { name: "Nova Erechim", lat: -26.9056, lng: -52.9028, state: "SC" },
    { name: "Abelardo Luz", lat: -26.5639, lng: -52.3306, state: "SC" },
    { name: "Campo Erê", lat: -26.3944, lng: -53.0889, state: "SC" },
    { name: "Faxinal dos Guedes", lat: -26.8556, lng: -52.2611, state: "SC" },
    { name: "Marema", lat: -26.9444, lng: -52.2167, state: "SC" },
    { name: "São Domingos", lat: -26.5556, lng: -52.5333, state: "SC" },
    { name: "Xanxerê", lat: -26.8778, lng: -52.4056, state: "SC" },
    { name: "Xaxim", lat: -26.9583, lng: -52.5361, state: "SC" },
    { name: "Lajeado Grande", lat: -26.8889, lng: -52.0833, state: "SC" },
    { name: "Itaiópolis", lat: -26.1167, lng: -49.9167, state: "SC" },
    { name: "Ipumirim", lat: -27.0833, lng: -51.7833, state: "SC" },
    { name: "Joaçaba", lat: -27.1667, lng: -51.5167, state: "SC" },
    { name: "Capinzal", lat: -27.35, lng: -51.6167, state: "SC" },
    { name: "Campos Novos", lat: -27.4, lng: -51.2167, state: "SC" },
    { name: "Lacerdópolis", lat: -27.2667, lng: -51.5667, state: "SC" },
    { name: "Lebon Régis", lat: -26.9333, lng: -50.6833, state: "SC" },
    { name: "Fraiburgo", lat: -27.0167, lng: -50.9167, state: "SC" },
    { name: "Videira", lat: -27.0167, lng: -51.15, state: "SC" },
    { name: "Caçador", lat: -26.775, lng: -51.0167, state: "SC" },
  ],
  pr: [
    { name: "Sulina", lat: -25.0333, lng: -52.2667, state: "PR" },
    { name: "Marmeleiro", lat: -26.1667, lng: -53.0, state: "PR" },
    { name: "Castro", lat: -24.7917, lng: -50.0167, state: "PR" },
    { name: "Mandaguari", lat: -23.35, lng: -51.6667, state: "PR" },
  ],
  rs: [{ name: "Trindade do Sul", lat: -27.5167, lng: -52.9167, state: "RS" }],
}

const allCities = [...cities.sc, ...cities.pr, ...cities.rs]

export default function CoverageMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simular um mapa interativo com marcadores
    if (mapRef.current) {
      // Aqui você poderia integrar com uma biblioteca de mapas real como Leaflet
      console.log("Mapa carregado com", allCities.length, "cidades")
    }
  }, [])

  const getStateColor = (state: string) => {
    switch (state) {
      case "SC":
        return "bg-primary"
      case "PR":
        return "bg-secondary"
      case "RS":
        return "bg-accent"
      default:
        return "bg-gray-500"
    }
  }

  const getStateTextColor = (state: string) => {
    switch (state) {
      case "SC":
        return "text-primary"
      case "PR":
        return "text-secondary"
      case "RS":
        return "text-accent"
      default:
        return "text-gray-500"
    }
  }

  return null;
}
