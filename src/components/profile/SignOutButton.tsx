"use client";

import { useSignOut } from "@/hooks/useSignOut";

// SignOutButton
export default function SignOutButton() {
  const signOut = useSignOut();

  return (
    <button
      type="button"
      onClick={signOut}
      className="btn btn-outline btn-error btn-sm sm:btn-md"
    >
      ↩ সাইন আউট
    </button>
  );
}
