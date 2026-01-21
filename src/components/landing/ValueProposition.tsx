import { ArrowRight, Rocket, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValueProposition = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Nuestra promesa
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              COR 2.9 es una{" "}
              <span className="gradient-text">aceleradora integral</span>{" "}
              para empresarios y emprendedores
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acompañamos tu crecimiento desde lo estratégico y operativo: 
              Contabilidad, asesoría legal, gestión de nómina, SST y 
              acompañamiento empresarial. ¡Impulsa tu negocio con propósito!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Impulsa tu crecimiento
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Estrategias personalizadas para escalar tu negocio de forma sostenible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Enfoque en resultados
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Métricas claras y objetivos medibles para tu empresa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Acompañamiento cercano
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Un equipo humano que entiende tus retos y celebra tus logros.
                  </p>
                </div>
              </div>
            </div>

            <a href="#contacto">
              <Button className="btn-primary-gradient text-lg">
                Descubre cómo podemos ayudarte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent rounded-3xl p-8 md:p-12">
              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="card-elevated text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    500+
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Empresarios confían en nosotros
                  </p>
                </div>
                <div className="card-elevated text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    10+
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Años de experiencia
                  </p>
                </div>
                <div className="card-elevated text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    99%
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Clientes satisfechos
                  </p>
                </div>
                <div className="card-elevated text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    24h
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Tiempo de respuesta
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
