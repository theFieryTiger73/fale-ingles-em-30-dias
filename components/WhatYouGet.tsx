
import React from 'react';

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-teal" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const GiftIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-red" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0115 5v2a3 3 0 01-3 3H8a3 3 0 01-3-3V5zm5 4a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
        <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
    </svg>
);


const WhatYouGet: React.FC = () => {
    const courseModules = [
        "Semana 1: O Destravar da Confiança - Frases essenciais e apresentações.",
        "Semana 2: Inglês para o Dia a Dia - Situações reais (restaurantes, viagens).",
        "Semana 3: Inglês Profissional - Entrevistas de emprego e e-mails.",
        "Semana 4: Fluência Acelerada - Gírias, expressões e conversação avançada.",
        "Acesso vitalício a todas as aulas e futuras atualizações.",
        "Material de apoio em PDF para cada módulo.",
    ];

    const bonuses = [
        { name: "Comunidade VIP no WhatsApp", value: "R$ 297" },
        { name: "E-book: 'Guia de Pronúncia Perfeita'", value: "R$ 97" },
        { name: "Certificado de Conclusão do Curso", value: "R$ 147" },
        { name: "Aulão ao vivo mensal para tirar dúvidas", value: "Incalculável" }
    ];

    return (
        <section id="content" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">O que você vai receber com o acesso imediato?</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Um pacote completo para garantir que você não apenas aprenda, mas domine o inglês falado.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <CheckCircleIcon />
                            <span className="ml-3">Conteúdo do Curso</span>
                        </h3>
                        <ul className="space-y-4">
                            {courseModules.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-brand-dark mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-2 bg-brand-dark text-white p-8 rounded-lg shadow-lg">
                         <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <GiftIcon />
                           <span className="ml-3 text-white">BÔNUS EXCLUSIVOS (HOJE)</span>
                        </h3>
                        <ul className="space-y-4">
                            {bonuses.map((bonus, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>{bonus.name}</span>
                                    <span className="font-bold text-brand-teal bg-gray-700 px-2 py-1 rounded text-sm">
                                        {bonus.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-4 border-t border-gray-600 text-center">
                            <p className="text-gray-300">Valor total dos bônus:</p>
                            <p className="text-3xl font-bold text-brand-red line-through">R$ 541,00</p>
                            <p className="text-2xl font-bold text-white">DE GRAÇA para você hoje!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
