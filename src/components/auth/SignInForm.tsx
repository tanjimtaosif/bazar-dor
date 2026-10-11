"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SocialButtons from "@/components/auth/SocialButtons";
import FormField from "@/components/ui/FormField";
import { authClient } from "@/lib/auth-client";

interface SignInFormProps {
  redirectTo: string;
  showAuthNotice: boolean;
}

// SignInForm
export default function SignInForm({ redirectTo, showAuthNotice }: SignInFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showAuthNotice) {
      toast.error("এই পেজ দেখতে আগে সাইন ইন করুন।", { id: "auth-required" });
    }
  }, [showAuthNotice]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email")).trim();
    const password = String(formData.get("password"));

    setIsLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setIsLoading(false);

    if (error) {
      toast.error(error.message || "ইমেইল বা পাসওয়ার্ড সঠিক নয়।");
      return;
    }

    toast.success("সাইন ইন সফল হয়েছে।");
    router.push(redirectTo);
    router.refresh();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField
          label="ইমেইল"
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <FormField
          label="পাসওয়ার্ড"
          name="password"
          type="password"
          placeholder="কমপক্ষে ৮ অক্ষর"
          autoComplete="current-password"
          required
        />
        <button type="submit" disabled={isLoading} className="btn btn-primary">
          {isLoading && <span className="loading loading-spinner loading-sm" />}
          সাইন ইন
        </button>
      </form>

      <SocialButtons callbackURL={redirectTo} />

      <p className="text-center text-sm">
        অ্যাকাউন্ট নেই?{" "}
        <Link href="/signup" className="font-medium text-primary">
          সাইন আপ করুন
        </Link>
      </p>
    </>
  );
}
