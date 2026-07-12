/* ==========================================
   PRIME PLUS THAILAND
   Version : 5.0
========================================== */

export interface Order {
  name: string;
  phone: string;
  address: string;

  qty: number;

  total: number;

  slip?: string;
}