// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Spaceship 🛸",
  tagline:
    "Spaceship is a mini Wikipedia 📖 for computer science students, created by RoadToCode.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  staticDirectories: ["public", "static", "docs/icp/assets"],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "roadtocode",
  projectName: "spaceship",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Spaceship",
        logo: {
          alt: "Spaceship Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/docs/category/c-programming",
            position: "left",
            label: "C Programming",
          },
          {
            to: "/docs/category/cpp-programming",
            position: "left",
            label: "C++ Programming",
          },
          {
            to: "/docs/category/python-programming",
            position: "left",
            label: "Python",
          },
          {
            to: "/docs/category/data-structures",
            position: "left",
            label: "Data Structures",
          },
          {
            to: "/docs/category/internship-cohort-program",
            position: "left",
            label: "ICP",
          },
          {
            to: "/docs/category/tips-and-tools",
            position: "left",
            label: "Tips and Tools",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/roadtocode4u/spaceship",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} roadtocode. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
