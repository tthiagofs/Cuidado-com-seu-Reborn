
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual o formato do e-book?",
      answer: "O e-book é disponibilizado em formato PDF, compatível com qualquer dispositivo que possua um leitor de PDF, como smartphones, tablets e computadores."
    },
    {
      question: "Como recebo o e-book após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download do seu e-book. O acesso é imediato e estará disponível por tempo ilimitado."
    },
    {
      question: "O e-book serve para qualquer tipo de bebê reborn?",
      answer: "Sim! O conteúdo abrange técnicas e cuidados aplicáveis a bebês reborn de diferentes materiais e fabricantes, com orientações específicas para cada tipo."
    },
    {
      question: "Posso imprimir o material?",
      answer: "Sim, você pode imprimir o e-book para leitura offline. O arquivo é otimizado para impressão e possui uma versão especial para este fim."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Oferecemos garantia de 7 dias. Se você não ficar satisfeito com o conteúdo, pode solicitar o reembolso integral dentro deste período."
    }
  ];

  return (
    <section className="section-padding bg-reborn-50">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-reborn-800 font-libre mb-4">
            Perguntas Frequentes
          </h2>
          <div className="h-1 w-24 bg-reborn-400 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-reborn-200">
                <AccordionTrigger className="text-lg font-medium text-left text-reborn-800 hover:text-reborn-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-reborn-700 font-medium">
            Ainda tem dúvidas?
          </p>
          <p className="text-gray-600">
            Envie um e-mail para suporte@bebereborn.com.br
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
