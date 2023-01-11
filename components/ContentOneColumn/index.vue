<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-12 06:35:56
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-12 07:27:28
-->

<template >
    <div class="col-12 e c">
            <div class="main c e " >
            <div class="contentOneC col-10 e c" style="margin-top: 30px;">
                <div :class="`header col-12 ${whichLanguage == 'ar' ? 'row-e' : !whichLanguage ? 'row-e' : 'row-s' }`">
                    <div class="e c" >
                    <h2 :class="` col-12 ${whichLanguage == 'ar' ? 'titleAr' : 'titleEn'}`"
                    >{{ tempTilte[whichLanguage] }}</h2>
                    <div class="line"></div>
                    </div>
                </div>
            
                <div  class="features col-12 e c">
                    <div v-if="whichLanguage == 'ar'" class="twoLists col-12 ">
                        
                
                        <!-- the main column -->
                       
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


                    

                    <div v-else class="twoLists col-12">
                         <!-- the main column -->
                         
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
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.contentOneC{

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

@media screen and (max-width: 1280px) {
    .contentOneC {
        .keyAr{   
            font-size: 16px!important;
        }
        .keyEn{
            font-size: 16px!important;
        }
        .valueAr{
            font-size: 16px!important;
        }
        .valueEn{
            font-size: 16px!important;
        }
    }
  
}
@media screen and (max-width: 1000px) {
    .contentOneC { 
        .keyAr{   
            font-size: 14px!important;
        }
        .keyEn{
            font-size: 14px!important;
        }
        .valueAr{
            font-size: 14px!important;
        }
        .valueEn{
            font-size: 14px!important;
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


const uni= ref({
    "ar":[
        {"key":"رقم الهاتف", "value":"+86 18245175545", "red":0, "link": 0 },
        {"key":"الايميل", "value":"frfreqgtr@gtrgt.com", "red":0, "link": 0 },
        {"key":"موقع الجامعة الالكتروني", "value":"www.gfgfre.com", "red":0, "link": 0 },
        {"key":"موقع الجامعة الجغرافي", "value":"gehgrhgf hg hreh grhg rheaghrgehgrgr gr ehgkhrghj grg kgge  gjhgrejbghr", "red":0, "link": 0 }
        
    ],
    "en":[
        {"key":"Phone Number", "value":"+87 1545504545", "red":0, "link": 0 },
        {"key":"Email", "value":"fgsegs@gmail.vom", "red":0, "link": 0 },
        {"key":"Website", "value":"www.fegrege.com", "red":0, "link": 0 },
        {"key":"Address", "value":"efhwrg hggregkj jg. esghgk e, erhjgher , hjegfhj er. rhbfh eg, rgre gregrgre", "red":0, "link": 0 }
    ]
})

const tempTilte= ref({
    "ar":"تواصل مع الجامعة",
    "en":"Contact University"
})

onMounted(() => {
    lista.value= uni.value[whichLang()]
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