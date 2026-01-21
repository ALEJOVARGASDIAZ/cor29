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
  const accountingPlans = [
    {
      name: "Emprendedor",
      price: "$199.900",
      period: "/mes",
      description: "Ventas o compras mensuales hasta",
      limit: "$9.000.000",
    },
    {
      name: "PYME",
      price: "$352.700",
      period: "/mes",
      description: "Ventas o compras mensuales hasta",
      limit: "$19.000.000",
    },
    {
      name: "Pro",
      price: "$647.900",
      period: "/mes",
      description: "Ventas o compras mensuales hasta",
      limit: "$39.000.000",
    },
    {
      name: "Senior",
      price: "$987.200",
      period: "/mes",
      description: "Ventas o compras mensuales hasta",
      limit: "$100.000.000",
    },
    {
      name: "Enterprise",
      price: "1%",
      period: " sobre ventas",
      description: "Ventas y compras mensuales superiores a",
      limit: "$100.000.001",
    },
  ];

  const services = [
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
    },
    {
      icon: ShieldCheck,
      title: "Seguridad y Salud (SG-SST)",
      description: "Cuida a tu equipo y cumple las normativas, con asesoría experta y humana.",
      features: [
        "Sistema SG-SST completo",
        "Matriz de riesgos",
        "Capacitaciones",
        "Documentación legal",
      ],
    },
  ];

  return (
    <section id="planes" className="section-padding section-darker">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Planes Contables
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elige el plan que{" "}
            <span className="gradient-text">impulse tu negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Planes de contabilidad adaptados al tamaño y volumen de tu empresa. 
            Incluyen todo lo que necesitas para crecer sin preocupaciones.
          </p>
        </div>

        {/* Accounting Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-20">
          {accountingPlans.map((plan) => (
            <div
              key={plan.name}
              className="card-pricing group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Plan {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl md:text-3xl font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-1">
                  {plan.description}
                </p>
                <span className="text-lg font-semibold text-accent">
                  {plan.limit}
                </span>
              </div>

              <a href="#contacto" className="block">
                <Button 
                  variant="outline"
                  className="w-full border-border hover:border-primary/50 hover:bg-card"
                  size="sm"
                >
                  Comenzar
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Payroll Section */}
        <div id="nomina" className="mb-20">
          <div className="card-pricing-featured max-w-2xl mx-auto p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                <Users className="h-10 w-10 text-primary" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Gestión de Nómina
                </h3>
                <p className="text-muted-foreground mb-4">
                  Manejo completo de nómina y seguridad social. Incluye liquidación, 
                  PILAS, nómina electrónica DIAN, contratos laborales y afiliaciones.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div>
                    <span className="text-3xl md:text-4xl font-bold gradient-text">
                      $89.900 COP
                    </span>
                    <span className="text-muted-foreground">/mes por empleado</span>
                  </div>
                  <a href="#contacto">
                    <Button className="btn-primary-gradient">
                      Solicitar información
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Services */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Servicios adicionales
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Soluciones integrales para tu empresa
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-elevated group hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
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
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="block">
                <Button 
                  variant="outline"
                  className="w-full border-border hover:border-primary/50 hover:bg-card"
                >
                  Solicitar información
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90" />
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
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
      </div>
    </section>
  );
};

export default Services;
