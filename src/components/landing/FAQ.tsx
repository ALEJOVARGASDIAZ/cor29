import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo funciona el servicio 100% online?",
      answer:
        "Todo se gestiona de forma digital. Nos envías tus documentos por WhatsApp o email, nosotros procesamos todo y te entregamos reportes claros. Tendrás acceso a un panel donde puedes ver tu información contable en tiempo real.",
    },
    {
      question: "¿Cuánto tiempo toma activar mi plan?",
      answer:
        "Una vez confirmes tu plan, en menos de 2 horas tendrás todo listo para empezar. Te asignamos un equipo dedicado y comenzamos a trabajar de inmediato.",
    },
    {
      question: "¿Qué pasa si tengo dudas o necesito ayuda urgente?",
      answer:
        "Tienes acceso directo a tu asesor por WhatsApp. Respondemos en menos de 3 horas hábiles, y para urgencias tenemos línea prioritaria.",
    },
    {
      question: "¿Puedo cambiar de plan si mi negocio crece?",
      answer:
        "¡Por supuesto! Nuestros planes cambian con base en las ventas del mes anterior, lo que significa que puede subir o bajar, todo siempre en pro de tu empresa.",
    },
    {
      question: "¿Trabajan con empresas de cualquier sector?",
      answer:
        "Sí, atendemos micropymes, emprendedores, freelancers y startups de todos los sectores. Personalizamos nuestro servicio según las necesidades específicas de tu industria.",
    },
    {
      question: "¿Qué incluye la asesoría gratuita?",
      answer:
        "En la asesoría gratuita analizamos tu situación actual, identificamos oportunidades de mejora y te proponemos el plan que mejor se adapte a tus necesidades. Sin compromiso.",
    },
  ];

  return (
    <section className="section-padding section-dark">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ¿Tienes{" "}
            <span className="gradient-text">dudas?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Aquí respondemos las preguntas más comunes sobre nuestros servicios.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-elevated border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline px-6 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;