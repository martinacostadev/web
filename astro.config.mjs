import preact from "@astrojs/preact";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [preact(), robotsTxt()],
  site: "https://martinacosta.vercel.app",
});
