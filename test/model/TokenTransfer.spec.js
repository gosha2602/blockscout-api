/*
 * BlockScout API
 * API for BlockScout web app
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BlockScoutApi);
  }
}(this, function(expect, BlockScoutApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('TokenTransfer', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.TokenTransfer();
      });

      it('should create an instance of TokenTransfer', function() {
        // TODO: update the code to test TokenTransfer
        expect(instance).to.be.a(BlockScoutApi.TokenTransfer);
      });

      it('should have the property blockHash (base name: "block_hash")', function() {
        // TODO: update the code to test the property blockHash
        expect(instance).to.have.property('blockHash');
        // expect(instance.blockHash).to.be(expectedValueLiteral);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property logIndex (base name: "log_index")', function() {
        // TODO: update the code to test the property logIndex
        expect(instance).to.have.property('logIndex');
        // expect(instance.logIndex).to.be(expectedValueLiteral);
      });

      it('should have the property method (base name: "method")', function() {
        // TODO: update the code to test the property method
        expect(instance).to.have.property('method');
        // expect(instance.method).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property total (base name: "total")', function() {
        // TODO: update the code to test the property total
        expect(instance).to.have.property('total');
        // expect(instance.total).to.be(expectedValueLiteral);
      });

      it('should have the property txHash (base name: "tx_hash")', function() {
        // TODO: update the code to test the property txHash
        expect(instance).to.have.property('txHash');
        // expect(instance.txHash).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));
