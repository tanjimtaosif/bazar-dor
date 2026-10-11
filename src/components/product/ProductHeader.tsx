import Link from "next/link";
import { CHANGE_STYLES } from "@/lib/constants";
import {
  formatNumber,
  formatPercent,
  formatPrice,
  getUnitLabel,
} from "@/lib/format";
import type { Product } from "@/types";

interface ProductHeaderProps {
  product: Product;
}

// ProductHeader
export default function ProductHeader({ product }: ProductHeaderProps) {
  const change = CHANGE_STYLES[product.change.dir];
  const unitLabel = getUnitLabel(product.unit);
  const difference = Math.abs(product.today - product.yesterday);

  return (
    <section className="panel flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-base-200 text-3xl sm:size-20 sm:text-4xl">
          {product.image}
        </span>
        <div className="flex min-w-0 flex-col gap-1.5">
          <h1 className="text-2xl font-bold wrap-break-word sm:text-3xl">
            {product.nameBn}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-base-content/70">
            <span>প্রতি {unitLabel}</span>
            <Link
              href={`/category/${product.category}`}
              className="badge badge-soft badge-primary"
            >
              {product.categoryIcon} {product.categoryNameBn}
            </Link>
          </div>
          <p className="text-sm">
            গতকালের তুলনায় আজ দাম{" "}
            <span className="font-semibold">{change.label}</span>
            {product.change.dir !== "flat" && ` · ${formatPrice(difference)}`}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-center gap-1 rounded-xl bg-base-200 px-6 py-4">
        <p className="text-sm text-base-content/70">আজকের দাম</p>
        <p className="text-3xl font-bold">{formatNumber(product.today)}</p>
        <p className="text-sm text-base-content/70">টাকা / {unitLabel}</p>
        <p className={`text-sm font-medium ${change.className}`}>
          {change.icon} {formatPercent(product.change.pct)}
        </p>
      </div>
    </section>
  );
}
