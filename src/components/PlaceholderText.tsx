import { cn } from "@/lib/utils";

interface PlaceholderTextProps {
  children: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4";
}

export const PlaceholderText = ({ 
  children, 
  className, 
  as: Component = "span" 
}: PlaceholderTextProps) => {
  return (
    <Component 
      className={cn(
        "text-accent font-medium",
        "border-b-2 border-dashed border-accent/50",
        "hover:bg-accent/10 transition-colors duration-200",
        "cursor-pointer",
        className
      )}
      title="Clique para editar este texto"
    >
      [{children}]
    </Component>
  );
};
