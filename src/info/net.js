/*
 * FIWARE-ETH
 * Author: harpreet.singh@fiware.org
 * Github: https://github.com/FIWARE-Blockchain/eth-lib
 */

import request from 'request';
import { getProvider } from './config';

// Network IDs
// 1 ETH MainNet Main Ethereum network
// 3 ETH Ropsten PoW test network
// 4 ETH Rinkeby PoA test network using Clique
// 5 ETH Goerli PoA test network using Clique
// 6 ETC Kotti PoA test network using Clique
// 61 ETC Classic Main Ethereum Classic network
// 63 ETC Mordor PoW test network
// 2018 ETH Dev PoW development network

/**
 * @method getNetVersion
 * @description Returns the current chain ID.
 * @param {Number} [id = 1]
 * @param {Array} [params = []]
 * @returns {Promise} callback with <response>Object containing result : string - Current chain ID,
 * <error>Object if any
 */

const getNetVersion = (id = 1, params = []) => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `{"jsonrpc":"2.0","method":"net_version","params":${params},"id":${id}}`
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});

/**
 * @method getNetlisting
 * @description Whether the client is actively listening for network connections.
 * @param {Number} [id = 1]
 * @param {Array} [params = []]
 * @returns {Promise} callback with <response>Object containing
 * result (BOOLEAN) - true if the client is actively listening for network connections else false,
 * <error>Object if any
 */
const getNetlisting = (id = 1, params = []) => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `{"jsonrpc":"2.0","method":"net_listening","params":${params},"id":${id}}`
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});

/**
 * @method getNetPeerCount
 * @description Returns the number of peers currently connected to the client.
 * @param {Number} [id = 1]
 * @param {Array} [params = []]
 * @returns {Promise} callback with <response>Object containing
 * result : integer - Number of connected peers in hexadecimal, <error>Object if any
 */
const getNetPeerCount = (id = 1, params = []) => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `{"jsonrpc":"2.0","method":"net_peerCount","params":${params},"id":${id}}`
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});

/**
 * @method getNetEncoded
 * @description Returns the enode URL.
 * @param {Number} [id = 1]
 * @param {Array} [params = []]
 * @returns {Promise} callback with <response>Object containing
 * result : string - Enode URL for the node, <error>Object if any
 */
const getNetEncoded = (id = 1, params = []) => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `{"jsonrpc":"2.0","method":"net_enode","params":${params},"id":${id}}`
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});

/**
 * @method getNetService
 * @description Returns enabled services (e.g;, jsonrpc) and the host and port for each service.
 * @param {Number} [id = 1]
 * @param {Array} [params = []]
 * @returns {Promise} callback with <response>Object containing
 * result : objects - Enabled services, <error>Object if any
 */
const getNetService = (id = 1, params = []) => new Promise((resolve, reject) => {
  const options = {
    method: 'POST',
    url: getProvider(),
    headers: {
      'Content-Type': 'text/plain'
    },
    body: `{"jsonrpc":"2.0","method":"net_services","params":${params},"id":${id}}`
  };
  request(options, (error, response) => {
    if (error) { reject(error); }
    resolve(response.body);
  });
});


// eslint-disable-next-line import/prefer-default-export
export {
  getNetVersion, getNetlisting, getNetPeerCount, getNetEncoded, getNetService
};
