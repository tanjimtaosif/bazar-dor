import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

// getSession
export async function getSession() {
  return auth.api.getSession({ headers: await headers() });
}

// requireSession
export async function requireSession(pathname: string) {
  const session = await getSession();

  if (!session) {
    redirect(`/signin?redirect=${encodeURIComponent(pathname)}`);
  }

  return session;
}
