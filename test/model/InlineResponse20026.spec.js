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
    describe('InlineResponse20026', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.InlineResponse20026();
      });

      it('should create an instance of InlineResponse20026', function() {
        // TODO: update the code to test InlineResponse20026
        expect(instance).to.be.a(BlockScoutApi.InlineResponse20026);
      });

      it('should have the property newSmartContracts24h (base name: "new_smart_contracts_24h")', function() {
        // TODO: update the code to test the property newSmartContracts24h
        expect(instance).to.have.property('newSmartContracts24h');
        // expect(instance.newSmartContracts24h).to.be(expectedValueLiteral);
      });

      it('should have the property newVerifiedSmartContracts24h (base name: "new_verified_smart_contracts_24h")', function() {
        // TODO: update the code to test the property newVerifiedSmartContracts24h
        expect(instance).to.have.property('newVerifiedSmartContracts24h');
        // expect(instance.newVerifiedSmartContracts24h).to.be(expectedValueLiteral);
      });

      it('should have the property smartContracts (base name: "smart_contracts")', function() {
        // TODO: update the code to test the property smartContracts
        expect(instance).to.have.property('smartContracts');
        // expect(instance.smartContracts).to.be(expectedValueLiteral);
      });

      it('should have the property verifiedSmartContracts (base name: "verified_smart_contracts")', function() {
        // TODO: update the code to test the property verifiedSmartContracts
        expect(instance).to.have.property('verifiedSmartContracts');
        // expect(instance.verifiedSmartContracts).to.be(expectedValueLiteral);
      });

    });
  });

}));
