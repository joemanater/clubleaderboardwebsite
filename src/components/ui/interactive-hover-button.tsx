import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", icon, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-full cursor-pointer overflow-hidden rounded-full border border-border bg-background px-5 py-2 text-center text-sm font-semibold",
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2 translate-x-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {icon && <span className="text-base leading-none">{icon}</span>}
        {text}
      </span>
      <div className="absolute left-0 top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        {icon && <span className="text-base leading-none">{icon}</span>}
        <span>{text}</span>
        <ArrowRight size={16} />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-0 rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
