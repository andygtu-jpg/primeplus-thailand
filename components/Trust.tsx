/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : Trust.tsx
========================================== */

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

const items = [
  {
    title: "Premium Quality",
    desc: "คัดสรรวัตถุดิบคุณภาพ",
    icon: "⭐",
  },
  {
    title: "Fast Delivery",
    desc: "จัดส่งทั่วประเทศไทย",
    icon: "🚚",
  },
  {
    title: "Secure Payment",
    desc: "ชำระเงินสะดวก",
    icon: "🔒",
  },
  {
    title: "LINE Support",
    desc: "ตอบกลับรวดเร็ว",
    icon: "💬",
  },
];

export default function Trust() {
  return (
    <Section className="bg-zinc-950">

      <Container>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => (

            <Card
              key={item.title}
              className="text-center"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.desc}
              </p>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}