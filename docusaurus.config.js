// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/robustafavicon.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Robusta", // Usually your GitHub org/user name.
  projectName: "Robusta", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
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
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Robusta",
        logo: {
          alt: "Robusta Logo",
          src: "img/robustalogo.png"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/robusta-dev/robusta",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Install",
                to: "/docs/installation"
              },
              {
                label: "Architecture",
                to: "/docs/architecture"
              }
            ]
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus"
              // },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/robusta-dev"
              },
              {
                label: "Twitter",
                href: "https://twitter.com/RobustaDev"
              }
            ]
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog"
              // },
              {
                label: "GitHub",
                href: "https://github.com/robusta-dev/robusta"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robusta.dev`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
