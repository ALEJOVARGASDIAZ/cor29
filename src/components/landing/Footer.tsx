import { Link } from "react-router-dom";
import corLogo from "@/assets/cor-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Contabilidad", href: "/contabilidad" },
    { label: "Nómina y Talento Humano", href: "/nomina" },
    { label: "SG-SST", href: "/sgsst" },
  ];

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: "/#beneficios" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Contacto", href: "/#contacto" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & description */}
          <div className="md:col-span-1">
            <Link to="/">
              <img src={corLogo} alt="COR29" className="h-14 w-auto mb-4" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Contabilidad y gestión empresarial 100% online. Simplificamos la 
              gestión de tu negocio con soluciones modernas, cercanas y confiables.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    to={service.href} 
                    className="hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link 
                      to={link.href} 
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="https://wa.me/573174379260?text=Estoy%20interesado%20en%20los%20planes%20de%20COR29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +57 317 437 9260
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hola@cor29.com"
                  className="hover:text-primary transition-colors"
                >
                  hola@cor29.com
                </a>
              </li>
              <li className="text-sm">100% Online - Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} COR29. Todos los derechos reservados.
            </p>
            <Link 
              to="/admin/login" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Admin
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
