import { PRODUCT_GRID_CLASS } from "@/components/product/ProductGrid";

interface ProductGridSkeletonProps {
  count?: number;
}

// ProductCardSkeleton
function ProductCardSkeleton() {
  return (
    <div className="panel flex flex-col gap-4 p-4">
      <div className="flex items-center gap-3">
        <div className="skeleton size-12 rounded-xl" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="skeleton h-5 w-2/3" />
          <div className="skeleton h-3 w-1/3" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="skeleton h-8 w-24" />
        <div className="skeleton h-5 w-14 rounded-full" />
      </div>
    </div>
  );
}

// ProductGridSkeleton
export default function ProductGridSkeleton({ count = 6 }: ProductGridSkeletonProps) {
  return (
    <div className={PRODUCT_GRID_CLASS}>
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
