/*jshint node: true*/
'use strict'
var fs = require('fs');
var ws = fs.createWriteStream(process.argv[2]);

var offset = 0;

process.stdin.on('readable', function () {
    var buf = process.stdin.read();
    if (!buf) return;
    var str = buf.toString().trim();
    console.log(buf.toString());
    ws.write(buf.toString());
});