"use client"

import { useState } from "react"
import { MapPin, Info } from "lucide-react"

// Coordenadas reais das cidades atendidas
const cities = {
  sc: [
    { name: "Descanso", lat: -27.1928, lng: -53.4889, clients: 15 },
    { name: "Dionísio Cerqueira", lat: -26.2639, lng: -53.6361, clients: 8 },
    { name: "Iporã do Oeste", lat: -26.9889, lng: -53.5361, clients: 12 },
    { name: "Itapiranga", lat: -27.1667, lng: -53.7167, clients: 18 },
    { name: "Palma Sola", lat: -26.8833, lng: -53.2833, clients: 10 },
    { name: "São José do Cedro", lat: -26.4556, lng: -53.5028, clients: 14 },
    { name: "Saudades", lat: -26.9278, lng: -53.0028, clients: 9 },
    { name: "Tunápolis", lat: -27.0333, lng: -53.6167, clients: 11 },
    { name: "Nova Erechim", lat: -26.9056, lng: -52.9028, clients: 7 },
    { name: "Abelardo Luz", lat: -26.5639, lng: -52.3306, clients: 13 },
    { name: "Campo Erê", lat: -26.3944, lng: -53.0889, clients: 16 },
    { name: "Faxinal dos Guedes", lat: -26.8556, lng: -52.2611, clients: 45, isHeadquarters: true },
    { name: "Marema", lat: -26.9444, lng: -52.2167, clients: 8 },
    { name: "São Domingos", lat: -26.5556, lng: -52.5333, clients: 12 },
    { name: "Xanxerê", lat: -26.8778, lng: -52.4056, clients: 32 },
    { name: "Xaxim", lat: -26.9583, lng: -52.5361, clients: 19 },
    { name: "Lajeado Grande", lat: -26.8889, lng: -52.0833, clients: 6 },
    { name: "Itaiópolis", lat: -26.1167, lng: -49.9167, clients: 11 },
    { name: "Ipumirim", lat: -27.0833, lng: -51.7833, clients: 9 },
    { name: "Joaçaba", lat: -27.1667, lng: -51.5167, clients: 28 },
    { name: "Capinzal", lat: -27.35, lng: -51.6167, clients: 15 },
    { name: "Campos Novos", lat: -27.4, lng: -51.2167, clients: 22 },
    { name: "Lacerdópolis", lat: -27.2667, lng: -51.5667, clients: 8 },
    { name: "Lebon Régis", lat: -26.9333, lng: -50.6833, clients: 7 },
    { name: "Fraiburgo", lat: -27.0167, lng: -50.9167, clients: 18 },
    { name: "Videira", lat: -27.0167, lng: -51.15, clients: 24 },
    { name: "Caçador", lat: -26.775, lng: -51.0167, clients: 21 },
  ],
  pr: [
    { name: "Sulina", lat: -25.0333, lng: -52.2667, clients: 12 },
    { name: "Marmeleiro", lat: -26.1667, lng: -53.0, clients: 16 },
    { name: "Castro", lat: -24.7917, lng: -50.0167, clients: 19 },
    { name: "Mandaguari", lat: -23.35, lng: -51.6667, clients: 14 },
  ],
  rs: [{ name: "Trindade do Sul", lat: -27.5167, lng: -52.9167, clients: 8 }],
}

const allCities = [...cities.sc, ...cities.pr, ...cities.rs]

// Função para converter coordenadas geográficas para posição no SVG
const coordToSVG = (lat: number, lng: number) => {
  // Limites aproximados da região Sul
  const minLat = -30.0
  const maxLat = -22.0
  const minLng = -57.0
  const maxLng = -48.0

  const x = ((lng - minLng) / (maxLng - minLng)) * 800
  const y = ((maxLat - lat) / (maxLat - minLat)) * 600

  return { x, y }
}

export default function InteractiveMap() {
  const [selectedCity, setSelectedCity] = useState<any>(null)
  const [hoveredCity, setHoveredCity] = useState<any>(null)

  return (
    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
        <h3 className="text-2xl font-light mb-2">Mapa de Cobertura AgroETA</h3>
        <p className="text-white/90">32 municípios atendidos na região Sul do Brasil</p>
      </div>

      {/* Mapa SVG */}
      <div className="relative bg-blue-50">
        <svg
          viewBox="0 0 800 600"
          className="w-full h-96 md:h-[500px]"
          style={{ background: "linear-gradient(to bottom, #e0f2fe 0%, #b3e5fc 100%)" }}
        >
          {/* Contorno dos estados */}
          {/* Santa Catarina */}
          <path
            d="M 150 350 Q 200 320 280 340 Q 350 360 420 380 Q 480 400 520 420 Q 550 440 580 460 Q 600 480 620 500 Q 640 520 650 540 L 650 580 L 150 580 Z"
            fill="#4ade80"
            fillOpacity="0.2"
            stroke="#22c55e"
            strokeWidth="2"
          />

          {/* Paraná */}
          <path
            d="M 150 200 Q 200 180 280 200 Q 350 220 420 240 Q 480 260 520 280 Q 550 300 580 320 Q 600 340 620 360 L 650 360 L 650 200 L 150 200 Z"
            fill="#3b82f6"
            fillOpacity="0.2"
            stroke="#2563eb"
            strokeWidth="2"
          />

          {/* Rio Grande do Sul */}
          <path
            d="M 150 500 Q 200 480 280 500 Q 350 520 420 540 Q 480 560 520 580 L 150 580 Z"
            fill="#f59e0b"
            fillOpacity="0.2"
            stroke="#d97706"
            strokeWidth="2"
          />

          {/* Labels dos estados */}
          <text x="400" y="250" textAnchor="middle" className="fill-blue-600 text-lg font-semibold">
            PARANÁ
          </text>
          <text x="400" y="400" textAnchor="middle" className="fill-green-600 text-lg font-semibold">
            SANTA CATARINA
          </text>
          <text x="350" y="550" textAnchor="middle" className="fill-amber-600 text-lg font-semibold">
            RIO GRANDE DO SUL
          </text>

          {/* Marcadores das cidades */}
          {allCities.map((city, index) => {
            const { x, y } = coordToSVG(city.lat, city.lng)
            const isHeadquarters = city.isHeadquarters
            const isHovered = hoveredCity?.name === city.name
            const isSelected = selectedCity?.name === city.name

            return (
              <g key={city.name}>
                {/* Círculo de destaque para cidade selecionada */}
                {(isHovered || isSelected) && (
                  <circle
                    cx={x}
                    cy={y}
                    r="15"
                    fill={isHeadquarters ? "#007B26" : "#20B9E5"}
                    fillOpacity="0.3"
                    className="animate-pulse"
                  />
                )}

                {/* Marcador principal */}
                <circle
                  cx={x}
                  cy={y}
                  r={isHeadquarters ? "8" : "6"}
                  fill={isHeadquarters ? "#007B26" : "#dc2626"}
                  stroke="white"
                  strokeWidth="2"
                  className="cursor-pointer hover:scale-125 transition-transform duration-200"
                  onMouseEnter={() => setHoveredCity(city)}
                  onMouseLeave={() => setHoveredCity(null)}
                  onClick={() => setSelectedCity(city)}
                />

                {/* Ícone especial para sede */}
                {isHeadquarters && (
                  <text
                    x={x}
                    y={y + 2}
                    textAnchor="middle"
                    className="fill-white text-xs font-bold pointer-events-none"
                  >
                    ★
                  </text>
                )}

                {/* Tooltip no hover */}
                {isHovered && (
                  <g>
                    <rect x={x + 10} y={y - 25} width="120" height="40" fill="rgba(0, 0, 0, 0.8)" rx="4" />
                    <text x={x + 70} y={y - 12} textAnchor="middle" className="fill-white text-sm font-medium">
                      {city.name}
                    </text>
                    <text x={x + 70} y={y - 2} textAnchor="middle" className="fill-white text-xs">
                      {city.clients} clientes
                    </text>
                  </g>
                )}
              </g>
            )
          })}
        </svg>

        {/* Legenda */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <h4 className="font-medium text-dark mb-3 text-sm">Legenda</h4>
          <div className="space-y-2 text-xs">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-primary mr-2 flex items-center justify-center">
                <span className="text-white text-xs">★</span>
              </div>
              <span className="text-dark/70">Sede AgroETA</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
              <span className="text-dark/70">Cidades Atendidas</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-dark/70">Santa Catarina (27)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-dark/70">Paraná (4)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              <span className="text-dark/70">Rio Grande do Sul (1)</span>
            </div>
          </div>
        </div>

        {/* Informações da cidade selecionada */}
        {selectedCity && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-dark">{selectedCity.name}</h4>
              <button onClick={() => setSelectedCity(null)} className="text-gray-400 hover:text-gray-600">
                ×
              </button>
            </div>
            <div className="text-sm text-dark/80 space-y-1">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-primary" />
                <span>
                  {selectedCity.name} -{" "}
                  {cities.sc.includes(selectedCity) ? "SC" : cities.pr.includes(selectedCity) ? "PR" : "RS"}
                </span>
              </div>
              <div className="flex items-center">
                <Info className="w-3 h-3 mr-1 text-primary" />
                <span>{selectedCity.clients} clientes atendidos</span>
              </div>
              {selectedCity.isHeadquarters && (
                <div className="text-primary font-medium text-xs mt-2">🏢 Sede Principal da AgroETA</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Estatísticas */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">{cities.sc.length}</div>
            <div className="text-sm text-dark/70">Cidades em SC</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-secondary">{cities.pr.length}</div>
            <div className="text-sm text-dark/70">Cidades no PR</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">{cities.rs.length}</div>
            <div className="text-sm text-dark/70">Cidades no RS</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              {allCities.reduce((sum, city) => sum + city.clients, 0)}
            </div>
            <div className="text-sm text-dark/70">Total de Clientes</div>
          </div>
        </div>
      </div>

      {/* Lista de cidades por estado */}
      <div className="p-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Santa Catarina */}
          <div>
            <h5 className="font-medium text-primary mb-3 flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              Santa Catarina ({cities.sc.length})
            </h5>
            <div className="text-sm text-dark/70 space-y-1 max-h-48 overflow-y-auto">
              {cities.sc.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-1 rounded"
                  onClick={() => setSelectedCity(city)}
                >
                  <span className="flex items-center">
                    {city.isHeadquarters && <span className="text-primary mr-1">★</span>}
                    {city.name}
                  </span>
                  <span className="text-xs text-primary">{city.clients}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paraná */}
          <div>
            <h5 className="font-medium text-secondary mb-3 flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              Paraná ({cities.pr.length})
            </h5>
            <div className="text-sm text-dark/70 space-y-1">
              {cities.pr.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-1 rounded"
                  onClick={() => setSelectedCity(city)}
                >
                  <span>{city.name}</span>
                  <span className="text-xs text-secondary">{city.clients}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rio Grande do Sul */}
          <div>
            <h5 className="font-medium text-accent mb-3 flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
              Rio Grande do Sul ({cities.rs.length})
            </h5>
            <div className="text-sm text-dark/70 space-y-1">
              {cities.rs.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-1 rounded"
                  onClick={() => setSelectedCity(city)}
                >
                  <span>{city.name}</span>
                  <span className="text-xs text-accent">{city.clients}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
