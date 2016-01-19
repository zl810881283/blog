/**
 * Created by zl on 2016/1/4.
 */
import {bootstrap} from 'angular2/bootstrap'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router'

import App from 'components/app'

let debug=require('debug');
debug.enable('component:*');
debug('component:app')('debug model on');
bootstrap(App, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);