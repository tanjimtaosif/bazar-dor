"use client";

import { useMemo, useState } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import { SORT_OPTIONS } from "@/lib/constants";
import { formatNumber, sortProducts } from "@/lib/format";
import type { Product, SortOption } from "@/types";

interface SortableProductListProps {
  products: Product[];
}

// SortableProductList
export default function SortableProductList({ products }: SortableProductListProps) {
  const [sort, setSort] = useState<SortOption>("default");

  const sortedProducts = useMemo(
    () => sortProducts(products, sort),
    [products, sort],
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Sort Control Start */}
      <div className="panel flex items-center justify-end gap-3 px-4 py-3 sm:px-10">
        <label htmlFor="sort" className="text-sm text-base-content/70">
          সাজান
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(event) => setSort(event.target.value as SortOption)}
          className="select select-sm w-auto max-w-full text-base sm:text-xs"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* Sort Control End */}

      <p className="text-sm text-base-content/70">
        মোট {formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <ProductGrid products={sortedProducts} />
    </div>
  );
}
