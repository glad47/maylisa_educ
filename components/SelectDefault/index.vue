<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-09 15:28:44
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-11 21:01:43
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
    width:200px;
}

@media screen and (max-width: 1280px) {
    .widthOfSelect{
     width: 160px;
    }
}  

@media screen and (max-width: 1000px) {
    .widthOfSelect{
     width: 130px;
    }
} 

</style>