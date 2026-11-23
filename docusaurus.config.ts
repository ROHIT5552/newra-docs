import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NewRa Grids Documentation',
  tagline: 'Developer and Operations Guides for NewRa Ecosystem',
  favicon: 'img/favicon.ico',

  url: 'https://newragrids.github.io',
  baseUrl: '/',

  organizationName: 'NewRaGrids',
  projectName: 'newra-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'NewRa Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/user-guides/overview',
          label: 'User Guides',
          position: 'left',
        },
        {
          to: '/developer-guides/overview',
          label: 'Developer Guides',
          position: 'left',
        },
        {
          href: 'https://github.com/NewRaGrids',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Roles & Guides',
          items: [
            {
              label: 'User & Operations Overview',
              to: '/user-guides/overview',
            },
            {
              label: 'CRM & Pipeline Workflows',
              to: '/user-guides/crm-workflows',
            },
          ],
        },
        {
          title: 'Engineering',
          items: [
            {
              label: 'Architecture & System Overview',
              to: '/developer-guides/overview',
            },
            {
              label: 'Local Development Setup',
              to: '/developer-guides/local-setup',
            },
            {
              label: 'Testing & QA Guide',
              to: '/developer-guides/testing-guide',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'NRG-OS Platform',
              to: '/nrg-os/overview',
            },
            {
              label: 'NewRa Core CRM',
              to: '/newra-core-crm/overview',
            },
            {
              label: 'NewRa Symphony',
              to: '/newra-symphony/overview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NewRa Grids. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
