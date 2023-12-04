"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const SearchHeaderOptions = () => {
  const term = useSearchParams().get("searchTerm");
  const pathname = usePathname();
  const links: { label: string; href: string; className?: string }[] = [
    {
      label: "All",
      href: "/search/web",
    },
    {
      label: "Image",
      href: "/search/image",
    },
  ];
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      {links.map((link) => (
        <Link
          className={classNames({
            "flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2":
              true,
            "!text-blue-600 !border-blue-600": pathname === link.href,
          })}
          key={link.label}
          href={`${link.href}?searchTerm=${term}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default SearchHeaderOptions;
