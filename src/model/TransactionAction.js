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
 * The TransactionAction model module.
 * @module model/TransactionAction
 * @version 1.0.0
 */
export class TransactionAction {
  /**
   * Constructs a new <code>TransactionAction</code>.
   * @alias module:model/TransactionAction
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TransactionAction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransactionAction} obj Optional instance to populate.
   * @return {module:model/TransactionAction} The populated <code>TransactionAction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TransactionAction();
    }
    return obj;
  }
}
