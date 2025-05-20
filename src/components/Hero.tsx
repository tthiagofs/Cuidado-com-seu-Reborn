
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 hero-gradient">
      <div className="container px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="font-libre text-4xl md:text-5xl lg:text-6xl font-bold text-reborn-900 mb-6">
            Cuidados com seu <span className="text-reborn-600">Bebê Reborn</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            O guia completo para cuidar, conservar e aproveitar ao máximo seu bebê reborn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-reborn-600 hover:bg-reborn-700 text-white rounded-full px-8 py-6 text-lg">
              Quero meu e-book
            </Button>
            <Button variant="outline" className="border-reborn-600 text-reborn-600 hover:bg-reborn-50 rounded-full px-8 py-6 text-lg">
              Saber mais
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Placeholder for baby image */}
          <div className="bg-reborn-100 rounded-3xl h-96 flex items-center justify-center shadow-lg border border-reborn-200">
            <p className="text-reborn-600 text-lg font-libre italic">Imagem do e-book</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
