import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MessageCircle, Twitter, Send } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Join the Conscious Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with fellow manifestors, share memes, and watch $NEV assume its destiny together
          </p>
        </div>

        {/* Community Stats & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pump.fun Chart Placeholder */}
          <Card className="bg-gradient-card border-primary/20 shadow-cosmic">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-primary">Live on Pump.fun</h3>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 rounded-lg bg-background-secondary/50 border border-primary/10 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-lg">Real-time $NEV Chart</p>
                  <p className="text-sm text-muted-foreground">Chart widget integration</p>
                </div>
              </div>

              <Button variant="cosmic" className="w-full" size="lg">
                Trade $NEV on Pump.fun
              </Button>
            </CardContent>
          </Card>

          {/* Community Highlights */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-secondary/20 shadow-glow-blue">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                  <h4 className="text-lg font-bold text-secondary">Community Highlights</h4>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-background-secondary/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Just assumed my bag and it manifested! $NEV to the cosmos! 🚀"
                    </p>
                    <span className="text-xs text-primary">@CosmicHodler</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Neville would be proud. This is the way. 👁️✨"
                    </p>
                    <span className="text-xs text-secondary">@AssumptionKing</span>
                  </div>
                  <div className="p-3 rounded-lg bg-background-secondary/50">
                    <p className="text-sm text-muted-foreground italic">
                      "From imagination to Solana. $NEV is the future! 💎"
                    </p>
                    <span className="text-xs text-mystical">@ManifestMemes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Twitter className="w-6 h-6" />
                <span className="text-sm">Follow on X</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col gap-2">
                <Send className="w-6 h-6" />
                <span className="text-sm">Join Telegram</span>
              </Button>
            </div>

            {/* Meme Section */}
            <Card className="bg-gradient-card border-mystical/20 shadow-glow-purple">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold text-mystical mb-3">Meme Gallery</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square rounded-lg bg-background-secondary/50 flex items-center justify-center border border-mystical/20">
                    <span className="text-4xl">👁️</span>
                  </div>
                  <div className="aspect-square rounded-lg bg-background-secondary/50 flex items-center justify-center border border-primary/20">
                    <span className="text-4xl">✨</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Share your $NEV memes and cosmic creations!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 shadow-cosmic">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Assume Your $NEV Reality?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Join thousands of conscious creators manifesting wealth through the power of assumption.
            </p>
            <Button variant="cta" size="xl">
              Assume Your Bag Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;