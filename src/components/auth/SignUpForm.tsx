"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialButtons from "@/components/auth/SocialButtons";
import FormField from "@/components/ui/FormField";
import { authClient } from "@/lib/auth-client";

const MIN_PASSWORD_LENGTH = 8;

// SignUpForm
export default function SignUpForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const password = String(formData.get("password"));
    const confirmPassword = String(formData.get("confirmPassword"));

    if (!name) {
      toast.error("আপনার নাম লিখুন।");
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না।");
      return;
    }

    setIsLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });

    if (error) {
      setIsLoading(false);
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি।");
      return;
    }

    await authClient.signOut();
    setIsLoading(false);

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে। এখন সাইন ইন করুন।");
    router.push("/signin");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormField
          label="নাম"
          name="name"
          type="text"
          placeholder="যেমন: রহিম উদ্দিন"
          autoComplete="name"
          required
        />
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
          autoComplete="new-password"
          required
        />
        <FormField
          label="পাসওয়ার্ড নিশ্চিত করুন"
          name="confirmPassword"
          type="password"
          placeholder="আবার লিখুন"
          autoComplete="new-password"
          required
        />
        <button type="submit" disabled={isLoading} className="btn btn-primary">
          {isLoading && <span className="loading loading-spinner loading-sm" />}
          অ্যাকাউন্ট তৈরি করুন
        </button>
      </form>

      <SocialButtons />

      <p className="text-center text-sm">
        অ্যাকাউন্ট আছে?{" "}
        <Link href="/signin" className="font-medium text-primary">
          সাইন ইন করুন
        </Link>
      </p>
    </>
  );
}
