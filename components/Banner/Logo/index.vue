<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-07 02:57:21
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-11 04:25:01
-->
<template>
    <img
			:src="require(`@img/temp/${imgUrl}.jpg`)"
			:width="imgWidth"
			:height="imgHeight"
            :alt="name"
		/>
</template>
<script setup>
import { toRefs } from 'vue';

// import { ref } from "vue";
const props = defineProps({
	imgUrl: String,
	imgWidth: String,
	imgHeight: String,
	name: String,
});
const {imgUrl,name} = toRefs(props)
// const newImageUrl= require(`@img/temp/${imgUrl.value.name}.jpg`);
// console.log("updated logo")

</script>
