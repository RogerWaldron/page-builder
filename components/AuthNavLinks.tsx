import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function AuthNavLinks() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      <Link
        href="/dashboard"
        className="mr-4 transition-colors text-foreground/60 hover:text-foreground/80"
      >
        Dashboard
      </Link>
    </div>
  ) : (
    ""
  );
}
