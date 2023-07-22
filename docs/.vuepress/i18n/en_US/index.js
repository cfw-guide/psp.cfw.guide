module.exports = {
  search: 'Search',
  
  locales: {
    lang: 'en-US',
    title: 'PSP Guide',
    description: 'A complete guide to hacking the PSP.',
  },
  
  themeConfig: {
  	selectLanguageName: "English",
  	backToHome: "Take me home",
  	contributorsText: "Contributors",
  	editLinkText: "Edit this page",
  	lastUpdatedText: "Last Updated",
  	openInNewWindow: "Open in new window",
  	selectLanguageAriaLabel: "Select language",
  	toggleDarkMode: "Toggle dark mode",
  	toggleSidebar: "Toggle sidebar",
        
    discordNoticeText: "If you need further help, ask on the [Discord Server](https://discord.gg/bePrj9W/) for assistance.",
    repoLabel: '<i class="fab fa-github"></i>',
      
    navbar: require('./navbar'),
    sidebar: require('./sidebar'),
  }
};