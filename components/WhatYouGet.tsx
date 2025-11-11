import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const WhatYouGet: React.FC = () => {
    const todayBenefits = [
        'Acesso Vitalício ao Curso Completo', 'Grupo Exclusivo de Alunos no WhatsApp', 'Material de Apoio em PDF para Download', 'Certificado de Conclusão Válido', 'Bónus #1: Guia de Viagem em Inglês', 'Bónus #2: Módulo de Entrevista de Emprego',
    ];

    const laterDrawbacks = [
        'Acesso por apenas 30 dias', 'Sem acesso ao Grupo de Alunos', 'Sem material de apoio para download', 'Sem direito aos Bónus Exclusivos'
    ];

    return (
        <section id="content" className="py-20 bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 uppercase">A ESCOLHA É SUA: <span className="text-brand-red">COMECE HOJE</span> OU PERCA</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">O acesso completo com todos os bónus é uma oferta exclusiva para quem se inscreve <span className="font-bold">AGORA</span>.</p>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12 text-left max-w-5xl mx-auto">
                    <div className="border-2 border-brand-red rounded-lg p-8 bg-white shadow-2xl transform md:scale-105">
                        <h3 className="text-2xl font-black text-brand-dark mb-6">Ao inscrever-se <span className="text-brand-red">HOJE</span>, ganha:</h3>
                        <ul className="space-y-4">
                            {todayBenefits.map(item => (
                                <li key={item} className="flex items-start space-x-3">
                                    <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-8 bg-white opacity-80 md:my-auto">
                         <h3 className="text-2xl font-black text-gray-600 mb-6">Se deixar para <span className="line-through">DEPOIS</span>:</h3>
                         <ul className="space-y-4">
                            {laterDrawbacks.map(item => (
                                <li key={item} className="flex items-start space-x-3">
                                    <XIcon className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-500">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;