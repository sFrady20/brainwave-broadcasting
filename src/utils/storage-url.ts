import { SUPABASE_URL } from "~/vars";

export function storageUrl(bucket: string, path: string | undefined | null) {
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`;
}
