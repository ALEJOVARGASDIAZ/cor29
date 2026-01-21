import corLogo from "@/assets/cor-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & description */}
          <div className="md:col-span-2">
            <img src={corLogo} alt="COR 2.9" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/70 max-w-md leading-relaxed">
              Contabilidad y gestión empresarial 100% online. Simplificamos la 
              gestión de tu negocio con soluciones modernas, cercanas y confiables.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#servicios" className="hover:text-background transition-colors">Planes Contables</a></li>
              <li><a href="#servicios" className="hover:text-background transition-colors">Gestión de Nómina</a></li>
              <li><a href="#servicios" className="hover:text-background transition-colors">Asesoría Legal</a></li>
              <li><a href="#servicios" className="hover:text-background transition-colors">Seguridad y Salud</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a 
                  href="https://wa.me/573001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  WhatsApp: +57 300 123 4567
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hola@cor29.com"
                  className="hover:text-background transition-colors"
                >
                  hola@cor29.com
                </a>
              </li>
              <li>100% Online - Colombia</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} COR 2.9. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-background/50 text-sm">
            <a href="#" className="hover:text-background transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
