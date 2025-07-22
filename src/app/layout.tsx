import type { Metadata } from "next";
import "./globals.css";
import Sidenav from "@/components/layout/sidenav";
import { cookies } from "next/headers";
import { Toaster } from "@/components/ui/sonner";
import RootProviders from "@/components/provider";

export const metadata: Metadata = {
  title: "Restart",
  description: "restore admin dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  return (
    <html lang="en">
      <body className="flex">
        <RootProviders>
          {token && <Sidenav />}
          <main className={`container p-4 ${!token ? "w-full" : ""}`}>{children}</main>

          {/* Toaster */}
          <Toaster />
        </RootProviders>
      </body>
    </html>
  );
}
