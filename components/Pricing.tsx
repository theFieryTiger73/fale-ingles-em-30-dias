import React, { useState, useEffect } from 'react';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2024-12-31T23:59:59") - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    // Fix: Replaced JSX.Element with React.ReactElement to resolve namespace error.
    const timerComponents: React.ReactElement[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && interval !== 'segundos') {
            return;
        }
        timerComponents.push(
            <div key={interval} className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft[interval] < 10 ? `0${timeLeft[interval]}`: timeLeft[interval]}</div>
                <div className="text-xs uppercase">{interval}</div>
            </div>
        );
    });

    return (
        <div className="flex justify-center gap-4 my-4">
            {timerComponents.length ? timerComponents : <span>Oferta encerrada!</span>}
        </div>
    );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white text-brand-dark rounded-xl shadow-2xl overflow-hidden md:flex">
                <div className="md:w-1/2 p-8 md:p-12 bg-gray-50 flex flex-col">
                     <h3 className="font-display text-4xl text-center mb-2">ACESSO COMPLETO</h3>
                     <p className="text-center text-gray-500 mb-6">Curso + Todos os Bônus</p>
                     <div className="text-center my-4">
                        <span className="text-2xl text-gray-500 line-through">De R$ 997,00</span>
                        <p className="text-xl">Por apenas:</p>
                        <p className="text-6xl font-bold text-brand-dark my-2">12x <span className="text-brand-red">R$ 29,70</span></p>
                        <p className="font-semibold">ou R$ 297,00 à vista</p>
                     </div>
                     <div className="my-8">
                        <a href="#" className="w-full block text-center bg-brand-red hover:bg-red-700 text-white font-bold text-xl py-5 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse">
                            QUERO GARANTIR MINHA VAGA!
                        </a>
                     </div>
                     <div className="text-center text-sm text-gray-500">
                        <p>Compra 100% segura. Acesso imediato.</p>
                        <p className="mt-2 font-bold">GARANTIA DE 7 DIAS</p>
                        <p>Seu risco é zero. Se não gostar, devolvemos seu dinheiro.</p>
                     </div>
                </div>

                <div className="md:w-1/2 p-8 md:p-12 bg-brand-dark text-white">
                    <h3 className="font-bold text-2xl mb-6">Esta oferta especial termina em:</h3>
                    <CountdownTimer />
                    <ul className="space-y-3 mt-8">
                        <li className="flex items-center"><CheckIcon className="text-brand-teal mr-3" /> Acesso Vitalício ao Curso</li>
                        <li className="flex items-center"><CheckIcon className="text-brand-teal mr-3" /> Comunidade VIP no WhatsApp</li>
                        <li className="flex items-center"><CheckIcon className="text-brand-teal mr-3" /> E-book de Pronúncia</li>
                        <li className="flex items-center"><CheckIcon className="text-brand-teal mr-3" /> Certificado de Conclusão</li>
                        <li className="flex items-center"><CheckIcon className="text-brand-teal mr-3" /> Suporte direto com o professor</li>
                        <li className="flex items-center"><CheckIcon className="text-brand-teal mr-3" /> Aulas ao vivo mensais</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Pricing;