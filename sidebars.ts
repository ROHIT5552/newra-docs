import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: '🏢 User & Operations Guides',
      collapsed: false,
      items: [
        'user-guides/overview',
        'user-guides/crm-workflows',
        'user-guides/subscriber-onboarding',
        'user-guides/partner-management',
      ],
    },
    {
      type: 'category',
      label: '💻 Developer Guides',
      collapsed: false,
      items: [
        'developer-guides/overview',
        'developer-guides/local-setup',
        'developer-guides/architecture-and-apis',
        'developer-guides/testing-guide',
      ],
    },
    {
      type: 'category',
      label: '📦 Ecosystem Projects',
      collapsed: false,
      items: [
        'nrg-os/overview',
        'newra-core-crm/overview',
        'newra-symphony/overview',
        'newra-lens/overview',
        'newra-atlas/overview',
      ],
    },
  ],
};

export default sidebars;
