import { Twitter, Send, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Logo size="md" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The coin that assumes itself into existence. Born from imagination, 
              manifested on Solana, powered by the Law of Assumption.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-primary mb-4">Community</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Pump.fun Chart
              </a>
              <a href="https://telegram.org/" className="block text-muted-foreground hover:text-secondary transition-colors text-sm">
                Telegram Group
              </a>
              <a href="https://x.com/" className="block text-muted-foreground hover:text-mystical transition-colors text-sm">
                Twitter/X
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Meme Gallery
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-primary mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <Send className="w-5 h-5 text-secondary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-mystical/20 flex items-center justify-center hover:bg-mystical/30 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-mystical" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Join the conscious community
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 $NEV Coin. All assumptions reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground">Built on</span>
              <span className="text-secondary font-semibold">Solana</span>
              <span className="text-muted-foreground">via</span>
              <span className="text-primary font-semibold">Pump.fun</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
            <p className="text-sm text-muted-foreground italic">
              "Imagination is the beginning of creation. You imagine what you desire, 
              you will what you imagine, and at last, you create what you will." - Neville Goddard
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
