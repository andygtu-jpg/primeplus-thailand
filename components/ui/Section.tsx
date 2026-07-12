/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : components/ui/Section.tsx
========================================== */

import { ReactNode } from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 bg-black ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}