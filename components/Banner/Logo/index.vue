<template>
    <img
			:src="newImageUrl"
			:width="imgWidth"
			:height="imgHeight"
            :alt="name"
		/>
</template>
<script setup>
// import { ref } from "vue";
const props = defineProps({
	imgUrl: String,
	imgWidth: String,
	imgHeight: String,
	name: String,
});

const newImageUrl= require(`@img/${props.imgUrl}`);
</script>
