import Link from "next/link";
import Container from "@/components/ui/Container";

interface AuthShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

// AuthShell
export default function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <Container className="flex flex-col items-center gap-6 py-6 sm:py-10">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        <p className="text-sm text-base-content/70">{subtitle}</p>
      </div>
      <div className="panel flex w-full max-w-md flex-col gap-5 p-4 sm:p-6">
        {children}
      </div>
      <Link href="/" className="text-sm text-base-content/60 hover:text-primary">
        ← হোম পেজে ফিরে যান
      </Link>
    </Container>
  );
}
