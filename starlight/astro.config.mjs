import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "C",
          autogenerate: {
            directory: "c",
          },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1373341236327290",
          },
        },
      ],
    }),
  ],
});
