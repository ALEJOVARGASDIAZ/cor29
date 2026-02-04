import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface ServicePlansProps {
  title: string;
  subtitle: string;
  plans: Plan[];
  onSelectPlan: (planName: string) => void;
}

const ServicePlans = ({ title, subtitle, plans, onSelectPlan }: ServicePlansProps) => {
  return (
    <section className="section-padding section-darker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-6 rounded-2xl border transition-all ${
                plan.highlighted 
                  ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 scale-105" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}
              
              <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold gradient-text mb-1">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className={plan.highlighted ? "btn-primary-gradient w-full" : "w-full"}
                onClick={() => onSelectPlan(plan.name)}
              >
                Comenzar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
