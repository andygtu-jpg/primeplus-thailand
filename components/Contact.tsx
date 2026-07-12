/* ==========================================
   PRIME PLUS V3
   File : Contact.tsx
   Version : 3.1
========================================== */

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-24"
    >
      <div className="container mx-auto max-w-5xl px-6">

        <h2 className="title">
          ติดต่อเรา
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-zinc-400">
          หากต้องการสอบถามข้อมูลเพิ่มเติม
          หรือแจ้งการชำระเงิน
          สามารถติดต่อผ่านช่องทางด้านล่างได้ทันที
        </p>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* LINE */}

          <div className="card p-8 text-center">

            <div className="mb-5 text-5xl">
              💬
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              LINE Official
            </h3>

            <p className="mb-6 text-zinc-400">
              @563dlggh
            </p>

            <a
              href="https://line.me/R/ti/p/@563dlggh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700"
            >
              เพิ่มเพื่อน
            </a>

          </div>

          {/* Facebook */}

          <div className="card p-8 text-center">

            <div className="mb-5 text-5xl">
              👍
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              Facebook
            </h3>

            <p className="mb-6 text-zinc-400">
              Prime Plus Thailand
            </p>

            <a
              href="#"
              className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              เปิดเพจ
            </a>

          </div>

          {/* Phone */}

          <div className="card p-8 text-center">

            <div className="mb-5 text-5xl">
              📞
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white">
              Customer Support
            </h3>

            <p className="mb-6 text-zinc-400">
              ติดต่อผ่าน LINE Official
            </p>

            <a
              href="https://line.me/R/ti/p/@563dlggh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
            >
              ติดต่อทันที
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}