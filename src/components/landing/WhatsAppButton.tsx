import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573174379260?text=Estoy%20interesado%20en%20los%20planes%20de%20COR29"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg whatsapp-float transition-colors"
      aria-label="Contáctanos por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
