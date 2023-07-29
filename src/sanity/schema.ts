import category from "./schemas/documents/category";
import product from "./schemas/documents/product";
import home from "./schemas/singletons/home";

const schema = {
  types: [home, category, product],
};

export default schema;
