"use server";

import { Post } from "@/lib/types";
import { cookies } from "next/headers";

export const getByPublicNews = async (id: string): Promise<Post | null> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return null;
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/${id}`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const result = await res.json();

  return result.data ?? null;
};
