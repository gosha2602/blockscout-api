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
    describe('SmartContract', function() {
      beforeEach(function() {
        instance = new BlockScoutApi.SmartContract();
      });

      it('should create an instance of SmartContract', function() {
        // TODO: update the code to test SmartContract
        expect(instance).to.be.a(BlockScoutApi.SmartContract);
      });

      it('should have the property verifiedTwinAddressHash (base name: "verified_twin_address_hash")', function() {
        // TODO: update the code to test the property verifiedTwinAddressHash
        expect(instance).to.have.property('verifiedTwinAddressHash');
        // expect(instance.verifiedTwinAddressHash).to.be(expectedValueLiteral);
      });

      it('should have the property isVerified (base name: "is_verified")', function() {
        // TODO: update the code to test the property isVerified
        expect(instance).to.have.property('isVerified');
        // expect(instance.isVerified).to.be(expectedValueLiteral);
      });

      it('should have the property isChangedBytecode (base name: "is_changed_bytecode")', function() {
        // TODO: update the code to test the property isChangedBytecode
        expect(instance).to.have.property('isChangedBytecode');
        // expect(instance.isChangedBytecode).to.be(expectedValueLiteral);
      });

      it('should have the property isPartiallyVerified (base name: "is_partially_verified")', function() {
        // TODO: update the code to test the property isPartiallyVerified
        expect(instance).to.have.property('isPartiallyVerified');
        // expect(instance.isPartiallyVerified).to.be(expectedValueLiteral);
      });

      it('should have the property isFullyVerified (base name: "is_fully_verified")', function() {
        // TODO: update the code to test the property isFullyVerified
        expect(instance).to.have.property('isFullyVerified');
        // expect(instance.isFullyVerified).to.be(expectedValueLiteral);
      });

      it('should have the property isVerifiedViaSourcify (base name: "is_verified_via_sourcify")', function() {
        // TODO: update the code to test the property isVerifiedViaSourcify
        expect(instance).to.have.property('isVerifiedViaSourcify');
        // expect(instance.isVerifiedViaSourcify).to.be(expectedValueLiteral);
      });

      it('should have the property isVerifiedViaEthBytecodeDb (base name: "is_verified_via_eth_bytecode_db")', function() {
        // TODO: update the code to test the property isVerifiedViaEthBytecodeDb
        expect(instance).to.have.property('isVerifiedViaEthBytecodeDb');
        // expect(instance.isVerifiedViaEthBytecodeDb).to.be(expectedValueLiteral);
      });

      it('should have the property isVyperContract (base name: "is_vyper_contract")', function() {
        // TODO: update the code to test the property isVyperContract
        expect(instance).to.have.property('isVyperContract');
        // expect(instance.isVyperContract).to.be(expectedValueLiteral);
      });

      it('should have the property isSelfDestructed (base name: "is_self_destructed")', function() {
        // TODO: update the code to test the property isSelfDestructed
        expect(instance).to.have.property('isSelfDestructed');
        // expect(instance.isSelfDestructed).to.be(expectedValueLiteral);
      });

      it('should have the property canBeVisualizedViaSol2uml (base name: "can_be_visualized_via_sol2uml")', function() {
        // TODO: update the code to test the property canBeVisualizedViaSol2uml
        expect(instance).to.have.property('canBeVisualizedViaSol2uml');
        // expect(instance.canBeVisualizedViaSol2uml).to.be(expectedValueLiteral);
      });

      it('should have the property minimalProxyAddressHash (base name: "minimal_proxy_address_hash")', function() {
        // TODO: update the code to test the property minimalProxyAddressHash
        expect(instance).to.have.property('minimalProxyAddressHash');
        // expect(instance.minimalProxyAddressHash).to.be(expectedValueLiteral);
      });

      it('should have the property sourcifyRepoUrl (base name: "sourcify_repo_url")', function() {
        // TODO: update the code to test the property sourcifyRepoUrl
        expect(instance).to.have.property('sourcifyRepoUrl');
        // expect(instance.sourcifyRepoUrl).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property optimizationEnabled (base name: "optimization_enabled")', function() {
        // TODO: update the code to test the property optimizationEnabled
        expect(instance).to.have.property('optimizationEnabled');
        // expect(instance.optimizationEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property optimizationsRuns (base name: "optimizations_runs")', function() {
        // TODO: update the code to test the property optimizationsRuns
        expect(instance).to.have.property('optimizationsRuns');
        // expect(instance.optimizationsRuns).to.be(expectedValueLiteral);
      });

      it('should have the property compilerVersion (base name: "compiler_version")', function() {
        // TODO: update the code to test the property compilerVersion
        expect(instance).to.have.property('compilerVersion');
        // expect(instance.compilerVersion).to.be(expectedValueLiteral);
      });

      it('should have the property evmVersion (base name: "evm_version")', function() {
        // TODO: update the code to test the property evmVersion
        expect(instance).to.have.property('evmVersion');
        // expect(instance.evmVersion).to.be(expectedValueLiteral);
      });

      it('should have the property verifiedAt (base name: "verified_at")', function() {
        // TODO: update the code to test the property verifiedAt
        expect(instance).to.have.property('verifiedAt');
        // expect(instance.verifiedAt).to.be(expectedValueLiteral);
      });

      it('should have the property abi (base name: "abi")', function() {
        // TODO: update the code to test the property abi
        expect(instance).to.have.property('abi');
        // expect(instance.abi).to.be(expectedValueLiteral);
      });

      it('should have the property sourceCode (base name: "source_code")', function() {
        // TODO: update the code to test the property sourceCode
        expect(instance).to.have.property('sourceCode');
        // expect(instance.sourceCode).to.be(expectedValueLiteral);
      });

      it('should have the property filePath (base name: "file_path")', function() {
        // TODO: update the code to test the property filePath
        expect(instance).to.have.property('filePath');
        // expect(instance.filePath).to.be(expectedValueLiteral);
      });

      it('should have the property compilerSettings (base name: "compiler_settings")', function() {
        // TODO: update the code to test the property compilerSettings
        expect(instance).to.have.property('compilerSettings');
        // expect(instance.compilerSettings).to.be(expectedValueLiteral);
      });

      it('should have the property constructorArgs (base name: "constructor_args")', function() {
        // TODO: update the code to test the property constructorArgs
        expect(instance).to.have.property('constructorArgs');
        // expect(instance.constructorArgs).to.be(expectedValueLiteral);
      });

      it('should have the property additionalSources (base name: "additional_sources")', function() {
        // TODO: update the code to test the property additionalSources
        expect(instance).to.have.property('additionalSources');
        // expect(instance.additionalSources).to.be(expectedValueLiteral);
      });

      it('should have the property decodedConstructorArgs (base name: "decoded_constructor_args")', function() {
        // TODO: update the code to test the property decodedConstructorArgs
        expect(instance).to.have.property('decodedConstructorArgs');
        // expect(instance.decodedConstructorArgs).to.be(expectedValueLiteral);
      });

      it('should have the property deployedBytecode (base name: "deployed_bytecode")', function() {
        // TODO: update the code to test the property deployedBytecode
        expect(instance).to.have.property('deployedBytecode');
        // expect(instance.deployedBytecode).to.be(expectedValueLiteral);
      });

      it('should have the property creationBytecode (base name: "creation_bytecode")', function() {
        // TODO: update the code to test the property creationBytecode
        expect(instance).to.have.property('creationBytecode');
        // expect(instance.creationBytecode).to.be(expectedValueLiteral);
      });

      it('should have the property externalLibraries (base name: "external_libraries")', function() {
        // TODO: update the code to test the property externalLibraries
        expect(instance).to.have.property('externalLibraries');
        // expect(instance.externalLibraries).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

    });
  });

}));