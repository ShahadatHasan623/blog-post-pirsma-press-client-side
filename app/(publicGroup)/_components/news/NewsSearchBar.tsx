"use client";

import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NewsSearchBar = () => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSearch = (value: string) => {
    // const params = new URLSearchParams()
    // if (value) {
    //   params.set("searchTerm", value)
    // } else {
    //   params.delete("searchTerm")
    // }
    // router.replace(`${pathname}?${params.toString()}`)
    if(debouncedReference.current){
      clearTimeout(debouncedReference.current)
    }
    debouncedReference.current = setTimeout(() => {
      const params = new URLSearchParams()
      if (value) {
        params.set("searchTerm", value)
      } else {
        params.delete("searchTerm")
      }
      router.replace(`${pathname}?${params.toString()}`)

    }, 500)
  };

  return (
    <div className="flex w-full max-w-xl items-center gap-2">
      <div className="relative flex-1">
        <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />

        <Input
          type="search"
          placeholder="Search news..."
          defaultValue={searchParams.get("searchTerm") ? searchParams.get("searchTerm")?.toString() : ""}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-9"
        />
      </div>


    </div>
  );
};

export default NewsSearchBar;