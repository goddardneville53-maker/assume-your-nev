import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Sparkles, Gem } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Eye,
      title: "Step 1: Imagine",
      description: "Visualize your $NEV bag. See yourself as a holder. Feel the cosmic energy of abundance flowing through your wallet.",
      color: "primary",
      glow: "glow-pink"
    },
    {
      icon: Sparkles,
      title: "Step 2: Assume",
      description: "Don't hope or wish – ASSUME it's already yours. Live in the end state. You ARE a $NEV holder. It is done.",
      color: "secondary", 
      glow: "glow-blue"
    },
    {
      icon: Gem,
      title: "Step 3: HODL",
      description: "Let the assumption harden into fact. Diamond hands through cosmic storms. Your imagination becomes reality.",
      color: "mystical",
      glow: "glow-purple"
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-mystical/10 blur-2xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three mystical steps to manifest your $NEV destiny
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className={`bg-gradient-card border-${step.color}/20 shadow-${step.glow} relative overflow-hidden`}
              >
                {/* Floating Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-${step.color} flex items-center justify-center text-lg font-bold shadow-${step.glow}`}>
                  {index + 1}
                </div>
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-full bg-${step.color}/20 flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className={`w-8 h-8 text-${step.color}`} />
                  </div>
                  <CardTitle className={`text-xl text-center text-${step.color}`}>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="text-center">
          <div className="inline-block p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/20">
            <p className="text-lg font-semibold text-primary italic">
              "States of consciousness are the only reality. $NEV is your state of abundance."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;