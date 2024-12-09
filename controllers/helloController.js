const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer();

exports.proxyToNginx = (req, res) => {
    proxy.web(req, res, { target: "http://10.12.3.251" });
};
