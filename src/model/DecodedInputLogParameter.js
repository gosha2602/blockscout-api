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
 * The DecodedInputLogParameter model module.
 * @module model/DecodedInputLogParameter
 * @version 1.0.0
 */
export class DecodedInputLogParameter {
  /**
   * Constructs a new <code>DecodedInputLogParameter</code>.
   * @alias module:model/DecodedInputLogParameter
   * @class
   * @param name {String} 
   * @param type {String} 
   * @param value {String} 
   * @param indexed {Boolean} 
   */
  constructor(name, type, value, indexed) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.indexed = indexed;
  }

  /**
   * Constructs a <code>DecodedInputLogParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecodedInputLogParameter} obj Optional instance to populate.
   * @return {module:model/DecodedInputLogParameter} The populated <code>DecodedInputLogParameter</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecodedInputLogParameter();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('indexed'))
        obj.indexed = ApiClient.convertToType(data['indexed'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
DecodedInputLogParameter.prototype.name = undefined;

/**
 * @member {String} type
 */
DecodedInputLogParameter.prototype.type = undefined;

/**
 * @member {String} value
 */
DecodedInputLogParameter.prototype.value = undefined;

/**
 * @member {Boolean} indexed
 */
DecodedInputLogParameter.prototype.indexed = undefined;

