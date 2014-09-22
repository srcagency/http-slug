'use strict';

module.exports = slug;

var replace = [
	'æ',
	'ø',
	'å',
	'ü',
	'ä',
	'ö',
	'ß',
].map(function( c ){
	return c.charCodeAt(0);
});

var replaceWith = [
	'ae',
	'oe',
	'aa',
	'ue',
	'ae',
	'oe',
	'ss',
];

var dash = '-'.charCodeAt(0);
var slash = '/'.charCodeAt(0);
var _ = '_'.charCodeAt(0);
var zero = '0'.charCodeAt(0);
var nine = '9'.charCodeAt(0);
var a = 'a'.charCodeAt(0);
var z = 'z'.charCodeAt(0);
var A = 'A'.charCodeAt(0);
var Z = 'Z'.charCodeAt(0);
var u2l = a - A;

function slug( str ){
	var slug = '';
	var length = str.length;
	var code;
	var char;
	var space = false;
	var replacing;

	for (var i = 0;i < length;i++) {
		code = str.charCodeAt(i);

		if ((code >= zero && code <= nine) || (code >= a && code <= z))
			char = String.fromCharCode(code);
		else if ((code >= A && code <= Z))
			char = String.fromCharCode(code + u2l);
		else if (~(replacing = replace.indexOf(code)))
			char = replaceWith[replacing];
		else if ((code <= 32 || code === dash || code === slash || code === _) && char) {
			space = true;
			continue;
		}
		else
			continue;

		if (space) {
			space = false;
			slug += '-';
		}

		slug += char;
	}

	return slug;
}
