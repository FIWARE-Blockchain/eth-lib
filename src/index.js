/*
 * FIWARE-IOTA
 * Author: harpreet.singh@fiware.org
 * Github: https://github.com/FIWARE-Blockchain/fiware-iota
 */
import {
  setProvider,
  getProvider,
} from './config';

import { getClientVersion, getRpcModule } from './info/web';
import {
  getNetEncoded, getNetlisting, getNetPeerCount, getNetVersion, getNetService
} from './info/net';

module.exports = {
  setProvider,
  getProvider,

  getClientVersion,
  getRpcModule,

  getNetEncoded,
  getNetlisting,
  getNetPeerCount,
  getNetVersion,
  getNetService,

};


getRpcModule().then((res) => {
  // eslint-disable-next-line no-console
  console.log(`res${res}`);
});
