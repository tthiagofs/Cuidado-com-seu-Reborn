
import { Check } from "lucide-react";

const About = () => {
  const benefits = [
    "Técnicas especiais de limpeza e conservação",
    "Guia de vestuário e acessórios",
    "Como criar um espaço adequado para seu bebê reborn",
    "Dicas para cuidados diários e especiais",
    "Informações exclusivas sobre materiais de qualidade"
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-reborn-800 font-libre mb-4">
            Sobre o E-book
          </h2>
          <div className="h-1 w-24 bg-reborn-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold">Cuidados com seu Bebê Reborn</span> é um guia completo 
              para todos que desejam proporcionar o melhor cuidado para seus bebês reborn.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Com orientações específicas e detalhadas, você vai aprender desde técnicas básicas 
              de manuseio até os cuidados mais avançados para preservar a qualidade e beleza do seu 
              bebê reborn por muito mais tempo.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-reborn-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-reborn-700 font-semibold italic">
              "Um guia indispensável para quem valoriza seu bebê reborn e quer manter sua 
              beleza e características por muito mais tempo."
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            {/* Placeholder for book cover/image */}
            <div className="bg-reborn-50 rounded-3xl p-10 shadow-lg border border-reborn-200 h-96 flex items-center justify-center">
              <p className="text-reborn-600 text-lg font-libre italic">Imagem da capa do e-book</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
