import {
  API_BASE_URLS,
  REVALIDATE_SECONDS,
  TOP_MOVERS_LIMIT,
} from "@/lib/constants";
import type { Category, ChangeDirection, Product } from "@/types";

// request
async function request<T>(path: string): Promise<T | null> {
  for (const baseUrl of API_BASE_URLS) {
    try {
      const response = await fetch(`${baseUrl}${path}`, {
        next: { revalidate: REVALIDATE_SECONDS },
      });

      if (response.status === 404) return null;
      if (response.ok) return (await response.json()) as T;
    } catch {
      continue;
    }
  }

  throw new Error(`Failed to fetch ${path}`);
}

// getProducts
export async function getProducts() {
  return (await request<Product[]>("/products")) ?? [];
}

// getProductsByCategory
export async function getProductsByCategory(category: string) {
  const path = `/products?category=${encodeURIComponent(category)}`;

  return (await request<Product[]>(path)) ?? [];
}

// getProductBySlug
export async function getProductBySlug(slug: string) {
  const products = await getProducts();

  return products.find((product) => product.slug === slug) ?? null;
}

// getCategories
export async function getCategories() {
  return (await request<Category[]>("/categories")) ?? [];
}

// getCategory
export async function getCategory(slug: string) {
  return request<Category>(`/categories/${encodeURIComponent(slug)}`);
}

// getTopMovers
export function getTopMovers(products: Product[], direction: ChangeDirection) {
  return products
    .filter((product) => product.change.dir === direction)
    .sort((a, b) => Math.abs(b.change.pct) - Math.abs(a.change.pct))
    .slice(0, TOP_MOVERS_LIMIT);
}
