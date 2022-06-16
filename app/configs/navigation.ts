import type {
  ConfigNavigation,
  LinkItem,
  LinkItems,
  LinkOrAnchorItems,
} from "~/types";

/**
 * Config Navigation Items (Links or Anchors)
 *
 * Used in:
 * - Multiple purpose for other navigation components
 * - Navigation Menu with Radix UI that has complex layout and positioning
 */

export const configNavigationHome: LinkItem = { to: "/", text: "Home" };

export const configNavigationPages: LinkItems = [
  { to: "/about", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/search", text: "Search" },
  { to: "/subscribe", text: "Subscribe" },
  { to: "/pricing", text: "Pricing" },
];

export const configNavigationAuth: LinkItems = [
  { to: "/signup", text: "Sign up" },
  { to: "/signin", text: "Sign in" },
  { to: "/signout", text: "Sign out" },
];

export const configNavigationEducation: LinkItems = [
  { to: "/learn", text: "Learn" },
  { to: "/tracks", text: "Tracks" },
  { to: "/members", text: "Members" },
  { to: "/projects", text: "Projects" },
  { to: "/discussions", text: "Discussions" },
];

export const configNavigationMisc: LinkOrAnchorItems = [
  {
    href: "https://app.splitbee.io/projects/rewinds.mhaidarhanif.com",
    text: "Splitbee Analytics",
  },
  { to: "/companies", text: "Companies" },
  { to: "/jobs", text: "Jobs" },
  { to: "/freelance", text: "Freelance" },
];

export const configNavigationExamples1: LinkItems = [
  { to: "/examples", text: "Examples" },
  { to: "/examples/alert", text: "Alert" },
  { to: "/examples/badge", text: "Badge" },
  { to: "/examples/button", text: "Button" },
  { to: "/examples/footer", text: "Footer" },
  { to: "/examples/form", text: "Form" },
  { to: "/examples/notification", text: "Notification" },
  { to: "/examples/tab", text: "Tab" },
  { to: "/examples/toast", text: "Toast" },
];

export const configNavigationExamples2: LinkItems = [
  { to: "/examples/theme", text: "Theme" },
  { to: "/examples/accordion", text: "Accordion" },
  { to: "/examples/code-highlight", text: "Code Highlight" },
  { to: "/examples/dialog", text: "Dialog" },
  { to: "/examples/menu", text: "Menu" },
  { to: "/examples/dropdown-menu", text: "Dropdown Menu" },
  { to: "/examples/navigation-menu", text: "Navigation Menu" },
];

export const configNavigationExamples3: LinkItems = [
  { to: "/examples/graphql", text: "GraphQL" },
  { to: "/examples/rest", text: "REST API" },
  { to: "/examples/catch", text: "Catch" },
  { to: "/examples/error", text: "Error" },
  { to: "/examples/debug", text: "Debug" },
];

export const configNavigationExamples: LinkItems = [
  ...configNavigationExamples1,
  ...configNavigationExamples2,
  ...configNavigationExamples3,
];

export const configNavigationLayouts: LinkItems = [
  { to: "/layouts", text: "Layouts" },
  { to: "/layouts/small", text: "Small" },
  { to: "/layouts/medium", text: "Medium" },
  { to: "/layouts/large", text: "Large" },
  { to: "/layouts/full", text: "Full" },
  { to: "/layouts/boundary", text: "Boundary" },
];

/**
 * Config Navigation Links
 *
 * Used in the Navigation Bar with 2 modes:
 * - Large screen mode (desktop, TV)
 * - Small screen mode (mobile, tablet)
 */

export const configNavigationBarLinks: LinkItems = [
  configNavigationHome,
  ...configNavigationPages,
  ...configNavigationExamples1,
  ...configNavigationExamples2,
  // In large screen, the auth links are as buttons
];

/**
 * Config Navigation Menu
 *
 * Used in:
 * - Navigation Menu Button for small screen with Headless UI
 * - Navigation Dropdown Menu for small screen with Radix UI
 */

export const configNavigationMenu: ConfigNavigation = [
  {
    name: "Pages",
    items: [configNavigationHome, ...configNavigationPages],
  },
  // In small screen, the auth links are in the Dropdown Menu or User Menu
  // {
  //   name: "Account",
  //   links: [...configNavigationAuth],
  // },
];

/**
 * Config Navigation Sitemap
 *
 * Used in the Footer with sitemap
 */

export const configNavigationSitemap: ConfigNavigation = [
  {
    name: "Pages",
    items: [configNavigationHome, ...configNavigationPages],
  },
  {
    name: "Account",
    items: [...configNavigationAuth],
  },
  {
    name: "Education",
    items: [...configNavigationEducation],
  },
  {
    name: "Misc",
    items: [...configNavigationMisc],
  },
  {
    name: "Examples",
    items: [...configNavigationExamples1, ...configNavigationExamples2],
  },
];
