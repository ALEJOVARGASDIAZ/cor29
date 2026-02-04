import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Calculator, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import corLogo from "@/assets/cor-logo-white.png";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Contabilidad",
    href: "/contabilidad",
    description: "Contabilidad 100% online con software y contador dedicado.",
    icon: Calculator,
  },
  {
    title: "Nómina y Talento Humano",
    href: "/nomina",
    description: "Gestión integral de nómina electrónica y talento humano.",
    icon: Users,
  },
  {
    title: "SG-SST",
    href: "/sgsst",
    description: "Sistema de Gestión de Seguridad y Salud en el Trabajo.",
    icon: ShieldCheck,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: isHome ? "#beneficios" : "/#beneficios" },
    { label: "Testimonios", href: isHome ? "#testimonios" : "/#testimonios" },
    { label: "Contacto", href: isHome ? "#contacto" : "/#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={corLogo} 
              alt="COR29" 
              className="h-24 md:h-28 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className={cn(
                "text-muted-foreground hover:text-primary transition-colors font-medium",
                location.pathname === "/" && "text-primary"
              )}
            >
              Inicio
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-primary hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <service.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium leading-none text-foreground">
                                    {service.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href={isHome ? "#contacto" : "/#contacto"}>
              <Button className="btn-primary-gradient">
                Agenda tu asesoría
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className={cn(
                  "text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-card",
                  location.pathname === "/" && "text-primary bg-primary/10"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-card"
                >
                  Servicios
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isServicesOpen && "rotate-180")} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="flex items-center gap-3 py-3 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-card transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <service.icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-3 px-2 rounded-lg hover:bg-card"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a 
                href={isHome ? "#contacto" : "/#contacto"} 
                onClick={() => setIsMenuOpen(false)}
                className="mt-2"
              >
                <Button className="btn-primary-gradient w-full">
                  Agenda tu asesoría
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
