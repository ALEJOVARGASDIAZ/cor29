import { useState } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { saveLead, openWhatsAppWithMessage } from "@/hooks/use-lead-capture";

interface WhatsAppLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string;
  origen?: string;
}

const WhatsAppLeadModal = ({ isOpen, onClose, planName, origen = "whatsapp-cta" }: WhatsAppLeadModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save lead to database
    await saveLead({
      nombre: formData.nombre,
      whatsapp: formData.whatsapp,
      mensaje: planName ? `Interesado en ${planName}` : undefined,
      origen,
    });

    // Open WhatsApp
    openWhatsAppWithMessage(formData.nombre, formData.whatsapp, undefined, planName);

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se abrirá una nueva ventana para continuar la conversación.",
    });

    setFormData({ nombre: "", whatsapp: "" });
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
            Contáctanos por WhatsApp
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="modal-nombre">Nombre *</Label>
            <Input
              id="modal-nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="bg-muted border-border focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-whatsapp">WhatsApp *</Label>
            <Input
              id="modal-whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="+57 317 437 9260"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="bg-muted border-border focus:border-primary"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Redirigiendo..."
            ) : (
              <>
                Continuar a WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al continuar, te redirigiremos a WhatsApp para chatear con nosotros.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppLeadModal;
