
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo, SP",
      text: "Este e-book mudou minha relação com minha bebê reborn. As técnicas de cuidados são simples de seguir e extremamente eficientes. Recomendo muito!",
      stars: 5
    },
    {
      name: "Carlos Eduardo",
      location: "Rio de Janeiro, RJ",
      text: "Comprei o e-book quando adquiri minha primeira reborn e não me arrependo. O conteúdo é completo e esclareceu todas as minhas dúvidas sobre cuidados.",
      stars: 5
    },
    {
      name: "Juliana Mendes",
      location: "Belo Horizonte, MG",
      text: "Material de excelente qualidade. As dicas de vestuário e conservação são preciosas. A autora é realmente expert no assunto.",
      stars: 4
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-reborn-800 font-libre mb-4">
            O que Dizem Nossos Leitores
          </h2>
          <div className="h-1 w-24 bg-reborn-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-reborn-200 shadow-md rounded-2xl">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} 
                      className={`${
                        starIndex < testimonial.stars 
                          ? "text-yellow-400 fill-yellow-400" 
                          : "text-gray-300"
                      } w-5 h-5`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-reborn-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
