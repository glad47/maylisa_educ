<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Aziz
 * @Date: 2023-01-11 05:10:41
 * @LastEditors: Aziz
 * @LastEditTime: 2023-01-12 07:04:22
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
                <div class="about col-12 ">
                    <div v-if="whichLanguage == 'ar'" class="parts col-12 ">
                        <ImageDisplay :carouselList="carouselList" class="imageDisplayAr" />
                        <p class="descAr">{{ textArea[whichLanguage] }}</p>
                    </div>
                    <div v-else class="parts col-12">
                        
                        <ImageDisplay :carouselList="carouselList" class="imageDisplayEn" />
                        <p class="descEn">{{ textArea[whichLanguage] }}</p>
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
    .about{
        margin-top: 30px;
        .parts{
            .imageDisplayAr{
                float:left;
                margin-right: 20px;
            }
            .imageDisplayEn{
                float:right!important;
                margin-left: 20px;
            }
            .descAr{
                text-align: justify;
                font-family: 'Noto Naskh Arabic', 'sans-serif';
                font-weight: normal;
                font-size: 20px;
                color: #000;
            }
            .descEn{
                text-align: justify;
                font-family: 'Inter', 'sans-serif';
                font-weight: normal;
                font-size: 20px;
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
	list: Object,
});

const carouselList= ref([
    {
        id: 1,
        img: require("@img/temp/university of education.jpg"),
        alt:"university of education"
    },
    {
        id: 2,
        img: require("@img/temp/university of knowledge.jpg"),
        alt:"university of knowledge"
    },
    {
        id: 3,
        img: require("@img/temp/university of science.jpg"),
        alt:"university of science"
    },
    {
        id: 4,
        img: require("@img/temp/university of sport.jpg"),
        alt:"university of sport"
    }
])

const textArea= ref({
    "ar" : "ورة لايف koora live لمشاهدة المباريات بث مباشر ، فموقع كورة لايف هو موقع اخباري رائد في النقل المباشر لمباريات التي تبث مباشرة إضافة الى ذلك انه يعطي اخبار جمبع الرياضات لتصبح جميع البطولات مقدمة لك على موقع كورة لايف kora live هو يقدم اخبار ومباريات كل دوري مثل الدوري الاسباني والالماني والانجليزي والفرنسي والايطالي في اوروبا ومباريات واخبار الدوريات العربية مثل الدوري المصري والمغربي والتونسي والدوري السعودي ، افضل مواقع البث المباشر كوره لايف. يتمتع موقع كورة لايف بمميزات رائعة تختلف عن جميع المواقع بل يتغلب على الكثير من المواقع بالعديد من المميزات ، موقع كورة لايف kora live بالتعاون مع العديد من المواقع الكبيرة التي تقدم اخبار الرياضة والبث المباشر للمباريات ، فقد تجد بعض الاشياء تتشابة مع العديد من المواقع الاخرى ، فهذا يدل على تعاون وتبادل الخبرات بين المواقع الكبيرة لكن هذا يؤكد ان موقع كوره لايف koralive هو الانسب لمشاهدة مباريات اليوم. كورة لايف kora live مع موقع يلا شوت yalla shoot قدما تحفة فنية كبيرة في عرض خدمات البث المباشر بجودة عالية جودة لن تجدها في موقع آخر لهذا موقع كورة لايف kora live لن يخذلك لان مباريات اليوم اصبحت بين يديك انت وتشاهدها مباشرة ومن دون توقف ، عبر جدول مباريات اليوم الذي يقدمها عبر موقع كورة لايف ستار الجدول الذي يقدم المباريات بتسلسل حسب زمن بداية المباراة ، بث مباشر مباريات اليوم عبر كورة لايف. بالتعاون مع موقع كورة اون لاين kora online موقع كورة لايف koora live يقدم افضل خدمات البث المباشر لكم لمباريات الدوري الانجليزي والاسباني والتي تشاهدونها على كورة لايف الذي يبرمج البث المباشر لقنوات بين سبورت الناقلة للدوري الانجليزي والاسباني لتكون مشاهدة قنوات بين سبورت مجانا شئ حقيقي وذلك بفضل موقعنا كورة لايف kora live الذي جعل الامر حقيقي خاليا من الخيال الذاتي ، مشاهدة مباريات اليوم بث مباشر كورة لايف kora live. ",
    "en": "What you did here is use the CSS property, which will pull the image from normal document flow (the way that image would normally display, with the text aligned beneath it) and it will align it to the left side of its container. The text that comes after it in the HTML markup with now wrap around it. We also added some padding values so that this text would not but directly up against the image. Instead, it will have some nice spacing that will be visually attractive in the page's design. In the CSS shorthand for padding, we added 0 values to the top and left side of the image, and 20 pixels to its left and bottom. Remember, you need to add some padding to the right side of a left-aligned image. A right aligned image (which we will look at in a moment) would have padding applied to its left side.What you did here is use the CSS property, which will pull the image from normal document flow (the way that image would normally display, with the text aligned beneath it) and it will align it to the left side of its container. The text that comes after it in the HTML markup with now wrap around it. We also added some padding values so that this text would not but directly up against the image. Instead, it will have some nice spacing that will be visually attractive in the page's design. In the CSS shorthand for padding, we added 0 values to the top and left side of the image, and 20 pixels to its left and bottom. Remember, you need to add some padding to the right side of a left-aligned image. A right aligned image (which we will look at in a moment) would have padding applied to its left side "
})

const {list,title} = toRefs(props)




const tempTilte= ref({
    "ar":"نبذه عن الجامعة",
    "en":"University Overview"
})






    
</script>