/* ==========================================
   PRIME PLUS V3
   File : Payment.tsx
   Version : 3.1
========================================== */

export default function Payment() {
  return (
    <section
      id="payment"
      className="bg-black py-24"
    >
      <div className="container mx-auto max-w-4xl px-6">

        <h2 className="title">
          ชำระเงิน
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-400">
          หลังจากกรอกข้อมูลสั่งซื้อแล้ว
          กรุณาสแกน QR Code เพื่อชำระเงิน
          และแจ้งการโอนผ่าน LINE Official
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* QR */}

          <div className="card flex flex-col items-center p-10">

            <img
              src="/qr-payment.png"
              alt="QR Payment"
              className="w-72 rounded-2xl bg-white p-4 shadow-2xl"
            />

            <p className="mt-6 text-zinc-300">
              สแกน QR เพื่อชำระเงิน
            </p>

          </div>

          {/* Detail */}

          <div className="card p-10">

            <h3 className="mb-6 text-3xl font-bold text-white">
              ขั้นตอนการชำระเงิน
            </h3>

            <div className="space-y-5 text-zinc-300">

              <div>
                <span className="font-bold text-red-400">
                  1.
                </span>{" "}
                กรอกข้อมูลในแบบฟอร์มสั่งซื้อ
              </div>

              <div>
                <span className="font-bold text-red-400">
                  2.
                </span>{" "}
                ชำระเงินผ่าน QR Code
              </div>

              <div>
                <span className="font-bold text-red-400">
                  3.
                </span>{" "}
                ส่งสลิปผ่าน LINE Official
              </div>

              <div>
                <span className="font-bold text-red-400">
                  4.
                </span>{" "}
                รอการยืนยันและจัดส่งสินค้า
              </div>

            </div>

            <a
              href="https://line.me/R/ti/p/@primeplus"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              แจ้งชำระเงินผ่าน LINE
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}