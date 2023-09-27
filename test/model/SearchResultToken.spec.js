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
    describe('SearchResultToken', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.SearchResultToken();
      });

      it('should create an instance of SearchResultToken', function() {
        // TODO: update the code to test SearchResultToken
        expect(instance).to.be.a(BlockScoutApi.SearchResultToken);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property addressUrl (base name: "address_url")', function() {
        // TODO: update the code to test the property addressUrl
        expect(instance).to.have.property('addressUrl');
        // expect(instance.addressUrl).to.be(expectedValueLiteral);
      });

      it('should have the property exchangeRate (base name: "exchange_rate")', function() {
        // TODO: update the code to test the property exchangeRate
        expect(instance).to.have.property('exchangeRate');
        // expect(instance.exchangeRate).to.be(expectedValueLiteral);
      });

      it('should have the property iconUrl (base name: "icon_url")', function() {
        // TODO: update the code to test the property iconUrl
        expect(instance).to.have.property('iconUrl');
        // expect(instance.iconUrl).to.be(expectedValueLiteral);
      });

      it('should have the property isSmartContractVerified (base name: "is_smart_contract_verified")', function() {
        // TODO: update the code to test the property isSmartContractVerified
        expect(instance).to.have.property('isSmartContractVerified');
        // expect(instance.isSmartContractVerified).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property tokenType (base name: "token_type")', function() {
        // TODO: update the code to test the property tokenType
        expect(instance).to.have.property('tokenType');
        // expect(instance.tokenType).to.be(expectedValueLiteral);
      });

      it('should have the property tokenUrl (base name: "token_url")', function() {
        // TODO: update the code to test the property tokenUrl
        expect(instance).to.have.property('tokenUrl');
        // expect(instance.tokenUrl).to.be(expectedValueLiteral);
      });

      it('should have the property totalSupply (base name: "total_supply")', function() {
        // TODO: update the code to test the property totalSupply
        expect(instance).to.have.property('totalSupply');
        // expect(instance.totalSupply).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));