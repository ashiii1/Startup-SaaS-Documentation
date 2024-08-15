// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TITLE = 'Home';
const TAGLINE =
  'A SaaS documentation for all startups.';
const ORG_NAME = 'Startup';
const REPO_NAME = 'docs';
const MAIN_SITE_URL = 'https://www.google.com';
const WEB_URL = 'https://www.google.com';
const BLOG_URL = 'https://www.google.com';
const GITHUB_URL = 'https://www.google.com';
const DISCORD_URL = 'https://www.google.com';
const TWITTER_URL = 'https://www.google.com';
const LINKEDIN_URL = 'https://www.google.com';
const COPYRIGHT = `Copyright © ${new Date().getFullYear()} ${TITLE}. For Startups/SaaS.`;

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: TITLE,
  tagline: TAGLINE,
  url: WEB_URL,
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: ORG_NAME, // Usually your GitHub org/user name.
  projectName: REPO_NAME, // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',

      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bn'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      bn: {
        htmlLang: 'bn',
        direction: 'ltr',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: TITLE,

        logo: {
          alt: `${TITLE} `,
          src: 'https://static.vecteezy.com/system/resources/previews/000/606/168/original/vector-letter-a-logo-design-concept-template.jpg',
          className:"logo"
          
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
            className: 'beta-badge-nav ',
          },
          {
            href: BLOG_URL,
            label: 'Startup Blog',
            position: 'left',
            className:'nav-item-blog'
          },
          {
            href: MAIN_SITE_URL,
            label: 'Startup Site',
            position: 'left',
            className:"nav-item-startupsite"
          },
          {
            href: GITHUB_URL,
            label: 'GitHub',
            position: 'right',
            classNAme:"github"
          },
          {
            type: 'localeDropdown',
            position: 'left',
            className:"droppy"
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: DISCORD_URL,
              },
              {
                label: 'Twitter',
                href: TWITTER_URL,
              },
              {
                label: 'LinkedIn',
                href: LINKEDIN_URL,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: BLOG_URL,
              },
              {
                label: 'GitHub',
                href: GITHUB_URL,
              },
            ],
          },
        ],
        copyright: COPYRIGHT,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',

        respectPrefersColorScheme: true,
      },
    }),
  scripts: [
    {
      src: 'https://analytics.reactplay.io/script.js',
      async: true,
      'data-website-id': 'b385383c-0fb2-437f-84a8-2a98daf05fde',
    },
  ],
};

module.exports = config;
