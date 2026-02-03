import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick, trackScheduleClick, trackCTAClick } from "@/lib/gtm";

const FinalCTA = () => {
  const handleScheduleClick = () => {
    trackScheduleClick("final_cta");
    trackCTAClick("Quiero mi asesoría sin costo", "final_cta");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("final_cta_section");
  };

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      
      {/* Decorative elements - reduced for performance */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          <span className="text-sm font-medium">
            Asesoría 100% gratuita y sin compromiso
          </span>
        </div>

        <h2 id="final-cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Conecta con nuestro equipo y descubre cómo podemos ayudarte a{" "}
          <span className="text-cyan-300">crecer tu negocio</span>
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Más de 500 empresarios ya dieron el primer paso. Es tu turno de 
          transformar la gestión de tu empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto" onClick={handleScheduleClick}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[56px] w-full sm:w-auto"
            >
              Quiero mi asesoría sin costo
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </a>
          <a
            href="https://wa.me/573174379260?text=Estoy%20interesado%20en%20los%20planes%20de%20COR29"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold text-lg px-10 py-7 rounded-xl backdrop-blur-sm min-h-[56px] w-full sm:w-auto"
            >
              Escríbenos por WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;