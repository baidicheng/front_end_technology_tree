/**
 * 网络爬虫
 */
var http = require('https');
var url = 'https://search.jd.com/Search?keyword=%E5%8F%91%E8%83%B6&enc=utf-8&wq=%E5%8F%91%E8%83%B6&pvid=a0f9618c643848ee8f72d5490258e4d8';

http.get(url, function(res) {
    var html = '';

    res.on('data', function(data) {
        html += data;
    });

    res.on('end', function() {
        console.log(html);
    })
}).on('error', function() {
    console.log('获取数据出现错误');
})