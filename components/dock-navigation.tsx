"use client";

import { usePathname, useRouter } from "next/navigation";
import { 
  HomeIcon, 
  DocumentTextIcon, 
  InboxIcon, 
  CurrencyDollarIcon, 
  ClipboardDocumentCheckIcon, 
  UserIcon,
  ChartPieIcon
} from "@heroicons/react/24/outline";
import { Dock, DockItem, DockLabel, DockIcon } from "@/components/ui/dock";
import { cn } from "@/lib/utils";

const navItems = [
  {
    icon: HomeIcon,
    label: "Dashboard",
    href: "/dashboard"
  },
  {
    icon: DocumentTextIcon,
    label: "Apply",
    href: "/apply"
  },
  {
    icon: InboxIcon,
    label: "Inbox",
    href: "/inbox"
  },
  {
    icon: CurrencyDollarIcon,
    label: "Funds",
    href: "/funds"
  },
  {
    icon: ClipboardDocumentCheckIcon,
    label: "Review",
    href: "/review"
  },
  {
    icon: UserIcon,
    label: "Profile",
    href: "/profile"
  },
  {
    icon: ChartPieIcon,
    label: "Reports",
    href: "/reports"
  }
];

export function DockNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <Dock>
        {navItems.map((item) => (
          <div key={item.href} onClick={() => router.push(item.href)}>
            <DockItem className={pathname === item.href ? "text-primary" : "text-muted-foreground"}>
              <DockIcon>
                <item.icon className="h-6 w-6" />
              </DockIcon>
              <DockLabel>{item.label}</DockLabel>
            </DockItem>
          </div>
        ))}
      </Dock>
    </div>
  );
} 