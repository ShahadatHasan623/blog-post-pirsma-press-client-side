/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getNewAccessToken } from "@/service/refreshToken";
import { jwtUtils } from "@/utils/jwt";
import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";
type PostState ={
   success:true,
   statusCode:number,
   message:string,
   data:Record<string,any>}


export const createPost =async(PreVState:PostState,formData:FormData)=>{
   const payload ={
      title:formData.get("title"),
      content:formData.get("content"),
      thumbnail:formData.get("thumbnail"),
      tags:(formData.get("tags")as string).split(", "),
      isPremium:formData.get("isPremium") === "on"
   }
   const cookieStore = await cookies();
   let accessToken = cookieStore.get("accessToken")?.value;
   const refreshToken = cookieStore.get("refreshToken")?.value;
   if (!accessToken && !refreshToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

    const decodedAccessToken = accessToken
      ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
      : null;
  
    const decodedRefreshToken = refreshToken
      ? jwtUtils.verifyToken(
          refreshToken,
          process.env.JWT_REFRESH_SECRET as string
        )
      : null;
  
    if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
      // If the access token is invalid but the refresh token is valid, you can generate a new access token here.
  
      const result = await getNewAccessToken();
  
      if (result.success) {
        const newAccessToken = result.data.accessToken;
        cookieStore.set("accessToken", newAccessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 24, // 1 day
          sameSite: "lax",
        });
        accessToken = newAccessToken;
       
      }
    }


  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts`, {
   method:"POST",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "content-type":"application/json"
    },
    body:JSON.stringify(payload)
    
  });

  const result = await res.json();
  if(result.success){
   revalidateTag("my-posts",{
    expire:0
   })
  }
  if(result.success && result.data.isPremium){
   revalidateTag("premium-posts","max")
  }else{
   revalidateTag("public-posts","max")
  }
  return result;

}
export const updatePost =async(postId:string,PreVState:PostState,formData:FormData)=>{
   const payload ={
      title:formData.get("title"),
      content:formData.get("content"),
      thumbnail:formData.get("thumbnail"),
      tags:(formData.get("tags")as string).split(", "),
      isPremium:formData.get("isPremium") === "on"
   }
   const cookieStore = await cookies();
   let accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
   if (!accessToken && !refreshToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

    const decodedAccessToken = accessToken
      ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
      : null;
  
    const decodedRefreshToken = refreshToken
      ? jwtUtils.verifyToken(
          refreshToken,
          process.env.JWT_REFRESH_SECRET as string
        )
      : null;
  
    if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
      // If the access token is invalid but the refresh token is valid, you can generate a new access token here.
  
      const result = await getNewAccessToken();
  
      if (result.success) {
        const newAccessToken = result.data.accessToken;
        cookieStore.set("accessToken", newAccessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 24, // 1 day
          sameSite: "lax",
        });
        accessToken = newAccessToken;
       
      }
    }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/${postId}`, {
   method:"PATCH",
    headers: {
      Cookie: `accessToken=${accessToken}`,
      "content-type":"application/json"
    },
    body:JSON.stringify(payload)
    
  });

  const result = await res.json();
  if(result.success){
   revalidateTag("my-posts",{
    expire:0
   })
  }
  if(result.success && result.data.isPremium){
   revalidateTag("premium-posts","max")
  }else{
   revalidateTag("public-posts","max")
  }
  return result;

}
export const getMyPost = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/posts/my-posts`, {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags:["my-posts"]
    },
  });

  const result = await res.json();

  return result;
};
