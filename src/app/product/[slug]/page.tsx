import { notFound } from "next/navigation";
import MarketTable from "@/components/product/MarketTable";
import PriceSummary from "@/components/product/PriceSummary";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHeader from "@/components/product/ProductHeader";
import Container from "@/components/ui/Container";
import { getProductBySlug } from "@/lib/api";
import { getMarketStats } from "@/lib/format";
import { requireSession } from "@/lib/session";

// ProductPage
export default async function ProductPage({
  params,
}: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  await requireSession(`/product/${slug}`);

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const stats = getMarketStats(product);

  return (
    <Container className="flex flex-col gap-6 py-6">
      <ProductBreadcrumb product={product} />

      {/* Product Summary Start */}
      <ProductHeader product={product} />
      {/* Product Summary End */}

      <section className="panel flex flex-col gap-8 p-4 sm:p-5">
        {/* Price Summary Start */}
        <PriceSummary product={product} stats={stats} />
        {/* Price Summary End */}

        {/* Market Prices Start */}
        <MarketTable rows={stats.rows} />
        {/* Market Prices End */}
      </section>
    </Container>
  );
}
