import Link from "next/link";
import { Suspense } from "react";
import AuthActions from "@/components/layout/AuthActions";
import CategoryNav from "@/components/layout/CategoryNav";
import PriceTicker from "@/components/layout/PriceTicker";
import Container from "@/components/ui/Container";
import { getCategories } from "@/lib/api";
import { formatBanglaDate } from "@/lib/format";

// CartIcon
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path d="M2 7h16.800l-1.300 7.500H4.200z" fill="currentColor" />
      <path
        d="M7.200 7.600l.500 6.300M11 7.600v6.300M14.800 7.600l-.500 6.300M3.200 10.750h14.800"
        className="stroke-primary"
        strokeWidth={0.9}
        fill="none"
      />
      <path
        d="M22 3.500h-2.200L17.600 17.200H5.500"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="6.800" cy="20.300" r="1.700" fill="currentColor" />
      <circle cx="16.800" cy="20.300" r="1.700" fill="currentColor" />
    </svg>
  );
}

// CategoryLinks
async function CategoryLinks() {
  const categories = await getCategories();

  return <CategoryNav categories={categories} />;
}

// Navbar
export default function Navbar() {
  return (
    <header className="bg-base-100">
      {/* Brand Row Start */}
      <div className="border-b border-base-300">
        <Container className="flex items-center justify-between gap-3 py-3">
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content">
              <CartIcon />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="text-xl font-bold">বাজার দর</span>
              <span className="truncate text-xs text-base-content/70">
                <span className="hidden min-[360px]:inline">
                  {formatBanglaDate()}
                </span>
                <span className="min-[360px]:hidden">
                  {formatBanglaDate(undefined, false)}
                </span>
              </span>
            </span>
          </Link>
          <AuthActions />
        </Container>
      </div>
      {/* Brand Row End */}

      {/* Category Row Start */}
      <div className="border-b border-base-300">
        <Container className="py-2">
          <Suspense fallback={<div className="skeleton h-8 w-full max-w-xl" />}>
            <CategoryLinks />
          </Suspense>
        </Container>
      </div>
      {/* Category Row End */}

      {/* Price Ticker Start */}
      <Suspense fallback={<div className="h-9 border-b border-base-300" />}>
        <PriceTicker />
      </Suspense>
      {/* Price Ticker End */}
    </header>
  );
}
