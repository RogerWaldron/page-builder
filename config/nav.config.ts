import { MainNavItem, SidebarNavItem } from "@/types/nav-item";

interface NavLinksConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: NavLinksConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Examples",
      href: "/examples",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
  ],
};
