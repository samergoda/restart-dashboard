"use client";

import { logoutAction } from "@/lib/actions/logout";
import { Button } from "../ui/button";
import { IoIosLogOut } from "react-icons/io";

export default function LogoutButton() {
  return (
    <>
      {/* Logout button */}
      <Button
        className="bg-transparent flex items-center hover:opacity-80 capitalize hover:bg-transparent transition duration-300"
        onClick={async () => await logoutAction()}>
        {/* Logout icon */}
        <span>
          <IoIosLogOut />
        </span>
        {/* Text */}
        Logout
      </Button>
    </>
  );
}
