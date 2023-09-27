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
 * The TotalERC20 model module.
 * @module model/TotalERC20
 * @version 1.0.0
 */
export class TotalERC20 {
  /**
   * Constructs a new <code>TotalERC20</code>.
   * @alias module:model/TotalERC20
   * @class
   * @param decimals {String} 
   * @param value {String} 
   */
  constructor(decimals, value) {
    this.decimals = decimals;
    this.value = value;
  }

  /**
   * Constructs a <code>TotalERC20</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TotalERC20} obj Optional instance to populate.
   * @return {module:model/TotalERC20} The populated <code>TotalERC20</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TotalERC20();
      if (data.hasOwnProperty('decimals'))
        obj.decimals = ApiClient.convertToType(data['decimals'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} decimals
 */
TotalERC20.prototype.decimals = undefined;

/**
 * @member {String} value
 */
TotalERC20.prototype.value = undefined;

// Implement OneOfTokenTransferTotal interface:
