module.exports = {
  base: '/test',
  title: 'Le registre RGPD de Kalisio',
  description: 'Registre RPGD de Kalisio',
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    docsDir: 'docs',
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