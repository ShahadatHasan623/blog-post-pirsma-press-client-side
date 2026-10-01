import {
  FileText,
  User,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

export const sidebarMenuItems = {
  USER: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "My Posts",
      href: "/dashboard/my-posts",
      icon: FileText,
    },
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ],

  AUTHOR: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "My Posts",
      href: "/dashboard/my-posts",
      icon: FileText,
    },
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ],

  ADMIN: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Posts",
      href: "/dashboard/posts",
      icon: FileText,
    },
    {
      label: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ],
};