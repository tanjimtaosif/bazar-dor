import ProfileShell from "@/components/profile/ProfileShell";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { requireSession } from "@/lib/session";

// UpdateProfilePage
export default async function UpdateProfilePage() {
  const { user } = await requireSession("/profile/update");

  return (
    <ProfileShell
      title="তথ্য আপডেট করুন"
      subtitle="আপনার নাম পরিবর্তন করে আপডেট করুন।"
    >
      <section className="panel flex flex-col gap-5 p-4 sm:p-5">
        <h2 className="text-lg font-bold">তথ্য</h2>
        <UpdateProfileForm currentName={user.name} />
      </section>
    </ProfileShell>
  );
}
