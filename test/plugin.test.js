var nixt = require('..');
var should = require('chai').should();

describe('nixt.register', function() {
  it('can register a single function', function() {
    var fn = function() {};
    nixt.register('foo', fn);
    nixt.should.respondTo('foo');
  });

  it('can register multiple functions at once', function() {
    var fn = function() {};
    var fn1 = function() {};

    nixt.register({ baz: fn, bar: fn1 });

    nixt.should.respondTo('baz');
    nixt.should.respondTo('bar');
  });
});
