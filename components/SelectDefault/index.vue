<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-09 15:28:44
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-10 04:07:46
-->
<template>
    <div >
        <a-select v-if="props"
        class="widthOfSelect"
        v-model="chosen"
        :not-found-content="props.noContentFound"
        :show-search=props.showSearch
        :placeholder="props.placeholder"
        :option-filter-prop="props.optionFilterProp"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
  >
  <a-select-option v-for="item in props.list" :key="item.name">
      {{ item.name}}
    </a-select-option>
  </a-select>
    </div>
    
</template>
<script setup>
import { onMounted,computed,ref,watchEffect,toRefs } from 'vue';
// import { ref,reactive } from 'vue';

    const emits = defineEmits(['handleChange', 'handleBlur', 'handleFocus','filterOption' ])
    const props = defineProps({
	list: Array,
    placeholder: String,
    optionFilterProp:String,
    showSearch: Boolean,
    chosen:String,
    noContentFound:String
    });
   
    //convert the prop into ref
    const {chosen}= toRefs(props)
    console.log("@@@@@@@@@@@@")
   
    // onMounted(() => {
    //     defaultFilter.value= props.defaultFilter
    // })
 
    const handleChange = (value) => {
        emits('handleChange', value)
    }
    const handleBlur = () => {
        emits('handleBlur')
    }
    const handleFocus = () => {
        emits('handleFocus')
    }
    const filterOption = (input, option) => {
        emits('handleChange', input,option )
    }
   
  
  

</script>
<style lang="scss" scoped>
.widthOfSelect{
    width:320px;
}
@media screen and (max-width: 1920px) {
   .widthOfSelect{
    width: 350px;
}
}
@media screen and (max-width: 1600px) {
   .widthOfSelect{
    width: 310px;
}
}
@media screen and (max-width: 1536px) {
   .widthOfSelect{
    width: 300px;
}
}
@media screen and (max-width: 1450px) {
   .widthOfSelect{
    width: 270px;
   }
    
}
@media screen and (max-width: 1366px) {
   .widthOfSelect{
    width: 260px;
   }
    
}
@media screen and (max-width: 1280px) {
    .widthOfSelect{
     width: 240px;
    }
}  
@media screen and (max-width: 1180px) {
    .widthOfSelect{
     width: 220px;
    }
} 
@media screen and (max-width: 1080px) {
    .widthOfSelect{
     width: 200px;
    }
}  
@media screen and (max-width: 800px) {
    .widthOfSelect{
     width: 160px;
    }
}   
@media screen and (max-width: 768px) {
    .widthOfSelect{
     width: 130px;
    }
} 
</style>