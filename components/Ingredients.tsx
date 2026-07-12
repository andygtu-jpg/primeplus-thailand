/* ==========================================
   PRIME PLUS V3
   File : Ingredients.tsx
   Version : 3.1
========================================== */

const ingredients = [
  {
    title: "L-Arginine",
    desc: "กรดอะมิโนที่พบได้ตามธรรมชาติ",
  },
  {
    title: "Oyster Extract",
    desc: "สารสกัดจากหอยนางรม",
  },
  {
    title: "Black Ginger",
    desc: "สารสกัดจากกระชายดำ",
  },
  {
    title: "Panax Ginseng",
    desc: "สารสกัดจากโสม",
  },
  {
    title: "Cordyceps",
    desc: "สารสกัดจากถั่งเช่า",
  },
  {
    title: "Vitamin Blend",
    desc: "วิตามินและสารอาหารที่เกี่ยวข้อง",
  },
];

export default function Ingredients() {
  return (
    <section
      id="ingredients"
      className="bg-zinc-950 py-24"
    >
      <div className="container mx-auto px-6">

        <h2 className="title">
          ส่วนประกอบสำคัญ
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-center text-zinc-400">
          ผลิตภัณฑ์ประกอบด้วยสารสกัดและส่วนผสมหลายชนิด
          โปรดศึกษารายละเอียดบนฉลากผลิตภัณฑ์ก่อนรับประทาน
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {ingredients.map((item) => (

            <div
              key={item.title}
              className="card p-8"
            >

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl">
                🌿
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}