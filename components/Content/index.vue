<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-11 05:10:41
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-12 07:03:46
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
                    <div v-if="whichLanguage == 'ar'" class="twoLists col-12 row-b">
                        
                        <!-- the branch column -->
                        <div  class="">
                            <div   v-for="(item, index) in listb" v-bind:key="index"  >
                                <div v-if="whichLanguage == 'ar'" class="list row-e">
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueAr" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueAr">{{ item["value"]  }}</div>
                                    </div>
                                    <div class="keyAr">:{{ item["key"] }}</div>
                                    
                                </div>
                                <div v-else class="list row-s">
                                    <div class="keyEn">{{ item["key"] }}:</div>
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueEn" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueEn">{{ item["value"]  }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- the main column -->
                        <div   class="">
                            <div   v-for="(item, index) in lista" v-bind:key="index" >
                                <div v-if="whichLanguage == 'ar'" class="list row-e">
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueAr" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueAr">{{ item["value"]  }}</div>
                                    </div>
                                    <div class="keyAr">:{{ item['key'] }}</div>
                                    
                                </div>
                                <div v-else class="list row-s">
                                    <div class="keyEn">{{ item["key"] }}:</div>
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueEn" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueEn">{{ item["value"]  }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div v-else class="twoLists col-12 row-b">
                         <!-- the main column -->
                         <div   class="">
                            <div   v-for="(item, index) in lista" v-bind:key="index" >
                                <div v-if="whichLanguage == 'ar'" class="list row-e">
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueAr" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueAr">{{ item["value"]  }}</div>
                                    </div>
                                    <div class="keyAr">:{{ item['key'] }}</div>
                                    
                                </div>
                                <div v-else class="list row-s">
                                    <div class="keyEn">{{ item["key"] }}:</div>
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueEn" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueEn">{{ item["value"]  }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- the branch column -->
                        <div  class="">
                            <div   v-for="(item, index) in listb" v-bind:key="index"  >
                                <div v-if="whichLanguage == 'ar'" class="list row-e">
                                    <div>

                                        <a v-if=" item['link'] == 1 "   class="valueAr" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueAr">{{ item["value"]  }}</div>
                                        
                                    </div>
                                    <div class="keyAr">:{{ item["key"] }}</div>
                                    
                                </div>
                                <div v-else class="list row-s">
                                    <div class="keyEn">{{ item["key"] }}:</div>
                                    <div>
                                        <a v-if=" item['link'] == 1 "   class="valueEn" > link.pdf</a>
                                        <div v-else :class="`${item['red'] == 1 ? 'redColor' : '' }`" class="valueEn">{{ item["value"]  }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                        
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
        .list{
            margin-bottom: 15px;
            .keyAr{
                font-family: 'Noto Naskh Arabic', 'sans-serif';
                font-weight: 700;
                font-size: 20px;
                margin-left: 10px;
                color: #000;
            }
            .keyEn{
                font-family: 'Inter', 'sans-serif';
                font-weight: 700;
                font-size: 20px;
                margin-right: 10px;
                color: #000;
            }
            .valueAr{
                font-family: 'Noto Naskh Arabic', 'sans-serif';
                font-weight: 400;
                font-size: 20px;
                color: #000;
                
            }
            .valueEn{
                font-family: 'Inter', 'sans-serif';
                font-weight: 400;
                font-size: 20px;
                color: #000;
                
            }
            .redColor{
               color:red!important;
            }
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

const {list,title} = toRefs(props)
const lista= ref([])
const listb= ref([])

const uni= ref({
    "ar":[
        {"key":"??????????", "value":"?????????? ?????????????????? ????????????", "red":0, "link": 0 },
        {"key":"???????????? ??????????????", "value":"RFCJ", "red":0, "link": 0 },
        {"key":"?????????? ??????????????", "value":"1982", "red":0, "link": 0 },
        {"key":"???????? ??????????????", "value":"?????????? ??????????????", "red":0, "link": 0 },
        {"key":"?????????????? ??????????????", "value":"540", "red":1, "link": 0 },
        {"key":"?????????????? ????????????????", "value":"10", "red":1, "link": 0 },
        {"key":"?????? ??????????????", "value":"??????????", "red":0, "link": 0 },
        {"key":"???????? ??????????????", "value":"??????????", "red":0, "link": 1 }
        
    ],
    "en":[
        {"key":"Name", "value":"Univeristy of Knowledge & science", "red":0, "link": 0 },
        {"key":"Acronym", "value":"GXSTNU", "red":0, "link": 0 },
        {"key":"Founded", "value":"1980", "red":0, "link": 0 },
        {"key":"Motto", "value":"Hard work, self-improvement", "red":0, "link": 0 },
        {"key":"World Rank", "value":"540", "red":1, "link": 0 },
        {"key":"Maylisan Rank", "value":"10", "red":1, "link": 0 },
        {"key":"Control Type", "value":"Public", "red":0, "link": 0 },
        {"key":"University Location", "value":"Moon", "red":0, "link": 1 }
    ]
})

const tempTilte= ref({
    "ar":"???????? ??????????????",
    "en":"University Identity"
})

onMounted(() => {
    var midIndex =Math.ceil(uni.value[whichLang()].length / 2)
    lista.value= uni.value[whichLang()].splice(0, midIndex)
    listb.value= uni.value[whichLang()].splice(-midIndex )
})



const downlaod= (index) => {
    //must implemented with backend
    //try to use arabic name for pdf files 
        //   var url='/pdf/'+parent.title+'/'+fullp;
        //     // console.log(url);
        //    var ele=document.createElement('a');
        //    ele.setAttribute('href',url);
        //    ele.setAttribute('target',"_blank");
        // //    ele.setAttribute('download',fullp);
        //    ele.style.display='none';
        //    document.body.appendChild(ele);
        //    ele.click();
        //    document.body.removeChild(ele);
}
    
</script>