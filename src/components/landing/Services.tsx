import { 
  Calculator, 
  Users, 
  Scale, 
  ShieldCheck,
  ArrowRight,
  Check 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Planes Contables",
      description: "Organiza tu contabilidad sin estrés con nuestros planes hechos a medida.",
      features: [
        "Contabilidad mensual completa",
        "Declaración de impuestos",
        "Estados financieros",
        "Asesoría fiscal permanente",
      ],
      popular: true,
    },
    {
      icon: Users,
      title: "Gestión de Nómina",
      description: "Paga, calcula y gestiona tu equipo de forma simple, digital y segura.",
      features: [
        "Liquidación de nómina",
        "Afiliaciones a seguridad social",
        "Prestaciones sociales",
        "Reportes mensuales",
      ],
      popular: false,
    },
    {
      icon: Scale,
      title: "Asesoría Legal",
      description: "Respaldo legal claro, rápido y alineado con las necesidades de tu negocio.",
      features: [
        "Contratos comerciales",
        "Constitución de empresas",
        "Protección de datos",
        "Consultas legales",
      ],
      popular: false,
    },
    {
      icon: ShieldCheck,
      title: "Seguridad y Salud",
      description: "Cuida a tu equipo y cumple las normativas, con asesoría experta y humana.",
      features: [
        "Sistema SG-SST",
        "Matriz de riesgos",
        "Capacitaciones",
        "Documentación legal",
      ],
      popular: false,
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-accent/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Planes hechos para{" "}
            <span className="gradient-text">crecer contigo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Elige el plan que se ajusta a las necesidades de tu negocio. Desde 
            contabilidad hasta gestión legal, nómina y SST, tenemos soluciones 
            100% online para acompañarte en cada etapa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className={`card-elevated relative group hover:translate-y-[-4px] transition-all duration-300 ${
                service.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="block">
                <Button 
                  variant={service.popular ? "default" : "outline"}
                  className={`w-full ${service.popular ? "btn-primary-gradient" : ""}`}
                >
                  Solicitar información
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿No sabes qué plan elegir?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Agenda una asesoría gratuita y te ayudamos a encontrar la mejor 
            solución para tu negocio.
          </p>
          <a href="#contacto">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-xl"
            >
              Quiero mi diagnóstico gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
