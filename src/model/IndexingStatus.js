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
 * The IndexingStatus model module.
 * @module model/IndexingStatus
 * @version 1.0.0
 */
export class IndexingStatus {
  /**
   * Constructs a new <code>IndexingStatus</code>.
   * @alias module:model/IndexingStatus
   * @class
   * @param finishedIndexing {Boolean} 
   * @param finishedIndexingBlocks {Boolean} 
   * @param indexedBlocksRatio {String} 
   * @param indexedInternalTransactionsRatio {String} 
   */
  constructor(finishedIndexing, finishedIndexingBlocks, indexedBlocksRatio, indexedInternalTransactionsRatio) {
    this.finishedIndexing = finishedIndexing;
    this.finishedIndexingBlocks = finishedIndexingBlocks;
    this.indexedBlocksRatio = indexedBlocksRatio;
    this.indexedInternalTransactionsRatio = indexedInternalTransactionsRatio;
  }

  /**
   * Constructs a <code>IndexingStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IndexingStatus} obj Optional instance to populate.
   * @return {module:model/IndexingStatus} The populated <code>IndexingStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IndexingStatus();
      if (data.hasOwnProperty('finished_indexing'))
        obj.finishedIndexing = ApiClient.convertToType(data['finished_indexing'], 'Boolean');
      if (data.hasOwnProperty('finished_indexing_blocks'))
        obj.finishedIndexingBlocks = ApiClient.convertToType(data['finished_indexing_blocks'], 'Boolean');
      if (data.hasOwnProperty('indexed_blocks_ratio'))
        obj.indexedBlocksRatio = ApiClient.convertToType(data['indexed_blocks_ratio'], 'String');
      if (data.hasOwnProperty('indexed_internal_transactions_ratio'))
        obj.indexedInternalTransactionsRatio = ApiClient.convertToType(data['indexed_internal_transactions_ratio'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Boolean} finishedIndexing
 */
IndexingStatus.prototype.finishedIndexing = undefined;

/**
 * @member {Boolean} finishedIndexingBlocks
 */
IndexingStatus.prototype.finishedIndexingBlocks = undefined;

/**
 * @member {String} indexedBlocksRatio
 */
IndexingStatus.prototype.indexedBlocksRatio = undefined;

/**
 * @member {String} indexedInternalTransactionsRatio
 */
IndexingStatus.prototype.indexedInternalTransactionsRatio = undefined;

