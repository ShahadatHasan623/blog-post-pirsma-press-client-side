"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function SubscribeButton() {
  const [pending, setPending] = useState(false);

  const handleSubscribe = async () => {
    setPending(true);

    // Demo API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setPending(false);

    toast.success("Checkout started successfully!", {
      description: "Demo payment checkout is ready.",
    });
  };

  return (
    <Button
      type="button"
      onClick={handleSubscribe}
      disabled={pending}
      className="w-full"
    >
      {pending ? "Redirecting..." : "Subscribe Now"}
    </Button>
  );
}