'use strict';

// check the repo for this... I quit coding along

require('../server');
var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

describe('the server', function() {

  it('should show the time at /time', function(done) {
    chai.request('localhost:3000')
      .get('/time)')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        // expect(res.body).to.eql(theTime);
        done();
      });
  });

  it('should greet a fuckface at /greet', function(done) {
    chai.request('localhost:3000')
      .get('/greet)')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body).to.eql("What's happening, fuckface?");
        done();
      });
  });

});
