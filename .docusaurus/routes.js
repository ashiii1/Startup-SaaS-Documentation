import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a3e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4c8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '87d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b1e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '30a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'af3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'aa1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '3c4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/apis-hook',
        component: ComponentCreator('/apis-hook', '6f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/how-to-guides',
        component: ComponentCreator('/category/how-to-guides', '4a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/contribution-guide',
        component: ComponentCreator('/contribution-guide', 'ff9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/database-schema',
        component: ComponentCreator('/database-schema', '240'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-To-Guides/how-to-become-a-maintainer',
        component: ComponentCreator('/How-To-Guides/how-to-become-a-maintainer', '8e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-To-Guides/how-to-create-play',
        component: ComponentCreator('/How-To-Guides/how-to-create-play', 'd6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/How-To-Guides/how-to-style-play',
        component: ComponentCreator('/How-To-Guides/how-to-style-play', '408'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/local-development',
        component: ComponentCreator('/local-development', 'b84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/troubleshooting-guide',
        component: ComponentCreator('/troubleshooting-guide', '004'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
