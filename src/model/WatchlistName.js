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
 * The WatchlistName model module.
 * @module model/WatchlistName
 * @version 1.0.0
 */
export class WatchlistName {
  /**
   * Constructs a new <code>WatchlistName</code>.
   * @alias module:model/WatchlistName
   * @class
   * @param displayName {String} 
   * @param label {String} 
   */
  constructor(displayName, label) {
    this.displayName = displayName;
    this.label = label;
  }

  /**
   * Constructs a <code>WatchlistName</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WatchlistName} obj Optional instance to populate.
   * @return {module:model/WatchlistName} The populated <code>WatchlistName</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new WatchlistName();
      if (data.hasOwnProperty('display_name'))
        obj.displayName = ApiClient.convertToType(data['display_name'], 'String');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} displayName
 */
WatchlistName.prototype.displayName = undefined;

/**
 * @member {String} label
 */
WatchlistName.prototype.label = undefined;

