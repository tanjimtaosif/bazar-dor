import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import logoIcon from "@/app/assets/logo-icon.png";
import AuthActions from "@/components/layout/AuthActions";
import CategoryNav from "@/components/layout/CategoryNav";
import PriceTicker from "@/components/layout/PriceTicker";
import Container from "@/components/ui/Container";
import { getCategories } from "@/lib/api";
import { formatBanglaDate } from "@/lib/format";

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
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary">
              <Image src={logoIcon} alt="বাজার দর" width={22} height={22} />
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
