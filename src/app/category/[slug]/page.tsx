import { notFound } from "next/navigation";
import SortableProductList from "@/components/product/SortableProductList";
import Container from "@/components/ui/Container";
import EmptyState from "@/components/ui/EmptyState";
import { getCategory, getProductsByCategory } from "@/lib/api";
import { formatNumber } from "@/lib/format";

// CategoryPage
export default async function CategoryPage({
  params,
}: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const [category, products] = await Promise.all([
    getCategory(slug),
    getProductsByCategory(slug),
  ]);

  if (!category) notFound();

  return (
    <Container className="flex flex-col gap-6 py-6">
      {/* Category Header Start */}
      <section className="panel flex items-center gap-3 p-4 sm:p-5">
        <span className="shrink-0 text-4xl">{category.icon}</span>
        <div className="min-w-0">
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm text-base-content/70">
            {formatNumber(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </section>
      {/* Category Header End */}

      {/* Category Products Start */}
      {products.length > 0 ? (
        <SortableProductList products={products} />
      ) : (
        <EmptyState
          title="কোনো পণ্য পাওয়া যায়নি"
          message="এই ক্যাটাগরিতে এখনো কোনো পণ্য যোগ করা হয়নি।"
        />
      )}
      {/* Category Products End */}
    </Container>
  );
}
