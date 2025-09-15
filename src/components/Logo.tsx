import nevCoinLogo from "@/assets/nev-coin-logo.png";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizes = {
    sm: "w-10 h-10",
    md: "w-16 h-16", 
    lg: "w-24 h-24"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={nevCoinLogo} 
        alt="$NEV Coin - Neville Goddard Cryptocurrency Logo" 
        className={`${sizes[size]} object-contain shadow-glow-pink float`}
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