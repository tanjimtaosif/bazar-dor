import Image from "next/image";
import heroImage from "@/app/assets/bazar-hero.png";
import { ALL_PRODUCTS_SECTION_ID } from "@/lib/constants";
import { formatBanglaDate } from "@/lib/format";

// Hero
export default function Hero() {
  return (
    <section className="panel flex flex-col items-center gap-6 p-5 md:flex-row md:justify-between md:p-6">
      <div className="flex min-w-0 flex-col items-start gap-4 self-stretch md:self-auto">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {formatBanglaDate()}
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">
          আজকের বাজারের দাম এক নজরে
        </h1>
        <p className="max-w-xl leading-relaxed text-base-content/70">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <a
          href={`#${ALL_PRODUCTS_SECTION_ID}`}
          className="btn btn-primary btn-sm mt-2 sm:btn-md"
        >
          সব পণ্য দেখুন
        </a>
      </div>
      <Image
        src={heroImage}
        alt="বাজারের ঝুড়ি"
        priority
        className="h-auto w-44 shrink-0 sm:w-56 md:w-72"
      />
    </section>
  );
}
