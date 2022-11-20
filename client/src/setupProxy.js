// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app){
    app.use(
        createProxyMiddleware("/ticker1", {
            target: "https://www.bitstamp.net/api/v2/ticker/btcusd",
            changeOrigin: true
        })
    );

    app.use(
        createProxyMiddleware("/ticker3", {
            target: "https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD",
            changeOrigin: true
        })
    );

    app.use(
        createProxyMiddleware("/buttons", {
            target: "https://www.bitstamp.net/api/v2/trading-pairs-info/",
            changeOrigin: true
        })
    );
}; 
