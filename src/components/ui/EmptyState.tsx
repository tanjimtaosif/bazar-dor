import Link from "next/link";

interface EmptyStateProps {
  code?: string;
  title: string;
  message: string;
}

// EmptyState
export default function EmptyState({
  code = "৪০৪",
  title,
  message,
}: EmptyStateProps) {
  return (
    <div className="panel flex flex-col items-center gap-3 px-4 py-12 text-center sm:px-6 sm:py-16">
      <p className="text-5xl font-bold text-primary sm:text-6xl">{code}</p>
      <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
      <p className="max-w-md text-base-content/70">{message}</p>
      <Link href="/" className="btn btn-primary btn-sm mt-3 sm:btn-md">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
