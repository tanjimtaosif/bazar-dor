import { CHANGE_STYLES } from "@/lib/constants";
import { formatPercent } from "@/lib/format";
import type { Product } from "@/types";

interface ChangeBadgeProps {
  change: Product["change"];
  className?: string;
}

// ChangeBadge
export default function ChangeBadge({ change, className = "" }: ChangeBadgeProps) {
  const style = CHANGE_STYLES[change.dir];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-base-200 px-2.5 py-0.5 text-xs font-medium ${style.className} ${className}`}
    >
      <span>{style.icon}</span>
      {formatPercent(change.pct)}
    </span>
  );
}
