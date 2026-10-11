import Link from "next/link";
import ProfileShell from "@/components/profile/ProfileShell";
import SignOutButton from "@/components/profile/SignOutButton";
import Avatar from "@/components/ui/Avatar";
import { requireSession } from "@/lib/session";

// ProfilePage
export default async function ProfilePage() {
  const { user } = await requireSession("/profile");

  return (
    <ProfileShell
      title="আমার প্রোফাইল"
      subtitle="আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।"
    >
      {/* User Card Start */}
      <section className="panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Avatar user={user} size={80} />
          <div className="min-w-0">
            <h2 className="truncate text-xl font-medium">{user.name}</h2>
            <p className="truncate text-base-content/70">{user.email}</p>
          </div>
        </div>
        <SignOutButton />
      </section>
      {/* User Card End */}

      {/* User Info Start */}
      <section className="panel flex flex-col gap-5 p-4 sm:p-5">
        <h2 className="text-lg font-bold">তথ্য</h2>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:px-6">
          <div className="min-w-0">
            <dt className="text-sm text-base-content/70">নাম</dt>
            <dd className="font-medium wrap-break-word">{user.name}</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-sm text-base-content/70">ইমেইল</dt>
            <dd className="font-medium break-all">{user.email}</dd>
          </div>
        </dl>
        <Link href="/profile/update" className="btn btn-primary sm:mx-6">
          আপডেট
        </Link>
      </section>
      {/* User Info End */}
    </ProfileShell>
  );
}
