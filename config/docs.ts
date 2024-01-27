import { SidebarNavItem } from "@/types/nav-item";

interface DocsConfig {
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
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
    {
      title: "Components",
      items: [
        {
          files: ["ui/accordion.tsx"],
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          files: ["ui/alert.tsx"],
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
        },
        {
          files: ["ui/alert-dialog.tsx"],
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          files: ["ui/aspect-ratio.tsx"],
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio",
          items: [],
        },
        {
          files: ["ui/avatar.tsx"],
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          files: ["ui/badge.tsx"],
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          files: ["ui/button.tsx"],
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          files: ["ui/calendar.tsx"],
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
        },
        {
          files: ["ui/card.tsx"],
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          files: ["ui/carousel.tsx"],
          title: "Carousel",
          href: "/docs/components/carousel",
          items: [],
          label: "New",
        },
        {
          files: ["ui/checkbox.tsx"],
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          files: ["ui/collapsible.tsx"],
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          files: ["ui/command.tsx"],
          title: "Command",
          href: "/docs/components/command",
          items: [],
        },
        {
          files: ["ui/context-menu.tsx"],
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          files: ["ui/dialog.tsx"],
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          files: ["ui/drawer.tsx"],
          title: "Drawer",
          href: "/docs/components/drawer",
          items: [],
          label: "New",
        },
        {
          files: ["ui/dropdown-menu.tsx"],
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          files: ["ui/form.tsx"],
          title: "Form",
          href: "/docs/components/form",
          items: [],
        },
        {
          files: ["ui/hover-card.tsx"],
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: [],
        },
        {
          files: ["ui/input.tsx"],
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          files: ["ui/label.tsx"],
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          files: ["ui/menubar.tsx"],
          title: "Menubar",
          href: "/docs/components/menubar",
          items: [],
        },
        {
          files: ["ui/navigation-menu.tsx"],
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
        },
        {
          files: ["ui/pagination.tsx"],
          title: "Pagination",
          href: "/docs/components/pagination",
          items: [],
          label: "New",
        },
        {
          files: ["ui/popover.tsx"],
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          files: ["ui/progress.tsx"],
          title: "Progress",
          href: "/docs/components/progress",
          items: [],
        },
        {
          files: ["ui/radio-group.tsx"],
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          files: ["ui/resizable.tsx"],
          title: "Resizable",
          href: "/docs/components/resizable",
          items: [],
          label: "New",
        },
        {
          files: ["ui/scroll-area.tsx"],
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
        },
        {
          files: ["ui/select.tsx"],
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          files: ["ui/separator.tsx"],
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
        },
        {
          files: ["ui/sheet.tsx"],
          title: "Sheet",
          href: "/docs/components/sheet",
          items: [],
        },
        {
          files: ["ui/skeleton.tsx"],
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: [],
        },
        {
          files: ["ui/slider.tsx"],
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          files: ["ui/sonner.tsx"],
          title: "Sonner",
          href: "/docs/components/sonner",
          items: [],
          label: "New",
        },
        {
          files: ["ui/switch.tsx"],
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          files: ["ui/table.tsx"],
          title: "Table",
          href: "/docs/components/table",
          items: [],
        },
        {
          files: ["ui/tabs.tsx"],
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          files: ["ui/textarea.tsx"],
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          files: ["ui/toast.tsx", "ui/use-toast.ts", "ui/toaster.tsx"],
          title: "Toast",
          href: "/docs/components/toast",
          items: [],
        },
        {
          files: ["ui/toggle.tsx"],
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
        },
        {
          files: ["ui/toggle-group.tsx"],
          title: "Toggle Group",
          href: "/docs/components/toggle-group",
          items: [],
        },
        {
          files: ["ui/tooltip.tsx"],
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
  ],
};
