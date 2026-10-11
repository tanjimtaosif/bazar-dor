import type { ChangeDirection, ProductUnit, SortOption } from "@/types";

export const API_BASE_URLS = [
  "https://openapi.programming-hero.com/api/bazardor",
  "https://api.api-store.workers.dev/api/bazardor",
  "https://api.abcz.workers.dev/api/bazardor",
];

export const REVALIDATE_SECONDS = 300;

export const TOP_MOVERS_LIMIT = 6;

export const ALL_PRODUCTS_SECTION_ID = "সব-পণ্য";

export const UNIT_LABELS: Record<ProductUnit, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export const CHANGE_STYLES: Record<
  ChangeDirection,
  { icon: string; label: string; className: string }
> = {
  up: { icon: "▲", label: "বেড়েছে", className: "text-error" },
  down: { icon: "▼", label: "কমেছে", className: "text-success" },
  flat: { icon: "—", label: "অপরিবর্তিত", className: "text-base-content/70" },
};

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default", label: "ডিফল্ট" },
  { value: "price-asc", label: "দাম: কম থেকে বেশি" },
  { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];
