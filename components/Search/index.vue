<template>
    <div >
        <a-select v-if="props"
        class="widthOfSelect"
        show-search
        
        v-model="searchPharse"
        :placeholder="props.placeholder"
        :default-active-first-option="false"
        :filter-option="false"
        :not-found-content="null"
        @search="handleSearch"
        @change="handleChange"
  >
  <a-icon slot="suffixIcon" type="search" />
  <!-- <SearchOutlined /> -->
  <a-select-option v-for="item in list" :key="item.name">
      {{ item.name}}
    </a-select-option>
  </a-select>
    </div>
    
</template>
<script setup>
import { onMounted,computed,ref,watchEffect,toRefs } from 'vue';
// import { ref,reactive } from 'vue';

    const emits = defineEmits(['handleChange','handleSearch', 'handleBlur', 'handleFocus' ])
    const props = defineProps({
	list: Array,
    placeholder: String,
    searchPharse:String,
    noContentFound:String
    });
   
    //convert the prop into ref
    const {searchPharse}= toRefs(props)
    const {list}= toRefs(props)
    // console.log("@@@@@@@@@@@@")
   
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
    const handleSearch = (value) => {
        emits('handleSearch', value )
    }
   
  
  

</script>
<style lang="scss" scoped>
.widthOfSelect{
    width:400px;
    // margin-right:30px;
}

@media screen and (max-width: 1280px) {
    .widthOfSelect{
     width: 350px;
    }
}  
@media screen and (max-width: 1000px) {
    .widthOfSelect{
     width: 300px;
    }
} 
 
</style>