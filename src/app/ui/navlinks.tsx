"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface LinkType {
  name: string;
  url: string;
}



export default function Navlinks() {
  const pathname = usePathname();
  
  const links: LinkType[] = [
    {
      name: "Manage Menu",
      url: "/dashboard/menu",
    },
    {
      name: "Manage Reservations",
      url: "/dashboard/reservations",
    },
    {
      name: "Restaurant Informations",
      url: "/contact",
    },
  ];

  return (
    links.map((link: LinkType) => {
      return (
        <Link
          key={link.name}
          href={link.url}
          className={clsx(
            "justify-center p-3 font-bold text-blue-600 font-medium md:text-xl rounded-md hover:overline",
            pathname === link.url && "overline"
          )}
        >
          <p>{link.name}</p>
        </Link>
      );
    })
  );
}
