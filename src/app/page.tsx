import Hero from "@/components/home/Hero";
import ProductSection from "@/components/home/ProductSection";
import Container from "@/components/ui/Container";
import { getProducts, getTopMovers } from "@/lib/api";
import { ALL_PRODUCTS_SECTION_ID } from "@/lib/constants";
import { formatNumber } from "@/lib/format";

// HomePage
export default async function HomePage() {
  const products = await getProducts();

  return (
    <Container className="flex flex-col gap-8 py-4 sm:gap-10 sm:py-6">
      {/* Hero Start */}
      <Hero />
      {/* Hero End */}

      {/* Price Up Start */}
      <ProductSection
        title={
          <>
            <span className="text-sm text-error">▲</span> আজ দাম বেড়েছে
          </>
        }
        products={getTopMovers(products, "up")}
      />
      {/* Price Up End */}

      {/* Price Down Start */}
      <ProductSection
        title={
          <>
            <span className="text-sm text-success">▼</span> আজ দাম কমেছে
          </>
        }
        products={getTopMovers(products, "down")}
      />
      {/* Price Down End */}

      {/* All Products Start */}
      <ProductSection
        id={ALL_PRODUCTS_SECTION_ID}
        title="সব পণ্য"
        subtitle={`মোট ${formatNumber(products.length)}টি পণ্য দেখানো হচ্ছে`}
        products={products}
      />
      {/* All Products End */}
    </Container>
  );
}
