/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.1
   File : components/ui/Button.tsx
========================================== */

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-lg shadow-red-600/30",

    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700 hover:scale-105",

    outline:
      "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}