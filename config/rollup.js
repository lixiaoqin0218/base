var pkg = require('../package.json');

// 兼容 jslib-base 和 @jsmini/jslib-base 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * jslib-base ${version} (https://github.com/jsmini/jslib-base)
 * API https://github.com/jsmini/jslib-base/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/jslib-base/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
