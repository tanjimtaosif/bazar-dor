import AuthShell from "@/components/auth/AuthShell";
import SignInForm from "@/components/auth/SignInForm";
import { getSafeRedirect } from "@/lib/format";

// SignInPage
export default async function SignInPage({
  searchParams,
}: PageProps<"/signin">) {
  const { redirect } = await searchParams;
  const redirectParam = typeof redirect === "string" ? redirect : null;

  return (
    <AuthShell
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
    >
      <SignInForm
        redirectTo={getSafeRedirect(redirectParam)}
        showAuthNotice={Boolean(redirectParam)}
      />
    </AuthShell>
  );
}
