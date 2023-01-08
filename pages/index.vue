<template class="main">
   <div>
    <div v-for="(item, index) in listx">
    {{ item }}
    </div>
    <h1>Lang navigation</h1>
    <div @click="toggleLanguage(false)">
        <nuxt-link  :to="switchLocalePath('ar')">العربية</nuxt-link>
    </div>
    <div @click="toggleLanguage(true)">
        <nuxt-link  :to="switchLocalePath('en')">English</nuxt-link>
    </div>
     
      
  
        <div>
            {{ languageStatus }}
        </div>
  
    </div>
 
  
</template>


<script>
import i18nRoutes from '../plugins/i18nRoutes';
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
        listx:[]
    };

  },
  computed:{
    ...mapGetters({
        languageStatus: 'env/getEn'
    })
  },
  mounted(){
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
    toggleLanguage : (newState) => {
        console.log("inside toggle function")
        console.log($store)
        // this.$store.dispatch('env/toggleEn',newState)
    }
    // ...mapMutations({
    //     toggleLanguage : 'env/TOGGLE_EN'
    // })
  }
  
}
</script>