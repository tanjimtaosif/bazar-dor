import Container from "@/components/ui/Container";

interface ProfileShellProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

// ProfileShell
export default function ProfileShell({ title, subtitle, children }: ProfileShellProps) {
  return (
    <Container className="py-6 sm:py-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          <p className="text-sm text-base-content/70">{subtitle}</p>
        </div>
        {children}
      </div>
    </Container>
  );
}
