import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
const HomeHeader = () => {
  const links: { label: string; href: string; className?: string }[] = [
    {
      label: "Gmail",
      href: "https://mail.google.com",
      className: "hover:underline",
    },
    {
      label: "Images",
      href: "https://image.google.com",
      className: "hover:underline",
    },
  ];
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className={link.className}>
            {link.label}
          </Link>
        ))}

        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
