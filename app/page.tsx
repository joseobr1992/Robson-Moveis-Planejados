'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  MessageCircle 
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
          <span className="font-headline text-xl md:text-2xl font-bold text-stone-900">Robson Móveis Planejados</span>
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tight text-lg">
            <a className="text-stone-900 border-b-2 border-stone-800 pb-1" href="#">Inicio</a>
            <a className="text-stone-500 hover:text-stone-800 transition-colors" href="#about">Sobre</a>
            <a className="text-stone-500 hover:text-stone-800 transition-colors" href="#services">Serviços</a>
            <a className="text-stone-500 hover:text-stone-800 transition-colors" href="#contact">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7oL6qZrrR_FNf7WMI0pHvojXsuPo5pCgR5d3L8Otkq6JFIJx21HpQJhhtjVHnMR5C9AnbdEoGuf55Rt4VNq7XimrYh7MKHSz9Amip2ZWX4KI7yimrqQdYENEcWXRMpqjMjIfP0cIN-lkBrkuxTMWETngz2Mv95Q9uQsU_9WSIzOtx8NmiNlNdAtk7j6EHrUZdQihOl1Evd7UAMAtKRShR4CDzcETtXGLzWWjMeFv1EZDgeksNpwoBlyo_Xg1GY9kT_mqmmVUepFc"
            alt="Woodworking Workshop"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-primary/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Arte em Madeira, <br/>
            <span className="italic font-normal">Precisão em Cada Detalhe</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-on-primary-container mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Móveis planejados e projetos sob medida para transformar seu ambiente com a alma do artesanato tradicional.
          </motion.p>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div id="about" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-body text-primary tracking-widest uppercase text-sm mb-4 block font-semibold">Nossa Expertise</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-background leading-tight">Soluções Personalizadas em Marcenaria</h2>
          </div>
          <p className="text-secondary max-w-md font-body leading-relaxed">
            Cada peça é produzida com madeiras selecionadas e acabamentos manuais que garantem durabilidade e estética atemporal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-surface-container-low p-8 rounded-sm group hover:bg-surface-container-high transition-colors duration-500"
          >
            <div className="mb-8 overflow-hidden aspect-square relative">
              <Image
                src="https://picsum.photos/seed/wardrobe/800/800"
                alt="Guarda Roupa Planejado"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-headline text-2xl mb-4 text-primary">Móveis Planejados</h3>
            <p className="text-secondary leading-relaxed">Design inteligente que otimiza seu espaço sem sacrificar a estética orgânica da madeira.</p>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-surface-container-low p-8 rounded-sm group hover:bg-surface-container-high transition-colors duration-500 md:mt-12"
          >
            <div className="mb-8 overflow-hidden aspect-square relative">
              <Image
                src="https://picsum.photos/seed/cabinet/800/800"
                alt="Armário Planejado"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-headline text-2xl mb-4 text-primary">Cozinhas Gourmet</h3>
            <p className="text-secondary leading-relaxed">O coração da casa merece materiais nobres e funcionalidade de nível profissional.</p>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-surface-container-low p-8 rounded-sm group hover:bg-surface-container-high transition-colors duration-500"
          >
            <div className="mb-8 overflow-hidden aspect-square relative">
              <Image
                src="https://picsum.photos/seed/furniture-assembly/800/800"
                alt="Montador de móveis"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="font-headline text-2xl mb-4 text-primary">Montador de móveis</h3>
            <p className="text-secondary leading-relaxed">Serviço profissional de montagem com precisão e cuidado para seus novos móveis.</p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-24 bg-surface-dim">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <span className="font-body text-primary tracking-widest uppercase text-sm block font-semibold">Visita nossa marcenaria</span>
            <h2 className="font-headline text-4xl md:text-5xl text-on-background">Onde Estamos</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-bold text-lg text-primary">Robson Móveis Planejados</p>
                  <p className="text-secondary">Rua Judith Moreira, 153, Presidente Roosevelt<br/>Uberlândia MG, 38401-160</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-bold text-lg text-primary">Horário de Atendimento</p>
                  <p className="text-secondary">Segunda a Sexta: 08:00 — 18:00<br/>Sábado: 09:00 — 13:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" size={24} />
                <div>
                  <p className="font-bold text-lg text-primary">Contato</p>
                  <p className="text-secondary">34 99157-6308</p>
                </div>
              </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/iBZmh4B1hHTfxrQu8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-sm font-semibold flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all w-fit"
            >
              <Navigation size={20} />
              Como Chegar
            </a>
          </div>
          
          <a 
            href="https://maps.app.goo.gl/iBZmh4B1hHTfxrQu8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative h-[500px] w-full bg-surface-container shadow-2xl rounded-sm overflow-hidden border-8 border-white/50 block"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACFEfyhP0wPW9Mg10MJ26zO5dBWRAS2sGXeuDtJtHRjgX8rTsN1GZQ02XHP43-ZjEvJZlA_EaWMGMjqsQ8XTTZQZaRH6ehQKkCn_JN2JitkWv5EXO2fSkkHGjF5mCQcnJKUt5LrEgOZGhSdRHS82ktYG5nh6UQ6xSH6PF70VIEyJmpB1DH4GRHaoUO1NcsXYSN5Ipg7dJyuJy1SDjjuogjvVmNsMVauzURYa7nAR8AhEAKSP7LA4iE09GLrNE2cf9_JXkcjbdWAf0"
              alt="Localização: Rua Judith Moreira, 153, Uberlândia MG"
              fill
              className="object-cover grayscale opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-primary text-white p-4 rounded-full shadow-2xl"
              >
                <MapPin size={32} fill="currentColor" />
              </motion.div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-headline text-xl font-semibold text-stone-900">Robson Móveis Planejados</span>
            <p className="font-body text-sm tracking-wide uppercase text-stone-500 mt-2">© 2024 Robson Móveis Planejados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-[100] bg-tertiary-container text-tertiary-fixed p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300" 
        href="https://wa.me/5534991576308"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={32} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold">
          Falar no WhatsApp
        </span>
      </motion.a>
    </div>
  );
}
