import Link from "next/link";
import ChangeBadge from "@/components/product/ChangeBadge";
import { formatNumber, getUnitLabel } from "@/lib/format";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

// ProductCard
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="panel flex flex-col gap-4 p-4 transition-shadow hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-base-200 text-2xl">
          {product.image}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold">{product.nameBn}</h3>
          <p className="text-sm text-base-content/70">
            প্রতি {getUnitLabel(product.unit)}
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-xs text-base-content/70">আজকের দাম</p>
          <p>
            <span className="text-xl font-bold">
              {formatNumber(product.today)}
            </span>{" "}
            টাকা
          </p>
        </div>
        <ChangeBadge change={product.change} className="shrink-0" />
      </div>
    </Link>
  );
}
