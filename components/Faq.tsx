
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-2 hover:bg-gray-100 focus:outline-none"
      >
        <h4 className="text-lg font-semibold">{title}</h4>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-5 pt-0 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
    const faqData = [
    {
      q: "É realmente possível aprender a falar inglês em 30 dias?",
      a: "Sim! O objetivo do curso não é te transformar em um professor de gramática, mas sim te dar as ferramentas e a confiança para se comunicar em situações do dia a dia e profissionais. Você vai aprender o essencial para 'destravar' a sua fala."
    },
    {
      q: "E se eu não tiver nenhum conhecimento de inglês (zero mesmo)?",
      a: "Este curso foi feito para você! Começamos do absoluto zero, construindo sua base de forma prática e focada na conversação. Não é necessário nenhum conhecimento prévio."
    },
    {
      q: "Quanto tempo por dia preciso dedicar?",
      a: "Recomendamos de 30 a 60 minutos por dia. As aulas são curtas e diretas para se encaixarem na sua rotina. O mais importante é a consistência!"
    },
    {
      q: "Como funciona o suporte e a comunidade?",
      a: "Você terá acesso a um grupo VIP no WhatsApp, onde poderá interagir com outros alunos e tirar dúvidas diretamente com o professor Leonel. É um ambiente de apoio e prática constante."
    },
    {
      q: "O acesso ao curso é por quanto tempo?",
      a: "O acesso é vitalício! Você pode ver e rever as aulas quantas vezes quiser, para sempre, incluindo todas as futuras atualizações do curso, sem custo adicional."
    },
    {
      q: "E se eu não gostar do curso?",
      a: "Seu risco é zero. Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo achar que o curso não é para você, basta pedir o reembolso e devolveremos 100% do seu dinheiro, sem perguntas."
    }
  ];
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ainda tem dúvidas? A gente te ajuda a esclarecer tudo.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
                <AccordionItem key={index} title={item.q}>
                    {item.a}
                </AccordionItem>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
