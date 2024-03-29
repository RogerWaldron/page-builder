export const Components: Record<string, any> = {
  default: {
    accordion: {
      name: "accordion",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/accordion"),
      files: ["components/ui/accordion.tsx"],
    },
    alert: {
      name: "alert",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/alert"),
      files: ["components/ui/alert.tsx"],
    },
    "alert-dialog": {
      name: "alert-dialog",
      type: "components:ui",
      registryDependencies: ["button"],
      component: () => import("@/components/ui/alert-dialog"),
      files: ["components/ui/alert-dialog.tsx"],
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/aspect-ratio"),
      files: ["components/ui/aspect-ratio.tsx"],
    },
    avatar: {
      name: "avatar",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/avatar"),
      files: ["components/ui/avatar.tsx"],
    },
    badge: {
      name: "badge",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/badge"),
      files: ["components/ui/badge.tsx"],
    },
    button: {
      name: "button",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/button"),
      files: ["components/ui/button.tsx"],
    },
    calendar: {
      name: "calendar",
      type: "components:ui",
      registryDependencies: ["button"],
      component: () => import("@/components/ui/calendar"),
      files: ["components/ui/calendar.tsx"],
    },
    card: {
      name: "card",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/card"),
      files: ["components/ui/card.tsx"],
    },
    carousel: {
      name: "carousel",
      type: "components:ui",
      registryDependencies: ["button"],
      component: () => import("@/components/ui/carousel"),
      files: ["registry/default/ui/carousel.tsx"],
    },
    checkbox: {
      name: "checkbox",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/checkbox"),
      files: ["components/ui/checkbox.tsx"],
    },
    collapsible: {
      name: "collapsible",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/collapsible"),
      files: ["components/ui/collapsible.tsx"],
    },
    command: {
      name: "command",
      type: "components:ui",
      registryDependencies: ["dialog"],
      component: () => import("@/components/ui/command"),
      files: ["components/ui/command.tsx"],
    },
    "context-menu": {
      name: "context-menu",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/context-menu"),
      files: ["components/ui/context-menu.tsx"],
    },
    dialog: {
      name: "dialog",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/dialog"),
      files: ["components/ui/dialog.tsx"],
    },
    drawer: {
      name: "drawer",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/drawer"),
      files: ["components/ui/drawer.tsx"],
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/dropdown-menu"),
      files: ["components/ui/dropdown-menu.tsx"],
    },
    form: {
      name: "form",
      type: "components:ui",
      registryDependencies: ["button", "label"],
      component: () => import("@/components/ui/form"),
      files: ["components/ui/form.tsx"],
    },
    "hover-card": {
      name: "hover-card",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/hover-card"),
      files: ["components/ui/hover-card.tsx"],
    },
    input: {
      name: "input",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/input"),
      files: ["components/ui/input.tsx"],
    },
    label: {
      name: "label",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/label"),
      files: ["components/ui/label.tsx"],
    },
    menubar: {
      name: "menubar",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/menubar"),
      files: ["components/ui/menubar.tsx"],
    },
    "navigation-menu": {
      name: "navigation-menu",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/navigation-menu"),
      files: ["components/ui/navigation-menu.tsx"],
    },
    pagination: {
      name: "pagination",
      type: "components:ui",
      registryDependencies: ["button"],
      component: () => import("@/components/ui/pagination"),
      files: ["components/ui/pagination.tsx"],
    },
    popover: {
      name: "popover",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/popover"),
      files: ["components/ui/popover.tsx"],
    },
    progress: {
      name: "progress",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/progress"),
      files: ["components/ui/progress.tsx"],
    },
    "radio-group": {
      name: "radio-group",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/radio-group"),
      files: ["components/ui/radio-group.tsx"],
    },
    resizable: {
      name: "resizable",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/resizable"),
      files: ["components/ui/resizable.tsx"],
    },
    "scroll-area": {
      name: "scroll-area",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/scroll-area"),
      files: ["components/ui/scroll-area.tsx"],
    },
    select: {
      name: "select",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/select"),
      files: ["components/ui/select.tsx"],
    },
    separator: {
      name: "separator",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/separator"),
      files: ["components/ui/separator.tsx"],
    },
    sheet: {
      name: "sheet",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/sheet"),
      files: ["components/ui/sheet.tsx"],
    },
    skeleton: {
      name: "skeleton",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/skeleton"),
      files: ["components/ui/skeleton.tsx"],
    },
    slider: {
      name: "slider",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/slider"),
      files: ["components/ui/slider.tsx"],
    },
    sonner: {
      name: "sonner",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/sonner"),
      files: ["components/ui/sonner.tsx"],
    },
    switch: {
      name: "switch",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/switch"),
      files: ["components/ui/switch.tsx"],
    },
    table: {
      name: "table",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/table"),
      files: ["components/ui/table.tsx"],
    },
    tabs: {
      name: "tabs",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/tabs"),
      files: ["components/ui/tabs.tsx"],
    },
    textarea: {
      name: "textarea",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/textarea"),
      files: ["components/ui/textarea.tsx"],
    },
    toast: {
      name: "toast",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/toast"),
      files: [
        "components/ui/toast.tsx",
        "components/ui/use-toast.ts",
        "components/ui/toaster.tsx",
      ],
    },
    toggle: {
      name: "toggle",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/toggle"),
      files: ["components/ui/toggle.tsx"],
    },
    "toggle-group": {
      name: "toggle-group",
      type: "components:ui",
      registryDependencies: ["toggle"],
      component: () => import("@/components/ui/toggle-group"),
      files: ["components/ui/toggle-group.tsx"],
    },
    tooltip: {
      name: "tooltip",
      type: "components:ui",
      registryDependencies: undefined,
      component: () => import("@/components/ui/tooltip"),
      files: ["components/ui/tooltip.tsx"],
    },
  },
};
