/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : components/ui/Input.tsx
========================================== */

import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">

      {label && (
        <label className="block text-sm font-medium text-zinc-300">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-900
          px-5
          py-4
          text-white
          outline-none
          transition-all
          duration-300
          placeholder:text-zinc-500
          focus:border-red-500
          focus:ring-2
          focus:ring-red-500/20
          ${className}
        `}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}