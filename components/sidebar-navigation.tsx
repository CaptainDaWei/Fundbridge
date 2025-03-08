"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  InboxIcon,
  ClipboardDocumentListIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

export function SidebarNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  // Only show sidebar on application page
  if (!pathname.includes("/application")) {
    return null;
  }

  // Internal navigation for application page sections
  const applicationNavItems = [
    {
      title: "Overview",
      href: "#overview",
      icon: HomeIcon,
      section: "overview",
    },
    {
      title: "Application Builder",
      href: "#application-builder",
      icon: DocumentTextIcon,
      section: "application-builder",
    },
    {
      title: "Messages",
      href: "#messages",
      icon: InboxIcon,
      section: "messages",
    },
    {
      title: "Funding Opportunities",
      href: "#opportunities",
      icon: CalendarIcon,
      section: "opportunities",
    },
    {
      title: "Review Applications",
      href: "#review",
      icon: ClipboardDocumentListIcon,
      section: "review",
    },
    {
      title: "Profile Settings",
      href: "#profile",
      icon: CogIcon,
      section: "profile",
    },
    {
      title: "Analytics & Reports",
      href: "#analytics",
      icon: ChartBarIcon,
      section: "analytics",
    },
  ];

  // Handle anchor link clicks with smooth scroll
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
      // Close mobile menu when clicking a link
      setIsMobileMenuOpen(false);
    }
  };

  // Use effect to handle intersection observer for active section
  useEffect(() => {
    const sections = applicationNavItems.map(item => item.section);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px -50px 0px" }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [applicationNavItems]);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="fixed top-4 left-4 z-40 md:hidden">
        <button
          className="rounded-md bg-white p-2 text-gray-500 shadow-md dark:bg-gray-800 dark:text-gray-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Backdrop for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto bg-white px-4 py-6 shadow-lg transition-transform dark:bg-gray-800 md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center">
          <Link
            href="/dashboard"
            className="flex items-center text-xl font-bold text-gray-900 dark:text-white"
          >
            <span className="rounded-md bg-primary p-2 text-white mr-2">FB</span>
            FundBridge
          </Link>
        </div>

        <nav className="space-y-1">
          {applicationNavItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
                activeSection === item.section
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 ${
                  activeSection === item.section
                    ? "text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              />
              {item.title}
            </a>
          ))}
        </nav>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/dashboard"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <HomeIcon className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
            Back to Dashboard
          </Link>
        </div>
      </aside>
    </>
  );
} 