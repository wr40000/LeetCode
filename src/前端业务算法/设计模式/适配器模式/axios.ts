//let axios = require('axios');
let url = require('url');
function axios(config: any): any {
    let adaptor = getDefaultAdapter();
    return adaptor(config);
}
axios({
    method: 'GET',
    url: 'http://localhost:8080/api/user?id=1'
}).then(function (response: any) {
    console.log(response);
}, function (error: any) {
    console.log(error);
})

function xhr(config: any) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(config.method, config.url, true);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    resolve(request.response);
                } else {
                    reject('请求失败');
                }
            }
        }
    })
}
function http(config: any) {
    let http = require('http');
    let urlObject = url.parse(config.url);
    return new Promise(function (resolve, reject) {
        const options = {
            hostname: urlObject.hostname,
            port: urlObject.port,
            path: urlObject.pathname,
            method: config.method
        };
        var req = http.request(options, function (res: any) {
            let chunks: any[] = [];
            res.on('data', (chunk: any) => {
                chunks.push(chunk);
            });
            res.on('end', () => {
                resolve(Buffer.concat(chunks).toString());
            });
        });
        req.on('error', (err: any) => {
            reject(err);
        });
        req.end();
    })
}
function getDefaultAdapter(): any {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        adapter = xhr;
    } else if (typeof process !== 'undefined') {
        adapter = http;
    }
    return adapter;
}