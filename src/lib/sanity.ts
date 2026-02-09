import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "eakfom3b",
  dataset: "production",
  apiVersion: "2025-02-19",
  useCdn: true,
});
