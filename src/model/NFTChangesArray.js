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
import {NFTChange} from './NFTChange';

/**
 * The NFTChangesArray model module.
 * @module model/NFTChangesArray
 * @version 1.0.0
 */
export class NFTChangesArray extends Array {
  /**
   * Constructs a new <code>NFTChangesArray</code>.
   * @alias module:model/NFTChangesArray
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>NFTChangesArray</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NFTChangesArray} obj Optional instance to populate.
   * @return {module:model/NFTChangesArray} The populated <code>NFTChangesArray</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NFTChangesArray();
      ApiClient.constructFromObject(data, obj, 'NFTChange');
    }
    return obj;
  }
}
// Implement OneOfStateChangeChange interface:
