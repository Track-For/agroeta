"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Settings, Droplets, Wrench, Zap, Eye, CheckCircle, Phone, Mail, ArrowRight } from "lucide-react"

export default function ServicosPage() {
  const services = [
    {
      icon: Eye,
      title: "Monitoramento 24 Horas",
      description: "Acompanhamento contínuo da qualidade da água e funcionamento dos equipamentos via sistema remoto",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.47_f8e738a7.jpg-xeYMa4Eg0cEOplbUOBedkIRMquo7Wp.jpeg",
      features: [
        "Monitoramento remoto em tempo real",
        "Alertas automáticos por WhatsApp",
        "Relatórios detalhados diários",
        "Suporte técnico 24h/7 dias",
        "Intervenção rápida quando necessário",
        "Dashboard online para acompanhamento",
      ],
      benefits: "Previne 95% dos problemas antes que afetem a produção",
    },
    {
      icon: Settings,
      title: "Manutenção de ETA",
      description:
        "Manutenção preventiva e corretiva completa de Estações de Tratamento de Água para máxima eficiência",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.46_0fffe543.jpg-oT4lk6LBvp0BAa4cc01H8iq2W3jHju.jpeg",
      features: [
        "Inspeção técnica regular dos equipamentos",
        "Limpeza profissional de todos os componentes",
        "Substituição de peças com garantia",
        "Relatórios técnicos detalhados",
        "Garantia total de funcionamento",
        "Atendimento emergencial 24h",
      ],
      benefits: "Reduz custos operacionais em até 40% e garante funcionamento contínuo",
    },
    {
      icon: Droplets,
      title: "Venda de Insumos",
      description: "Fornecimento de insumos orgânicos ou químicos para tratamento de água.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.47_c2e9d4d0.jpg-C1T253bZSwMWZ8MuCBSW0KhQSVNDuA.jpeg",
      features: [
        "Insumos orgânicos certificados",
        "Produtos químicos certificados ANVISA",
        "Entrega programada e pontual",
        "Assessoria técnica especializada",
        "Controle rigoroso de qualidade",
        "Preços competitivos do mercado",
        "Estoque sempre disponível",
      ],
      benefits: "Economia de até 30% nos custos com insumos e garantia de qualidade",
    },
    {
      icon: Wrench,
      title: "Manutenção de Filtros",
      description: "Limpeza, substituição e manutenção de filtros para máxima eficiência do sistema de tratamento",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.47_7bb06c7d.jpg-i5LVloFj3KLAdCp7D1xO0WiwkQDj07.jpeg",
      features: [
        "Limpeza profissional especializada",
        "Substituição programada de filtros",
        "Filtros originais de alta qualidade",
        "Teste de eficiência pós-manutenção",
        "Otimização completa do sistema",
        "Cronograma personalizado",
      ],
      benefits: "Aumenta vida útil dos equipamentos em 50% e melhora qualidade da água",
    },
    {
      icon: Zap,
      title: "Manutenção de Dosadores",
      description: "Calibração precisa e manutenção de equipamentos dosadores para precisão no tratamento químico",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.47_b353c1bb.jpg-rVwOAY8exbDMjq9GLdgAeMFJbuRYKI.jpeg",
      features: [
        "Calibração de alta precisão",
        "Ajuste automático de dosagem",
        "Verificação completa de bombas",
        "Sistema de controle automático",
        "Economia significativa de insumos",
        "Monitoramento remoto",
      ],
      benefits: "Reduz desperdício de insumos para tratamento de água em até 25% e melhora eficiência",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white">
      {/* Header */}
      <header className="bg-dark text-white py-8 shadow-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center text-primary-extralight hover:text-white transition-colors duration-300 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Voltar ao Início
              </Link>
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agro-logo-cy5eOlk5DMpx4bWIrRk0By1fgTS1ld.png"
              alt="AgroETA"
              width={420}
              height={140}
              className="h-32 sm:h-40 md:h-44 lg:h-48 w-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center animate-float-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 w-full">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:-rotate-1 transition-transform duration-500">
                      {service.title === "Monitoramento 24 Horas" ? (
                        <img
                          src={"/gif-site%20.gif"}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-96 sm:h-[32rem] object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 w-full">
                  <div className="max-w-xl">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-primary-extralight font-light text-sm tracking-wider uppercase">
                        Serviço Especializado
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extralight text-dark mb-4">{service.title}</h3>

                    <p className="text-lg text-dark/70 font-light leading-relaxed mb-6">{service.description}</p>

                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-light text-dark mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary-extralight mr-2" />O que está incluído:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary-extralight mr-2 mt-1 flex-shrink-0" />
                            <span className="text-dark/80 font-light text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary/10 rounded-lg p-4 mb-6">
                      <p className="text-primary font-light">
                        <strong>Benefício:</strong> {service.benefits}
                      </p>
                    </div>

                    <Link
                      href="https://wa.me/5549999117406"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow transition-all duration-500 hover:scale-105 font-light tracking-wider group"
                    >
                      Solicitar Este Serviço
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white mb-6">
              Por Que Escolher a <span className="text-primary-extralight">AgroETA</span>?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
              27 anos de experiência transformando a criação de aves e suínos com água tratada de qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-float-in">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary-extralight">27</span>
              </div>
              <h3 className="text-xl font-light text-white mb-2">Anos de Experiência</h3>
              <p className="text-white/70 font-extralight">Décadas de conhecimento em tratamento de água</p>
            </div>

            <div className="text-center animate-float-in" style={{ animationDelay: "200ms" }}>
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-extralight">24h</span>
              </div>
              <h3 className="text-xl font-light text-white mb-2">Suporte Técnico</h3>
              <p className="text-white/70 font-extralight">Assistência técnica disponível 24 horas por dia</p>
            </div>

            <div className="text-center animate-float-in" style={{ animationDelay: "400ms" }}>
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-extralight">27</span>
              </div>
              <h3 className="text-xl font-light text-white mb-2">Municípios</h3>
              <p className="text-white/70 font-extralight">Cobertura em SC, PR e RS</p>
            </div>

            <div className="text-center animate-float-in" style={{ animationDelay: "600ms" }}>
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-extralight">20M+</span>
              </div>
              <h3 className="text-xl font-light text-white mb-2">Animais Atendidos</h3>
              <p className="text-white/70 font-extralight">Milhões de aves e suínos mais saudáveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.30.41_013323c8.jpg-ND62t57Foufs0qQvuYZYKt9NdhQCzp.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white mb-6 animate-float-in">
              Pronto para Transformar sua Produção?
            </h2>
            <p
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light animate-float-in"
              style={{ animationDelay: "200ms" }}
            >
              Entre em contato conosco hoje mesmo e descubra como nossos serviços podem aumentar a produtividade e saúde
              dos seus animais
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                href="https://wa.me/5549999117406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary hover:shadow-2xl transition-all duration-500 hover:scale-105 font-light tracking-wider group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="mailto:agua@agroeta.com.br"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-500 font-light tracking-wider group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="animate-float-in" style={{ animationDelay: "600ms" }}>
                <div className="text-2xl font-bold text-white mb-2">Consulta Gratuita</div>
                <div className="text-white/80 font-light">Avaliação sem compromisso</div>
              </div>
              <div className="animate-float-in" style={{ animationDelay: "700ms" }}>
                <div className="text-2xl font-bold text-white mb-2">Orçamento Rápido</div>
                <div className="text-white/80 font-light">Resposta em até 24h</div>
              </div>
              <div className="animate-float-in" style={{ animationDelay: "800ms" }}>
                <div className="text-2xl font-bold text-white mb-2">Garantia Total</div>
                <div className="text-white/80 font-light">Satisfação garantida</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
