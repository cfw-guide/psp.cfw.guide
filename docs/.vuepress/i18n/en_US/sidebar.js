const support = {
  text: 'Support',
  children: [
    '/troubleshooting',
    '/faq',
    {
      text: 'Discord',
      link: 'https://discord.gg/'
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
      text: '___ Guide',
      children: [
        '/page-one',
        '/page-two',
      ],
    },
    support,
    site,
  ],
  
  '/alternate/': [
    {
      text: 'Cemu Guide',
      children: [
        '/alternate/page-one',
        '/alternate/page-two'
      ],
    },
    support,
    site,
  ]
}