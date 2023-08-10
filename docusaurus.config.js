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
            type: "dropdown",
            label: "Frontend",
            position: "left",
            items: [
              {
                to: "/docs/category/html",
                label: "HTML",
              },
              {
                to: "/docs/category/css",
                label: "CSS",
              },
              {
                to: "/docs/category/javascript",
                label: "JavaScript",
              },
              {
                to: "/docs/category/reactjs",
                label: "ReactJS",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Backend",
            position: "left",
            items: [
              {
                to: "/docs/category/nodejs",
                label: "NodeJS",
              },
              {
                to: "/docs/category/mongodb",
                label: "MongoDB",
              },
              {
                to: "/docs/category/expressjs",
                label: "ExpressJS",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Programming",
            position: "left",
            items: [
              {
                to: "/docs/category/c-programming",
                label: "C Programming",
              },
              {
                to: "/docs/category/cpp-programming",
                label: "C++ Programming",
              },
              {
                to: "/docs/category/python-programming",
                label: "Python",
              },
              {
                label: "RTC",
                href: "https://www.roadtocode.org",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Other",
            position: "left",
            items: [
              {
                to: "/docs/category/data-structures",
                label: "Data Structures",
              },
              {
                to: "/docs/category/internship-cohort-program",
                label: "ICP",
              },
              {
                to: "/docs/category/tips-and-tools",
                label: "Tips and Tools",
              },
              {
                to: "/docs/category/github",
                label: "Git & GitHub",
              },
            ],
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
