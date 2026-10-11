export type ChangeDirection = "up" | "down" | "flat";

export type ProductUnit = "kg" | "litre" | "dozen" | "piece";

export type SortOption = "default" | "price-asc" | "price-desc";

export interface Market {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface Product {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: ProductUnit;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: {
    dir: ChangeDirection;
    pct: number;
  };
  markets: Market[];
}

export interface Category {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface SessionUser {
  name: string;
  email: string;
  image?: string | null;
}
