"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Category } from "@/types";

const EDGE_THRESHOLD = 4;

interface CategoryNavProps {
  categories: Category[];
}

// CategoryNav
export default function CategoryNav({ categories }: CategoryNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [edges, setEdges] = useState({ start: false, end: false });

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');

    if (!nav || !active) return;

    nav.scrollTo({
      left: active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [pathname]);

  const updateEdges = () => {
    const nav = navRef.current;

    if (!nav) return;

    const maxScroll = nav.scrollWidth - nav.clientWidth;

    setEdges({
      start: nav.scrollLeft > EDGE_THRESHOLD,
      end: nav.scrollLeft < maxScroll - EDGE_THRESHOLD,
    });
  };

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const observer = new ResizeObserver(updateEdges);
    observer.observe(nav);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative -mx-4">
      <nav
        ref={navRef}
        onScroll={updateEdges}
        className="scrollbar-none relative flex gap-1 overflow-x-auto overscroll-x-contain px-4"
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

      {/* Scroll Hints Start */}
      {edges.start && (
        <span className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-base-100 to-transparent" />
      )}
      {edges.end && (
        <span className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-base-100 to-transparent" />
      )}
      {/* Scroll Hints End */}
    </div>
  );
}
