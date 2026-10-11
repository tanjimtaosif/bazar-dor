import ProductGridSkeleton from "@/components/product/ProductGridSkeleton";
import Container from "@/components/ui/Container";

// Loading
export default function Loading() {
  return (
    <Container className="flex flex-col gap-6 py-6">
      <div className="skeleton h-28 w-full rounded-2xl" />
      <div className="skeleton h-6 w-48" />
      <ProductGridSkeleton />
    </Container>
  );
}
