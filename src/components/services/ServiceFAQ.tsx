import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title: string;
  faqs: FAQ[];
}

const ServiceFAQ = ({ title, faqs }: ServiceFAQProps) => {
  return (
    <section className="section-padding section-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {title}
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="card-elevated border-border"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary px-6 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceFAQ;
