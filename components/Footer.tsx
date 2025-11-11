
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Pronto para finalmente falar inglês com confiança?</h3>
            <p className="text-gray-400 my-4">A oportunidade de mudar sua vida e sua carreira está a um clique de distância. Não deixe para depois.</p>
             <a href="#pricing" className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-4">
                SIM, QUERO MINHA VAGA AGORA!
            </a>
            <div className="mt-10 pt-8 border-t border-gray-700 text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Fale Inglês em 30 Dias. Todos os direitos reservados.</p>
                <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
