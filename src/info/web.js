/*
 * FIWARE-ETH
 * Author: harpreet.singh@fiware.org
 * Github: https://github.com/FIWARE-Blockchain/eth-lib
 */

import request from 'request';
import { getProvider } from './config';
/**
 * @method getClientVersion
 * @description get the information about the web3ClientVersion
 * @returns {Promise} callback with <response>Object, <error>Object if any
 */
const getClientVersion = () => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});

/**
 * @method getRpcModule
 * @description get the information about the web3ClientVersion
 * @returns {Promise} callback with <response>Object, <error>Object if any
 */
const getRpcModule = () => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: '{"jsonrpc":"2.0","method":"rpc_modules","params":[],"id":1}'
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});

// eslint-disable-next-line import/prefer-default-export
export { getClientVersion, getRpcModule };
