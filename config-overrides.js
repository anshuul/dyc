module.exports = {
    devServer: function (configFunction) {
        return function (proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost);
            // config.devMiddleware= {
            //     publicPath:'',
            //     index: 'index.html', // specify to enable root proxying
            //   },
            config.proxy = {
                '/wsDiscover1.2Test': {
                    ...proxy[0],
                    target: 'https://discover-city.com',
                    logLevel: 'silent', /*optional*/
                    secure: false,

                }
            }
            console.log(proxy);
            return config;
        };
    },
}
