export const easeOutCubic = t => 1 - Math.pow(1 - t, 3)
export const easeOutQuart = t => 1 - Math.pow(1 - t, 4)
export const easeInOutQuad = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
