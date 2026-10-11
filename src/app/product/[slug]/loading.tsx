import Container from "@/components/ui/Container";

// ProductLoading
export default function ProductLoading() {
  return (
    <Container className="flex flex-col gap-6 py-6">
      <div className="skeleton h-5 w-56" />
      <div className="skeleton h-40 w-full rounded-2xl" />
      <div className="skeleton h-96 w-full rounded-2xl" />
    </Container>
  );
}
