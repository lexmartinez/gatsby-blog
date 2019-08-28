module.exports = {
    plugins: [ 'gatsby-plugin-sass', 'gatsby-plugin-dark-mode',
      {
        resolve: 'gatsby-plugin-prefetch-google-fonts',
        options: {
          fonts: [
            {
              family: 'Lexend Deca',
              variants: ['400']
            },
            {
                family: 'Abel',
                variants: ['300', '400', '700']
            }
          ],
        },
      }
    ],
}
