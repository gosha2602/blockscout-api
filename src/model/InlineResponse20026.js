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
import {ApiClient} from '../ApiClient';

/**
 * The InlineResponse20026 model module.
 * @module model/InlineResponse20026
 * @version 1.0.0
 */
export class InlineResponse20026 {
  /**
   * Constructs a new <code>InlineResponse20026</code>.
   * @alias module:model/InlineResponse20026
   * @class
   * @param newSmartContracts24h {String} 
   * @param newVerifiedSmartContracts24h {String} 
   * @param smartContracts {String} 
   * @param verifiedSmartContracts {String} 
   */
  constructor(newSmartContracts24h, newVerifiedSmartContracts24h, smartContracts, verifiedSmartContracts) {
    this.newSmartContracts24h = newSmartContracts24h;
    this.newVerifiedSmartContracts24h = newVerifiedSmartContracts24h;
    this.smartContracts = smartContracts;
    this.verifiedSmartContracts = verifiedSmartContracts;
  }

  /**
   * Constructs a <code>InlineResponse20026</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20026} obj Optional instance to populate.
   * @return {module:model/InlineResponse20026} The populated <code>InlineResponse20026</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20026();
      if (data.hasOwnProperty('new_smart_contracts_24h'))
        obj.newSmartContracts24h = ApiClient.convertToType(data['new_smart_contracts_24h'], 'String');
      if (data.hasOwnProperty('new_verified_smart_contracts_24h'))
        obj.newVerifiedSmartContracts24h = ApiClient.convertToType(data['new_verified_smart_contracts_24h'], 'String');
      if (data.hasOwnProperty('smart_contracts'))
        obj.smartContracts = ApiClient.convertToType(data['smart_contracts'], 'String');
      if (data.hasOwnProperty('verified_smart_contracts'))
        obj.verifiedSmartContracts = ApiClient.convertToType(data['verified_smart_contracts'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} newSmartContracts24h
 */
InlineResponse20026.prototype.newSmartContracts24h = undefined;

/**
 * @member {String} newVerifiedSmartContracts24h
 */
InlineResponse20026.prototype.newVerifiedSmartContracts24h = undefined;

/**
 * @member {String} smartContracts
 */
InlineResponse20026.prototype.smartContracts = undefined;

/**
 * @member {String} verifiedSmartContracts
 */
InlineResponse20026.prototype.verifiedSmartContracts = undefined;
