import corLogo from "@/assets/cor-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <img src={corLogo} alt="COR29" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Contabilidad y gestión empresarial 100% online. Simplificamos la 
              gestión de tu negocio con soluciones modernas, cercanas y confiables.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#planes" className="hover:text-primary transition-colors">Planes Contables</a></li>
              <li><a href="#nomina" className="hover:text-primary transition-colors">Gestión de Nómina</a></li>
              <li><a href="#planes" className="hover:text-primary transition-colors">Asesoría Legal</a></li>
              <li><a href="#planes" className="hover:text-primary transition-colors">Seguridad y Salud</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="https://wa.me/573001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp: +57 300 123 4567
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
              <li>100% Online - Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} COR29. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-muted-foreground text-sm">
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