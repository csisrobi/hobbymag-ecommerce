import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Adatok",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Név",
      description: "Cég név",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      description: "Cég logo",
      type: "image",
    }),
  ],
});
