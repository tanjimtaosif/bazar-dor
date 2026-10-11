"use client";

import Link from "next/link";
import UserMenu from "@/components/layout/UserMenu";
import { authClient } from "@/lib/auth-client";

// AuthActions
export default function AuthActions() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="skeleton h-9 w-32 shrink-0" />;

  if (session) return <UserMenu user={session.user} />;

  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-3">
      <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
        সাইন ইন
      </Link>
      <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
        সাইন আপ
      </Link>
    </div>
  );
}
