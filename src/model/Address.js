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
import {AddressTag} from './AddressTag';
import {TokenInfo} from './TokenInfo';
import {WatchlistName} from './WatchlistName';

/**
 * The Address model module.
 * @module model/Address
 * @version 1.0.0
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   * @param hash {String} 
   */
  constructor(hash) {
    this.hash = hash;
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Address();
      if (data.hasOwnProperty('creator_address_hash'))
        obj.creatorAddressHash = ApiClient.convertToType(data['creator_address_hash'], 'String');
      if (data.hasOwnProperty('creation_tx_hash'))
        obj.creationTxHash = ApiClient.convertToType(data['creation_tx_hash'], 'String');
      if (data.hasOwnProperty('token'))
        obj.token = TokenInfo.constructFromObject(data['token']);
      if (data.hasOwnProperty('coin_balance'))
        obj.coinBalance = ApiClient.convertToType(data['coin_balance'], 'String');
      if (data.hasOwnProperty('exchange_rate'))
        obj.exchangeRate = ApiClient.convertToType(data['exchange_rate'], 'String');
      if (data.hasOwnProperty('implementation_address'))
        obj.implementationAddress = ApiClient.convertToType(data['implementation_address'], 'String');
      if (data.hasOwnProperty('block_number_balance_updated_at'))
        obj.blockNumberBalanceUpdatedAt = ApiClient.convertToType(data['block_number_balance_updated_at'], 'Number');
      if (data.hasOwnProperty('hash'))
        obj.hash = ApiClient.convertToType(data['hash'], 'String');
      if (data.hasOwnProperty('implementation_name'))
        obj.implementationName = ApiClient.convertToType(data['implementation_name'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('is_contract'))
        obj.isContract = ApiClient.convertToType(data['is_contract'], 'Boolean');
      if (data.hasOwnProperty('private_tags'))
        obj.privateTags = ApiClient.convertToType(data['private_tags'], [AddressTag]);
      if (data.hasOwnProperty('watchlist_names'))
        obj.watchlistNames = ApiClient.convertToType(data['watchlist_names'], [WatchlistName]);
      if (data.hasOwnProperty('public_tags'))
        obj.publicTags = ApiClient.convertToType(data['public_tags'], [AddressTag]);
      if (data.hasOwnProperty('is_verified'))
        obj.isVerified = ApiClient.convertToType(data['is_verified'], 'Boolean');
      if (data.hasOwnProperty('has_beacon_chain_withdrawals'))
        obj.hasBeaconChainWithdrawals = ApiClient.convertToType(data['has_beacon_chain_withdrawals'], 'Boolean');
      if (data.hasOwnProperty('has_custom_methods_read'))
        obj.hasCustomMethodsRead = ApiClient.convertToType(data['has_custom_methods_read'], 'Boolean');
      if (data.hasOwnProperty('has_custom_methods_write'))
        obj.hasCustomMethodsWrite = ApiClient.convertToType(data['has_custom_methods_write'], 'Boolean');
      if (data.hasOwnProperty('has_decompiled_code'))
        obj.hasDecompiledCode = ApiClient.convertToType(data['has_decompiled_code'], 'Boolean');
      if (data.hasOwnProperty('has_logs'))
        obj.hasLogs = ApiClient.convertToType(data['has_logs'], 'Boolean');
      if (data.hasOwnProperty('has_methods_read'))
        obj.hasMethodsRead = ApiClient.convertToType(data['has_methods_read'], 'Boolean');
      if (data.hasOwnProperty('has_methods_write'))
        obj.hasMethodsWrite = ApiClient.convertToType(data['has_methods_write'], 'Boolean');
      if (data.hasOwnProperty('has_methods_read_proxy'))
        obj.hasMethodsReadProxy = ApiClient.convertToType(data['has_methods_read_proxy'], 'Boolean');
      if (data.hasOwnProperty('has_methods_write_proxy'))
        obj.hasMethodsWriteProxy = ApiClient.convertToType(data['has_methods_write_proxy'], 'Boolean');
      if (data.hasOwnProperty('has_token_transfers'))
        obj.hasTokenTransfers = ApiClient.convertToType(data['has_token_transfers'], 'Boolean');
      if (data.hasOwnProperty('has_tokens'))
        obj.hasTokens = ApiClient.convertToType(data['has_tokens'], 'Boolean');
      if (data.hasOwnProperty('has_validated_blocks'))
        obj.hasValidatedBlocks = ApiClient.convertToType(data['has_validated_blocks'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} creatorAddressHash
 */
Address.prototype.creatorAddressHash = undefined;

/**
 * @member {String} creationTxHash
 */
Address.prototype.creationTxHash = undefined;

/**
 * @member {module:model/TokenInfo} token
 */
Address.prototype.token = undefined;

/**
 * @member {String} coinBalance
 */
Address.prototype.coinBalance = undefined;

/**
 * @member {String} exchangeRate
 */
Address.prototype.exchangeRate = undefined;

/**
 * @member {String} implementationAddress
 */
Address.prototype.implementationAddress = undefined;

/**
 * @member {Number} blockNumberBalanceUpdatedAt
 */
Address.prototype.blockNumberBalanceUpdatedAt = undefined;

/**
 * @member {String} hash
 */
Address.prototype.hash = undefined;

/**
 * @member {String} implementationName
 */
Address.prototype.implementationName = undefined;

/**
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * @member {Boolean} isContract
 */
Address.prototype.isContract = undefined;

/**
 * @member {Array.<module:model/AddressTag>} privateTags
 */
Address.prototype.privateTags = undefined;

/**
 * @member {Array.<module:model/WatchlistName>} watchlistNames
 */
Address.prototype.watchlistNames = undefined;

/**
 * @member {Array.<module:model/AddressTag>} publicTags
 */
Address.prototype.publicTags = undefined;

/**
 * @member {Boolean} isVerified
 */
Address.prototype.isVerified = undefined;

/**
 * @member {Boolean} hasBeaconChainWithdrawals
 */
Address.prototype.hasBeaconChainWithdrawals = undefined;

/**
 * @member {Boolean} hasCustomMethodsRead
 */
Address.prototype.hasCustomMethodsRead = undefined;

/**
 * @member {Boolean} hasCustomMethodsWrite
 */
Address.prototype.hasCustomMethodsWrite = undefined;

/**
 * @member {Boolean} hasDecompiledCode
 */
Address.prototype.hasDecompiledCode = undefined;

/**
 * @member {Boolean} hasLogs
 */
Address.prototype.hasLogs = undefined;

/**
 * @member {Boolean} hasMethodsRead
 */
Address.prototype.hasMethodsRead = undefined;

/**
 * @member {Boolean} hasMethodsWrite
 */
Address.prototype.hasMethodsWrite = undefined;

/**
 * @member {Boolean} hasMethodsReadProxy
 */
Address.prototype.hasMethodsReadProxy = undefined;

/**
 * @member {Boolean} hasMethodsWriteProxy
 */
Address.prototype.hasMethodsWriteProxy = undefined;

/**
 * @member {Boolean} hasTokenTransfers
 */
Address.prototype.hasTokenTransfers = undefined;

/**
 * @member {Boolean} hasTokens
 */
Address.prototype.hasTokens = undefined;

/**
 * @member {Boolean} hasValidatedBlocks
 */
Address.prototype.hasValidatedBlocks = undefined;

