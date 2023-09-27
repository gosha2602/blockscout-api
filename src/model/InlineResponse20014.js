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
import {Log} from './Log';

/**
 * The InlineResponse20014 model module.
 * @module model/InlineResponse20014
 * @version 1.0.0
 */
export class InlineResponse20014 {
  /**
   * Constructs a new <code>InlineResponse20014</code>.
   * @alias module:model/InlineResponse20014
   * @class
   * @param items {Array.<module:model/Log>} 
   * @param nextPageParams {Object} 
   */
  constructor(items, nextPageParams) {
    this.items = items;
    this.nextPageParams = nextPageParams;
  }

  /**
   * Constructs a <code>InlineResponse20014</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014} The populated <code>InlineResponse20014</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20014();
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Log]);
      if (data.hasOwnProperty('next_page_params'))
        obj.nextPageParams = ApiClient.convertToType(data['next_page_params'], Object);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Log>} items
 */
InlineResponse20014.prototype.items = undefined;

/**
 * @member {Object} nextPageParams
 */
InlineResponse20014.prototype.nextPageParams = undefined;
