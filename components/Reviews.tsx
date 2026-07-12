/* ==========================================
   PRIME PLUS V3
   File : Reviews.tsx
   Version : 3.1
========================================== */

const reviews = [
  {
    name: "คุณสมชาย",
    title: "ลูกค้าจริง",
    text: "เว็บไซต์ใช้งานง่าย การจัดส่งรวดเร็ว และแพ็กสินค้ามาเรียบร้อยมาก",
  },
  {
    name: "คุณเอก",
    title: "ลูกค้าจริง",
    text: "ประทับใจการบริการ ตอบคำถามรวดเร็ว และขั้นตอนการสั่งซื้อไม่ซับซ้อน",
  },
  {
    name: "คุณมนตรี",
    title: "ลูกค้าจริง",
    text: "บรรจุภัณฑ์ดูพรีเมียม สั่งซื้อสะดวก และได้รับสินค้าตรงตามที่สั่ง",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-black py-24"
    >
      <div className="container mx-auto px-6">

        <h2 className="title">
          รีวิวจากลูกค้า
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-zinc-400">
          ความคิดเห็นจากลูกค้าที่ใช้บริการและสั่งซื้อผ่านเว็บไซต์
        </p>

        <div className="grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="card p-8"
            >

              <div className="mb-5 flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white">
                  {review.name.charAt(3)}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {review.title}
                  </p>

                </div>

              </div>

              <div className="mb-5 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-8 text-zinc-300">
                {review.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}