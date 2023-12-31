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
 * The TokenCounters model module.
 * @module model/TokenCounters
 * @version 1.0.0
 */
export class TokenCounters {
  /**
   * Constructs a new <code>TokenCounters</code>.
   * @alias module:model/TokenCounters
   * @class
   * @param tokenHoldersCount {String} 
   * @param transfersCount {String} 
   */
  constructor(tokenHoldersCount, transfersCount) {
    this.tokenHoldersCount = tokenHoldersCount;
    this.transfersCount = transfersCount;
  }

  /**
   * Constructs a <code>TokenCounters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenCounters} obj Optional instance to populate.
   * @return {module:model/TokenCounters} The populated <code>TokenCounters</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TokenCounters();
      if (data.hasOwnProperty('token_holders_count'))
        obj.tokenHoldersCount = ApiClient.convertToType(data['token_holders_count'], 'String');
      if (data.hasOwnProperty('transfers_count'))
        obj.transfersCount = ApiClient.convertToType(data['transfers_count'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} tokenHoldersCount
 */
TokenCounters.prototype.tokenHoldersCount = undefined;

/**
 * @member {String} transfersCount
 */
TokenCounters.prototype.transfersCount = undefined;

