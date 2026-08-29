export const PRODUCT_SLUGS = [
  "clean-300",
  "clean-500",
  "weld-1500",
  "multi-1500",
] as const;

export type ProductSlug = (typeof PRODUCT_SLUGS)[number];

export function isProductSlug(s: string): s is ProductSlug {
  return (PRODUCT_SLUGS as readonly string[]).includes(s);
}
