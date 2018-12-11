// const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
// const postcssNormalize = require('postcss-normalize');
// const postcssCssnext = require('postcss-cssnext');
// const postcssClearfix = require('postcss-clearfix');
// const postcssFontMagician = require('postcss-font-magician');

module.exports = {
  plugins: {
    // postcssFlexbugsFixes({}),
    // postcssNormalize({
    //   allowDuplicates: true,
    // }),
    // postcssCssnext({}),
    // postcssClearfix({}),
    'postcss-font-magician': {
      custom: {
        Lato: {
          variants: {
            normal: {
              300: {
                url: {
                  woff2: '../fonts/Lato/Lato-Light.woff2',
                  woff: '../fonts/Lato/Lato-Light.woff',
                  ttf: '../fonts/Lato/Lato-Light.ttf',
                },
              },
              400: {
                url: {
                  woff2: 'src/fonts/Lato/Lato-Regular.woff2',
                  woff: 'src/fonts/Lato/Lato-Regular.woff',
                  ttf: 'src/fonts/Lato/Lato-Regular.ttf',
                },
              },
              500: {
                url: {
                  woff2: 'src/fonts/Lato/Lato-Medium.woff2',
                  woff: 'src/fonts/Lato/Lato-Medium.woff',
                  ttf: 'src/fonts/Lato/Lato-Medium.ttf',
                },
              },
            },
            italic: {
              300: {
                url: {
                  woff2: 'src/fonts/Lato/Lato-LightItalic.woff2',
                  woff: 'src/fonts/Lato/Lato-LightItalic.woff',
                  ttf: 'src/fonts/Lato/Lato-LightItalic.ttf',
                },
              },
              500: {
                url: {
                  woff2: 'src/fonts/Lato/Lato-MediumItalic.woff2',
                  woff: 'src/fonts/Lato/Lato-MediumItalic.woff',
                  ttf: 'src/fonts/Lato/Lato-MediumItalic.ttf',
                },
              },
            },
          },
        },
      },
      formats: 'woff2 woff ttf',
    },
  },
};
