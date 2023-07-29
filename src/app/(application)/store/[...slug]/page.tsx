import { client } from "~/sanity/lib/client";
import { SanityCategory } from "~/types";
import { getProductsByeCategory } from "~/utils/queries";

export default async function StorePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const productCategories: SanityCategory[] = await client.fetch(
    getProductsByeCategory(slug[0])
  );
  console.log(productCategories)
  return (
    <div className="bg-white">
      {/* Product grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {productCategories[0].products?.map((product) => (
          <a className="group text-sm">
            <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
          </a>
        )) || <h3>Sorry no product</h3>}
      </div>
    </div>
  );
}
