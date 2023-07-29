import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Termék",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Név",
      description: "Termék név",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Autogenerált",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
  ],
});
