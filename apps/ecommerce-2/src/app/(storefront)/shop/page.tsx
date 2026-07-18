// apps/ecommerce-2/src/app/(storefront)/shop/page.tsx
import { CollectionView } from "@/features/collection";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  return <CollectionView initialCategory={cat} />;
}
