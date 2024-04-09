import {
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
  RocketLaunchIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

export const sidebar_navigation = [
  {
    name: "Dashboard",
    href: "startup-dashboard",
    icon: HomeIcon,
    current: false,
  },
  {
    name: "Investors",
    href: "investors",
    icon: UserIcon,
    current: true,
  },
  {
    name: "Startups",
    href: "startups",
    icon: RocketLaunchIcon,
    current: false,
  },
  {
    name: "Company Profile",
    href: "startup-profile",
    icon: FolderIcon,
    current: false,
  },
  { name: "Settings", href: "settings", icon: Cog6ToothIcon, current: false },
  {
    name: "Log Out",
    href: "/",
    icon: ArrowLeftStartOnRectangleIcon,
    current: false,
  },
];

export const all_investors = [
  {
    name: "Leslie Alexander",
    title: "Co-Founder / CEO",
    company: "Example Inc.",
    industry_focus: "Technology",
    email: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    past_deals: "Stripe, Brex",
  },
  {
    name: "Michael Foster",
    title: "CTO",
    company: "Example Inc.",
    industry_focus: "Technology",
    email: "michael.foster@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    past_deals: "Airbnb, Uber",
  },
  {
    name: "Leslie Alexander",
    title: "Co-Founder / CEO",
    company: "Example Inc.",
    industry_focus: "Technology",
    email: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    past_deals: "Stripe, Brex",
  },
  {
    name: "Michael Foster",
    title: "CTO",
    company: "Example Inc.",
    industry_focus: "Technology",
    email: "michael.foster@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    past_deals: "Airbnb, Uber",
  },
  {
    name: "Leslie Alexander",
    title: "Co-Founder / CEO",
    company: "Example Inc.",
    industry_focus: "Technology",
    email: "leslie.alexander@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    past_deals: "Stripe, Brex",
  },
  {
    name: "Michael Foster",
    title: "CTO",
    company: "Example Inc.",
    industry_focus: "Technology",
    email: "michael.foster@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    href: "#",
    past_deals: "Airbnb, Uber",
  },
];
