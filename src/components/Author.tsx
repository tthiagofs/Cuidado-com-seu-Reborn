
import { Button } from "@/components/ui/button";

const Author = () => {
  return (
    <section id="autora" className="section-padding bg-white">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-reborn-800 font-libre mb-4">
            Conheça a Autora
          </h2>
          <div className="h-1 w-24 bg-reborn-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Placeholder for author image */}
            <div className="bg-reborn-50 rounded-full w-72 h-72 mx-auto md:ml-auto md:mr-0 flex items-center justify-center border-4 border-reborn-200 shadow-lg overflow-hidden">
              <p className="text-reborn-600 text-lg font-libre italic">Foto da Autora</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-reborn-800 mb-4 font-libre">Maria Silva</h3>
            <p className="text-gray-600 font-medium italic mb-6">
              Especialista em Bebês Reborn há mais de 10 anos
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Com vasta experiência no universo de bebês reborn, Maria Silva se tornou referência 
              nacional no assunto. Sua paixão pelos detalhes e cuidados especiais fez com que suas 
              técnicas se tornassem conhecidas em todo o Brasil.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Neste e-book, ela compartilha todo seu conhecimento adquirido ao longo dos anos, 
              oferecendo dicas exclusivas e técnicas que garantem a longevidade e qualidade 
              dos bebês reborn.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-reborn-100 rounded-lg py-2 px-4">
                <p className="text-reborn-800 font-bold text-4xl">10+</p>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="bg-reborn-100 rounded-lg py-2 px-4">
                <p className="text-reborn-800 font-bold text-4xl">500+</p>
                <p className="text-gray-600">Bebês Criados</p>
              </div>
              <div className="bg-reborn-100 rounded-lg py-2 px-4">
                <p className="text-reborn-800 font-bold text-4xl">3.000+</p>
                <p className="text-gray-600">Alunos Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
