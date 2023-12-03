import Link from "next/link";
import CountryLookup from "./components/CountryLookup";

const HomeFooter = () => {
  const googleLinks: { label: string; href: string }[] = [
    {
      label: "About",
      href: "https://about.google/?utm_source=google-IR&utm_medium=referral&utm_campaign=hp-footer&fg=1",
    },
    {
      label: "Advertising",
      href: "https://ads.google.com/intl/en_ir/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1",
    },
    {
      label: "Business",
      href: "https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none",
    },
    {
      label: "How Search works",
      href: "https://www.google.com/search/howsearchworks/?fg=1",
    },
  ];
  const settingLinks: { label: string; href: string }[] = [
    {
      label: "Privacy",
      href: "https://policies.google.com/privacy?hl=en-IR&fg=1",
    },
    {
      label: "Terms",
      href: "https://policies.google.com/terms?hl=en-IR&fg=1",
    },
  ];
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          {googleLinks.map((link) => (
            <Link
              key={link.label}
              target="_blank"
              href={link.href}
              className="no-underline hover:underline cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <ul className="flex items-center space-x-6">
          {settingLinks.map((link) => (
            <Link
              key={link.label}
              target="_blank"
              href={link.href}
              className="no-underline hover:underline cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <li className="no-underline hover:underline cursor-pointer">
            Settings
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default HomeFooter;
