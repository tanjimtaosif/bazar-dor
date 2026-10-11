import Container from "@/components/ui/Container";

// Footer
export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <Container className="flex flex-col gap-2 py-6 text-center text-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
        <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
      </Container>
    </footer>
  );
}
