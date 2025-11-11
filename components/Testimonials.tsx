
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, image }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
    <div className="text-brand-teal text-6xl font-bold mb-4">“</div>
    <p className="text-gray-600 mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center mt-auto">
      <img src={image} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
      <div>
        <p className="font-bold text-brand-dark">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);


const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "Em menos de um mês, eu fiz minha primeira entrevista de emprego em inglês e consegui a vaga! O método do Leonel é pura prática, foi o que fez toda a diferença.",
      name: "Júlia Santos",
      role: "Analista de Marketing, São Paulo",
      image: "https://picsum.photos/id/237/100/100"
    },
    {
      quote: "Eu tinha muita vergonha de falar. A comunidade no WhatsApp foi incrível, pratiquei todos os dias e perdi o medo. Hoje consigo conversar com clientes estrangeiros sem tremer.",
      name: "Manuel Costa",
      role: "Empreendedor, Luanda",
      image: "https://picsum.photos/id/238/100/100"
    },
    {
      quote: "O melhor investimento que fiz na minha carreira. O curso é direto ao ponto e o professor é super atencioso. Recomendo para todos que querem resultados rápidos de verdade.",
      name: "Carla Ferreira",
      role: "Estudante Universitária, Maputo",
      image: "https://picsum.photos/id/239/100/100"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-brand-dark mb-4">Quem fez, recomenda.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que alunos como você estão dizendo sobre a transformação que tiveram em apenas 30 dias.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
