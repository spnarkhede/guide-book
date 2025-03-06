import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import ci from 'ci-info';

const config: Config = {
  title: 'My Guide-Book',
  tagline: 'What did I learn today...?',
  favicon: 'img/favicon.ico',
  url: 'https://spnarkhede.github.io',
  baseUrl: ci.GITHUB_ACTIONS ? '/guide-book/' : '/',
  organizationName: 'spnarkhede',
  projectName: 'guide-book',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/spnarkhede/guide-book/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/spnarkhede/guide-book/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        indexPages: true,
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
      title: 'Shubham Narkhede',
      logo: {
        alt: 'Shubham Narkhede',
        src: 'img/profile.png',
      },
      items: [
        { to: '/intro', label: 'About Me', position: 'left' },
        { to: '/Portfolio/Resume', label: 'Portfolio', position: 'left' },
        { to: '/ComputerScience/Programming/Git/GitBasicNotes', label: 'Computer Science', position: 'left' },
        { to: '/books', label: 'Books', position: 'left' },
        { to: '/MyLearnings/HardReset/90DaysHardReset', label: 'My Learnings', position: 'left' },
        { to: '/Languages/German/GermanCheatSheet1', label: 'Languages', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/spnarkhede/guide-book', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Shubham Narkhede',
          items: [{ label: 'About Me', to: '/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/spnarkhede' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'Twitter', href: 'https://twitter.com/snarkhede1996' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/spnarkhede' },
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
};

export default config;
