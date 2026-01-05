"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Users, Award, Clock, Settings, Droplets, Phone, Mail } from "lucide-react"
import CoverageMap from "../../components/coverage-map"

export default function SobrePage() {
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
              width={520}
              height={180}
              className="h-44 sm:h-52 md:h-56 lg:h-60 w-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Quem Somos Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-float-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-dark mb-6 flex items-center">
                <Users className="w-8 h-8 text-primary mr-4" />
                Quem Somos
              </h2>
              <p className="text-lg text-dark/80 font-light leading-relaxed mb-6">
                Há 27 anos, a AgroETA Tratamento de Água trabalha lado a lado com produtores rurais como você,
                transformando um dos recursos mais importantes da sua propriedade: a água.
              </p>
              <p className="text-lg text-dark/80 font-light leading-relaxed mb-6">
                Sabemos que você dedica sua vida ao campo. Conhece cada detalhe da sua produção e entende que pequenos
                detalhes fazem toda a diferença no resultado final. Por isso, nossa missão é simples: garantir que seus
                animais tenham acesso à água de qualidade superior, porque água tratada significa animais mais saudáveis
                e, consequentemente, mais lucro no seu bolso.
              </p>
            </div>

            <div className="animate-float-in" style={{ animationDelay: "200ms" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:-rotate-1 transition-transform duration-500">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.46_0fffe543.jpg-oT4lk6LBvp0BAa4cc01H8iq2W3jHju.jpeg"
                    alt="Equipe AgroETA"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Experiência Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-float-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-dark mb-6 flex items-center">
                <Award className="w-8 h-8 text-primary mr-4" />
                Nossa Experiência no Campo
              </h2>
              <p className="text-lg text-dark/80 font-light leading-relaxed mb-6">
                Com quase três décadas de experiência, já conquistamos a confiança de produtores em mais de 32 municípios nos três estados do Sul do Brasil. Todos os dias, tratamos mais de 10 milhões de
                litros de água para mais de 20 milhões de animais, com foco especial em aves e suínos de corte.
              </p>
              <p className="text-lg text-dark/80 font-light leading-relaxed mb-8">
                Esses números não são apenas estatísticas - eles representam famílias rurais que confiam no nosso
                trabalho para melhorar seus resultados.
              </p>

              {/* Estatísticas */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">27</div>
                  <div className="text-dark/70 font-light">Anos de Experiência</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">32</div>
                  <div className="text-dark/70 font-light">Municípios Atendidos</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                  <div className="text-dark/70 font-light">Litros/Dia Tratados</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">20M+</div>
                  <div className="text-dark/70 font-light">Animais Atendidos</div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 animate-float-in" style={{ animationDelay: "200ms" }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform group-hover:rotate-1 transition-transform duration-500">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-06-16%20%C3%A0%28s%29%2020.16.47_f8e738a7.jpg-xeYMa4Eg0cEOplbUOBedkIRMquo7Wp.jpeg"
                    alt="Experiência AgroETA"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Tratar a Água Section */}
      <section className="bg-light py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-dark mb-6 flex items-center justify-center">
              <Droplets className="w-8 h-8 text-primary mr-4" />
              Por Que Tratar a Água é Fundamental?
            </h2>
            <p className="text-lg text-dark/80 font-light leading-relaxed max-w-3xl mx-auto">
              Você já deve ter notado que animais com acesso à água de qualidade apresentam melhor desempenho. Isso
              acontece porque:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in">
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-light text-dark">Melhora a digestão e absorção dos nutrientes</h3>
              </div>
              <p className="text-dark/70 font-light">
                A água limpa ajuda o sistema digestivo dos animais a funcionar perfeitamente, aproveitando melhor cada
                quilo de ração.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-light text-dark">Reduz doenças e mortalidade</h3>
              </div>
              <p className="text-dark/70 font-light">
                Água contaminada é porta de entrada para bactérias, vírus e parasitas. Com tratamento adequado, você
                reduz drasticamente problemas sanitários no plantel.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-light text-dark">Aumenta o ganho de peso</h3>
              </div>
              <p className="text-dark/70 font-light">
                Animais hidratados com água de qualidade ganham peso mais rapidamente e de forma mais eficiente.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in"
              style={{ animationDelay: "600ms" }}
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-light text-dark">Melhora a conversão alimentar</h3>
              </div>
              <p className="text-dark/70 font-light">
                Cada real investido em ração rende mais quando os animais têm acesso à água tratada.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 animate-float-in md:col-span-2 lg:col-span-1"
              style={{ animationDelay: "800ms" }}
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-light text-dark">Diminui o uso de medicamentos</h3>
              </div>
              <p className="text-dark/70 font-light">
                Menos doenças significam menos gastos com veterinário e medicamentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Oferecemos Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-dark mb-6 flex items-center justify-center">
              <Settings className="w-8 h-8 text-primary mr-4" />O Que Oferecemos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4 animate-float-in">
                <h3 className="text-xl font-light text-dark mb-3">Serviço Completo e Especializado</h3>
                <p className="text-dark/70 font-light">
                  Não somos apenas fornecedores - somos parceiros da sua produção. Nossa equipe técnica especializada
                  entende as necessidades específicas do agronegócio e desenvolve soluções sob medida para sua
                  propriedade.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 animate-float-in" style={{ animationDelay: "200ms" }}>
                <h3 className="text-xl font-light text-dark mb-3">Garantia Total</h3>
                <p className="text-dark/70 font-light">
                  Assumimos total responsabilidade pelos resultados. Nossa garantia é o reflexo da confiança que temos
                  no nosso trabalho e no comprometimento com seu sucesso.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 py-4 animate-float-in" style={{ animationDelay: "400ms" }}>
                <h3 className="text-xl font-light text-dark mb-3">Assistência Técnica Sempre Presente</h3>
                <p className="text-dark/70 font-light">
                  Sabemos que problemas não escolhem hora para aparecer. Por isso, nossa assistência técnica está sempre
                  disponível para garantir que sua produção nunca pare.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div
                className="border-l-4 border-secondary pl-6 py-4 animate-float-in"
                style={{ animationDelay: "600ms" }}
              >
                <h3 className="text-xl font-light text-dark mb-3">Montagem e Manutenção Completa</h3>
                <p className="text-dark/70 font-light">
                  Desde a instalação até a manutenção preventiva, cuidamos de tudo. Você pode focar no que faz de
                  melhor: produzir.
                </p>
              </div>

              <div
                className="border-l-4 border-secondary pl-6 py-4 animate-float-in"
                style={{ animationDelay: "800ms" }}
              >
                <h3 className="text-xl font-light text-dark mb-3">Estações de Tratamento (ETA) Sob Medida</h3>
                <p className="text-dark/70 font-light">
                  Desenvolvemos e instalamos ETAs específicas para o agronegócio, considerando o volume de produção,
                  tipo de criação e características da água local.
                </p>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 animate-float-in" style={{ animationDelay: "1000ms" }}>
                <h4 className="text-lg font-light text-primary mb-3">Nossa Promessa</h4>
                <p className="text-dark/80 font-light italic">
                  "Água de qualidade não é gasto - é investimento que se paga sozinho."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você pode esperar Section */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white mb-6 flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary-extralight mr-4" />O que você pode esperar
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8">
              Entendemos que cada centavo investido na propriedade precisa gerar retorno. Por isso, não oferecemos
              apenas equipamentos - oferecemos resultados comprovados.
            </p>
            <p className="text-lg text-white/70 font-light mb-12">Quando você escolhe a AgroETA, está escolhendo:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-float-in">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-extralight">27</span>
              </div>
              <h3 className="text-xl font-light text-white mb-2">Anos de Experiência no Campo</h3>
              <p className="text-white/70 font-light">Décadas de conhecimento especializado</p>
            </div>

            <div className="text-center animate-float-in" style={{ animationDelay: "200ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-extralight" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Tecnologia Comprovada</h3>
              <p className="text-white/70 font-light">Testada em milhões de animais</p>
            </div>

            <div className="text-center animate-float-in" style={{ animationDelay: "400ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-extralight" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Equipe que Fala a Sua Língua</h3>
              <p className="text-white/70 font-light">Especialistas em agronegócio</p>
            </div>

            <div className="text-center animate-float-in" style={{ animationDelay: "600ms" }}>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-extralight" />
              </div>
              <h3 className="text-xl font-light text-white mb-2">Compromisso Real com Resultados</h3>
              <p className="text-white/70 font-light">Seu sucesso é nosso sucesso</p>
            </div>

            <div
              className="text-center animate-float-in md:col-span-2 lg:col-span-1"
              style={{ animationDelay: "800ms" }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-primary-extralight">3</span>
              </div>
              <h3 className="text-xl font-light text-white mb-2">Presença Forte no Sul</h3>
              <p className="text-white/70 font-light">SC, PR e RS</p>
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
              Vamos Conversar?
            </h2>
            <p
              className="text-xl text-white/90 mb-6 max-w-3xl mx-auto font-light animate-float-in"
              style={{ animationDelay: "200ms" }}
            >
              Sabemos que cada propriedade é única, assim como cada produtor tem suas necessidades específicas.
            </p>
            <p
              className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-light animate-float-in"
              style={{ animationDelay: "400ms" }}
            >
              Nossa equipe está pronta para visitar sua propriedade, conhecer sua realidade e desenvolver a solução
              ideal para potencializar seus resultados.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-float-in"
              style={{ animationDelay: "600ms" }}
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

            <p className="text-lg font-medium text-white/90 mb-4 animate-float-in" style={{ animationDelay: "800ms" }}>
              Porque água de qualidade não é gasto - é investimento que se paga sozinho.
            </p>

            <p className="text-sm text-white/80 font-light animate-float-in" style={{ animationDelay: "1000ms" }}>
              AgroETA Tratamento de Água - 27 anos cuidando da água que cuida dos seus animais.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
