import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import ci from 'ci-info'

const config: Config = {
  title: 'My Guide-Book ',
  tagline: 'What did I learned today...?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://spnarkhede.github.io',
  baseUrl: ci.GITHUB_ACTIONS ? '/guide-book/' : '/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/guidebook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'spnarkhede', // Usually your GitHub org/user name.
  projectName: 'guide-book', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  // onBrokenLinks: 'warn',  // or 'ignore'

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/spnarkhede/guide-book/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/spnarkhede/guide-book/tree/main/blog',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: false,
        docsDir: 'docs',
        docsRouteBasePath: '/',
        language: ['en', 'de'],
        hashed: true,
      },
    ],
  ],

    themeConfig: {
      respectPrefersColorScheme: true,
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'SHUBHAM NARKHEDE',
        logo: {
          alt: 'Shubham Narkhede',
          src: 'img/profile.png',
        },
        hideOnScroll: false,
        items: [
          {
            to: '/intro',
            label: 'About Me',
            position: 'left',
            activeBasePath: 'intro',
          },
          {
            to: 'Portfolio/Resume',
            label: 'Portfolio',
            position: 'left',
            activeBasePath: 'Portfolio',
          },
          {
            to: 'ComputerScience/Programming/Git/GitBasicNotes',
            label: 'Computer Science',
            position: 'left',
            activeBasePath: 'ComputerScience',
          },
          {to: '/books', label: 'Books', position: 'left'},
          {
            to: 'BooksReviews/ThibautMeurisse/strategicmindset',
            label: 'Books Reviews',
            position: 'left',
            activeBasePath: 'BookReviews',
          },
          {
            to: 'MyLearnings/HardReset/90DaysHardReset',
            label: 'My Learnings',
            position: 'left',
            activeBasePath: 'MyLearnings',
          },
          {
            to: 'Languages/German/GermanCheatSheet1',
            label: 'Languages',
            position: 'left',
            activeBasePath: 'Languages',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/spnarkhede/guide-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Shubham Narkhede',
            items: [
              {
                label: 'About Me',
                to: 'intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/spnarkhede',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/snarkhede1996',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/spnarkhede',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Guide Book by Shubham Narkhede`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
  }

export default config;
