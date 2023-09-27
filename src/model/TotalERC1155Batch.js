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
import {TotalERC1155} from './TotalERC1155';

/**
 * The TotalERC1155Batch model module.
 * @module model/TotalERC1155Batch
 * @version 1.0.0
 */
export class TotalERC1155Batch extends Array {
  /**
   * Constructs a new <code>TotalERC1155Batch</code>.
   * @alias module:model/TotalERC1155Batch
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TotalERC1155Batch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TotalERC1155Batch} obj Optional instance to populate.
   * @return {module:model/TotalERC1155Batch} The populated <code>TotalERC1155Batch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TotalERC1155Batch();
      ApiClient.constructFromObject(data, obj, 'TotalERC1155');
    }
    return obj;
  }
}
// Implement OneOfTokenTransferTotal interface:
