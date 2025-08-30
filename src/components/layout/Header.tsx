import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            EventDecor
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/photozones" className="text-foreground hover:text-primary transition-colors">
              Фотозоны
            </Link>
            <Link to="/decorations" className="text-foreground hover:text-primary transition-colors">
              Декорации
            </Link>
            <Link to="/props" className="text-foreground hover:text-primary transition-colors">
              Бутафория
            </Link>
            <Link to="/stands" className="text-foreground hover:text-primary transition-colors">
              Стенды
            </Link>
            <Link to="/set-design" className="text-foreground hover:text-primary transition-colors">
              Сет-дизайн
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button variant="hero" size="sm">
              Получить смету
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;