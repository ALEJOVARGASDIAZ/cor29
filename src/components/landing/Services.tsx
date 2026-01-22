import { 
  Calculator, 
  Users, 
  Scale, 
  ShieldCheck,
  ArrowRight,
  Check,
  FileText,
  FileBadge,
  ClipboardCheck,
  BarChart3,
  Building2,
  Headphones,
  Receipt,
  RefreshCw,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/hooks/use-scroll-animation";

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

  const planFeatures = [
    { icon: FileText, text: "Contabilización de facturas de compra" },
    { icon: FileBadge, text: "Emisión de Documento soporte Electrónico" },
    { icon: ClipboardCheck, text: "Auditoría y pre-contabilización de tu ciclo contable" },
    { icon: BarChart3, text: "Preparación de Estados Financieros completos" },
    { icon: Building2, text: "Renovaciones en Cámara de Comercio" },
    { icon: Headphones, text: "Contador público virtual a tu disposición" },
    { icon: Receipt, text: "Preparación y presentación de impuestos Nacionales y Distritales, incluyendo los mensuales, bimestrales, cuatrimestrales y anuales" },
    { icon: RefreshCw, text: "Renovaciones, reformas y modificaciones en Cámara de Comercio y entidades tributarias" },
    { icon: Monitor, text: "Software contable con facturación electrónica" },
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Planes Contables
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elige el plan que{" "}
            <span className="gradient-text">impulse tu negocio</span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Los mejores planes del mercado desde tan solo{" "}
            <span className="gradient-text">$199.900</span> con software contable incluido.
          </p>
          <p className="text-lg text-muted-foreground">
            Planes de contabilidad adaptados a las ventas. Incluyen todo lo que necesitas para crecer sin preocupaciones.
          </p>
        </div>

        {/* Plan Features - What's Included */}
        <div className="card-elevated mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
            Todos nuestros planes incluyen:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {planFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-foreground leading-relaxed">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accounting Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-20">
          {accountingPlans.map((plan, index) => (
            <AnimatedCard key={plan.name} index={index}>
              <div className="card-pricing group hover:translate-y-[-4px] transition-all duration-300 h-full">
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

              <a 
                href={`https://wa.me/573174379260?text=${encodeURIComponent(`Hola, estoy interesado en el Plan ${plan.name} de COR29`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline"
                  className="w-full border-border hover:border-primary/50 hover:bg-card"
                  size="sm"
                >
                  Comenzar
                </Button>
              </a>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* COR29 People - Payroll Section */}
        <div id="nomina" className="mb-20">
          <div className="text-center mb-8">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Gestión de Nómina y Talento Humano
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              🧑‍🤝‍🧑 COR29 People
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Servicio especializado en la gestión integral de nómina y talento humano, diseñado para que las empresas cumplan correctamente con la normatividad laboral y puedan enfocarse en hacer crecer su negocio con tranquilidad.
            </p>
          </div>
          
          <div className="card-pricing-featured max-w-5xl mx-auto p-8 md:p-10">
            <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <span className="text-3xl md:text-4xl font-bold gradient-text">
                      $89.900 COP
                    </span>
                    <p className="text-muted-foreground">/mes por empleado</p>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/573174379260?text=${encodeURIComponent('Hola, estoy interesado en COR29 People')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-primary-gradient w-full" size="lg">
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                  <h4 className="text-sm font-bold text-accent mb-2">✨ Beneficio Principal</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Delega toda la gestión de nómina y talento humano, reduce riesgos legales y administrativos, y opera con paz, orden y tranquilidad.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Receipt className="h-4 w-4" />
                      Nómina Electrónica
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Cálculo correcto de salarios, horas extras, deducciones, provisiones y emisión de la nómina electrónica cumpliendo con todos los requisitos legales ante la DIAN.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Seguridad Social y Parafiscales
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elaboración de planillas, validación de aportes y acompañamiento en el pago oportuno a EPS, ARL, pensión y cajas de compensación.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Contratos y Gestión Jurídica
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Elaboración, revisión y seguimiento de contratos laborales, así como apoyo en temas jurídicos laborales recurrentes.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Headphones className="h-4 w-4" />
                      Soporte Mensual
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Envío de comprobantes de nómina, soporte a empleados, manejo de incapacidades, licencias, novedades y certificados laborales.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Asesoría en Gestión de Personal
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Acompañamiento en procesos de contratación, desvinculación y buenas prácticas laborales para evitar riesgos legales.
                    </p>
                  </div>
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

              <a 
                href={`https://wa.me/573174379260?text=${encodeURIComponent(`Hola, estoy interesado en el servicio de ${service.title} de COR29`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
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
