"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/admin", icon: HomeIcon },
  {
    name: "Reservations",
    href: "/admin/reservations",
    icon: DocumentDuplicateIcon,
  },
  { name: "Rooms", href: "/admin/rooms", icon: UserGroupIcon },
  { name: "Vouchers", href: "/admin/vouchers", icon: UserGroupIcon },
  { name: "Statistics", href: "/admin/statistics", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md text-blue-300 bg-gray-50 p-3 text-sm font-medium hover:bg-sky-300 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
              // conditional classes to highlight the active link
              { "bg-sky-300 text-white": pathname === link.href }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
