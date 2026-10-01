"use client";


import { sidebarMenuItems } from "@/app/_config/sidebarMenuItems";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavbarProps, ISidebarItem } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();

  let navItems: ISidebarItem[] = [];

  if (user.data.profile.role === "USER") {
    navItems = sidebarMenuItems.USER;
  } else if (user.data.profile.role === "AUTHOR") {
    navItems = sidebarMenuItems.AUTHOR;
  } else if (user.data.profile.role === "ADMIN") {
    navItems = sidebarMenuItems.ADMIN;
  }

  return (
    <Sidebar
      collapsible="offcanvas"
      variant="sidebar"
      className="border-r"
    >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.label}
                      className="
                        h-10
                        rounded-md
                        px-3
                        transition-colors
                        hover:bg-accent
                        hover:text-accent-foreground
                        data-[active=true]:bg-primary
                        data-[active=true]:text-primary-foreground
                      "
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <item.icon className="h-5 w-5 shrink-0" />

                        <span className="truncate">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}