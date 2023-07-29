import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Kategória",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Név",
      description: "Kategória név",
      type: "string",
    }),
    defineField({
      name: "subcategories",
      title: "Alkategoriák",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
          options: {
            disableNew: true,
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
      hidden: ({ parent, value }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return !value && parent?.products?.length > 0;
      },
    }),
    defineField({
      name: "products",
      title: "Termékek",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
      hidden: ({ parent, value }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        return !value && parent?.subcategories?.length > 0;
      },
    }),
  ],
});
