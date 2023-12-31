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
import {Address} from './Address';
import {AddressTag} from './AddressTag';
import {TokenInfo} from './TokenInfo';
import {WatchlistName} from './WatchlistName';

/**
 * The AddressWithTxCount model module.
 * @module model/AddressWithTxCount
 * @version 1.0.0
 */
export class AddressWithTxCount extends Address {
  /**
   * Constructs a new <code>AddressWithTxCount</code>.
   * @alias module:model/AddressWithTxCount
   * @class
   * @extends module:model/Address
   * @param hash {} 
   * @param txCount {} 
   */
  constructor(hash, txCount) {
    super(hash);
    this.txCount = txCount;
  }

  /**
   * Constructs a <code>AddressWithTxCount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressWithTxCount} obj Optional instance to populate.
   * @return {module:model/AddressWithTxCount} The populated <code>AddressWithTxCount</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AddressWithTxCount();
      Address.constructFromObject(data, obj);
      if (data.hasOwnProperty('tx_count'))
        obj.txCount = ApiClient.convertToType(data['tx_count'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} txCount
 */
AddressWithTxCount.prototype.txCount = undefined;

