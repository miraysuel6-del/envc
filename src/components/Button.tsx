import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "solid",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center px-7 text-sm font-medium tracking-wide transition-all duration-200 border border-black";

  const variants = {
    solid: "bg-black text-white hover:bg-white hover:text-black",
    outline: "bg-transparent text-black hover:bg-black hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
