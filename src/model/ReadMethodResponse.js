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
 * The ReadMethodResponse model module.
 * @module model/ReadMethodResponse
 * @version 1.0.0
 */
export class ReadMethodResponse {
  /**
   * Constructs a new <code>ReadMethodResponse</code>.
   * @alias module:model/ReadMethodResponse
   * @class
   * @param isError {Boolean} 
   * @param result {Object} 
   */
  constructor(isError, result) {
    this.isError = isError;
    this.result = result;
  }

  /**
   * Constructs a <code>ReadMethodResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReadMethodResponse} obj Optional instance to populate.
   * @return {module:model/ReadMethodResponse} The populated <code>ReadMethodResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReadMethodResponse();
      if (data.hasOwnProperty('is_error'))
        obj.isError = ApiClient.convertToType(data['is_error'], 'Boolean');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], Object);
    }
    return obj;
  }
}

/**
 * @member {Boolean} isError
 */
ReadMethodResponse.prototype.isError = undefined;

/**
 * @member {Object} result
 */
ReadMethodResponse.prototype.result = undefined;
