"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const deleteMyPost = async (postId: string) => {
   const cookieStore = await cookies();

   const accessToken = cookieStore.get("accessToken")?.value;

   if (!accessToken) {
      return {
         success: false,
         message: "User not logged in!",
      };
   }

   const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/posts/${postId}`,
      {
         method: "DELETE",
         headers: {
            Cookie: `accessToken=${accessToken}`,
            "content-type": "application/json",
         },
      }
   );

   const result = await res.json();

   if (result.success) {
      revalidateTag("my-posts", {
         expire: 0,
      });

      if (result.data?.isPremium) {
         revalidateTag("premium-posts", "max");
      } else {
         revalidateTag("public-posts", "max");
      }
   }

   return result;
};