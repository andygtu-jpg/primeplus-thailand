/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
   File : Hero.tsx
========================================== */

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black pt-20"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[140px]" />

      <Container>
        <div className="grid min-h-screen items-center gap-16 py-24 lg:grid-cols-2">

          {/* Left */}

          <div className="relative z-10">

            <span className="inline-flex rounded-full border border-red-500/40 bg-red-600/10 px-4 py-2 text-sm font-semibold tracking-widest text-red-400">
              PREMIUM MEN'S SUPPLEMENT
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
              PRIME
              <span className="text-red-500"> PLUS</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              ผลิตภัณฑ์เสริมอาหารสำหรับผู้ชาย
              ผลิตภายใต้มาตรฐานการผลิตที่เกี่ยวข้อง
              พร้อมบรรจุภัณฑ์พรีเมียมและจัดส่งทั่วประเทศ
            </p>

            {/* Rating */}

            <div className="mt-8 flex items-center gap-3">

              <span className="text-2xl text-yellow-400">
                ★★★★★
              </span>

              <span className="text-zinc-400">
                Premium Quality
              </span>

            </div>

            {/* Price */}

            <div className="mt-10">

              <h2 className="text-5xl font-black text-white">
                400 บาท
              </h2>

              <p className="mt-3 text-2xl font-semibold text-green-400">
                ซื้อ 2 กล่อง เพียง 700 บาท
              </p>

            </div>

            {/* Button */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Button href="#order">
                สั่งซื้อทันที
              </Button>

              <Button
                href="#contact"
                variant="outline"
              >
                LINE Official
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="absolute h-80 w-80 rounded-full bg-red-600/20 blur-[120px]" />

            <img
              src="/primeplus-box.png"
              alt="Prime Plus"
              className="
                relative
                z-10
                w-[260px] lg:w-[380px]
                drop-shadow-[0_0_60px_rgba(220,38,38,.35)]
                transition
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>
      </Container>
    </section>
  );
}