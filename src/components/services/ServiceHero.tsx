import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  badge: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleHighlight: string;
  description: string;
  priceFrom?: string;
  priceLabel?: string;
  primaryCTA: string;
  secondaryCTA: string;
  onPrimaryCTA: () => void;
  onSecondaryCTA: () => void;
  stats?: { value: string; label: string }[];
}

const ServiceHero = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  description,
  priceFrom,
  priceLabel,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  stats,
}: ServiceHeroProps) => {
  return (
    <section className="relative pt-28 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-background to-blue-950/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            {BadgeIcon && <BadgeIcon className="h-4 w-4 text-accent" />}
            {!BadgeIcon && <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />}
            <span className="text-foreground/90 text-sm font-medium">
              {badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {title}{" "}
            <span className="gradient-text">{titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {priceFrom && (
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-6 mb-8 inline-block">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold gradient-text">{priceFrom}</span>
                {priceLabel && (
                  <span className="text-muted-foreground text-sm">{priceLabel}</span>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              size="lg" 
              className="btn-primary-gradient font-bold text-lg px-8 py-6 rounded-xl min-h-[56px]"
              onClick={onPrimaryCTA}
            >
              {primaryCTA}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onSecondaryCTA}
              className="border-2 border-border bg-card/50 text-foreground hover:bg-card hover:border-primary/50 font-semibold text-lg px-8 py-6 rounded-xl min-h-[56px]"
            >
              <MessageCircle className="mr-2 h-5 w-5 text-[#25D366]" />
              {secondaryCTA}
            </Button>
          </div>

          {stats && stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
