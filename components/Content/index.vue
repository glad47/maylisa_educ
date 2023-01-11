<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-11 05:10:41
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-11 18:12:32
-->
<template class="col-12">
    <div class="content col-12 c e ">
  <div class="main e c">
    <div class="header col-12 e c">
        <div :class="`title col-12 ${whichLanguage == 'ar' ? 'row-e' : 'row-s'}`"
         >list</div>
        <div class="line"></div>
    </div>
    
    <div class="col-12 e c">
        <div class="col-12 row-b">
            <div class="col-6" :class="`${whichLanguage == 'ar' ? 'row-e' : 'row-s'}`">key:value</div>
            <div class="col-6" :class="`${whichLanguage == 'ar' ? 'row-e' : 'row-s'}`">key:value</div>
        </div>
       
    </div>
    </div>
  </div>
</template>
<style>
</style>
<script setup>
import { ref, toRefs } from 'vue';
const props = defineProps({
    title: String,
	list: Array
});

const {list,title} = toRefs(props)
    
</script>