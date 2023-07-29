import { client } from "~/sanity/lib/client";
import { type SanityCategory } from "~/types";
import { getCategories } from "~/utils/queries";
import Filters from "~/components/storepage/filter-section";

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const categories: SanityCategory[] = await client.fetch(getCategories);
  const {slug } = params;

  return (
    <section>
            <Filters categories={categories}slug={slug} />
      {children}
    </section>
  );
}
