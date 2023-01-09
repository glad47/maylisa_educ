<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-06 19:20:02
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-10 04:21:28
-->
<template class="main">
   <div>
    <div v-for="(item, index) in listx">
    {{ item }}
    </div>
    <h1>Lang navigation</h1>
    <nuxt-link :to="switchLocalePath('ar')">العربية</nuxt-link>
    <nuxt-link  :to="switchLocalePath('en')">English</nuxt-link>
    
     
      
  
        <div>
            {{ whichLanguage }}
           
        </div>

        <banner></banner>
  
    </div>
 
  
</template>


<script>
import i18nRoutes from '../plugins/i18nRoutes';
import { mapActions, mapGetters } from 'vuex'
import {getToken} from '@utils/token'
export default {
  data() {
    return {
        listx:[],
    };

  },
  computed:{
    
    
  },
  mounted(){

    // setToken("welcoming", "hi")
    // var lists= i18nRoutes
    // console.log(lists)
    // for (var item in lists) {
    //     console.log("****************")
    //    console.log(decodeURI(lists[item]['ar']))
    //    this.listx.push(decodeURI(lists[item]['ar']))
    // }
    // lists.map((item) => {
    //     console.log(item)
    // })
  },
  methods:{
    // toggleLanguage : (newState) => {
    //     console.log("inside toggle function")
    //     console.log(this.$store)
    //     // this.$store.dispatch('env/toggleEn',newState)
    // }
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log('blur');
    },
    handleFocus() {
      console.log('focus');
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    ...mapActions({
        
        toggleLanguage : 'env/toggleEn'
    })
  }
  
}
</script>