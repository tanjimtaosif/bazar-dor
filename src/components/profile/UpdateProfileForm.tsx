"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import FormField from "@/components/ui/FormField";
import { authClient } from "@/lib/auth-client";

interface UpdateProfileFormProps {
  currentName: string;
}

// UpdateProfileForm
export default function UpdateProfileForm({ currentName }: UpdateProfileFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = String(new FormData(event.currentTarget).get("name")).trim();

    if (!name) {
      toast.error("আপনার নাম লিখুন।");
      return;
    }

    setIsLoading(true);
    const { error } = await authClient.updateUser({ name });
    setIsLoading(false);

    if (error) {
      toast.error(error.message || "তথ্য আপডেট করা যায়নি।");
      return;
    }

    toast.success("তথ্য আপডেট হয়েছে।");
    router.push("/profile");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:px-6">
      <FormField
        label="নাম"
        name="name"
        type="text"
        defaultValue={currentName}
        autoComplete="name"
        required
      />
      <button type="submit" disabled={isLoading} className="btn btn-primary">
        {isLoading && <span className="loading loading-spinner loading-sm" />}
        আপডেট
      </button>
    </form>
  );
}
