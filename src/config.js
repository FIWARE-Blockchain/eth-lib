/*
 * FIWARE-ETH
 * Author: harpreet.singh@fiware.org
 * Github: https://github.com/FIWARE-Blockchain/eth-lib
 */
// Global configurations
global.config = {
  rpcEndpoint: ''
};

// setting default global configuration
global.config = { rpcEndpoint: 'http://127.0.0.1:8545' };

/**
 * @method setProvider
 * @description set a new provider
 */
const setProvider = (rpcEndpoint) => {
  if (typeof rpcEndpoint === 'undefined' || rpcEndpoint === '') {
    throw new Error('incorrect rpc endpoint');
  }
  global.config.rpcEndpoint = rpcEndpoint;
};

/**
 * @method getProvider
 * @description get the url of the provider
 * @returns {string} endpoint of the provider
 */
const getProvider = () => global.config.rpcEndpoint;

export {
  setProvider, getProvider,
};
