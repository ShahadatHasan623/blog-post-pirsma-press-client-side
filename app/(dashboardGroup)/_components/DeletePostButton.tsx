"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";


import { Button } from "@/components/ui/button";
import { deleteMyPost } from "../_actions/deleteMyPost";
import { toast } from "sonner";


type DeletePostButtonProps = {
   postId: string;
};

export function DeletePostButton({
   postId,
}: DeletePostButtonProps) {
   const [isPending, startTransition] = useTransition();

   const handleDelete = () => {
      const confirmed = window.confirm(
         "Are you sure you want to delete this post?"
      );

      if (!confirmed) return;
      startTransition(async () => {
         const result = await deleteMyPost(postId);

         console.log("DELETE RESULT:", result);

         if (result.success) {
            toast.success("Post deleted successfully!");
         } else {
            toast.error(result.message || "Delete failed!");
         }
      });
   };

   return (
      <Button
         type="button"
         variant="ghost"
         size="icon"
         onClick={handleDelete}
         disabled={isPending}
         className="text-destructive hover:text-destructive"
      >
         <Trash2 className="size-4" />
         <span className="sr-only">
            {isPending ? "Deleting..." : "Delete post"}
         </span>
      </Button>
   );
}