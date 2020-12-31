const config = {
  siteTitle: 'Samuel Bartels',
  siteTitleShort: 'Samuel Bartels',
  siteTitleAlt: 'Samuel Bartels',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.kojobartels.com',
  repo: 'https://github.com/samuelbartels20',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Samuel bartels is a software developer and writer specializing in modern JavaScript, Java, Python and Web development.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://samuelbartels.substack.com',
  newsletterEmbed: 'https://samuelbartels.substack.com/embed',
  userName: 'Samuel',
  userEmail: 'bartelssamuel20@gmail.com',
  userTwitter: 'bartelssamuel20',
  menuLinks: [
    {
      name: 'About me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
