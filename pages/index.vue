<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-06 19:20:02
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-11 05:40:32
-->
<template class="col-12">
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

        <banner class=""></banner>
        <!-- <div class="containAnime">
            <div class=" blockerPage animated slow  animated.delay-3s  pageCurl-left"></div>
            
          
           
        </div> -->

        <Content />
        
  
    </div>
 
  
</template>
<style lang="scss">
.containAnime{
    position: relative;
    .blockerPage{
        position:absolute;
        width: 100%;
        height: 500px;
        background: #fff;
        z-index: -1;
        .singleBox{
        
        }
       
        
    }
}
</style>

<script>
import i18nRoutes from '../plugins/i18nRoutes';
import { mapActions, mapGetters } from 'vuex'
import {getToken} from '@utils/token'
import bus from "@utils/bus"
export default {
  data() {
    return {
        listx:[],
    };

  },
  computed:{
    
    
  },
  mounted(){
    console.log(bus)
    bus.on("changeCurrentUniversity", (value) => {
        console.log("Recieved Object" + value.name )
    })
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