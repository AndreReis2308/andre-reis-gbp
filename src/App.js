import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Hero Section Component
const HeroSection = () => {
  return (    
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Especialista em <span className="text-blue-400">Google Business Profile</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transformo negócios locais em autoridades digitais. Criação, otimização e posicionamento estratégico no Google para máxima visibilidade local.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contato" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            role="button"
            aria-label="Entrar em contato para dominar sua região"
          >
            Quero Dominar Minha Região
          </a>
          <a 
            href="#como-funciona" 
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            role="button" 
            aria-label="Saber como funciona o processo"
          >
            Como Funciona
          </a>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      title: "Criação Completa de GBP",
      description: "Configuração profissional do seu Google Business Profile com todas as informações otimizadas para máxima visibilidade nas buscas locais.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      title: "Otimização para Ranking",
      description: "Estratégias avançadas de SEO local para posicionar seu negócio no topo das buscas \"perto de mim\" e aumentar sua autoridade regional.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    },
    {
      title: "Gestão de Avaliações",
      description: "Estratégia completa para conquistar mais avaliações positivas e gerenciar sua reputação online de forma profissional.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      )
    },
    {
      title: "Auditoria e Análise",
      description: "Análise detalhada da concorrência local e identificação de oportunidades para superar seus competidores nas buscas.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    {
      title: "Consultoria Estratégica",
      description: "Acompanhamento mensal com relatórios detalhados e otimizações contínuas para manter seu negócio sempre em destaque.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white" role="region" aria-labelledby="servicos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="servicos-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Google Business Profile
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para dominar as buscas locais e atrair mais clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Auditoria",
      description: "Análise completa do seu perfil atual, concorrência local e oportunidades de mercado.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
        </svg>
      )
    },
    {
      number: "2", 
      title: "Estratégia",
      description: "Criação de plano personalizado com palavras-chave locais e cronograma definido.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      number: "3",
      title: "Otimização", 
      description: "Implementação das otimizações com foco em máxima visibilidade local.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
        </svg>
      )
    },
    {
      number: "4",
      title: "Monitoramento",
      description: "Acompanhamento contínuo com relatórios e ajustes para manter o topo.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-black" role="region" aria-labelledby="processo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="processo-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Processo Estratégico
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Metodologia testada em 4 etapas para dominar sua região
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <article key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {step.icon}
              </div>
              
              {/* Title with Number */}
              <h3 className="text-xl font-bold text-white text-center mb-4">
                {step.number}. {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-center">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Success Cases Section Component
const SuccessCasesSection = () => {
  const cases = [
    {
      title: "Caso #1",
      description: "Estudo de caso em desenvolvimento...",
      category: "Restaurante Local"
    },
    {
      title: "Caso #2", 
      description: "Estudo de caso em desenvolvimento...",
      category: "Clínica Médica"
    },
    {
      title: "Caso #3",
      description: "Estudo de caso em desenvolvimento...", 
      category: "Escritório de Advocacia"
    }
  ];

  return (
    <section id="casos-sucesso" className="py-20 bg-black" role="region" aria-labelledby="casos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="casos-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Em breve: estudos de caso reais e depoimentos de clientes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_study, index) => (
            <article key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              {/* Placeholder Image Area */}
              <div className="w-full h-40 bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-16 h-24 bg-gray-600 rounded"></div>
              </div>
              
              <div className="text-sm text-gray-500 mb-2">{case_study.category}</div>
              <h3 className="text-xl font-bold text-white mb-4">{case_study.title}</h3>
              <p className="text-gray-400 leading-relaxed">{case_study.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-900 text-white" role="region" aria-labelledby="sobre-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="sobre-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Sobre André Reis
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Especialista em Google Business Profile com foco exclusivo em resultados locais. 
              Ajudo negócios a dominarem suas regiões através de estratégias comprovadas de SEO local.
            </p>
            
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Pronto para Dominar sua Região?</h3>
              <p className="text-gray-300 mb-8 text-lg">
                Vamos conversar sobre como posicionar seu negócio no topo das buscas locais.
              </p>
              <a 
                href="#contato" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg"
                role="button"
                aria-label="Entrar em contato para ser encontrado"
              >
                Quero Ser Encontrado
              </a>
            </div>
          </div>
          
          <div className="lg:text-center">
            <div className="bg-gray-800 p-10 rounded-2xl border border-gray-700 inline-block w-full max-w-md mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">André Reis</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                  </svg>
                  <span className="text-lg">Especialista em Google Business Profile</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="text-lg">Curitiba/PR</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span className="text-lg">SEO Local & GBP</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                  </svg>
                  <span className="text-lg">Resultados Comprovados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Em quanto tempo vejo resultados no Google Business Profile?",
      answer: "Os primeiros resultados podem ser observados entre 2-4 semanas após a otimização inicial. Resultados mais significativos aparecem entre 60 a 90 dias, dependendo da concorrência local e da implementação das estratégias."
    },
    {
      question: "Preciso ter um site para otimizar meu GBP?",
      answer: "Não é obrigatório ter um site, mas é altamente recomendado. O Google Business Profile funciona de forma independente, porém ter um site otimizado complementa a estratégia e melhora significativamente os resultados de SEO local."
    },
    {
      question: "Como funciona a gestão de avaliações?",
      answer: "Implementamos estratégias para incentivar avaliações positivas de clientes satisfeitos, respondemos profissionalmente a todas as avaliações (positivas e negativas), e monitoramos sua reputação online continuamente."
    },
    {
      question: "Qual a diferença entre SEO tradicional e SEO local?",
      answer: "SEO tradicional foca em rankings nacionais/globais, enquanto SEO local é específico para buscas geográficas. O SEO local otimiza para termos como 'restaurante perto de mim' e utiliza sinais de localização, como Google Business Profile, citações locais e avaliações."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black" role="region" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-400">
            Respostas para as principais dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <article key={index} className="bg-gray-800 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left focus:outline-none hover:bg-gray-700 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <span 
                  className={`text-2xl text-blue-400 transform transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p className="px-8 text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
                <span>André Reis</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Curitiba/PR</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a 
                  href="tel:+5541995173145" 
                  className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:text-blue-400"
                  aria-label="Ligar para André Reis"
                >
                  (41) 9 9517-3145
                </a>
              </div>
            </address>
          </div>
          
          {/* Professional Profile */}
          <div>
            <h3 className="text-2xl font-bold mb-6">André Reis</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Especialista em Google Business Profile</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>Curitiba/PR</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>SEO Local & GBP</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Resultados Comprovados</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Serviços</h3>
            <nav aria-label="Serviços oferecidos">
              <ul className="space-y-3">
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:text-blue-400">Google Business Profile</a></li>
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:text-blue-400">SEO Local</a></li>
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:text-blue-400">Gestão de Avaliações</a></li>
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:text-blue-400">Consultoria Estratégica</a></li>
              </ul>
            </nav>
            
            {/* Call to Action */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Vamos Trabalhar Juntos?</h4>
              <p className="text-gray-300 mb-6">
                Pronto para dominar as buscas locais na sua cidade?
              </p>
              <a 
                href="tel:+5541995173145" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="button"
                aria-label="Entrar em contato via telefone"
              >
                Falar com André
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-12" />
        
        <div className="text-center">
          <p className="text-gray-400">
            © 2025 André Reis – Especialista em Google Business Profile. 
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
const Home = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <SuccessCasesSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">Página Não Encontrada</h2>
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          role="button"
          aria-label="Voltar para a página inicial"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;