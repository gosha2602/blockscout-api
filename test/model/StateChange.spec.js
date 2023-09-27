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
    describe('StateChange', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.StateChange();
      });

      it('should create an instance of StateChange', function() {
        // TODO: update the code to test StateChange
        expect(instance).to.be.a(BlockScoutApi.StateChange);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property isMiner (base name: "is_miner")', function() {
        // TODO: update the code to test the property isMiner
        expect(instance).to.have.property('isMiner');
        // expect(instance.isMiner).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property balanceBefore (base name: "balance_before")', function() {
        // TODO: update the code to test the property balanceBefore
        expect(instance).to.have.property('balanceBefore');
        // expect(instance.balanceBefore).to.be(expectedValueLiteral);
      });

      it('should have the property balanceAfter (base name: "balance_after")', function() {
        // TODO: update the code to test the property balanceAfter
        expect(instance).to.have.property('balanceAfter');
        // expect(instance.balanceAfter).to.be(expectedValueLiteral);
      });

      it('should have the property tokenId (base name: "token_id")', function() {
        // TODO: update the code to test the property tokenId
        expect(instance).to.have.property('tokenId');
        // expect(instance.tokenId).to.be(expectedValueLiteral);
      });

      it('should have the property change (base name: "change")', function() {
        // TODO: update the code to test the property change
        expect(instance).to.have.property('change');
        // expect(instance.change).to.be(expectedValueLiteral);
      });

    });
  });

}));
