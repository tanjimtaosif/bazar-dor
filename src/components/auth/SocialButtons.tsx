"use client";

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

type SocialProvider = "google" | "github";

interface SocialButtonsProps {
  callbackURL?: string;
}

// GoogleIcon
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.500 5.500 0 0 1-2.400 3.600v3h3.900c2.300-2.100 3.500-5.200 3.500-8.800z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.200 0 6-1.100 8-2.900l-3.900-3c-1.100.700-2.500 1.200-4.100 1.200-3.100 0-5.800-2.100-6.700-5H1.300v3.100A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.300 14.300a7.200 7.200 0 0 1 0-4.600V6.600H1.300a12 12 0 0 0 0 10.800l4-3.100z"
      />
      <path
        fill="#EA4335"
        d="M12 4.800c1.800 0 3.300.600 4.600 1.800l3.400-3.400A12 12 0 0 0 1.300 6.600l4 3.100c.900-2.900 3.600-4.900 6.700-4.900z"
      />
    </svg>
  );
}

// GitHubIcon
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.800 23.400c.6.100.800-.300.800-.600v-2.200c-3.300.700-4-1.400-4-1.400-.600-1.400-1.300-1.800-1.300-1.800-1.100-.700.100-.700.100-.700 1.200.100 1.800 1.200 1.800 1.200 1.100 1.800 2.800 1.300 3.500 1 .100-.800.400-1.300.800-1.600-2.700-.300-5.500-1.300-5.500-5.900 0-1.300.500-2.400 1.200-3.200-.100-.300-.500-1.500.100-3.200 0 0 1-.300 3.300 1.200a11.500 11.500 0 0 1 6 0c2.300-1.500 3.300-1.200 3.300-1.200.700 1.700.200 2.900.100 3.200.800.800 1.200 1.900 1.200 3.200 0 4.600-2.800 5.600-5.500 5.900.400.400.800 1.100.800 2.200v3.300c0 .300.200.700.800.600A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

// SocialButtons
export default function SocialButtons({ callbackURL = "/" }: SocialButtonsProps) {
  const handleSocialSignIn = async (provider: SocialProvider) => {
    const { error } = await authClient.signIn.social({ provider, callbackURL });

    if (error) {
      toast.error(error.message || "সোশ্যাল লগইন করা যায়নি।");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="divider my-0 text-xs text-base-content/60">অথবা</div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => handleSocialSignIn("google")}
          className="btn btn-outline h-auto min-h-10 border-base-300 py-2 font-medium"
        >
          <GoogleIcon /> Google দিয়ে চালিয়ে যান
        </button>
        <button
          type="button"
          onClick={() => handleSocialSignIn("github")}
          className="btn btn-outline h-auto min-h-10 border-base-300 py-2 font-medium"
        >
          <GitHubIcon /> GitHub দিয়ে চালিয়ে যান
        </button>
      </div>
    </div>
  );
}
