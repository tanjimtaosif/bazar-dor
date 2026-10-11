import { formatNumber, formatPrice, getMarketStats } from "@/lib/format";

interface MarketTableProps {
  rows: ReturnType<typeof getMarketStats>["rows"];
}

// MarketTable
export default function MarketTable({ rows }: MarketTableProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">বাজারভিত্তিক আজকের দাম</h2>

      {/* Mobile List Start */}
      <ul className="flex flex-col divide-y divide-base-300 rounded-xl border border-base-300 sm:hidden">
        {rows.map((row) => (
          <li
            key={row.market}
            className="flex items-center justify-between gap-3 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="font-medium wrap-break-word">{row.market}</p>
              <p className="text-xs text-base-content/70">{row.division}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-semibold">{formatPrice(row.average)}</p>
              <p className="text-xs text-base-content/70">
                {formatNumber(row.min)} – {formatNumber(row.max)} টাকা
              </p>
            </div>
          </li>
        ))}
      </ul>
      {/* Mobile List End */}

      <div className="hidden overflow-x-auto rounded-xl border border-base-300 sm:block">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>বাজার</th>
              <th>বিভাগ</th>
              <th className="text-right">সর্বনিম্ন</th>
              <th className="text-right">সর্বাধিক</th>
              <th className="text-right">গড়</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.market}>
                <td className="whitespace-nowrap font-medium">{row.market}</td>
                <td className="whitespace-nowrap">{row.division}</td>
                <td className="whitespace-nowrap text-right">
                  {formatPrice(row.min)}
                </td>
                <td className="whitespace-nowrap text-right">
                  {formatPrice(row.max)}
                </td>
                <td className="whitespace-nowrap text-right font-semibold">
                  {formatPrice(row.average)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
