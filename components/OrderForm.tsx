"use client";

import { useState } from "react";
import { calculatePrice } from "@/lib/pricing";

export default function OrderForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  const price = calculatePrice(qty);

  async function submitOrder() {
    if (!name || !phone || !address) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          address,
          qty,
          price,
        }),
      });

      const data = await res.json();

      if (data.success) {
       alert(
      "สั่งซื้อสำเร็จ\n\nเลขที่คำสั่งซื้อ : " +
      data.orderId
    );
        setName("");
        setPhone("");
        setAddress("");
        setQty(1);
      } else {
        alert(data.message || "เกิดข้อผิดพลาด");
      }
    } catch (err) {
      console.error(err);
      alert("ไม่สามารถเชื่อมต่อ Server");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="order"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-2xl mx-auto bg-zinc-900 rounded-2xl border border-red-500/30 p-8">

        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">
          สั่งซื้อสินค้า
        </h2>

        <input
          className="w-full p-4 rounded-lg bg-zinc-800 mb-4"
          placeholder="ชื่อ"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full p-4 rounded-lg bg-zinc-800 mb-4"
          placeholder="เบอร์โทร"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <textarea
          className="w-full p-4 rounded-lg bg-zinc-800 mb-4"
          rows={4}
          placeholder="ที่อยู่"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />

        <select
          className="w-full p-4 rounded-lg bg-zinc-800 mb-6"
          value={qty}
          onChange={(e)=>setQty(Number(e.target.value))}
        >
          <option value={1}>1 กล่อง</option>
          <option value={2}>2 กล่อง (700 บาท)</option>
          <option value={3}>3 กล่อง</option>
          <option value={4}>4 กล่อง</option>
          <option value={5}>5 กล่อง</option>
        </select>

        <div className="bg-zinc-800 rounded-xl p-6 text-center mb-6">
          <p className="text-gray-400">ยอดชำระทั้งหมด</p>

          <h1 className="text-5xl font-bold text-red-500 mt-3">
            {price} บาท
          </h1>
        </div>

        <button
          onClick={submitOrder}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 rounded-xl py-4 text-xl font-bold transition"
        >
          {loading ? "กำลังส่ง..." : "ยืนยันการสั่งซื้อ"}
        </button>

      </div>
    </section>
  );
}