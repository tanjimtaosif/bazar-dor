import { formatNumber, getMarketStats, getUnitLabel } from "@/lib/format";
import type { Product } from "@/types";

interface PriceSummaryProps {
  product: Product;
  stats: ReturnType<typeof getMarketStats>;
}

// PriceSummary
export default function PriceSummary({ product, stats }: PriceSummaryProps) {
  const items = [
    {
      label: "সর্বনিম্ন দাম",
      value: stats.min,
      note: "সবচেয়ে কম দামের বাজার",
      className: "text-success",
    },
    {
      label: "সর্বাধিক দাম",
      value: stats.max,
      note: "সবচেয়ে বেশি দামের বাজার",
      className: "text-error",
    },
    {
      label: "গড় দাম",
      value: stats.average,
      note: `প্রতি ${getUnitLabel(product.unit)}-এর হিসাবে`,
      className: "text-primary",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">দামের সারসংক্ষেপ</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="panel flex min-w-0 flex-col gap-1 px-4 py-4 md:px-6"
          >
            <p className="text-xs text-base-content/70">{item.label}</p>
            <p className={item.className}>
              <span className="text-2xl font-bold">
                {formatNumber(item.value)}
              </span>{" "}
              টাকা
            </p>
            <p className="text-xs text-base-content/70">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
