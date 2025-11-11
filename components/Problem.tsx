
import React from 'react';

const PainPoint: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-3">
      <div className="bg-brand-red text-white p-3 rounded-full mr-4">{icon}</div>
      <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
    </div>
    <p className="text-gray-600">{children}</p>
  </div>
);

const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Você se identifica com isso?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Se você está tentando aprender inglês, provavelmente já passou por alguma dessas frustrações...
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <PainPoint icon={<XIcon />} title="Medo de Falar">
            Você entende o que lê e ouve, mas na hora de formar uma frase, as palavras simplesmente somem. O medo de errar te paralisa.
          </PainPoint>
          <PainPoint icon={<XIcon />} title="Cursos Lentos e Chatos">
            Passou anos na escola aprendendo regras de gramática que nunca usou. Os métodos tradicionais são teóricos e não focam na conversação.
          </PainPoint>
          <PainPoint icon={<XIcon />} title="Falta de Tempo e Dinheiro">
            Sua rotina é corrida e cursos de inglês presenciais são caros e inflexíveis. Você precisa de algo que se encaixe na sua vida.
          </PainPoint>
          <PainPoint icon={<XIcon />} title="Pronúncia Insegura">
            Você tem vergonha da sua pronúncia e sente que as pessoas não vão te entender, o que te deixa ainda mais ansioso para falar.
          </PainPoint>
          <PainPoint icon={<XIcon />} title="Motivação Inconstante">
            Você começa animado, mas sem um plano claro e resultados rápidos, acaba desanimando e abandonando os estudos no meio do caminho.
          </PainPoint>
          <PainPoint icon={<XIcon />} title="Oportunidades Perdidas">
            Você sabe que o inglês pode abrir portas para melhores empregos, viagens e estudos, e sente que está ficando para trás por não ser fluente.
          </PainPoint>
        </div>
      </div>
    </section>
  );
};

export default Problem;
