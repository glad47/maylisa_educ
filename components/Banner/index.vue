<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-07 01:40:27
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-11 05:05:25
-->
<template>
    <div class="banner e col-e">
        <div class="arrow col-12 c row-b">
            <div :class="currentPos == 0 ? 'leftNoPointer' : 'left' " @click="() => {
               decCurrent() 
            }">
            <div class="hoverBox"></div>
            <img src="@img/components/banner/left_arrow.png"
            width="44px"
            height="150px"
            alt="left_arrow"/>
        </div>
            <div :class="currentPos == endPos ? 'rightNoPointer' : 'right' " @click="() => {
                
                incCurrent()
            }">
            <div class="hoverBox"></div>    
            <img src="@img/components/banner/right_arrow.png"
            width="44px"
            height="150px"
            alt="right_arrow"/>
        </div>
        </div>
        <div class="options col-12 row-sp">
            <div class="col-4 row-sp">
                <!-- category selection -->
                <div   class="e c" >
                    <SelectDefault 
                    @handleChange="handleChangeFilter" 
                    :list=" universityCategories[whichLanguage]"
                    :placeholder="placeholderFilter[whichLanguage]"
                    :optionFilterProp="optionFilterPropFilter"
                    :showSearch="showSearchFilter"
                    :chosen="updateCurrnetCat"
                    :noContentFound="notFoundContent[whichLanguage]"
                    />
               
                </div>
                <!-- university selection -->
                <div class="e c">
                    <SelectDefault 
                    @handleChange="handleChange" 
                    :list="!!fitlerdListOfUniversity  ? fitlerdListOfUniversity : listOfUniversity[whichLanguage]"
                    :placeholder="placeholderSelect[whichLanguage]"
                    :optionFilterProp="optionFilterProp"
                    :showSearch="showSearch"
                    :chosen="updateCurrnetUniversitySelect"
                    :noContentFound="notFoundContent[whichLanguage]"
                    />
                </div>
            </div>
            <div class="col-7 row-e">
                <div  class="e c"> 
                    <Search 
                    @handleSearch="handleSearch"
                    @handleChange="handleChangeSearch"
                    :list="listSearched"
                    :placeholder="placeholderSearch[whichLanguage]"
                    :noContentFound="notFoundContent[whichLanguage]"
                    :searchPharse="updateCurrentSearch"
                    />
                </div>
            </div>
        </div>
        <div v-if="updateCurrnetUniversity != undefined" class="col-e" style="margin-bottom: 10px;">
            <Logo  :imgUrl="updateCurrnetUniversity.name" :name="updateCurrnetUniversity.name" imgWidth="240" imgHeight="240" />
          
        </div>
        <div v-if="updateCurrnetUniversity != undefined" class="col-e " style="margin-bottom:40px;">
            <!-- <H1 class="univeristName">جامعة الامام عبداالله بن سعود</H1> -->
            <H1 class="univeristName">{{ updateCurrnetUniversity.name }}</H1>
        </div>
        <!-- <div v-else class="col-e">
            <Logo imgUrl="index1.png" name="maylisa" imgWidth="240" imgHeight="240" />
            <H2>University of Almam Abdulah bin Saud</H2>
        </div> -->
        
    </div>
</template>

<style lang="scss" scoped>
.banner{
 /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ededed+0,d4d3d4+14,bbbabb+25,666566+60,4c4a4b+73,2f2e2f+88,211e21+100 */
background: rgb(237,237,237); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(237,237,237,1) 0%, rgba(212,211,212,1) 14%, rgba(187,186,187,1) 25%, rgba(102,101,102,1) 60%, rgba(76,74,75,1) 73%, rgba(47,46,47,1) 88%, rgba(33,30,33,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(237,237,237,1) 0%,rgba(212,211,212,1) 14%,rgba(187,186,187,1) 25%,rgba(102,101,102,1) 60%,rgba(76,74,75,1) 73%,rgba(47,46,47,1) 88%,rgba(33,30,33,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(237,237,237,1) 0%,rgba(212,211,212,1) 14%,rgba(187,186,187,1) 25%,rgba(102,101,102,1) 60%,rgba(76,74,75,1) 73%,rgba(47,46,47,1) 88%,rgba(33,30,33,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ededed', endColorstr='#211e21',GradientType=0 ); /* IE6-9 */

 height: 450px;
 margin: 0px;
 position: relative;

 .arrow{
    width: 100%;
    height: 150px;
    position: absolute;
    top:140px;
    .leftNoPointer{
        position: relative;
        margin-left: 20px;
        cursor: not-allowed;
    }
    .left{
        position: relative;
        margin-left: 20px;
        cursor: pointer;
        
        .hoverBox{
            position: absolute;
            width: 64px;
            left: -20px;
            height: 150px;
            background: rgba(135 , 206, 250, 0.3);
            z-index: -1;
            
            
        } 
       
    }

    .left:hover .hoverBox {
        z-index: 2;
    }

    .rightNoPointer{
        position: relative;
        margin-right: 20px;
        cursor: not-allowed;
    }
    .right{
        position: relative;
        margin-right: 20px;
        cursor: pointer;
        .hoverBox{
            position: absolute;
            width: 64px;
            right: -20px;
            height: 150px;
            background: rgba(135 , 206, 250, 0.3);
            z-index: -1;
            
            
        } 
    }

    .right:hover .hoverBox {
        z-index: 2;
    }
 }
 .options{
    width: 100%;
    height: 50px;
    position: absolute;
    // background: #000;
    top: 10px;
 }
 .univeristName{
    font-family: 'Mada', serif!important;
    font-weight: 900!important;
    color: #b7b7b7!important;
 }
}
</style>

<script setup>
import Logo from "./Logo/index";
import whichLang from "@plugins/discoverLang";
import bus from "@utils/bus";
import { computed, onMounted, watch,ref } from "vue";

        
           const updateCurrnetCat=ref(undefined);
           const updateCurrnetUniversity= ref(undefined)
           const updateCurrnetUniversitySelect= ref(undefined)
           const updateCurrentSearch=ref(undefined)
           const fitlerdListOfUniversity= ref(undefined)
           const listSearched= ref([])
           const notFoundContent= ref({
            "ar":"لاتوجد جامعات",
            "en":"no universities found" 
           })
           const listOfUniversity=ref({
            "ar":[
                {id:1, name: "جامعة عبدالمحسن", cat:"2"},
                {id:2, name:"جامعة الفتح",cat:"5,3,2"},
                {id:3, name: "جامعة عبدالله", cat:"4"},
                {id:4, name:"جامعة الاقصى", cat: "5"},
            ],
            "en":[
                {id:1, name: "university of education",cat:"2"},
                {id:2, name:"university of knowledge",cat:"3"},
                {id:3, name: "university of science",cat:"4"},
                {id:4, name:"university of sport",cat: "5"}
            ]
           })
            const universityCategories= ref({
            "ar":[
                {id:1, name:"الكل"},
                {id:2, name:"الجامعات الحكومية"},
                {id:3, name:"الجامعات الخاصة"},
                {id:4, name:"افضل عشر جامعات"},
                {id:5, name:"افضل جامعات الهندسة"},
                {id:6, name:"افضل جامعات الطب"},
                {id:7, name:"افضل جامعات الاقتصاد"},
                {id:8, name:"ارخص خمس جامعات"},

            ],
            "en":[
                {id:1, name:"All"},
                {id:2, name:"Public Universities"},
                {id:3, name:"Private Universities"},
                {id:4, name:"The best 10 universities"},
                {id:5, name:"Best Engineering universities"},
                {id:6, name:"Best Medical universities"},
                {id:7, name:"Best universities for Economic"},
                {id:8, name:"The most 5 cheapest universities"},
            ]
        })

         //for choose universites params
    
         const placeholderSelect=ref({
            "ar":"اختر جامعة",
            "en":"choose university"
        })
        const optionFilterProp=ref("")
        const showSearch=ref(false)


         //for choose categories params
      
        const placeholderFilter=ref({
            "ar":"اختر فئة",
            "en":"choose category"
        })
        const optionFilterPropFilter= ref("")
        const showSearchFilter=ref(false)
        //for search params

        const placeholderSearch=ref({
            "ar":"ابحث عن جامعة",
            "en":"search for university"
        })


        //slider data
        const currentPos = ref(0)
        const endPos= ref(0)


        //update the current cat needed to be afterr mounted
        onMounted(() => {
            updateCurrnetCat.value= universityCategories.value[whichLang()][0].name
            endPos.value = listOfUniversity.value[whichLang()].length -1
            updateCurrnetUniversity.value= listOfUniversity.value[whichLang()][0]
            bus.emit("changeCurrentUniversity", updateCurrnetUniversity.value)
            
            // console.log("**********************")
            // console.log(width.value)
            // console.log(height.value)
        })

       const incCurrent= () => {
        if(currentPos.value <  endPos.value){
            currentPos.value++
            if(fitlerdListOfUniversity != undefined){}
            updateCurrnetUniversity.value= !!fitlerdListOfUniversity.value ? fitlerdListOfUniversity.value[currentPos.value] : listOfUniversity.value[whichLang()][currentPos.value]
        }
        bus.emit("changeCurrentUniversity", updateCurrnetUniversity.value)

        
       }

       const decCurrent= () => {
        if(currentPos.value >  0){
            currentPos.value--
            updateCurrnetUniversity.value= !!fitlerdListOfUniversity.value ? fitlerdListOfUniversity.value[currentPos.value] : listOfUniversity.value[whichLang()][currentPos.value]
        }

        bus.emit("changeCurrentUniversity", updateCurrnetUniversity.value)
       }


        

        const handleChange = (value) => {
         console.log(`selected ${value}`);
         var item={}
         updateCurrnetUniversitySelect.value= value
         if(fitlerdListOfUniversity.value != undefined){
            var tem= fitlerdListOfUniversity.value.filter((item) => {
            return item.name == value
         })  
         item= tem[0]
         }else{
            var tem= listOfUniversity.value[whichLang()].filter((item) => {
            return item.name == value
         })  
         item= tem[0]
         }
         
         updateCurrnetUniversity.value= item
         bus.emit("changeCurrentUniversity", updateCurrnetUniversity.value)
        }

        const handleChangeFilter = (value) => {
        updateCurrnetUniversitySelect.value= undefined    
        updateCurrnetCat.value=value
        fitlerdListOfUniversity.value=[]
         var tem= universityCategories.value[whichLang()].filter((item) => {
            return item.name == value
         })  
         var item= tem[0]
         console.log(item.id)
         if(item.id != 1){
            listOfUniversity.value[whichLang()].map((uni) => {
           
            if(uni.cat.includes(item.id)){
              
                fitlerdListOfUniversity.value.push(uni)
            }
         })
         fitlerdListOfUniversity.value.sort((a,b) => {
            // console.log("inside the sort")
            return a.id - b.id
         })

         updateCurrnetUniversity.value= fitlerdListOfUniversity.value[0]

         currentPos.value=0
         endPos.value=fitlerdListOfUniversity.value.length - 1
        }else{
            fitlerdListOfUniversity.value= undefined 
            updateCurrnetUniversity.value= listOfUniversity.value[whichLang()][0]
            currentPos.value=0
            endPos.value=listOfUniversity.value[whichLang()].length - 1 
        }

        bus.emit("changeCurrentUniversity", updateCurrnetUniversity.value)
        
        
    }
    const handleSearch= (value) => {
        updateCurrentSearch.value= undefined
        listSearched.value=[]
        
        
        if(value == ''){
            return
            updateCurrentSearch.value= undefined
            listSearched.value=[]
        }
        
        listOfUniversity.value[whichLang()].map((uni) => {
            console.log(uni.name.toLowerCase().indexOf(value.toLowerCase()))
           if(uni.name.toLowerCase().indexOf(value.toLowerCase()) >= 0){
            console.log("inside")
            listSearched.value.push(uni)
           }    
         })
         
         console.log("Search for " + value )
         updateCurrentSearch.value= value
    }
    

    const handleChangeSearch= (value) => {
        console.log("*****handle change****")
        console.log(value)
        var count = -1
        var curr= 0
        var tem= listOfUniversity.value[whichLang()].filter((item) => {
            count++
            if(item.name == value){
                curr= count
            }
            return item.name == value
         })  
         var item= tem[0]
         listSearched.value= [] 
        listSearched.value.push(item)
        updateCurrentSearch.value= item.name
        updateCurrnetCat.value= universityCategories.value[whichLang()][0].name
        updateCurrnetUniversitySelect.value= undefined 
        updateCurrnetUniversity.value= item
        bus.emit("changeCurrentUniversity", updateCurrnetUniversity.value)
        currentPos.value=curr
        endPos.value= listOfUniversity.value[whichLang()].length - 1  
   
    }


         
                   
      
       

</script>
