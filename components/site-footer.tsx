import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

const footerNavs = [
  {
    label: "Product",
    items: [
      {
        href: "/",
        name: "Email Collection",
      },
      {
        href: "/pricing",
        name: "Pricing",
      },
      {
        href: "/faq",
        name: "FAQ",
      },
    ],
  },

  {
    label: "Community",
    items: [
      {
        href: "/",
        name: "Discord",
      },
      {
        href: "/",
        name: "Twitter",
      },
      {
        href: "mailto:hello@chatcollect.com",
        name: "Email",
      },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        href: "/terms",
        name: "Terms",
      },

      {
        href: "/privacy",
        name: "Privacy",
      },
    ],
  },
];

const footerSocials = [
  {
    href: "",
    name: "Discord",
    icon: <DiscordLogoIcon className="h-4 w-4" />,
  },
  {
    href: "",
    name: "Twitter",
    icon: <TwitterLogoIcon className="h-4 w-4" />,
  },
];

export function SiteFooter() {
  return (
    <>
      <footer className="w-full bg-black border-t border-gray-800 py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
            <div className="mb-12 flex-col flex gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/fundbridge.png"
                  alt="FundBridge Logo"
                  width={240}
                  height={66}
                  className="h-14 w-auto"
                />
              </Link>
              <p className="max-w-xs">Fundraising Technology for Nonprofits</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
              {footerNavs.map((nav) => (
                <div key={nav.label}>
                  <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                    {nav.label}
                  </h2>
                  <ul className="gap-2 grid">
                    {nav.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
            <div className="flex space-x-5 sm:justify-center sm:mt-0">
              {footerSocials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copyright © {new Date().getFullYear()}{" "}
              <Link href="/" className="cursor-pointer">
                FundBridge
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
      
      <div className="w-full h-24 bg-black fixed bottom-0 -z-10" />
      
      <style jsx global>{`
        #__next-route-announcer__,
        div[role="alert"][id^="__next-route-announcer"] {
          visibility: hidden !important;
          background: transparent !important;
          height: 1px !important;
          width: 1px !important;
          overflow: hidden !important;
          position: absolute !important;
          white-space: nowrap !important;
          clip: rect(0, 0, 0, 0) !important;
        }
      `}</style>
    </>
  );
}
