import ProductGridSkeleton from "@/components/product/ProductGridSkeleton";
import Container from "@/components/ui/Container";

// CategoryLoading
export default function CategoryLoading() {
  return (
    <Container className="flex flex-col gap-6 py-6">
      <div className="skeleton h-24 w-full rounded-2xl" />
      <div className="skeleton h-14 w-full rounded-2xl" />
      <ProductGridSkeleton />
    </Container>
  );
}
