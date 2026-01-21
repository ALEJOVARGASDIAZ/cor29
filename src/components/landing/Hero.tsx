import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Más de 500 empresarios confían en nosotros
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Contabilidad y gestión empresarial{" "}
            <span className="text-cyan-200">100% online</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Simplificamos la gestión de tu negocio con soluciones modernas, 
            cercanas y confiables. Somos tu aceleradora integral para crecer 
            con tranquilidad.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
              >
                <CheckCircle className="h-5 w-5 text-cyan-300" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Agenda tu asesoría gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
              >
                Ver planes y servicios
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm">+500 clientes activos</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-yellow-300">★★★★★</span>
              <span className="text-sm">4.9/5 satisfacción</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50L48 45.8C96 41.7 192 33.3 288 29.2C384 25 480 25 576 33.3C672 41.7 768 58.3 864 62.5C960 66.7 1056 58.3 1152 50C1248 41.7 1344 33.3 1392 29.2L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
