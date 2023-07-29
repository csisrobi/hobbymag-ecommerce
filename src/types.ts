export type SanityProduct = {
  name: string;
  slug: string;
};

export type SanityCategory = {
  name: string;
  _id: string;
  products: SanityProduct[];
  subcategories: SanityCategory[];
};
