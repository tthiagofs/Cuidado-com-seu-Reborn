
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const features = [
    "E-book completo em formato PDF",
    "Conteúdo exclusivo sobre cuidados especiais",
    "Guia de vestuário e acessórios",
    "Acesso vitalício ao material",
    "Atualizações gratuitas",
    "Suporte por e-mail por 30 dias"
  ];

  return (
    <section className="section-padding bg-reborn-50">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-reborn-800 font-libre mb-4">
            Adquira seu E-book Agora
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Invista no melhor cuidado para seu bebê reborn com nosso guia completo e exclusivo.
          </p>
          <div className="h-1 w-24 bg-reborn-400 mx-auto mt-6"></div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 bg-reborn-600 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Oferta Especial</h3>
            <p className="opacity-80 mb-4">Acesso completo ao e-book</p>
            
            <div className="flex justify-center items-baseline mb-4">
              <span className="text-4xl font-bold">R$ 39,90</span>
              <span className="text-xl line-through ml-2 opacity-70">R$ 69,90</span>
            </div>
            
            <p className="text-sm bg-white/20 rounded-full py-1 px-4 inline-block">
              Pagamento único
            </p>
          </div>
          
          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-reborn-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-reborn-600 hover:bg-reborn-700 text-white rounded-full py-6 text-lg">
              Quero comprar agora
            </Button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento seguro por PIX ou cartão
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-reborn-800">
            Tem dúvidas? Entre em contato
          </p>
          <p className="text-gray-600">
            Envie um e-mail para contato@bebereborn.com.br
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
