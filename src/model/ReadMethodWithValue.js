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
 * The ReadMethodWithValue model module.
 * @module model/ReadMethodWithValue
 * @version 1.0.0
 */
export class ReadMethodWithValue {
  /**
   * Constructs a new <code>ReadMethodWithValue</code>.
   * @alias module:model/ReadMethodWithValue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ReadMethodWithValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReadMethodWithValue} obj Optional instance to populate.
   * @return {module:model/ReadMethodWithValue} The populated <code>ReadMethodWithValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ReadMethodWithValue();
    }
    return obj;
  }
}
