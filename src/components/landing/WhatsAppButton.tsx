import { useState } from "react";
import { MessageCircle } from "lucide-react";
import WhatsAppLeadModal from "./WhatsAppLeadModal";

const WhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg whatsapp-float transition-colors"
        aria-label="Contáctanos por WhatsApp"
      >
        <MessageCircle className="h-8 w-8 text-white fill-white" />
      </button>

      <WhatsAppLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        origen="whatsapp-flotante"
      />
    </>
  );
};

export default WhatsAppButton;
