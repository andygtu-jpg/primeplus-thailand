export function calculatePrice(qty: number): number {
  switch (qty) {
    case 1:
      return 400;

    case 2:
      return 700;

    case 3:
      return 1100;

    case 4:
      return 1400;

    case 5:
      return 1750;

    default:
      return qty * 400;
  }
}