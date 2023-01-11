<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-12 05:20:06
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-12 07:04:00
-->
<template >
    <div class="col-12 e c">
            <div class="main c e " >
            <div class="content col-10 e c" style="margin-top: 30px;">
                <div :class="`header col-12 ${whichLanguage == 'ar' ? 'row-e' : !whichLanguage ? 'row-e' : 'row-s' }`">
                    <div class="e c" >
                    <h2 :class="` col-12 ${whichLanguage == 'ar' ? 'titleAr' : 'titleEn'}`"
                    >{{ tempTilte[whichLanguage] }}</h2>
                    <div class="line"></div>
                    </div>
                </div>
            
                <div  class="features col-12 e c">
                    <div v-if="whichLanguage == 'ar'" class="twoLists col-12 e ">
                            <ul dir="rtl" class="col-12 "  v-bind:key="index" >
                                <li  v-for="(item, index) in uni[whichLanguage]" class="itemAr col=12">{{ item }}</li>
                            </ul>
                        
                    </div>
                    <div v-else class="twoLists col-12 e c">
                        <ul  class="col-12 "  v-bind:key="index" >
                                <li  v-for="(item, index) in uni[whichLanguage]" class="itemEn col=12">{{ item }}</li>
                        </ul>
                        
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.content{

    .header{
    position: relative;
    .titleAr{
        margin-bottom: 0px;
        font-family: 'Noto Naskh Arabic', 'sans-serif';
        font-weight: bold;
        font-size: 35px;
        // height: 34px;
    }
    .titleEn{
        margin-bottom: 0px;
        font-family: 'Inter', 'sans-serif';
        font-weight: bold;
        font-size: 35px;
        // height: 34px;
    }
    .line{
        background: #f8c86e;
        height: 3px;
        border-radius: 5px;
        width: 35%;
    }
    
}

.features{
    margin-top: 30px;
    .twoLists{
       .itemAr{
        font-family: 'Noto Naskh Arabic', 'sans-serif';
        font-weight: normal;
        font-size: 20px;
        margin-bottom: 10px;
        color: #000;
       }
       .itemEn{
        font-family: 'Inter', 'sans-serif';
        font-weight: normal;
        font-size: 20px;
        margin-bottom: 10px;
        color: #000;
       }

    }

   }
}

</style>
<script setup>
import { ref, toRefs, computed, onMounted } from 'vue';
import whichLang from "@plugins/discoverLang";
const props = defineProps({
    title: Object,
	list: Object
});

const {list,title, lineWidth} = toRefs(props)
const lista= ref([])
const listb= ref([])

const uni= ref({
    "ar":[
        "جامعة قوية جدا جدا جدا كافي زيها",
        "امك دعتلك لو قدرت تسجل هنا",
        "لو تدري كيف عمو محسن شخص طيب",
        "  ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقيارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقيارخص شئ ممكن تلاقيارخص شئ ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ارخص شئ ممكن تلاقي ممكن تلاقيه"
        
    ],
    "en":[
        "dmission policy and acceptance rate may vary by areas of study, degree level, ",
        "Normal University's Admission Office for detailed information on a specific a",
        "and other criteria.Please contact the Guangxi Science and Technology Normal University's Admission Office for detailed information on a specific admission selection policy and acceptance rate; the above University admission information is Please contact the Guangxi Science and Technology Normal University's Admission Office for detailed information on a specific admission selection policy and acceptance rate; the above University admission information is",
        "esidence and other criteria. Please contact the Guangxi Sci"
    ]
})

const tempTilte= ref({
    "ar":"مميزات الجامعة",
    "en":"University Features"
})






    
</script>