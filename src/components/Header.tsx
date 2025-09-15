import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="sm" />
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium">
              How It Works
            </a>
            <a href="#community" className="text-muted-foreground hover:text-mystical transition-colors text-sm font-medium">
              Community
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button variant="cosmic" size="sm" className="hidden sm:flex">
              Assume Your Bag
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;