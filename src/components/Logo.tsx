import logoBlack from '../assets/41 MASTERY - Logo Black_transparent.png';
import logoWhite from '../assets/41 MASTERY - Logo White_transparent.png';

export default function Logo({ className = "", variant = "black" }: { className?: string; variant?: "black" | "white" }) {
  const logoSrc = variant === "white" ? logoWhite : logoBlack;
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoSrc} 
        alt="AI MASTERY" 
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}
