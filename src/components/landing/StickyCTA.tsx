import { useState, useEffect } from "react";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { trackWhatsAppClick, trackPhoneClick, trackScheduleClick } from "@/lib/gtm";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("sticky_cta_mobile");
    window.open(
      "https://wa.me/573174379260?text=Estoy%20interesado%20en%20los%20planes%20de%20COR29",
      "_blank"
    );
  };

  const handleCallClick = () => {
    trackPhoneClick("sticky_cta_mobile");
    window.location.href = "tel:+573174379260";
  };

  const handleScheduleClick = () => {
    trackScheduleClick("sticky_cta_mobile");
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border safe-area-inset-bottom">
      <div className="flex items-stretch divide-x divide-border">
        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 text-foreground hover:bg-muted/50 active:bg-muted transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          <span className="text-xs font-medium">WhatsApp</span>
        </button>

        {/* Llamar */}
        <button
          onClick={handleCallClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 text-foreground hover:bg-muted/50 active:bg-muted transition-colors"
          aria-label="Llamar ahora"
        >
          <Phone className="h-5 w-5 text-primary" />
          <span className="text-xs font-medium">Llamar</span>
        </button>

        {/* Agendar */}
        <button
          onClick={handleScheduleClick}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 bg-gradient-to-r from-primary to-secondary text-white"
          aria-label="Agendar asesoría"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-bold">Agendar</span>
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
