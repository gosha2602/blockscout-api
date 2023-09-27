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
 * The MarketChartItem model module.
 * @module model/MarketChartItem
 * @version 1.0.0
 */
export class MarketChartItem {
  /**
   * Constructs a new <code>MarketChartItem</code>.
   * @alias module:model/MarketChartItem
   * @class
   * @param _date {String} 
   * @param closingPrice {String} 
   * @param marketCap {String} 
   */
  constructor(_date, closingPrice, marketCap) {
    this._date = _date;
    this.closingPrice = closingPrice;
    this.marketCap = marketCap;
  }

  /**
   * Constructs a <code>MarketChartItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MarketChartItem} obj Optional instance to populate.
   * @return {module:model/MarketChartItem} The populated <code>MarketChartItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MarketChartItem();
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'String');
      if (data.hasOwnProperty('closing_price'))
        obj.closingPrice = ApiClient.convertToType(data['closing_price'], 'String');
      if (data.hasOwnProperty('market_cap'))
        obj.marketCap = ApiClient.convertToType(data['market_cap'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} _date
 */
MarketChartItem.prototype._date = undefined;

/**
 * @member {String} closingPrice
 */
MarketChartItem.prototype.closingPrice = undefined;

/**
 * @member {String} marketCap
 */
MarketChartItem.prototype.marketCap = undefined;

