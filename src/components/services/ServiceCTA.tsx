import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  title: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
  showPhone?: boolean;
  onPhoneCTA?: () => void;
}

const ServiceCTA = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  showPhone,
  onPhoneCTA,
}: ServiceCTAProps) => {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/10 via-card to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl min-h-[56px]"
              onClick={onPrimaryCTA}
            >
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-border bg-card/50 text-foreground hover:bg-card font-semibold text-lg px-8 py-6 rounded-xl min-h-[56px]"
              onClick={onSecondaryCTA}
            >
              <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
              {secondaryCTA}
            </Button>
            {showPhone && onPhoneCTA && (
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border bg-card/50 text-foreground hover:bg-card font-semibold text-lg px-8 py-6 rounded-xl min-h-[56px]"
                onClick={onPhoneCTA}
              >
                <Phone className="mr-2 h-5 w-5 text-primary" />
                Llamar ahora
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
