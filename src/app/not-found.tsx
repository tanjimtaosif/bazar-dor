import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";

// NotFound
export default function NotFound() {
  return (
    <Container className="py-10">
      <EmptyState
        title="পেজটি খুঁজে পাওয়া যায়নি"
        message="আপনি যে পেজটি খুঁজছেন সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।"
      />
    </Container>
  );
}
