import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/types";

export const PRODUCT_GRID_CLASS = "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3";

interface ProductGridProps {
  products: Product[];
}

// ProductGrid
export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className={PRODUCT_GRID_CLASS}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
