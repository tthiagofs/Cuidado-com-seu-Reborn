
import { Card, CardContent } from "@/components/ui/card";
import { Book, Camera, Heart } from "lucide-react";

const Content = () => {
  const chapters = [
    {
      title: "Introdução ao Mundo Reborn",
      description: "Conheça a história e a arte dos bebês reborn, suas origens e evolução ao longo do tempo.",
      icon: Book
    },
    {
      title: "Materiais e Componentes",
      description: "Aprenda sobre os materiais utilizados na confecção dos bebês reborn e como identificar produtos de qualidade.",
      icon: Heart
    },
    {
      title: "Cuidados Básicos Diários",
      description: "Técnicas essenciais para o manuseio, limpeza e conservação do seu bebê reborn no dia a dia.",
      icon: Camera
    },
    {
      title: "Cuidados Especiais",
      description: "Procedimentos especiais para situações específicas, como viagens, exposição solar e armazenamento.",
      icon: Book
    },
    {
      title: "Roupas e Acessórios",
      description: "Guia completo sobre vestuário, calçados e acessórios adequados para seu bebê reborn.",
      icon: Heart
    },
    {
      title: "Restauração e Reparos",
      description: "Técnicas básicas para pequenos reparos e como proceder em caso de danos mais sérios.",
      icon: Camera
    }
  ];

  return (
    <section id="conteudo" className="section-padding bg-reborn-50">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-reborn-800 font-libre mb-4">
            O que você vai encontrar
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nosso e-book é organizado em capítulos detalhados que abordam todos os aspectos do cuidado com seu bebê reborn, 
            tornando o aprendizado simples e completo.
          </p>
          <div className="h-1 w-24 bg-reborn-400 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <Card key={index} className="border-reborn-200 shadow-md hover:shadow-xl transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="bg-reborn-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <chapter.icon className="text-reborn-600" />
                </div>
                <h3 className="text-xl font-bold text-reborn-800 mb-3">{chapter.title}</h3>
                <p className="text-gray-600">{chapter.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-reborn-700 font-semibold mb-2">E muito mais conteúdo exclusivo!</p>
          <p className="text-gray-600">
            Incluindo entrevistas com especialistas, dicas especiais e bônus exclusivos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
