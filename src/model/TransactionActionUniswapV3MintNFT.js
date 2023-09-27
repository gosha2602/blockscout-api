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
 * The TransactionActionUniswapV3MintNFT model module.
 * @module model/TransactionActionUniswapV3MintNFT
 * @version 1.0.0
 */
export class TransactionActionUniswapV3MintNFT {
  /**
   * Constructs a new <code>TransactionActionUniswapV3MintNFT</code>.
   * @alias module:model/TransactionActionUniswapV3MintNFT
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
   * Constructs a <code>TransactionActionUniswapV3MintNFT</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionActionUniswapV3MintNFT} obj Optional instance to populate.
   * @return {module:model/TransactionActionUniswapV3MintNFT} The populated <code>TransactionActionUniswapV3MintNFT</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionActionUniswapV3MintNFT();
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
TransactionActionUniswapV3MintNFT.prototype.data = undefined;

/**
 * @member {String} protocol
 */
TransactionActionUniswapV3MintNFT.prototype.protocol = undefined;

/**
 * @member {String} type
 */
TransactionActionUniswapV3MintNFT.prototype.type = undefined;

// Implement TransactionAction interface:
