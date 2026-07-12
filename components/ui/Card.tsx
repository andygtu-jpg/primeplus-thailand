/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : components/ui/Card.tsx
========================================== */

import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/80
        backdrop-blur-md
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-red-500
        hover:shadow-red-600/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}