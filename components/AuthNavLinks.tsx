import Link from "next/link";
import { cn } from "@/lib/utils";
import { getUserLoggedIn } from "@/lib/supabaseUtils";
import { getBrowserURL } from "@/lib/client";

export default async function AuthNavLinks() {
  const user = await getUserLoggedIn();

  return user ? (
    <div className="flex items-center gap-4 mx-4">
      <Link
        href="/dashboard"
        className="transition-colors hover:text-foreground/80"
      >
        Dashboard
      </Link>
      <Link
        href="/photos"
        className="transition-colors hover:text-foreground/80"
      >
        Photos
      </Link>
    </div>
  ) : (
    ""
  );
}
