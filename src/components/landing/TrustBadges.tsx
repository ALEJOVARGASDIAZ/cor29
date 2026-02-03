import { Shield, Award, Clock, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Confiable",
      description: "14+ años de experiencia",
    },
    {
      icon: Award,
      title: "Certificados",
      description: "Contadores públicos titulados",
    },
    {
      icon: Clock,
      title: "Respuesta rápida",
      description: "Menos de 3 horas",
    },
    {
      icon: Users,
      title: "+500 clientes",
      description: "Empresarios satisfechos",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <badge.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground text-sm">
                  {badge.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {badge.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
