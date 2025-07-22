import { MdDashboard } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import Link from "next/link";
import LogoutButton from "../feature/logout";

export default function NavLinks({ isOpen }: { isOpen: boolean }) {
  // Variable
  const links = [
    { name: "dashboard", href: "/dashboard", icon: <MdDashboard /> },
    { name: "products", href: "/products", icon: <AiOutlineProduct /> },
    { name: "settings", href: "/settings", icon: <IoIosSettings /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 z-50 items-start flex flex-col justify-between  h-auto  w-64 bg-blue-700 p-4 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex`}
    >
      {/* Nav container */}
      <ul className="flex flex-col gap-4 text-white mt-10 md:mt-0">
        {links.map((link, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-lg capitalize  hover:opacity-80  duration-100 transition"
          >
            {/* Icon */}
            <span>{link.icon}</span>

            {/* Link */}
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Logout button */}
      <LogoutButton />
    </nav>
  );
}
