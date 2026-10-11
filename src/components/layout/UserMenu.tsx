"use client";

import Link from "next/link";
import Avatar from "@/components/ui/Avatar";
import { useSignOut } from "@/hooks/useSignOut";
import type { SessionUser } from "@/types";

interface UserMenuProps {
  user: SessionUser;
}

// UserMenu
export default function UserMenu({ user }: UserMenuProps) {
  const signOut = useSignOut();

  return (
    <div className="dropdown dropdown-end shrink-0">
      <div
        tabIndex={0}
        role="button"
        className="flex min-h-10 cursor-pointer items-center gap-2"
      >
        <Avatar user={user} />
        <span className="hidden text-sm font-medium sm:inline">
          {user.name.split(" ")[0]}
        </span>
        <span className="text-xs text-base-content/60">▾</span>
      </div>

      <div
        tabIndex={0}
        className="dropdown-content panel z-50 mt-3 flex w-64 max-w-[calc(100vw-2rem)] flex-col gap-3 p-5 shadow-lg"
      >
        <div>
          <p className="truncate font-medium">{user.name}</p>
          <p className="truncate text-xs text-base-content/60">{user.email}</p>
        </div>
        <Link
          href="/profile"
          className="py-1 text-sm font-medium hover:text-primary"
        >
          👤 আমার প্রোফাইল
        </Link>
        <button
          type="button"
          onClick={signOut}
          className="cursor-pointer py-1 text-left text-sm font-medium text-error"
        >
          ↩ সাইন আউট
        </button>
      </div>
    </div>
  );
}
