"use server";

import { createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addOrRemoveFavorite(formData: FormData) {
  const photoName = formData.get("photoName");
  const isFavorited = formData.get("isFavorited");

  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { success: false, error: "User is not authenticated" };

  if (isFavorited === "true") {
    const { error } = await supabase
      .from("favorites")
      .delete()
      .match({ user_id: user.id, photo_name: photoName });
    if (error) {
      return { success: false, error };
    }
  } else {
    const { error } = await supabase
      .from("favorites")
      .insert([{ user_id: user.id, photo_name: photoName }]);

    if (error) {
      return { success: false, error };
    }
  }
  revalidatePath("/photos");
  revalidatePath("/favorites");

  return { success: true };
}
