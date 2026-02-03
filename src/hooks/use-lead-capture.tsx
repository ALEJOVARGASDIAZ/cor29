import { supabase } from "@/integrations/supabase/client";
import { trackLeadSubmit, trackWhatsAppClick } from "@/lib/gtm";

interface LeadData {
  nombre: string;
  whatsapp: string;
  mensaje?: string;
  origen?: string;
  planName?: string;
}

export const saveLead = async (data: LeadData): Promise<boolean> => {
  try {
    const { error } = await supabase.from("leads").insert({
      nombre: data.nombre.trim(),
      whatsapp: data.whatsapp.trim(),
      mensaje: data.mensaje?.trim() || null,
      origen: data.origen || "formulario",
    });

    if (error) {
      console.error("Error saving lead:", error);
      return false;
    }
    
    // Track lead submission
    trackLeadSubmit({
      origen: data.origen || "formulario",
      planName: data.planName,
    });
    
    return true;
  } catch (err) {
    console.error("Error saving lead:", err);
    return false;
  }
};

export const openWhatsAppWithMessage = (nombre: string, whatsapp: string, mensaje?: string, planName?: string) => {
  let text = `Hola, soy ${nombre.trim()}.`;
  
  if (planName) {
    text += `\n\nEstoy interesado en el ${planName} de COR29.`;
  }
  
  if (mensaje?.trim()) {
    text += `\n\n${mensaje.trim()}`;
  }
  
  text += `\n\nMi WhatsApp: ${whatsapp.trim()}`;
  
  // Track WhatsApp click
  trackWhatsAppClick("lead_form", planName);
  
  const whatsappUrl = `https://wa.me/573174379260?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
};
