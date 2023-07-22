const support = {
  text: 'Support',
  children: [
    '/faq',
    {
      text: 'Discord',
      link: 'https://discord.gg/bePrj9W'
    }
  ],
}

const site = {
  text: 'Site',
  children: [
    '/credits',
    '/donations',
    '/site-navigation',
  ],
}

module.exports = {
  '/': [
    {
      text: 'PSP Guide',
      children: [
        '/page1',
        '/page2',
        '/page3',
        '/page4',
        '/page5',
        '/page6',
      ],
    },
    {
      text: 'Support',
      children: [
        '/faq',
        {
          text: 'Discord',
          link: 'https://discord.gg/bePrj9W',
        },
      ],
    },
    '/site-navigation',
  ],
  
  '/alternate/': [
    {
      text: 'PSP Guide',
      children: [
        '/alternate/page-one',
        '/alternate/page-two'
      ],
    },
    support,
    site,
  ]
}