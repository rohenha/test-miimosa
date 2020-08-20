const withSass = require('@zeit/next-sass');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
    en: 'en'
};


module.exports = withSass({
    experimental: {
        jsconfigPaths: true,
    },
    cssModules: false,
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    target: 'serverless'
})

