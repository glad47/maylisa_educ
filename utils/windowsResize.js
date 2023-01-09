// /*
//  * @Description: 
//  * @Version: 2.0
//  * @Author: Aziz
//  * @Date: 2023-01-10 03:05:12
//  * @LastEditors: Aziz
//  * @LastEditTime: 2023-01-10 03:05:21
//  */
// import { onMounted, onUnmounted, ref } from "vue";

// function useWindowResize() {
//   const width = ref(0);
//   const height = ref(0);

//   function onResize() {
//     width.value = window.innerWidth;
//     height.value = window.innerHeight;
//   }

//   onMounted(() => {
//     window.addEventListener("resize", onResize);
//     onResize();
//   });

//   onUnmounted(() => {
//     window.removeEventListener("resize", onResize);
//   });

//   return {
//     width,
//     height
//   };
// }

// export default useWindowResize;