'use strict';

var slug = require('./');
var test = require('tape');

test(function( t ) {
	t.equal(slug('apple'), 'apple');
	t.equal(slug('PIE'), 'pie');
	t.equal(slug('Vrå öster'), 'vraa-oester');
	t.equal(slug(' Vrå '), 'vraa');
	t.equal(slug('Søren\'s party- and surprise store/shop'), 'soerens-party-and-surprise-store-shop');
	t.end();
});
