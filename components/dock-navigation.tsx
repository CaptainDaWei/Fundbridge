"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  HomeIcon, 
  DocumentTextIcon, 
  InboxIcon, 
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  ChartPieIcon
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export function DockNavigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Hide the dock on landing page (root path) and auth pages
  const hideDockPaths = ['/', '/signin', '/signup', '/login', '/register'];
  if (hideDockPaths.includes(pathname)) {
    return null;
  }

  const navItems = [
    {
      icon: HomeIcon,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: DocumentTextIcon,
      label: "Application",
      href: "/application",
    },
    {
      icon: InboxIcon,
      label: "Inbox",
      href: "/inbox",
    },
    {
      icon: CurrencyDollarIcon,
      label: "Funds",
      href: "/funds",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      label: "Review",
      href: "/review",
    },
    {
      icon: UserCircleIcon,
      label: "Profile",
      href: "/profile",
    },
    {
      icon: ChartPieIcon,
      label: "Reports",
      href: "/reports",
    },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <div className="relative flex items-center gap-1 md:gap-2 px-2 py-3 bg-black/80 backdrop-blur-md rounded-full shadow-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isHovered = hoveredItem === item.href;
          const IconComponent = item.icon;
          
          return (
            <div key={item.href} className="relative flex flex-col items-center">
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -70 }}
                    exit={{ opacity: 0, y: -60, transition: { duration: 0.1 } }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-10 bg-black text-white text-xs font-medium py-1.5 px-2.5 rounded-md whitespace-nowrap pointer-events-none"
                    style={{ bottom: '50px' }}
                  >
                    {item.label}
                    <svg className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 5L0 0H10L5 5Z" fill="black" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Link 
                href={item.href}
                className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200 ${
                  isActive ? "bg-white/20" : "hover:bg-white/10"
                }`}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                aria-label={item.label}
              >
                <IconComponent 
                  className={`w-7 h-7 transition-transform duration-200 ${
                    isActive ? "text-white" : "text-white/70"
                  } ${isHovered ? "scale-110" : ""}`}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
} 