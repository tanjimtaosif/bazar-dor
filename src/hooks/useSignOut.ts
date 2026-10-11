"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

// useSignOut
export function useSignOut() {
  const router = useRouter();

  return async function signOut() {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "সাইন আউট করা যায়নি।");
      return;
    }

    toast.success("সাইন আউট সফল হয়েছে।");
    router.push("/");
    router.refresh();
  };
}
