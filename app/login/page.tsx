import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { isUserLoggedIn } from "@/lib/supabaseUtils";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const alreadyDone = await isUserLoggedIn();

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/dashboard");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return alreadyDone ? (
    <div className="flex flex-col justify-center flex-1 w-full gap-2 px-8 mx-auto sm:max-w-md">
      <p>You are already logged in!</p>
    </div>
  ) : (
    <div className="flex flex-col justify-center flex-1 w-full gap-2 px-8 mx-auto sm:max-w-md">
      <Link
        href="/"
        className="flex items-center py-2 text-sm no-underline transition-colors rounded-md justify-left hover:text-foreground/80 text-foreground/60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form
        className="flex flex-col justify-center flex-1 w-full gap-2 animate-in text-foreground"
        action={signIn}
      >
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="px-4 py-2 mb-6 border rounded-md bg-inherit"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="px-4 py-2 mb-6 border rounded-md bg-inherit"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <div className="flex-auto gap-4 mx-auto mb-6">
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2">
            <button className="px-3 py-2 text-lg font-medium leading-6 bg-green-700 rounded-md text-foreground">
              Sign In
            </button>
            <button
              formAction={signUp}
              className="px-3 py-2 text-lg font-medium leading-6 rounded-md border-foreground/20 text-foreground"
            >
              Sign Up
            </button>
          </div>
        </div>
        {searchParams?.message && (
          <p className="p-4 mt-4 text-center bg-foreground/10 text-foreground">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
