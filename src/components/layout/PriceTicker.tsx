import { getProducts } from "@/lib/api";
import { CHANGE_STYLES } from "@/lib/constants";
import { formatPercent, formatPrice, getUnitLabel } from "@/lib/format";
import type { Product } from "@/types";

// TickerItem
function TickerItem({ product }: { product: Product }) {
  const change = CHANGE_STYLES[product.change.dir];

  return (
    <li className="flex shrink-0 items-center gap-2 border-r border-base-300 px-4 py-2 text-sm">
      <span>{product.image}</span>
      <span className="font-medium">{product.nameBn}</span>
      <span className="text-base-content/80">
        {formatPrice(product.today)}/{getUnitLabel(product.unit)}
      </span>
      <span className={`font-medium ${change.className}`}>
        {change.icon} {formatPercent(product.change.pct)}
      </span>
    </li>
  );
}

// PriceTicker
export default async function PriceTicker() {
  const products = await getProducts();

  if (products.length === 0) return null;

  return (
    <div className="overflow-hidden border-b border-base-300">
      <ul className="ticker-track flex w-max">
        {[...products, ...products].map((product, index) => (
          <TickerItem key={`${product.id}-${index}`} product={product} />
        ))}
      </ul>
    </div>
  );
}
