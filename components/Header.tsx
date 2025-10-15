"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm transition ${
        active ? "bg-brand text-white" : "text-slate-700 hover:bg-slate-100"
      }`}
    >
      {label}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-brand">Wellspring</Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/" label="Welcome" />
          <NavLink href="/events" label="Events" />
          <NavLink href="/blog" label="Blog" />
          <NavLink href="/resources" label="Resources" />
        </nav>
      </div>
    </header>
  );
}
