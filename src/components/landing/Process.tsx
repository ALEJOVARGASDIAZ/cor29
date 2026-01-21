import { MessageSquare, FileSearch, Rocket, ThumbsUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Agenda tu asesoría",
      description: "Cuéntanos sobre tu negocio y tus necesidades actuales.",
    },
    {
      number: "02",
      icon: FileSearch,
      title: "Diagnóstico gratuito",
      description: "Analizamos tu situación y te proponemos la mejor solución.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementación ágil",
      description: "Activamos tu plan en menos de 48 horas, sin complicaciones.",
    },
    {
      number: "04",
      icon: ThumbsUp,
      title: "Acompañamiento continuo",
      description: "Tu equipo COR29 te acompaña en cada paso del camino.",
    },
  ];

  return (
    <section className="section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Cómo funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empezar es{" "}
            <span className="gradient-text">más fácil de lo que crees</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            En solo 4 pasos tendrás tu contabilidad y gestión empresarial 
            completamente organizada.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-secondary to-accent/20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="card-elevated text-center group hover:translate-y-[-4px] transition-all duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm flex items-center justify-center z-10">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-5 mt-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;