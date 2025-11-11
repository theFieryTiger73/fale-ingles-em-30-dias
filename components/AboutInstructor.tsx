
import React from 'react';

const AboutInstructor: React.FC = () => {
  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Conheça seu professor, Leonel R. Matavele</h2>
            <p className="text-lg text-gray-700 mb-4">
              Eu sei exatamente o que você sente. Eu também já estive no seu lugar: frustrado, com medo de falar e achando que o inglês não era para mim. Vindo de Moçambique, entendi que os métodos tradicionais não foram feitos para nós, que precisamos de resultados práticos e rápidos.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Por isso, dediquei anos para desenvolver um método focado 100% na conversação e na confiança. Já ajudei centenas de alunos de Moçambique, Angola e Brasil a destravarem o inglês e conquistarem seus sonhos. Minha missão é mostrar que você também pode, e de uma forma muito mais simples e rápida do que imagina.
            </p>
            <a href="#pricing" className="bg-brand-dark hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              QUERO SER SEU ALUNO!
            </a>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-brand-teal rounded-lg transform -rotate-3"></div>
              <img 
                src="https://i.imgur.com/rN55hXo.png" 
                alt="Foto de Leonel R. Matavele"
                className="relative rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructor;
