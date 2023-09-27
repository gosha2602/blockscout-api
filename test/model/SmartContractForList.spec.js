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
    describe('SmartContractForList', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.SmartContractForList();
      });

      it('should create an instance of SmartContractForList', function() {
        // TODO: update the code to test SmartContractForList
        expect(instance).to.be.a(BlockScoutApi.SmartContractForList);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property coinBalance (base name: "coin_balance")', function() {
        // TODO: update the code to test the property coinBalance
        expect(instance).to.have.property('coinBalance');
        // expect(instance.coinBalance).to.be(expectedValueLiteral);
      });

      it('should have the property compilerVersion (base name: "compiler_version")', function() {
        // TODO: update the code to test the property compilerVersion
        expect(instance).to.have.property('compilerVersion');
        // expect(instance.compilerVersion).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property hasConstructorArgs (base name: "has_constructor_args")', function() {
        // TODO: update the code to test the property hasConstructorArgs
        expect(instance).to.have.property('hasConstructorArgs');
        // expect(instance.hasConstructorArgs).to.be(expectedValueLiteral);
      });

      it('should have the property optimizationEnabled (base name: "optimization_enabled")', function() {
        // TODO: update the code to test the property optimizationEnabled
        expect(instance).to.have.property('optimizationEnabled');
        // expect(instance.optimizationEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property txCount (base name: "tx_count")', function() {
        // TODO: update the code to test the property txCount
        expect(instance).to.have.property('txCount');
        // expect(instance.txCount).to.be(expectedValueLiteral);
      });

      it('should have the property verifiedAt (base name: "verified_at")', function() {
        // TODO: update the code to test the property verifiedAt
        expect(instance).to.have.property('verifiedAt');
        // expect(instance.verifiedAt).to.be(expectedValueLiteral);
      });

      it('should have the property marketCap (base name: "market_cap")', function() {
        // TODO: update the code to test the property marketCap
        expect(instance).to.have.property('marketCap');
        // expect(instance.marketCap).to.be(expectedValueLiteral);
      });

    });
  });

}));