"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowUpRight,
  ArrowRight,
  Wrench,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Droplets,
  Shield,
  TrendingUp,
  Settings,
  Eye,
  Zap,
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)
  const [email, setEmail] = useState("")

  // Função para inscrição no newsletter
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica para enviar o email para seu backend
    console.log("Email inscrito:", email)
    alert("Obrigado por se inscrever! Você receberá nossas novidades em breve.")
    setEmail("")
  }

  // Dados dos depoimentos
  const testimonials = [
    {
      name: "João Silva",
      title: "Proprietário de Granja Avícola",
      quote:
        "Desde que instalamos o sistema de tratamento de água da AgroETA, a mortalidade dos frangos de corte diminuiu 40% e o ganho de peso aumentou significativamente. A água tratada eliminou problemas digestivos e melhorou a conversão alimentar. Nosso lucro aumentou 35% no primeiro ano.",
      image: "/images/eta-sittag-1.jpg",
      tags: ["Avicultura", "Redução Mortalidade", "Aumento Produtividade"],
    },
    {
      name: "Maria Santos",
      title: "Produtora de Suínos",
      quote:
        "A qualidade da água tratada transformou nossa suinocultura. Os animais ficaram mais saudáveis, com menos diarreias e problemas respiratórios. O crescimento acelerou e conseguimos reduzir o uso de antibióticos em 60%. A AgroETA nos ajudou a ter uma produção mais sustentável e lucrativa.",
      image: "/images/infografico-sittag.jpg",
      tags: ["Suinocultura", "Menos Antibióticos", "Crescimento Acelerado"],
    },
    {
      name: "Carlos Mendes",
      title: "Pecuarista de Gado de Corte",
      quote:
        "Nosso rebanho de 500 cabeças nunca esteve tão saudável. Com a água tratada, eliminamos problemas de verminoses transmitidas pela água e melhoramos o ganho de peso diário. Os animais chegam ao abate 2 meses mais cedo, aumentando nossa rentabilidade significativamente.",
      image: "/images/eta-rural.jpg",
      tags: ["Gado de Corte", "Eliminação Verminoses", "Abate Precoce"],
    },
    {
      name: "Roberto Almeida",
      title: "Produtor de Leite",
      quote:
        "A água tratada revolucionou nossa produção leiteira. As vacas ficaram mais saudáveis, com menos mastite e problemas reprodutivos. A produção de leite aumentou 25% e a qualidade melhorou drasticamente. O investimento se pagou em menos de 8 meses.",
      image: "/images/eta-finalizada.jpg",
      tags: ["Gado Leiteiro", "Aumento Produção", "Menos Mastite"],
    },
  ]

  return (
    <div className="relative font-light">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            src="/video-capa.MP4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute object-cover w-full h-full"
          />
          {/* Overlay to darken the video */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navigation */}
        <header className="relative z-50 px-4 sm:px-6 py-6">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center animate-float-in">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agro-logo-cy5eOlk5DMpx4bWIrRk0By1fgTS1ld.png"
                alt="AgroETA Logo"
                width={380}
                height={130}
                className="h-28 sm:h-36 md:h-40 lg:h-44 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/sobre" className="text-white hover:text-primary-extralight transition-colors duration-300">
                Sobre Nós
              </Link>
              <Link
                href="/servicos"
                className="text-white hover:text-primary-extralight transition-colors duration-300"
              >
                Serviços
              </Link>
            </div>

            <Link
              href="https://wa.me/5549999117406"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white animate-float-in-right hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              Fale Conosco
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-dark/95 backdrop-blur-sm z-[9999] animate-fade-in-bottom">
              <div className="flex justify-between items-center px-4 py-6 border-b border-primary/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agro-logo-cy5eOlk5DMpx4bWIrRk0By1fgTS1ld.png"
                  alt="AgroETA Logo"
                  width={320}
                  height={110}
                  className="h-28 sm:h-36 md:h-40 w-auto drop-shadow-lg"
                />
                <button className="text-white focus:outline-none" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-8 w-8" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/sobre"
                  className="block text-primary-extralight py-2 hover:translate-x-2 transition-transform duration-300 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sobre Nós
                </Link>
                <Link
                  href="/servicos"
                  className="block text-white py-2 hover:translate-x-2 transition-transform duration-300 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="#contato"
                  className="block text-white py-2 hover:translate-x-2 transition-transform duration-300 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contato
                </Link>
                <Link
                  href="https://wa.me/5549999117406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-6 text-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow transition-all duration-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fale Conosco
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero Content */}
        <main className="relative z-10 px-4 sm:px-6 pt-8 sm:pt-12 pb-20 sm:pb-32">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="mb-4 text-primary-extralight animate-slide-in-left font-extralight tracking-widest text-base sm:text-lg">
                  AgroETA - Empresa de Tratamento de Água para Frangos de Corte e Suínos
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 tracking-wide leading-tight">
                  <span className="block overflow-hidden">
                    <span className="block animate-reveal-text">Aves e Suínos</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span
                      className="block text-primary-extralight animate-reveal-text"
                      style={{ animationDelay: "400ms" }}
                    >
                      Mais Saudáveis
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block animate-reveal-text" style={{ animationDelay: "800ms" }}>
                      Mais Lucro
                    </span>
                  </span>
                </h1>
              </div>

              <div className="md:w-1/3 w-full">
                <p className="text-white/90 mb-8 animate-slide-in-right font-extralight tracking-wide leading-relaxed text-base sm:text-lg">
                  Especializados em Estações de Tratamento de Água (ETA) para propriedades rurais. Tratamento de água para aves de corte e suínos com qualidade superior para animais mais saudáveis e produtivos.
                </p>

                <p className="text-white/90 mb-8 animate-slide-in-right font-extralight tracking-wide leading-relaxed text-base sm:text-lg">
                  <strong className="text-primary-extralight">27 anos de experiência</strong> tratando mais de{" "}
                  <strong className="text-primary-extralight">10 milhões de litros de água por dia</strong> para mais de{" "}
                  <strong className="text-primary-extralight">20 milhões de animais</strong> em{" "}
                  <strong className="text-primary-extralight">32 municípios</strong> de SC, PR e RS.
                </p>

                <Link
                  href="https://wa.me/5549999117406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white animate-float-up hover:shadow-glow transition-all duration-500 hover:scale-105 font-light tracking-wider"
                >
                  Solicite Orçamento
                  <ArrowUpRight className="ml-2 h-5 w-5 animate-bounce-subtle" />
                </Link>
              </div>
            </div>

            {/* Feature Box */}
            <div className="mt-8 bg-dark/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 flex flex-col md:flex-row items-center animate-float-up shadow-glow-subtle">
              <div className="md:w-1/4 w-full mb-4 md:mb-0">
                <h3 className="text-primary-extralight text-lg sm:text-xl mb-3 font-extralight tracking-wider">
                  Resultados Comprovados
                </h3>
                <div className="rounded-lg overflow-hidden shadow-glow-subtle hover:shadow-glow transition-all duration-500">
                  <Image
                    src="/images/eta-sittag-1.jpg"
                    alt="Estação de Tratamento de Água SITTAG instalada"
                    width={300}
                    height={180}
                    className="object-cover hover:scale-105 transition-all duration-700 w-full h-36 sm:h-44"
                  />
                </div>
              </div>

              <div className="md:w-3/4 md:pl-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight tracking-wide mb-4">
                  <span className="text-primary-extralight animate-color-pulse">Seu parceiro</span>{" "}
                  <span className="text-white">em tratamento de água para criação de aves de corte e suínos.</span>
                </h2>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Why Choose AgroETA Section */}
      <section className="bg-dark py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-10 sm:mb-16">
            <div className="text-primary-extralight font-extralight tracking-widest mb-4 animate-slide-in-left text-base sm:text-lg">
              Por Que Escolher a AgroETA
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-wide leading-tight max-w-4xl mx-auto text-center">
              Transformando Aves e Suínos com <span className="text-primary-extralight">Água Tratada</span> de Qualidade
              para Animais Mais Saudáveis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              className="bg-dark border border-primary rounded-xl p-6 sm:p-8 hover:shadow-glow-subtle transition-all duration-500 group animate-float-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-primary-extralight mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <Shield className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extralight text-white mb-4 tracking-wide">
                Prevenção de Doenças em Frangos
              </h3>
              <p className="text-white/70 mb-8 font-extralight tracking-wide leading-relaxed text-base sm:text-lg">
                Água tratada elimina patógenos, bactérias e parasitas, reduzindo drasticamente doenças transmitidas pela água em aves de corte.
              </p>
              <Link
                href="/servicos"
                className="text-primary-extralight flex items-center font-extralight tracking-wider group-hover:tracking-widest transition-all duration-300"
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>

            {/* Card 2 */}
            <div
              className="bg-primary border border-primary rounded-xl p-6 sm:p-8 hover:shadow-glow-subtle transition-all duration-500 group animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="text-white mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extralight text-white mb-4 tracking-wide">
                Crescimento Acelerado de Suínos
              </h3>
              <p className="text-white/90 mb-8 font-extralight tracking-wide leading-relaxed text-base sm:text-lg">
                Suínos com acesso à água de qualidade apresentam melhor conversão alimentar, crescimento mais rápido e
                maior ganho de peso.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-secondary rounded-xl p-6 sm:p-8 hover:shadow-glow-blue transition-all duration-500 group animate-float-in"
              style={{ animationDelay: "600ms" }}
            >
              <div className="text-dark mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <Droplets className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extralight text-dark mb-4 tracking-wide">Maior Produtividade</h3>
              <p className="text-dark/80 mb-8 font-extralight tracking-wide leading-relaxed text-base sm:text-lg">
                Aumento na produção de carne de frango e suínos, com redução significativa na mortalidade e custos
                veterinários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How ETA Works Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="text-primary-extralight font-extralight tracking-widest mb-4 animate-slide-in-left text-base sm:text-lg">
              Como Funciona
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-dark tracking-wide leading-tight">
              Entenda o Funcionamento da <span className="text-primary-extralight">Estação de Tratamento</span> de Água
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="animate-float-in">
              <Image
                src="/images/como-funciona.jpg"
                alt="Infográfico explicativo do funcionamento da ETA SITTAG"
                width={600}
                height={400}
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            <div className="animate-float-in" style={{ animationDelay: "200ms" }}>
              <h3 className="text-2xl sm:text-3xl font-extralight text-dark mb-6">Processo Completo de Tratamento</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-light text-dark mb-2">Captação de Água</h4>
                    <p className="text-dark/70 font-extralight">
                      Captação de água em lagos, rios, cisternas e poços artesianos
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-light text-dark mb-2">Tratamento na ETA</h4>
                    <p className="text-dark/70 font-extralight">
                      Controle de pH, cloro e eliminação de coliformes fecais para água cristalina
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-light text-dark mb-2">Distribuição para Granja</h4>
                    <p className="text-dark/70 font-extralight">
                      Água tratada distribuída diretamente para os animais com qualidade garantida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-primary/20">
              <h4 className="text-xl font-light text-primary mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Com a AgroETA
              </h4>
              <ul className="space-y-2 text-dark/80 font-extralight">
                <li>• pH controlado</li>
                <li>• Cloro controlado</li>
                <li>• Coliformes fecais eliminados</li>
                <li>• Água cristalina e matéria orgânica eliminada</li>
                <li>• Assistência técnica 24h</li>
                <li>• Garantia total</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h4 className="text-xl font-light text-red-600 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Sem Tratamento
              </h4>
              <ul className="space-y-2 text-dark/80 font-extralight">
                <li>• pH desregulado</li>
                <li>• Cloro em diferentes dosagens</li>
                <li>• Coliformes fecais presentes</li>
                <li>• Água suja com matéria orgânica</li>
                <li>• Animais doentes</li>
                <li>• Prejuízos na produção</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-dark py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-10 sm:mb-16">
            <div className="md:col-span-2">
              <div className="text-primary-extralight font-extralight tracking-widest mb-4 animate-slide-in-left text-base sm:text-lg">
                Nossos Serviços
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-wide leading-tight">
                Especializados em <span className="text-primary-extralight">Tratamento de Água</span> para Frangos de
                Corte e Suínos
              </h2>
            </div>

            <div>
              <p className="text-white/70 font-extralight tracking-wide leading-relaxed animate-slide-in-right text-base sm:text-lg">
                Oferecemos soluções completas em Estações de Tratamento de Água para avicultura e suinocultura,
                garantindo água de qualidade para aves de corte e suínos mais saudáveis.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Service 1 */}
            <div className="bg-dark border border-primary/30 rounded-xl p-6 hover:shadow-glow-subtle transition-all duration-500 animate-float-in">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Manutenção de ETA</h3>
              <p className="text-white/70 font-extralight text-sm">
                Manutenção preventiva e corretiva de Estações de Tratamento de Água
              </p>
            </div>

            {/* Service 2 */}
            <div
              className="bg-dark border border-primary/30 rounded-xl p-6 hover:shadow-glow-subtle transition-all duration-500 animate-float-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Venda de Insumos</h3>
              <p className="text-white/70 font-extralight text-sm">
                Fornecimento de produtos químicos e insumos para tratamento de água
              </p>
            </div>

            {/* Service 3 */}
            <div
              className="bg-dark border border-primary/30 rounded-xl p-6 hover:shadow-glow-subtle transition-all duration-500 animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Manutenção de Filtros</h3>
              <p className="text-white/70 font-extralight text-sm">
                Limpeza e substituição de filtros para máxima eficiência
              </p>
            </div>

            {/* Service 4 */}
            <div
              className="bg-dark border border-primary/30 rounded-xl p-6 hover:shadow-glow-subtle transition-all duration-500 animate-float-in"
              style={{ animationDelay: "600ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Manutenção de Dosadores</h3>
              <p className="text-white/70 font-extralight text-sm">Calibração e manutenção de equipamentos dosadores</p>
            </div>

            {/* Service 5 */}
            <div
              className="bg-dark border border-primary/30 rounded-xl p-6 hover:shadow-glow-subtle transition-all duration-500 animate-float-in"
              style={{ animationDelay: "800ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Monitoramento 24h</h3>
              <p className="text-white/70 font-extralight text-sm">Acompanhamento contínuo da qualidade da água</p>
            </div>

            {/* Service 6 - Novo Tópico */}
            <div
              className="bg-primary rounded-xl p-6 flex flex-col justify-center animate-float-in"
              style={{ animationDelay: "1000ms" }}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Consultoria em Tratamento de Água</h3>
              <p className="text-white/90 font-extralight text-sm">Soluções personalizadas para otimizar a qualidade da água na sua propriedade</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow transition-all duration-500 hover:scale-105 font-light tracking-wider"
            >
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-light py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <div className="text-primary-extralight font-extralight tracking-widest mb-4 animate-slide-in-left text-base sm:text-lg">
              Nossos Projetos
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-dark tracking-wide leading-tight">
              Estações de Tratamento <span className="text-primary-extralight">SITTAG</span> Instaladas
            </h2>
            <p className="text-lg text-dark/70 mt-4 max-w-3xl mx-auto">
              Veja algumas das nossas instalações reais de estações de tratamento de água para aves e suínos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in">
              <Image
                src="/images/eta-externa.jpg"
                alt="Estação de Tratamento SITTAG - Vista Externa"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-light text-dark mb-3">ETA Completa - Vista Externa</h3>
                <p className="text-dark/70 font-extralight">
                  Instalação completa com tanques de armazenamento e casa de máquinas
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in"
              style={{ animationDelay: "200ms" }}
            >
              <Image
                src="/images/eta-compacta.jpg"
                alt="Estação de Tratamento SITTAG Compacta"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-light text-dark mb-3">ETA Compacta</h3>
                <p className="text-dark/70 font-extralight">
                  Solução compacta para propriedades menores com alta eficiência
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              <Image
                src="/images/eta-construcao.jpg"
                alt="ETA SITTAG em Construção"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-light text-dark mb-3">ETA em Instalação</h3>
                <p className="text-dark/70 font-extralight">Processo de instalação de nova estação de tratamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Farms Section */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-10 sm:mb-16">
            <div>
              <div className="text-green-500 font-light tracking-widest mb-4 text-base sm:text-lg">Nossos Projetos</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-wide leading-tight max-w-2xl">
                Transformando Fazendas com <span className="text-green-600">Água Tratada de Qualidade</span>
              </h2>
            </div>
            <Link
              href="https://wa.me/5549999117406"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium"
            >
              Fale Conosco
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Project Card */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C1444.MP4.08_23_18_22.Quadro001%20%281%29.jpg-yiLXYFFqEZAk7HDmtqL3zlCsaP46bD.jpeg"
                  alt="Fazenda São João - Avicultura com arco-íris"
                  width={800}
                  height={500}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className="bg-green-500/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Fazenda São João - Avicultura
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">40% de Redução na Mortalidade</h3>
                  <p className="text-white/90 text-lg max-w-2xl">
                    A AgroETA instalou sistema de tratamento de água para 320.000 frangos, eliminando doenças
                    transmitidas pela água e aumentando o ganho de peso em 25%.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Content */}
            <div className="space-y-6">
              {/* Destaques personalizados */}
              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <div className="text-2xl font-bold mb-2">Tratamos mais de 10 milhões de litros de água por dia </div>
                <div className="text-lg font-medium">Tratamos mais de 10 milhões de litros de água para mais de 20 milhões de animais </div>
              </div>
              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <div className="text-2xl font-bold mb-2">32+ Municípios</div>
                <div className="text-lg font-medium">Atendemos mais de 32 municípios em SC, PR e RS.</div>
              </div>
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Suínos Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative">
                <Image
                  src="/images/suinos-saudaveis.jpg"
                  alt="Granja Três Irmãos - Suínos saudáveis com água tratada"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    Granja Três Irmãos - Suínos
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">60% Menos Antibióticos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Com água tratada, a granja reduziu drasticamente problemas digestivos nos suínos, diminuindo o uso de
                  medicamentos e acelerando o crescimento dos animais.
                </p>
              </div>
            </div>

            {/* Frangos Card (substitui Gado Card) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative">
                <Image
                  src="/images/frango-2.webp"
                  alt="Granja São Lucas - Frangos de Corte"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    Granja São Lucas - Frangos de Corte
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Crescimento Acelerado e Menor Mortalidade</h3>
                <p className="text-gray-600 leading-relaxed">
                  Frangos de corte com água tratada apresentam crescimento mais rápido, melhor conversão alimentar e redução significativa na mortalidade, aumentando a produtividade e o lucro da granja.
                </p>
              </div>
            </div>

            {/* Aves Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="relative">
                <Image
                  src="/images/frangos-aviario.webp"
                  alt="Fazenda Esperança - Frangos de corte saudáveis em aviário moderno"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    Fazenda Esperança - Aves de Corte
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Frangos Mais Saudáveis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Água tratada para melhor desenvolvimento e crescimento acelerado dos frangos de corte, com redução
                  significativa na mortalidade e melhoria na conversão alimentar.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden text-center mt-8">
            <Link
              href="https://wa.me/5549999117406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all duration-300 font-medium"
            >
              Fale Conosco
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative py-12 sm:py-20">
        {/* Background Image usando hero.jpg */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
            filter: "brightness(0.4)",
          }}
        >
          <div className="absolute inset-0 bg-dark/60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white tracking-wide leading-tight mb-4 sm:mb-6 animate-float-in">
              Pronto para Ter Animais Mais Saudáveis?
            </h2>

            <p
              className="text-white/90 font-extralight tracking-wide leading-relaxed mb-6 sm:mb-10 animate-float-in text-base sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              Transforme sua criação de frangos de corte e suínos com água tratada de qualidade. Entre em contato hoje
              para uma consulta gratuita e descubra como a AgroETA pode aumentar a produtividade e saúde do seu rebanho!
            </p>

            <div
              className="flex flex-col md:flex-row items-center justify-center gap-6 animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary-extralight text-white font-light tracking-wider flex items-center gap-2 hover:shadow-glow transition-all duration-500 hover:scale-105"
                onClick={() => window.open("https://wa.me/5549999117406", "_blank", "noopener,noreferrer")}
              >
                Solicite um Orçamento
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-dark flex items-center justify-center ml-2">
                  <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white">
        {/* Newsletter Section */}
        <div className="border-b border-primary/30">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            {/* Removido o texto de novidades */}
          </div>
        </div>

        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 items-start">
            {/* Column 1 - Logo and Social */}
            <div>
              <div className="mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agro-logo-cy5eOlk5DMpx4bWIrRk0By1fgTS1ld.png"
                  alt="AgroETA Logo"
                  width={320}
                  height={110}
                  className="h-28 sm:h-36 md:h-40 w-auto drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-white/70 font-extralight mb-6 sm:mb-8 text-base sm:text-lg">
                Especialistas em Estações de Tratamento de Água para propriedades rurais. 27 anos oferecendo soluções
                completas para tratamento de água para aves de corte e suínos.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a
                  href="https://www.facebook.com/agroetatratamentodeagua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-extralight flex items-center justify-center text-white hover:bg-secondary hover:text-dark transition-all duration-300"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com/agroeta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-extralight flex items-center justify-center text-white hover:bg-secondary hover:text-dark transition-all duration-300"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-extralight flex items-center justify-center text-white hover:bg-secondary hover:text-dark transition-all duration-300"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">Links Rápidos</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">Nossos Serviços</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/servicos"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Manutenção de ETA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Venda de Insumos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Manutenção de Filtros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="text-white/70 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                  >
                    Monitoramento 24h
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact Information */}
            <div>
              <h4 className="text-lg sm:text-xl font-light mb-4 sm:mb-6">Informações de Contato</h4>

              <div className="flex items-start mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-extralight/50 flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white/70 font-extralight mb-1 text-base sm:text-lg">Telefones</p>
                  <a href="tel:+5549999117406" className="text-primary-extralight hover:underline text-base sm:text-lg block">(49) 99911-7406</a>
                  <a href="tel:+554934360694" className="text-primary-extralight hover:underline text-base sm:text-lg block">(49) 3436 0694</a>
                  <a href="tel:+5549999957031" className="text-primary-extralight hover:underline text-base sm:text-lg block">(49) 99995 7031</a>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-extralight/50 flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white/70 font-extralight mb-1 text-base sm:text-lg">Email</p>
                  <a
                    href="mailto:agua@agroeta.com.br"
                    className="text-primary-extralight hover:underline text-base sm:text-lg"
                  >
                    agua@agroeta.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-extralight/50 flex items-center justify-center text-white mr-4 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white/70 font-extralight mb-1 text-base sm:text-lg">Nossa Localização</p>
                  <p className="text-white text-base sm:text-lg">
                    Estrada Nova Sarandi, SN
                    <br />
                    Faxinal dos Guedes - SC
                    <br />
                    CEP: 89694-000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-primary/30">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 font-extralight mb-4 md:mb-0 text-base sm:text-lg">
                © 2025 AgroETA. Todos os Direitos Reservados. Empresa de tratamento de água para aves de corte e
                suínos.
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <Link
                  href="#"
                  className="text-white/60 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="#"
                  className="text-white/60 hover:text-primary-extralight transition-colors duration-300 font-extralight text-base sm:text-lg"
                >
                  Termos e Condições
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
