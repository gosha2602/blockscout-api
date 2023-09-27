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
 * The TransactionActionAaveV3LiquidationCall model module.
 * @module model/TransactionActionAaveV3LiquidationCall
 * @version 1.0.0
 */
export class TransactionActionAaveV3LiquidationCall {
  /**
   * Constructs a new <code>TransactionActionAaveV3LiquidationCall</code>.
   * @alias module:model/TransactionActionAaveV3LiquidationCall
   * @class
   * @param data {Object} 
   * @param protocol {String} 
   * @param type {String} 
   */
  constructor(data, protocol, type) {
    this.data = data;
    this.protocol = protocol;
    this.type = type;
  }

  /**
   * Constructs a <code>TransactionActionAaveV3LiquidationCall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionActionAaveV3LiquidationCall} obj Optional instance to populate.
   * @return {module:model/TransactionActionAaveV3LiquidationCall} The populated <code>TransactionActionAaveV3LiquidationCall</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionActionAaveV3LiquidationCall();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], Object);
      if (data.hasOwnProperty('protocol'))
        obj.protocol = ApiClient.convertToType(data['protocol'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Object} data
 */
TransactionActionAaveV3LiquidationCall.prototype.data = undefined;

/**
 * @member {String} protocol
 */
TransactionActionAaveV3LiquidationCall.prototype.protocol = undefined;

/**
 * @member {String} type
 */
TransactionActionAaveV3LiquidationCall.prototype.type = undefined;

// Implement TransactionAction interface:
