import React from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);


const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-brand-dark text-white">
       <div className="absolute inset-0 bg-black/50" style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/checkered-light-emboss.png)',
        opacity: '0.05'
      }}></div>
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display mb-4">A Premissa é Simples: <span className="text-brand-teal">Falar se Aprende Falando!</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Esqueça os métodos que te enchem de teoria. O curso "Fale Inglês em 30 Dias" foi desenhado com uma única missão: te dar confiança para se comunicar no mundo real, de forma rápida e prática.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Como vamos transformar seu inglês em 30 dias?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckIcon className="text-brand-teal mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Foco na Prática:</span> 80% do curso é focado em conversação e audição. Você vai falar inglês desde o primeiro dia.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-brand-teal mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Método Acelerado:</span> Aprenda o que realmente importa para se comunicar. Sem enrolação com regras que ninguém usa.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="text-brand-teal mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Aulas Direto ao Ponto:</span> Lições curtas e objetivas que você pode assistir em qualquer lugar, pelo celular.</span>
              </li>
               <li className="flex items-start">
                <CheckIcon className="text-brand-teal mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-bold">Comunidade de Apoio:</span> Entre em um grupo exclusivo no WhatsApp para praticar com outros alunos e tirar dúvidas diretamente com o professor.</span>
              </li>
            </ul>
             <a href="https://wa.link/3u4nqe" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-teal hover:bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-6">
                QUERO DESTRAVAR MEU INGLÊS
             </a>
          </div>
          <div className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pessoas conversando com confiança" className="rounded-lg shadow-2xl w-full max-w-md"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;