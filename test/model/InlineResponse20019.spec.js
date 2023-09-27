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
    describe('InlineResponse20019', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.InlineResponse20019();
      });

      it('should create an instance of InlineResponse20019', function() {
        // TODO: update the code to test InlineResponse20019
        expect(instance).to.be.a(BlockScoutApi.InlineResponse20019);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property nextPageParams (base name: "next_page_params")', function() {
        // TODO: update the code to test the property nextPageParams
        expect(instance).to.have.property('nextPageParams');
        // expect(instance.nextPageParams).to.be(expectedValueLiteral);
      });

    });
  });

}));
