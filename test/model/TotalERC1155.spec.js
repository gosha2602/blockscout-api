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
    describe('TotalERC1155', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.TotalERC1155();
      });

      it('should create an instance of TotalERC1155', function() {
        // TODO: update the code to test TotalERC1155
        expect(instance).to.be.a(BlockScoutApi.TotalERC1155);
      });

      it('should have the property tokenId (base name: "token_id")', function() {
        // TODO: update the code to test the property tokenId
        expect(instance).to.have.property('tokenId');
        // expect(instance.tokenId).to.be(expectedValueLiteral);
      });

      it('should have the property decimals (base name: "decimals")', function() {
        // TODO: update the code to test the property decimals
        expect(instance).to.have.property('decimals');
        // expect(instance.decimals).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

    });
  });

}));
