"use server";

import { createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import type { Database } from '@/types/supabase'

function extractFilePath(url: string) {
  const parts = url.split("/user_uploads/");
  if (parts.length < 2) {
    console.error("Invalid URL format");
    return "";
  }
  let filePath = parts[1];
  if (filePath.includes("?")) {
    filePath = filePath.split("?")[0];
  }
  return "user_uploads/" + filePath;
}

export async function deletePhoto(formData: FormData) {
  const src = formData.get("photoPath") as string;
  const filePath = extractFilePath(src);
  const cookieStore = cookies();
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );
  console.log({ filePath });
  const { error } = await supabase.storage.from("photos").remove([filePath]);
  console.log({ error });
  if (error) {
    return { success: false, error };
  }
  revalidatePath("/photos");
  revalidatePath("/favorites");

  return { success: true };
}
