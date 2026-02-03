import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick } from "@/lib/gtm";

const Hero = () => {
  const highlights = [
    "Contabilidad 100% online",
    "Asesoría legal incluida",
    "Gestión de nómina digital",
  ];

  const handleScheduleClick = () => {
    trackScheduleClick("hero");
    trackCTAClick("Agenda tu asesoría gratuita", "hero");
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
      {/* Background with gradient - reduced for performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-background to-blue-950/30" />
        {/* Single decorative orb for performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-foreground/90 text-sm font-medium">
              Más de 500 empresarios confían en nosotros
            </span>
          </div>

          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
          >
            Contabilidad y gestión empresarial{" "}
            <span className="gradient-text">100% online en Colombia</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Con más de 14 años de experiencia, simplificamos tu gestión empresarial 
            con un equipo 100% exclusivo para tu negocio. Planes desde $199.900/mes.
          </p>

          {/* Highlights */}
          <ul className="flex flex-wrap gap-4 mb-10" aria-label="Beneficios principales">
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

          {/* CTAs - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" onClick={handleScheduleClick}>
              <Button 
                size="lg" 
                className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl w-full sm:w-auto min-h-[56px]"
              >
                Agenda tu asesoría gratuita
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
              WhatsApp
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 text-muted-foreground">
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