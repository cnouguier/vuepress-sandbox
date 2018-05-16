module.exports = {
  title: 'Le registre RGPD de Kalisio',
  description: 'Registre RPGD de Kalisio',
  port: 8085,
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    docsDir: 'content',
    nav: [
      {
        text: 'Responsables',
        link: '/responsables/',
      },
      {
        text: 'Activités',
        link: '/activites/'
      }
    ]
  }
}