'use strict';

require('../server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);
//
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
        // expect(res.body).to.eql("Eat me, fuckface!");
        done();
      });
  });

});
