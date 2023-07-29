/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import home from "~/sanity/schemas/singletons/home";
import { pageStructure, singletonPlugin } from "./src/sanity/plugins/settings";
import schema from "~/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    deskTool({ structure: pageStructure([home]) }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name]),
    // Add an image asset source for Unsplash
    // unsplashImageAsset(),
    // Add the "Open preview" action
    // productionUrl({
    //   apiVersion,
    //   previewSecretId,
    //   types: PREVIEWABLE_DOCUMENT_TYPES,
    // }),
  ],
});
