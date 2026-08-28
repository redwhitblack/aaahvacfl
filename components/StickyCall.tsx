"use client";

import Link from "next/link";

export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
      <Link
        href="/contact"
        className="block rounded-full bg-gulf py-3 text-center text-xs tracking-[0.16em] uppercase text-paper"
      >
        Request service
      </Link>
    </div>
  );
}
