# BlockScoutApi.DefaultApi

All URIs are relative to *http://{server}/api/v2/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAddress**](DefaultApi.md#getAddress) | **GET** /addresses/{address_hash} | get address info
[**getAddressBlocksValidated**](DefaultApi.md#getAddressBlocksValidated) | **GET** /addresses/{address_hash}/blocks-validated | get blocks validated by address
[**getAddressCoinBalanceHistory**](DefaultApi.md#getAddressCoinBalanceHistory) | **GET** /addresses/{address_hash}/coin-balance-history | get address coin balance history
[**getAddressCoinBalanceHistoryByDay**](DefaultApi.md#getAddressCoinBalanceHistoryByDay) | **GET** /addresses/{address_hash}/coin-balance-history-by-day | get address coin balance history by day
[**getAddressCounters**](DefaultApi.md#getAddressCounters) | **GET** /addresses/{address_hash}/counters | get address counters
[**getAddressInternalTxs**](DefaultApi.md#getAddressInternalTxs) | **GET** /addresses/{address_hash}/internal-transactions | get address internal txs
[**getAddressLogs**](DefaultApi.md#getAddressLogs) | **GET** /addresses/{address_hash}/logs | get address logs
[**getAddressTokenBalances**](DefaultApi.md#getAddressTokenBalances) | **GET** /addresses/{address_hash}/token-balances | get blocks validated by address
[**getAddressTokenTransfers**](DefaultApi.md#getAddressTokenTransfers) | **GET** /addresses/{address_hash}/token-transfers | get address token transfers
[**getAddressTokens**](DefaultApi.md#getAddressTokens) | **GET** /addresses/{address_hash}/tokens | get blocks validated by address
[**getAddressTxs**](DefaultApi.md#getAddressTxs) | **GET** /addresses/{address_hash}/transactions | get address txs
[**getAddressWithdrawals**](DefaultApi.md#getAddressWithdrawals) | **GET** /addresses/{address_hash}/withdrawals | get address withdrawals
[**getAddresses**](DefaultApi.md#getAddresses) | **GET** /addresses | get native coin holders list
[**getBlock**](DefaultApi.md#getBlock) | **GET** /blocks/{block_number_or_hash} | get block info
[**getBlockTxs**](DefaultApi.md#getBlockTxs) | **GET** /blocks/{block_number_or_hash}/transactions | get block txs
[**getBlockWithdrawals**](DefaultApi.md#getBlockWithdrawals) | **GET** /blocks/{block_number_or_hash}/withdrawals | get block withdrawals
[**getBlocks**](DefaultApi.md#getBlocks) | **GET** /blocks | get blocks
[**getIndexingStatus**](DefaultApi.md#getIndexingStatus) | **GET** /main-page/indexing-status | get indexing status
[**getInternalTxs**](DefaultApi.md#getInternalTxs) | **GET** /transactions/{transaction_hash}/internal-transactions | get internal txs
[**getJsonRpcUrl**](DefaultApi.md#getJsonRpcUrl) | **GET** /config/json-rpc-url | get json rpc url
[**getLogs**](DefaultApi.md#getLogs) | **GET** /transactions/{transaction_hash}/logs | get logs
[**getMainPageTokens**](DefaultApi.md#getMainPageTokens) | **GET** /main-page/blocks | get main page blocks
[**getMainPageTxs**](DefaultApi.md#getMainPageTxs) | **GET** /main-page/transactions | get main page txs
[**getMarketChart**](DefaultApi.md#getMarketChart) | **GET** /stats/charts/market | get market chart
[**getNftInstance**](DefaultApi.md#getNftInstance) | **GET** /tokens/{address_hash}/instances/{id} | get NFT instance by id
[**getNftInstanceTransfers**](DefaultApi.md#getNftInstanceTransfers) | **GET** /tokens/{address_hash}/instances/{id}/transfers | get transfers of NFT instance
[**getNftInstanceTransfersCount**](DefaultApi.md#getNftInstanceTransfersCount) | **GET** /tokens/{address_hash}/instances/{id}/transfers-count | get transfers count of NFT instance
[**getNftInstances**](DefaultApi.md#getNftInstances) | **GET** /tokens/{address_hash}/instances | get NFT instances
[**getRawTrace**](DefaultApi.md#getRawTrace) | **GET** /transactions/{transaction_hash}/raw-trace | get raw trace
[**getReadMethods**](DefaultApi.md#getReadMethods) | **GET** /smart-contracts/{address_hash}/methods-read | get read methods
[**getReadMethodsProxy**](DefaultApi.md#getReadMethodsProxy) | **GET** /smart-contracts/{address_hash}/methods-read-proxy | get read methods proxy
[**getSmartContract**](DefaultApi.md#getSmartContract) | **GET** /smart-contracts/{address_hash} | get smart contract
[**getSmartContracts**](DefaultApi.md#getSmartContracts) | **GET** /smart-contracts | get verified smart contracts
[**getSmartContractsCounters**](DefaultApi.md#getSmartContractsCounters) | **GET** /smart-contracts/counters | get verified smart contracts counters
[**getStateChanges**](DefaultApi.md#getStateChanges) | **GET** /transactions/{transaction_hash}/state-changes | get state changes
[**getStats**](DefaultApi.md#getStats) | **GET** /stats | get stats counters
[**getToken**](DefaultApi.md#getToken) | **GET** /tokens/{address_hash} | get token info
[**getTokenCounters**](DefaultApi.md#getTokenCounters) | **GET** /tokens/{address_hash}/counters | get token holders
[**getTokenHolders**](DefaultApi.md#getTokenHolders) | **GET** /tokens/{address_hash}/holders | get token holders
[**getTokenInstanceHolders**](DefaultApi.md#getTokenInstanceHolders) | **GET** /tokens/{address_hash}/instances/{id}/holders | get token instance holders
[**getTokenTokenTransfers**](DefaultApi.md#getTokenTokenTransfers) | **GET** /tokens/{address_hash}/transfers | get token token transfers
[**getTokenTransfers**](DefaultApi.md#getTokenTransfers) | **GET** /transactions/{transaction_hash}/token-transfers | get token transfers
[**getTokensList**](DefaultApi.md#getTokensList) | **GET** /tokens | get tokens list
[**getTx**](DefaultApi.md#getTx) | **GET** /transactions/{transaction_hash} | get tx info
[**getTxs**](DefaultApi.md#getTxs) | **GET** /transactions | get txs
[**getTxsChart**](DefaultApi.md#getTxsChart) | **GET** /stats/charts/transactions | get txs chart
[**getWithdrawals**](DefaultApi.md#getWithdrawals) | **GET** /withdrawals | get withdrawals
[**getWriteMethods**](DefaultApi.md#getWriteMethods) | **GET** /smart-contracts/{address_hash}/methods-write | get write methods
[**getWriteMethodsProxy**](DefaultApi.md#getWriteMethodsProxy) | **GET** /smart-contracts/{address_hash}/methods-write-proxy | get write methods proxy
[**queryReadMethod**](DefaultApi.md#queryReadMethod) | **POST** /smart-contracts/{address_hash}/query-read-method | query read method
[**search**](DefaultApi.md#search) | **GET** /search | search
[**searchRedirect**](DefaultApi.md#searchRedirect) | **GET** /search/check-redirect | search redirect

<a name="getAddress"></a>
# **getAddress**
> Address getAddress(addressHash)

get address info

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddress(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressBlocksValidated"></a>
# **getAddressBlocksValidated**
> InlineResponse20015 getAddressBlocksValidated(addressHash)

get blocks validated by address

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressBlocksValidated(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressCoinBalanceHistory"></a>
# **getAddressCoinBalanceHistory**
> InlineResponse20017 getAddressCoinBalanceHistory(addressHash)

get address coin balance history

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressCoinBalanceHistory(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressCoinBalanceHistoryByDay"></a>
# **getAddressCoinBalanceHistoryByDay**
> [CoinBalanceHistoryByDaysEntry] getAddressCoinBalanceHistoryByDay(addressHash)

get address coin balance history by day

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressCoinBalanceHistoryByDay(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**[CoinBalanceHistoryByDaysEntry]**](CoinBalanceHistoryByDaysEntry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressCounters"></a>
# **getAddressCounters**
> AddressCounters getAddressCounters(addressHash)

get address counters

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressCounters(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**AddressCounters**](AddressCounters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressInternalTxs"></a>
# **getAddressInternalTxs**
> InlineResponse20013 getAddressInternalTxs(addressHash, opts)

get address internal txs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.getAddressInternalTxs(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **filter** | **String**|  | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressLogs"></a>
# **getAddressLogs**
> InlineResponse20014 getAddressLogs(addressHash)

get address logs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressLogs(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressTokenBalances"></a>
# **getAddressTokenBalances**
> [TokenBalance] getAddressTokenBalances(addressHash)

get blocks validated by address

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressTokenBalances(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**[TokenBalance]**](TokenBalance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressTokenTransfers"></a>
# **getAddressTokenTransfers**
> InlineResponse20012 getAddressTokenTransfers(addressHash, opts)

get address token transfers

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'type': "type_example", // String | 
  'filter': "filter_example", // String | 
  'token': "token_example" // String | 
};
apiInstance.getAddressTokenTransfers(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **type** | **String**|  | [optional] 
 **filter** | **String**|  | [optional] 
 **token** | **String**|  | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressTokens"></a>
# **getAddressTokens**
> InlineResponse20016 getAddressTokens(addressHash, opts)

get blocks validated by address

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'type': "type_example" // String | 
};
apiInstance.getAddressTokens(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressTxs"></a>
# **getAddressTxs**
> InlineResponse2009 getAddressTxs(addressHash, opts)

get address txs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'filter': "filter_example" // String | 
};
apiInstance.getAddressTxs(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **filter** | **String**|  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddressWithdrawals"></a>
# **getAddressWithdrawals**
> InlineResponse20010 getAddressWithdrawals(addressHash)

get address withdrawals

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getAddressWithdrawals(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAddresses"></a>
# **getAddresses**
> InlineResponse20011 getAddresses()

get native coin holders list

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getAddresses((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlock"></a>
# **getBlock**
> Block getBlock(blockNumberOrHash)

get block info

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let blockNumberOrHash = "blockNumberOrHash_example"; // String | Block number or hash

apiInstance.getBlock(blockNumberOrHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumberOrHash** | **String**| Block number or hash | 

### Return type

[**Block**](Block.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockTxs"></a>
# **getBlockTxs**
> InlineResponse2009 getBlockTxs(blockNumberOrHash)

get block txs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let blockNumberOrHash = "blockNumberOrHash_example"; // String | Block number or hash

apiInstance.getBlockTxs(blockNumberOrHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumberOrHash** | **String**| Block number or hash | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlockWithdrawals"></a>
# **getBlockWithdrawals**
> InlineResponse20010 getBlockWithdrawals(blockNumberOrHash)

get block withdrawals

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let blockNumberOrHash = "blockNumberOrHash_example"; // String | Block number or hash

apiInstance.getBlockWithdrawals(blockNumberOrHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockNumberOrHash** | **String**| Block number or hash | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBlocks"></a>
# **getBlocks**
> InlineResponse2002 getBlocks(opts)

get blocks

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let opts = { 
  'type': "type_example" // String | 
};
apiInstance.getBlocks(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getIndexingStatus"></a>
# **getIndexingStatus**
> IndexingStatus getIndexingStatus()

get indexing status

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getIndexingStatus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**IndexingStatus**](IndexingStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getInternalTxs"></a>
# **getInternalTxs**
> InlineResponse2006 getInternalTxs(transactionHash)

get internal txs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let transactionHash = "transactionHash_example"; // String | Transaction hash

apiInstance.getInternalTxs(transactionHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHash** | **String**| Transaction hash | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJsonRpcUrl"></a>
# **getJsonRpcUrl**
> InlineResponse20027 getJsonRpcUrl()

get json rpc url

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getJsonRpcUrl((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLogs"></a>
# **getLogs**
> InlineResponse2007 getLogs(transactionHash)

get logs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let transactionHash = "transactionHash_example"; // String | Transaction hash

apiInstance.getLogs(transactionHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHash** | **String**| Transaction hash | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMainPageTokens"></a>
# **getMainPageTokens**
> [Block] getMainPageTokens()

get main page blocks

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getMainPageTokens((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Block]**](Block.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMainPageTxs"></a>
# **getMainPageTxs**
> [Transaction] getMainPageTxs()

get main page txs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getMainPageTxs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Transaction]**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMarketChart"></a>
# **getMarketChart**
> InlineResponse2004 getMarketChart()

get market chart

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getMarketChart((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNftInstance"></a>
# **getNftInstance**
> NFTInstance getNftInstance(addressHash, id)

get NFT instance by id

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let id = 56; // Number | integer id

apiInstance.getNftInstance(addressHash, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **id** | **Number**| integer id | 

### Return type

[**NFTInstance**](NFTInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNftInstanceTransfers"></a>
# **getNftInstanceTransfers**
> InlineResponse20022 getNftInstanceTransfers(addressHash, id)

get transfers of NFT instance

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let id = 56; // Number | integer id

apiInstance.getNftInstanceTransfers(addressHash, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **id** | **Number**| integer id | 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNftInstanceTransfersCount"></a>
# **getNftInstanceTransfersCount**
> InlineResponse20024 getNftInstanceTransfersCount(addressHash, id)

get transfers count of NFT instance

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let id = 56; // Number | integer id

apiInstance.getNftInstanceTransfersCount(addressHash, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **id** | **Number**| integer id | 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNftInstances"></a>
# **getNftInstances**
> InlineResponse20021 getNftInstances(addressHash)

get NFT instances

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getNftInstances(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRawTrace"></a>
# **getRawTrace**
> [RawTrace] getRawTrace(transactionHash)

get raw trace

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let transactionHash = "transactionHash_example"; // String | Transaction hash

apiInstance.getRawTrace(transactionHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHash** | **String**| Transaction hash | 

### Return type

[**[RawTrace]**](RawTrace.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReadMethods"></a>
# **getReadMethods**
> [Object] getReadMethods(addressHash, opts)

get read methods

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'isCustomAbi': "isCustomAbi_example", // String | 
  'from': "from_example" // String | 
};
apiInstance.getReadMethods(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **isCustomAbi** | **String**|  | [optional] 
 **from** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReadMethodsProxy"></a>
# **getReadMethodsProxy**
> [Object] getReadMethodsProxy(addressHash, opts)

get read methods proxy

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'isCustomAbi': "isCustomAbi_example", // String | 
  'from': "from_example" // String | 
};
apiInstance.getReadMethodsProxy(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **isCustomAbi** | **String**|  | [optional] 
 **from** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSmartContract"></a>
# **getSmartContract**
> SmartContract getSmartContract(addressHash)

get smart contract

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getSmartContract(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**SmartContract**](SmartContract.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSmartContracts"></a>
# **getSmartContracts**
> InlineResponse20025 getSmartContracts(opts)

get verified smart contracts

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let opts = { 
  'q': "q_example", // String | 
  'filter': "filter_example" // String | 
};
apiInstance.getSmartContracts(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**|  | [optional] 
 **filter** | **String**|  | [optional] 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSmartContractsCounters"></a>
# **getSmartContractsCounters**
> InlineResponse20026 getSmartContractsCounters()

get verified smart contracts counters

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getSmartContractsCounters((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStateChanges"></a>
# **getStateChanges**
> InlineResponse2008 getStateChanges(transactionHash)

get state changes

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let transactionHash = "transactionHash_example"; // String | Transaction hash

apiInstance.getStateChanges(transactionHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHash** | **String**| Transaction hash | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStats"></a>
# **getStats**
> StatsResponse getStats()

get stats counters

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getStats((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**StatsResponse**](StatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getToken"></a>
# **getToken**
> TokenInfo getToken(addressHash)

get token info

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getToken(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**TokenInfo**](TokenInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenCounters"></a>
# **getTokenCounters**
> TokenCounters getTokenCounters(addressHash)

get token holders

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getTokenCounters(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**TokenCounters**](TokenCounters.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenHolders"></a>
# **getTokenHolders**
> InlineResponse20020 getTokenHolders(addressHash)

get token holders

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getTokenHolders(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenInstanceHolders"></a>
# **getTokenInstanceHolders**
> InlineResponse20023 getTokenInstanceHolders(addressHash, id)

get token instance holders

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let id = 56; // Number | integer id

apiInstance.getTokenInstanceHolders(addressHash, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **id** | **Number**| integer id | 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenTokenTransfers"></a>
# **getTokenTokenTransfers**
> InlineResponse20019 getTokenTokenTransfers(addressHash)

get token token transfers

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.getTokenTokenTransfers(addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokenTransfers"></a>
# **getTokenTransfers**
> InlineResponse2005 getTokenTransfers(transactionHash, opts)

get token transfers

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let transactionHash = "transactionHash_example"; // String | Transaction hash
let opts = { 
  'type': "type_example" // String | 
};
apiInstance.getTokenTransfers(transactionHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHash** | **String**| Transaction hash | 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTokensList"></a>
# **getTokensList**
> InlineResponse20018 getTokensList(opts)

get tokens list

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let opts = { 
  'q': "q_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.getTokensList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTx"></a>
# **getTx**
> Transaction getTx(transactionHash)

get tx info

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let transactionHash = "transactionHash_example"; // String | Transaction hash

apiInstance.getTx(transactionHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionHash** | **String**| Transaction hash | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTxs"></a>
# **getTxs**
> InlineResponse2001 getTxs(opts)

get txs

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let opts = { 
  'filter': "filter_example", // String | 
  'type': "type_example", // String | 
  'method': "method_example" // String | 
};
apiInstance.getTxs(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **method** | **String**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTxsChart"></a>
# **getTxsChart**
> InlineResponse2003 getTxsChart()

get txs chart

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getTxsChart((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWithdrawals"></a>
# **getWithdrawals**
> InlineResponse20010 getWithdrawals()

get withdrawals

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
apiInstance.getWithdrawals((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWriteMethods"></a>
# **getWriteMethods**
> [Object] getWriteMethods(addressHash, opts)

get write methods

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'isCustomAbi': "isCustomAbi_example" // String | 
};
apiInstance.getWriteMethods(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **isCustomAbi** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWriteMethodsProxy"></a>
# **getWriteMethodsProxy**
> [Object] getWriteMethodsProxy(addressHash, opts)

get write methods proxy

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let addressHash = "addressHash_example"; // String | Address hash
let opts = { 
  'isCustomAbi': "isCustomAbi_example" // String | 
};
apiInstance.getWriteMethodsProxy(addressHash, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressHash** | **String**| Address hash | 
 **isCustomAbi** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queryReadMethod"></a>
# **queryReadMethod**
> [Object] queryReadMethod(body, addressHash)

query read method

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let body = new BlockScoutApi.ReadMethodQueryBody(); // ReadMethodQueryBody | 
let addressHash = "addressHash_example"; // String | Address hash

apiInstance.queryReadMethod(body, addressHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReadMethodQueryBody**](ReadMethodQueryBody.md)|  | 
 **addressHash** | **String**| Address hash | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="search"></a>
# **search**
> InlineResponse200 search(opts)

search

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let opts = { 
  'q': "q_example" // String | 
};
apiInstance.search(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchRedirect"></a>
# **searchRedirect**
> SearchResultRedirect searchRedirect(opts)

search redirect

### Example
```javascript
import {BlockScoutApi} from 'block_scout_api';

let apiInstance = new BlockScoutApi.DefaultApi();
let opts = { 
  'q': "q_example" // String | 
};
apiInstance.searchRedirect(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**|  | [optional] 

### Return type

[**SearchResultRedirect**](SearchResultRedirect.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

