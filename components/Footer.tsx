/* ==========================================
   PRIME PLUS V3
   File : Footer.tsx
   Version : 3.1
========================================== */

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container mx-auto px-6 py-14">

        <div className="grid gap-10 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <img
              src="/logo.png"
              alt="Prime Plus"
              className="mb-5 h-16"
            />

            <h2 className="text-2xl font-bold text-red-500">
              PRIME PLUS
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              ผลิตภัณฑ์เสริมอาหารสำหรับผู้ชาย
              พร้อมบริการจัดส่งทั่วประเทศไทย
            </p>

          </div>

          {/* Menu */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              เมนู
            </h3>

            <div className="space-y-3">

              <a href="#home" className="block text-zinc-400 hover:text-red-500">
                หน้าแรก
              </a>

              <a href="#benefits" className="block text-zinc-400 hover:text-red-500">
                จุดเด่น
              </a>

              <a href="#ingredients" className="block text-zinc-400 hover:text-red-500">
                ส่วนประกอบ
              </a>

              <a href="#reviews" className="block text-zinc-400 hover:text-red-500">
                รีวิว
              </a>

              <a href="#order" className="block text-zinc-400 hover:text-red-500">
                โปรโมชั่น
              </a>

              <a href="#contact" className="block text-zinc-400 hover:text-red-500">
                ติดต่อ
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-bold text-white">
              ติดต่อเรา
            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>
                LINE OA : @563dlggh
              </p>

              <p>
                Facebook : Prime Plus Thailand
              </p>

              <a
                href="https://line.me/R/ti/p/@563dlggh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
              >
                เพิ่มเพื่อน LINE
              </a>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">

          © 2026 PRIME PLUS Thailand.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}