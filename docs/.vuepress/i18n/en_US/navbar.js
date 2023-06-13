module.exports = [
  {
    text: 'Guides',
    children: [
      '/page-one',
      '/page-two',
      {
        text: 'Page three',
        link: '/page-three',
      },
    ],
  },
  {
    text: 'Help',
    children: [
      '/faq',
      '/troubleshooting',
      {
        text: 'Discord',
        link: 'https://discord.gg/',
      },
    ],
  },
  {
    text: 'Site Info',
    children: [
      '/donations',
      '/credits',
      {
        text: 'Source',
        link: 'https://github.com/cfw-guide/example.cfw.guide/',
      },
      '/site-navigation/',
    ],
  },
]