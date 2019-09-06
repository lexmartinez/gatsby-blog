module.exports = {
    siteMetadata: {
      title: `Lex Martínez`,
    },
    plugins: [ 'gatsby-plugin-sass', 'gatsby-plugin-dark-mode', 'gatsby-plugin-layout', 'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-plugin-prefetch-google-fonts',
        options: {
          fonts: [
            {
              family: 'Poppins',
              variants: ['300', '400', '500', '700', '800']
            }
          ],
        },
      }
    ],
}
