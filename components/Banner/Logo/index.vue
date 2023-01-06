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
	imgWidth: Number,
	imgHeight: Number,
	name: String,
});

const newImageUrl= require(`~/assets/img/${props.imgUrl}`);
</script>
