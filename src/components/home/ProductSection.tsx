import ProductGrid from "@/components/product/ProductGrid";
import type { Product } from "@/types";

interface ProductSectionProps {
  id?: string;
  title: React.ReactNode;
  subtitle?: string;
  products: Product[];
}

// ProductSection
export default function ProductSection({
  id,
  title,
  subtitle,
  products,
}: ProductSectionProps) {
  if (products.length === 0) return null;

  return (
    <section id={id} className="flex scroll-mt-6 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="flex items-center gap-2 text-xl font-bold">{title}</h2>
        {subtitle && <p className="text-sm text-base-content/70">{subtitle}</p>}
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
