import nevilleLaserEyes from "@/assets/neville-laser-eyes.jpg";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-20 h-20"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={nevilleLaserEyes} 
        alt="Neville Goddard - $NEV Coin Logo" 
        className={`${sizes[size]} rounded-full border-2 border-primary/50 shadow-glow-pink float`}
      />
      {showText && (
        <div className="flex items-center gap-2">
          <span className={`${textSizes[size]} font-bold bg-gradient-cosmic bg-clip-text text-transparent`}>
            $NEV
          </span>
          <span className={`${size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"} text-mystical font-semibold`}>
            COIN
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;