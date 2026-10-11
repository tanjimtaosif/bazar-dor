import { UNIT_LABELS } from "@/lib/constants";
import type { Market, Product, ProductUnit, SortOption } from "@/types";

const LOCALE = "bn-BD";

// formatNumber
export function formatNumber(value: number) {
  const fractionDigits = Number.isInteger(value) ? 0 : 2;

  return value.toLocaleString(LOCALE, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

// formatPrice
export function formatPrice(value: number) {
  return `${formatNumber(value)} টাকা`;
}

// formatPercent
export function formatPercent(value: number) {
  const percent = Math.abs(value).toLocaleString(LOCALE, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return `${percent}%`;
}

// getUnitLabel
export function getUnitLabel(unit: ProductUnit) {
  return UNIT_LABELS[unit] ?? unit;
}

// formatBanglaDate
export function formatBanglaDate(date = new Date(), withWeekday = true) {
  return new Intl.DateTimeFormat(LOCALE, {
    weekday: withWeekday ? "long" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);
}

// getMarketStats
export function getMarketStats(product: Product) {
  const rows = product.markets
    .map((market: Market) => ({
      ...market,
      average: (market.min + market.max) / 2,
    }))
    .sort((a, b) => a.average - b.average);

  if (rows.length === 0) {
    return {
      rows,
      min: product.today,
      max: product.today,
      average: product.today,
    };
  }

  const total = rows.reduce((sum, row) => sum + row.average, 0);

  return {
    rows,
    min: Math.min(...rows.map((row) => row.min)),
    max: Math.max(...rows.map((row) => row.max)),
    average: Math.round(total / rows.length),
  };
}

// sortProducts
export function sortProducts(products: Product[], sort: SortOption) {
  if (sort === "default") return products;

  const direction = sort === "price-asc" ? 1 : -1;

  return [...products].sort(
    (a, b) => (Number(a.today) - Number(b.today)) * direction,
  );
}

// getSafeRedirect
export function getSafeRedirect(path?: string | null) {
  return path && path.startsWith("/") && !path.startsWith("//") ? path : "/";
}
