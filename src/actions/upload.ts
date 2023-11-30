"use server";

import { $supabase } from "./supabase";

export async function $upload(bucket: string, file: File) {
  const supabase = await $supabase();

  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random().toString(32).substring(2)}.${fileExt}`;
  const filePath = `${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  return filePath;
}
