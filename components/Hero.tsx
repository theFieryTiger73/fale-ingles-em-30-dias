
import React from 'react';

const DottedGrid: React.FC = () => (
  <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" style={{ zIndex: 0 }}>
    <div className="w-32 h-32" style={{
      backgroundImage: 'radial-gradient(circle, #E5E7EB 1px, transparent 1px)',
      backgroundSize: '10px 10px'
    }}></div>
  </div>
);

const RedCircle: React.FC = () => (
  <div className="absolute top-0 left-0 w-48 h-48 -translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full opacity-90" style={{ zIndex: 0 }}></div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50" style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/checkered-light-emboss.png)',
        opacity: '0.05'
      }}></div>
      <div className="relative container mx-auto px-6 py-16 md:py-24 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <RedCircle />
            <span className="text-brand-red font-bold tracking-wider">ONLINE ENGLISH COURSE</span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl my-4 leading-none tracking-tight">
              FALE INGLÊS <br />EM <span className="text-brand-teal">30 DIAS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
              O único método prático que te tira do zero à confiança para conversar, sem anos de gramática chata e regras que não funcionam.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#pricing" className="bg-brand-red hover:bg-red-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                QUERO FALAR INGLÊS AGORA!
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Vagas limitadas! Acesso imediato.</p>
          </div>
          <div className="relative flex justify-center items-center">
            <DottedGrid />
            <div className="absolute w-full h-full bg-brand-teal rounded-full blur-3xl opacity-30"></div>
            <div className="relative w-full max-w-sm mx-auto z-10">
                <img 
                    src="https://i.imgur.com/rN55hXo.png" 
                    alt="Leonel R. Matavele, seu professor de inglês" 
                    className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-12 bg-brand-teal rounded-lg transform -skew-x-12" style={{ zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
