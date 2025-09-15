import { Card, CardContent } from "@/components/ui/card";
import { Brain, Coins, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              What is $NEV?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            $NEV isn't just a coin. It's a movement of imagination. Just like Neville said – 
            <span className="text-primary font-semibold"> assume it, and it hardens into fact</span>. 
            That's exactly how $NEV was born.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card border-primary/20 shadow-glow-pink">
            <CardContent className="p-8 text-center">
              <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary mb-4">The Vision</h3>
              <p className="text-muted-foreground">
                Born from the mystical teachings of Neville Goddard, $NEV represents the bridge 
                between consciousness and cryptocurrency.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-secondary/20 shadow-glow-blue">
            <CardContent className="p-8 text-center">
              <Coins className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-4">The Manifestation</h3>
              <p className="text-muted-foreground">
                Through collective imagination and the Law of Assumption, $NEV materializes 
                on Solana blockchain via Pump.fun.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-mystical/20 shadow-glow-purple">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-mystical mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mystical mb-4">The Community</h3>
              <p className="text-muted-foreground">
                A vibrant community of conscious creators, meme enthusiasts, and Neville 
                disciples united by shared assumptions.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-cosmic">
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 text-primary italic">
              "Imagination creates reality. And $NEV? It's pure imagination made manifest."
            </blockquote>
            <cite className="text-lg text-muted-foreground">— The $NEV Manifesto</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;