export type FluidBase = 14.4 | 8.1 | 3.75;

export const fluid = (px: number, base: FluidBase = 14.4) =>
  `calc(${px} / ${base} * 1vw)`;

