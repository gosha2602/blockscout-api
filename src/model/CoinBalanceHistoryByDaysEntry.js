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
 * The CoinBalanceHistoryByDaysEntry model module.
 * @module model/CoinBalanceHistoryByDaysEntry
 * @version 1.0.0
 */
export class CoinBalanceHistoryByDaysEntry {
  /**
   * Constructs a new <code>CoinBalanceHistoryByDaysEntry</code>.
   * @alias module:model/CoinBalanceHistoryByDaysEntry
   * @class
   * @param _date {String} 
   * @param value {Number} 
   */
  constructor(_date, value) {
    this._date = _date;
    this.value = value;
  }

  /**
   * Constructs a <code>CoinBalanceHistoryByDaysEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoinBalanceHistoryByDaysEntry} obj Optional instance to populate.
   * @return {module:model/CoinBalanceHistoryByDaysEntry} The populated <code>CoinBalanceHistoryByDaysEntry</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CoinBalanceHistoryByDaysEntry();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} _date
 */
CoinBalanceHistoryByDaysEntry.prototype._date = undefined;

/**
 * @member {Number} value
 */
CoinBalanceHistoryByDaysEntry.prototype.value = undefined;
