import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const highlights = [
    "Contabilidad 100% online",
    "Asesoría legal incluida",
    "Gestión de nómina digital",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-background to-blue-950/30" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-foreground/90 text-sm font-medium">
              Más de 500 empresarios confían en nosotros
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Contabilidad y gestión empresarial{" "}
            <span className="gradient-text">100% online</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Simplificamos la gestión de tu negocio con soluciones modernas, 
            cercanas y confiables. Somos tu aceleradora integral para crecer 
            con tranquilidad.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
              >
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto">
              <Button 
                size="lg" 
                className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl"
              >
                Agenda tu asesoría gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#planes">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border bg-card/50 text-foreground hover:bg-card hover:border-primary/50 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
              >
                Ver planes y precios
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
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
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm">4.9/5 satisfacción</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;