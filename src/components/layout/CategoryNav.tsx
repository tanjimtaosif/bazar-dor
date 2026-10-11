"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { Category } from "@/types";

interface CategoryNavProps {
  categories: Category[];
}

// CategoryNav
export default function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');

    if (!nav || !active) return;

    nav.scrollTo({
      left: active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="scrollbar-none relative -mx-4 flex gap-1 overflow-x-auto px-4"
    >
      {categories.map((category) => {
        const isActive = pathname === `/category/${category.slug}`;

        return (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary text-primary-content"
                : "hover:bg-base-200"
            }`}
          >
            <span>{category.icon}</span>
            {category.nameBn}
          </Link>
        );
      })}
    </nav>
  );
}
