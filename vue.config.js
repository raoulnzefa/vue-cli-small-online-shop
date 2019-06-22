const path = require('path');
const webpack = require('webpack');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
             
              @import "@/assets/scss/main.scss";
            `
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                Api: path.resolve(__dirname, 'src/api/'),
                Components: path.resolve(__dirname, 'src/components/'),
                Constants: path.resolve(__dirname, 'src/constants/'),
                Container: path.resolve(__dirname, 'src/container/'),
                Views: path.resolve(__dirname, 'src/views/'),
                Helpers: path.resolve(__dirname, 'src/helpers/'),
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        plugins: [
            //jquery plugin
            new webpack.ProvidePlugin({
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            })
        ]
    }
}
