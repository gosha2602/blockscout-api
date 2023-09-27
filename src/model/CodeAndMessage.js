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
 * The CodeAndMessage model module.
 * @module model/CodeAndMessage
 * @version 1.0.0
 */
export class CodeAndMessage {
  /**
   * Constructs a new <code>CodeAndMessage</code>.
   * @alias module:model/CodeAndMessage
   * @class
   * @param code {Number} 
   * @param message {String} 
   */
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  /**
   * Constructs a <code>CodeAndMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CodeAndMessage} obj Optional instance to populate.
   * @return {module:model/CodeAndMessage} The populated <code>CodeAndMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CodeAndMessage();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
CodeAndMessage.prototype.code = undefined;

/**
 * @member {String} message
 */
CodeAndMessage.prototype.message = undefined;

// Implement OneOfReadMethodResponseResult interface:
