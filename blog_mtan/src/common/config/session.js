'use strict';

/**
 * session configs
 */
export default {
  name: 'thinkjs',
  type: 'db',
  secret: 'E4736UDC',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.getPath('common', 'runtime') + '/session',
    }
  }
};