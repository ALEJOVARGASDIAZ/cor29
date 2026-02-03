import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { saveLead, openWhatsAppWithMessage } from "@/hooks/use-lead-capture";
import { trackPhoneClick, trackCTAClick } from "@/lib/gtm";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track CTA click
    trackCTAClick("Solicita asesoría ahora", "contact_form");

    // Save lead to database
    await saveLead({
      nombre: formData.nombre,
      whatsapp: formData.whatsapp,
      mensaje: formData.mensaje,
      origen: "formulario-contacto",
    });

    // Open WhatsApp
    openWhatsAppWithMessage(formData.nombre, formData.whatsapp, formData.mensaje);

    toast({
      title: "¡Redirigiendo a WhatsApp!",
      description: "Se abrirá una nueva ventana para continuar la conversación.",
    });

    setFormData({
      nombre: "",
      whatsapp: "",
      mensaje: "",
    });
    setIsSubmitting(false);
  };

  const handlePhoneClick = () => {
    trackPhoneClick("contact_section");
  };

  return (
    <section id="contacto" className="section-padding section-darker" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </span>
            <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              ¿Listo para llevar tu empresa al{" "}
              <span className="gradient-text">siguiente nivel?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Escríbenos y empezamos hoy. Agenda tu asesoría gratuita y descubre 
              cómo podemos ayudarte a crecer tu negocio de forma simple y digital.
            </p>

            {/* Contact info */}
            <address className="space-y-4 mb-8 not-italic">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">WhatsApp</div>
                  <a
                    href="https://wa.me/573174379260?text=Estoy%20interesado%20en%20los%20planes%20de%20COR29"
                    onClick={handlePhoneClick}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +57 317 437 9260
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <a
                    href="mailto:hola@cor29.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hola@cor29.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Ubicación</div>
                  <span className="text-muted-foreground">
                    100% Online - Colombia
                  </span>
                </div>
              </div>
            </address>
          </div>

          {/* Form */}
          <div className="card-elevated">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Agenda tu asesoría gratuita
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="bg-muted border-border focus:border-primary min-h-[48px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+57 317 437 9260"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="bg-muted border-border focus:border-primary min-h-[48px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">¿En qué te podemos ayudar? (opcional)</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="bg-muted border-border focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="btn-primary-gradient w-full text-lg py-6 min-h-[56px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Solicita asesoría ahora
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Sin compromiso. Respuesta en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;