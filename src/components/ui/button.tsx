import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * xAI-inspired button system.
 * - Sharp corners (0px radius) across the board
 * - Primary/hero use uppercase GeistMono with 1.4px tracking — technical, commanding
 * - Hover DIMS rather than brightens (unusual, distinctive)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-none",
  {
    variants: {
      variant: {
        // Primary = white box, dark text, sharp corners, uppercase mono
        default:
          "bg-primary text-primary-foreground font-mono-display uppercase tracking-[0.14em] hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-white/20 bg-transparent text-foreground font-mono-display uppercase tracking-[0.14em] hover:bg-white/5 hover:border-white/40",
        secondary:
          "bg-white/5 text-foreground hover:bg-white/10 border border-white/10",
        ghost:
          "text-foreground hover:bg-white/5 hover:text-white",
        link: "text-foreground underline-offset-4 hover:underline",
        // Hero = primary CTA, same as default
        hero:
          "bg-primary text-primary-foreground font-mono-display uppercase tracking-[0.14em] hover:bg-white/90",
        heroOutline:
          "border border-white/30 bg-transparent text-foreground font-mono-display uppercase tracking-[0.14em] hover:bg-white/5 hover:border-white/60",
        navy:
          "bg-primary text-primary-foreground font-mono-display uppercase tracking-[0.14em] hover:bg-white/90",
        subtle:
          "bg-white/5 text-foreground hover:bg-white/10 border border-white/10",
        cta:
          "bg-primary text-primary-foreground font-mono-display uppercase tracking-[0.14em] text-base hover:bg-white/90",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-sm",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
