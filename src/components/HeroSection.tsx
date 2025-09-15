import { Button } from "@/components/ui/button";
import nevilleLaserEyes from "@/assets/neville-laser-eyes.jpg";
import { Sparkles, Zap, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cosmic-grain">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Cosmic Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl float" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/20 blur-2xl float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-20 w-24 h-24 rounded-full bg-mystical/20 blur-xl float" style={{ animationDelay: "4s" }} />
      
      {/* Concentric Circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full border border-primary/20 cosmic-rotate" />
        <div className="absolute w-80 h-80 rounded-full border border-secondary/15 cosmic-rotate" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
        <div className="absolute w-64 h-64 rounded-full border border-mystical/10 cosmic-rotate" style={{ animationDuration: "40s" }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Hero Content */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={nevilleLaserEyes} 
              alt="Neville Goddard with laser eyes" 
              className="w-32 h-32 rounded-full border-4 border-primary/50 shadow-glow-pink float"
            />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-6xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                  $NEV
                </span>
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div className="text-2xl font-bold text-mystical">NEVILLE COIN</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              THE LAW OF ASSUMPTION
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span className="text-primary font-semibold">IMAGINE. ASSUME. $NEV.</span>
            <br />
            The coin that assumes itself into existence.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="cta" size="xl" className="min-w-64">
            <Zap className="w-6 h-6 mr-2" />
            Assume Your Bag Now
          </Button>
          <Button variant="outline" size="lg">
            <Eye className="w-5 h-5 mr-2" />
            View on Pump.fun
          </Button>
        </div>

        {/* Taglines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
            <h3 className="text-lg font-bold text-primary mb-2">Coin of Conscious Creation</h3>
            <p className="text-sm text-muted-foreground">Manifested through pure imagination</p>
          </div>
          <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-secondary/20">
            <h3 className="text-lg font-bold text-secondary mb-2">From Thought to Blockchain</h3>
            <p className="text-sm text-muted-foreground">Where dreams meet DeFi reality</p>
          </div>
          <div className="p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-mystical/20">
            <h3 className="text-lg font-bold text-mystical mb-2">Community of Creators</h3>
            <p className="text-sm text-muted-foreground">United by the power of assumption</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;