/*
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-08 21:56:44
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-09 21:29:49
 */

import Vue from 'vue'
import {getToken} from '@utils/token'

const mixin = {
    computed:{
        whichLanguage(){  
          return getToken("i18n_redirected")
        },
  }
}
export default mixin.computed.whichLanguage;
Vue.mixin(mixin)
