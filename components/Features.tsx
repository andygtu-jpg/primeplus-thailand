/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.1
   File : Features.tsx
========================================== */

import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  MessageCircle,
  Package,
  Star,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const items = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "คัดสรรวัตถุดิบคุณภาพและผลิตตามมาตรฐานที่เกี่ยวข้อง",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Product",
    desc: "บรรจุภัณฑ์คุณภาพ พร้อมข้อมูลผลิตภัณฑ์ชัดเจน",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "จัดส่งรวดเร็วทั่วประเทศไทย",
  },
  {
    icon: MessageCircle,
    title: "LINE Support",
    desc: "สอบถามและแจ้งชำระเงินผ่าน LINE Official",
  },
  {
    icon: Package,
    title: "Premium Packaging",
    desc: "แพ็กสินค้าอย่างดีเพื่อความมั่นใจในการจัดส่ง",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    desc: "ลูกค้าหลายท่านให้ความไว้วางใจในการสั่งซื้อ",
  },
];

export default function Features() {
  return (
    <Section
      id="benefits"
      className="bg-zinc-950"
    >
      <SectionTitle
        title="Why PRIME PLUS"
        subtitle="คุณภาพ การบริการ และความใส่ใจในทุกขั้นตอน"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600/10">
                <Icon
                  className="h-8 w-8 text-red-500"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.desc}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}