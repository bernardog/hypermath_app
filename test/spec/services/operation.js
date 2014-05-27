'use strict';

describe('Service: Operation', function () {

  // load the service's module
  beforeEach(module('hypermathAppApp'));

  // instantiate service
  var Operation;
  beforeEach(inject(function (_Operation_) {
    Operation = _Operation_;
  }));

  it('should do something', function () {
    expect(!!Operation).toBe(true);
  });

});
