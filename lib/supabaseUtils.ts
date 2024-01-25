import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function isUserLoggedIn() {
  "use server";

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const result = await supabase.auth.getUser();

  return result.data.user != null ? true : false;
}
