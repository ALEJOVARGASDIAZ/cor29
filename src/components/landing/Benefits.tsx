import { 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  Headphones,
  Sparkles 
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorra tiempo",
      description: "Automatizamos procesos para que te enfoques en hacer crecer tu negocio.",
    },
    {
      icon: Shield,
      title: "Tranquilidad total",
      description: "Cumple con todas tus obligaciones fiscales sin estrés ni sorpresas.",
    },
    {
      icon: TrendingUp,
      title: "Crece con estrategia",
      description: "Acompañamiento empresarial para tomar decisiones informadas.",
    },
    {
      icon: Users,
      title: "Equipo integral",
      description: "Contadores, abogados y asesores trabajando por tu éxito.",
    },
    {
      icon: Headphones,
      title: "Soporte cercano",
      description: "Respuestas rápidas y claras cuando las necesitas.",
    },
    {
      icon: Sparkles,
      title: "100% digital",
      description: "Todo online, sin filas, sin papeleos, desde cualquier lugar.",
    },
  ];

  return (
    <section id="beneficios" className="section-padding bg-accent/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            ¿Por qué COR 2.9?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            La contabilidad que tu negocio{" "}
            <span className="gradient-text">merece</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            En COR 2.9 creemos en una contabilidad cercana, eficiente y totalmente 
            digital. Somos un equipo integral, profesional y comprometido con tu 
            negocio para que crezca con tranquilidad.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="card-elevated group hover:translate-y-[-4px] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
