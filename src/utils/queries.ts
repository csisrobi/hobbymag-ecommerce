import { groq } from "next-sanity";

export const getCategories = groq`
*[_type == "category"] {
  name,
  _id,
  subcategories[]->{
    name,
    _id,
    products[]->{
    name,
    slug
  },
  },
  products[]->{
    name,
    slug
  }
}
`;

export const getProductsByeCategory = (name: string) => groq`
*[_type == "category" && name == "${name}"] {
  products[]->{
    name,
    slug
  }
}
`;
