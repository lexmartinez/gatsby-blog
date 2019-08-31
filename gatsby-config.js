module.exports = {
    plugins: [ 'gatsby-plugin-sass', 'gatsby-plugin-dark-mode', 'gatsby-plugin-layout',
      {
        resolve: 'gatsby-plugin-prefetch-google-fonts',
        options: {
          fonts: [
            {
              family: 'Poppins',
              variants: ['300', '400', '700']
            }
          ],
        },
      }
    ],
}
