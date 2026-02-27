import React from "react";

type Variant = "primary" | "ghost";
type Size = "sm" | "md";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none";
  const sizes: Record<Size, string> = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 text-sm",
  };
  const variants: Record<Variant, string> = {
    primary: "bg-white text-black hover:bg-white/90",
    ghost: "bg-white/0 text-white border border-white/12 hover:bg-white/5",
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />
  );
}