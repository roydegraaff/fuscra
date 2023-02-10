const plugins = require('./gatsby-config.plugins');

const defaultLanguage = 'en';

module.exports = {
    pathPrefix: 'fuscra',
    siteMetadata: {
        title: 'Home Finder',
        author: 'blopa',
        summary: 'Find homes for you',
        defaultLanguage,
        description: 'Home Finder',
        siteUrl: 'https://roydegraaff.github.io/fuscra/',
        social: {
            twitter: 'thepiratepablo',
        },
    },
    plugins,
};
