import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceBenefitsProps {
  title: string;
  benefits: string[];
  ctaText: string;
  onCTA: () => void;
}

const ServiceBenefits = ({ title, benefits, ctaText, onCTA }: ServiceBenefitsProps) => {
  return (
    <section className="section-padding section-darker">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {benefits.map((benefit) => (
            <div 
              key={benefit} 
              className="flex items-center gap-3 p-4 bg-card/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-accent" />
              </div>
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="btn-primary-gradient font-bold text-lg px-10 py-6 rounded-xl"
            onClick={onCTA}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
