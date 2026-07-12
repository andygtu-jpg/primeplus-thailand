/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : Promotion.tsx
========================================== */

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Promotion() {
  return (
    <section
      id="promotion"
      className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-700 to-red-900 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />

      <Container>

        <div className="relative z-10 mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-black/20 p-10 backdrop-blur-xl lg:p-16">

          <div className="text-center">

            <span className="inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-sm font-bold tracking-widest text-yellow-300">
              LIMITED OFFER
            </span>

            <h2 className="mt-8 text-5xl font-black text-white lg:text-6xl">
              โปรโมชั่นพิเศษ
            </h2>

            <p className="mt-4 text-zinc-200">
              ราคาสุดคุ้ม สำหรับการสั่งซื้อผ่านเว็บไซต์
            </p>

          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* Single */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

              <p className="text-zinc-300">
                1 กล่อง
              </p>

              <h3 className="mt-4 text-6xl font-black text-white">
                400
              </h3>

              <p className="mt-3 text-zinc-300">
                บาท
              </p>

            </div>

            {/* Double */}

            <div className="rounded-3xl border border-yellow-400/30 bg-black/30 p-10 text-center shadow-2xl shadow-red-900/40">

              <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black">
                BEST VALUE
              </span>

              <p className="mt-5 text-zinc-300">
                ซื้อ 2 กล่อง
              </p>

              <h3 className="mt-4 text-6xl font-black text-yellow-300">
                700
              </h3>

              <p className="mt-3 text-zinc-200">
                บาท
              </p>

              <p className="mt-5 font-semibold text-green-400">
                ประหยัดทันที 100 บาท
              </p>

            </div>

          </div>

          <div className="mt-14 flex justify-center">

            <Button
              href="#order"
              className="px-12 py-5 text-lg"
            >
              สั่งซื้อทันที
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}