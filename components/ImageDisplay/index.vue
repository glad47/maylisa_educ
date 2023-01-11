<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-11 05:10:41
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-12 07:17:52
-->
<template>
    <div>
        <div>
                    <div class="product-img" style="position:relative;margin-top:0px;" >  
                        <img 
                        @click="handleDialog" class="product-img" style="margin-top:0px;"
                         :src="defaultIamge" :alt="defaultAlt">
                         <div class="pa1">
                            <div class="pre" @click="handleDialog">
                                
                                <a-icon type="left" />
                            </div>
                            <div class="next" @click="handleDialog">
                                
                                <a-icon type="right" />
                            </div>
                        </div>
                    </div>

                    <a-modal
                        width="800px"
                        :footer="null"
                        :closable="false"
                        :visible="dialogTableVisibleImg">
                        <div class="carousel-box">
                            <div class="img-box">
                                <img class="animated fadeIn" :src="activeImage" :alt="activeAlt">
                                    <div class="pa">
                                        <div class="pre" @click="handleCarouse('left')">
                                            <a-icon type="left" />
                                        </div>
                                        <div class="next" @click="handleCarouse('right')">
                                            <a-icon type="right" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tips-num">
                                    <div class="lef">
                        
                                    <span>{{carouselActive}}/{{totalLength}}</span>
                     
                                    </div>
                                <div class="right-close" @click="dialogTableVisibleImg = false">
                                    <a-icon type="close-circle" />
                                </div>
                            </div>
                        </div>
                    </a-modal>



        </div>
        
    </div>
    
  
</template>

<script setup>
import {defineProps, ref, toRefs, onMounted, computed} from 'vue'
const dialogTableVisibleImg =  ref(false);
const carouselActive =  ref(1)
const totalLength= ref(0)
const defaultIamge= ref('')
const defaultAlt= ref('')
const props = defineProps({
    carouselList: Array
})
const {carouselList} = toRefs(props)

const activeImage = computed(() => {
    return carouselList.value.find(item => item.id === carouselActive.value).img
})
const activeAlt = computed(() => {
    return carouselList.value.find(item => item.id === carouselActive.value).alt
}) 

onMounted(() => {
    defaultIamge.value= carouselList.value[0].img
    defaultAlt.value= carouselList.value[0].alt
    totalLength.value= carouselList.value.length
})

const showImg= () => {
    dialogTableVisibleImg.value= true
}

const handleCarouse= (direction) => {
    let _t;
        if (direction === 'left') {
          _t = carouselActive.value-1;
        }
        if (direction === 'right') {
          _t = carouselActive.value+1;
        }
        if (_t > carouselList.value.length) {
          _t -= carouselList.value.length
        } else if (_t < 1) {
          _t = 1
        }
        carouselActive.value = _t;
}



const handleDialog= () => {
    
    showImg();
          
}
   
   
    
 
    
</script>
<style lang="scss" scoped>


.product-img{
           
           width: 540px;
           height: 360px;
           margin-top: 12px;
           .pa1 {
      
      .pre, .next {
        top: 50%;
        position: absolute;
        width: 66px;
        height: 66px;
        background: rgba(135 , 206, 250, 0.3);
        margin-top: -33px;
        cursor: pointer;
        display: flex;
        align-items: center;
        i {
          color: #fff;
          margin: 0 auto;
          font-size: 24px;
        }
      }
       .pre {
         left: 0;
       }
       .next {
         right: 0;
       }
     }
       }

       .carousel-box {
       
       .img-box {
            background-color: none!important;
         height: 534px;
         position: relative;
         transition: ease-in-out all .2s;
         img {
           width: 100%;
           height: 100%;
         }
         .pa {
           display: none;
           transition: ease-in-out all .2s;
          .pre, .next {
            top: 50%;
            position: absolute;
            width: 66px;
            height: 66px;
            background: rgba(135 , 206, 250, 0.3);
            margin-top: -33px;
            cursor: pointer;
            display: flex;
            align-items: center;
            i {
              color: #fff;
              margin: 0 auto;
              font-size: 24px;
            }
          }
           .pre {
             left: 0;
           }
           .next {
             right: 0;
           }
         }
       }
       .img-box:hover {
         .pa {
           display: block;
         }
       }
       .tips-num {
         position: absolute;
         bottom: -39px;
         width: 100%;
         display: flex;
         color: #fff;
         justify-content: space-between;
         .lef {
           span {
             font-size: 15px;
             padding: 0 20px;
           }
           i {
             font-weight: 600;
             font-size: 23px;
           }
         }
         .right-close {
           i {
             padding-right: 6px;
             font-weight: 600;
             font-size: 16px;
             cursor: pointer;
           }
         }
       }
         }



@media screen and (max-width: 1280px) {
    .product-img{
     width: 480px;
    }
}
@media screen and (max-width: 1000px) {
    .product-img{
     width: 400px;
    }
} 

</style>
