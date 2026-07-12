export function calculatePrice(qty: number): number {
  switch (qty) {
    case 2:
      return 700;

    case 3:
      return 1050;

    case 4:
      return 1400;

    case 5:
      return 1750;

    default:
      return 400;
  }
}