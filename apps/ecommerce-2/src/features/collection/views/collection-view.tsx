// apps/ecommerce-2/src/features/collection/views/collection-view.tsx
export function CollectionView({ initialCategory }: { initialCategory?: string }) {
  return <div className="p-12">Collection view (initial category: {initialCategory ?? "all"}) — added in Task 11.</div>;
}
