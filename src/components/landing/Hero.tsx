import { ArrowRight, CheckCircle, MessageCircle, Clock, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick } from "@/lib/gtm";
import { useABTest, HERO_VARIANTS, CTA_VARIANTS } from "@/hooks/use-ab-test";

const Hero = () => {
  const { heroVariant, ctaVariant } = useABTest();
  const heroContent = HERO_VARIANTS[heroVariant];
  const ctaContent = CTA_VARIANTS[ctaVariant];

  const highlights = [
    "Contabilidad 100% online",
    "Software incluido",
    "Soporte en menos de 3 horas",
  ];

  const handleScheduleClick = () => {
    trackScheduleClick("hero");
    trackCTAClick(ctaContent.primary, "hero");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("hero_cta");
    window.open(
      "https://wa.me/573174379260?text=Estoy%20interesado%20en%20los%20planes%20de%20COR29",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative flex items-center pt-24 pb-12 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with gradient - optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-background to-blue-950/30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge with trust signal */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-foreground/90 text-sm font-medium">
              {heroContent.badge}
            </span>
          </div>

          {/* Headline - LCP optimized */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            {heroContent.headline}{" "}
            <span className="gradient-text">{heroContent.headlineHighlight}</span>
          </h1>

          {/* Subheadline with value proposition */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
            {heroContent.subheadline}
          </p>

          {/* Differentiator callout */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-lg px-4 py-2 mb-8">
            <Shield className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-foreground font-semibold text-sm">
              {heroContent.differentiator}
            </span>
          </div>

          {/* Highlights with icons */}
          <ul className="flex flex-wrap gap-4 mb-8" aria-label="Beneficios principales">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
              >
                <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs - A/B tested */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href="#contacto" onClick={handleScheduleClick}>
              <Button 
                size="lg" 
                className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto min-h-[56px]"
              >
                {ctaContent.primary}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="border-2 border-border bg-card/50 text-foreground hover:bg-card hover:border-primary/50 font-semibold text-lg px-8 py-6 rounded-xl min-h-[56px]"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" aria-hidden="true" />
              {ctaContent.secondary}
            </Button>
          </div>

          {/* Microcopy de confianza */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Respuesta en menos de 3 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Atendemos en toda Colombia</span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm">+500 clientes activos</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-yellow-400" aria-label="5 estrellas">★★★★★</span>
              <span className="text-sm">4.9/5 satisfacción</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" aria-hidden="true" />
    </section>
  );
};

export default Hero;