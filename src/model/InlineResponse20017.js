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
import {CoinBalanceHistoryEntry} from './CoinBalanceHistoryEntry';

/**
 * The InlineResponse20017 model module.
 * @module model/InlineResponse20017
 * @version 1.0.0
 */
export class InlineResponse20017 {
  /**
   * Constructs a new <code>InlineResponse20017</code>.
   * @alias module:model/InlineResponse20017
   * @class
   * @param items {Array.<module:model/CoinBalanceHistoryEntry>} 
   * @param nextPageParams {Object} 
   */
  constructor(items, nextPageParams) {
    this.items = items;
    this.nextPageParams = nextPageParams;
  }

  /**
   * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20017} obj Optional instance to populate.
   * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20017();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [CoinBalanceHistoryEntry]);
      if (data.hasOwnProperty('next_page_params'))
        obj.nextPageParams = ApiClient.convertToType(data['next_page_params'], Object);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CoinBalanceHistoryEntry>} items
 */
InlineResponse20017.prototype.items = undefined;

/**
 * @member {Object} nextPageParams
 */
InlineResponse20017.prototype.nextPageParams = undefined;

