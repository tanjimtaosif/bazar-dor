import Link from "next/link";
import type { Product } from "@/types";

interface ProductBreadcrumbProps {
  product: Product;
}

// ProductBreadcrumb
export default function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  return (
    <nav className="breadcrumbs px-1 text-sm">
      <ul>
        <li>
          <Link href="/">হোম</Link>
        </li>
        <li>
          <Link href={`/category/${product.category}`}>
            {product.categoryNameBn}
          </Link>
        </li>
        <li>{product.nameBn}</li>
      </ul>
    </nav>
  );
}
