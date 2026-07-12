export default function Product() {
  const features = [
    "ผลิตภัณฑ์เสริมอาหารสำหรับผู้ชาย",
    "ผลิตภายใต้มาตรฐานการผลิตที่เกี่ยวข้อง",
    "คัดสรรส่วนผสมคุณภาพ",
    "บรรจุภัณฑ์พรีเมียม",
    "จัดส่งทั่วประเทศไทย",
  ];

  return (
    <section
      id="product"
      className="bg-black py-24"
    >
      <div className="container mx-auto grid items-center gap-14 px-6 lg:grid-cols-2">

        {/* Product Image */}

        <div className="flex justify-center">
          <img
            src="/primeplus-box.png"
            alt="Prime Plus"
            className="w-80 transition duration-500 hover:scale-105 drop-shadow-[0_0_35px_rgba(255,0,0,.35)]"
          />
        </div>

        {/* Product Detail */}

        <div>

          <span className="rounded-full border border-red-500 px-4 py-2 text-sm text-red-400">
            PREMIUM QUALITY
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white">
            PRIME
            <span className="text-red-500"> PLUS</span>
          </h2>

          <p className="mt-6 leading-8 text-zinc-300">
            PRIME PLUS เป็นผลิตภัณฑ์เสริมอาหารสำหรับผู้ชาย
            ผลิตภายใต้มาตรฐานการผลิตที่เกี่ยวข้อง
            พร้อมบรรจุภัณฑ์คุณภาพและการจัดส่งทั่วประเทศ
          </p>

          <div className="mt-8 space-y-4">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
              >
                <div className="text-green-400 text-xl">
                  ✔
                </div>

                <div className="text-zinc-200">
                  {item}
                </div>

              </div>

            ))}

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#order"
              className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition hover:bg-red-700"
            >
              สั่งซื้อทันที
            </a>

            <a
              href="#payment"
              className="rounded-xl border border-red-500 px-8 py-4 font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              วิธีชำระเงิน
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}