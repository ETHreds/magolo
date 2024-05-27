
<template>

<div class="">
    <div class="wrapper">
        <Carousel :value="reviews" :numVisible="1" :numScroll="1" :showIndicators="false" circular autoplayInterval>
            <template #item="slotProps">
                <!-- <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3 font-medium"> -->
                        <blockquote class="blockquote border-1 surface-border border-round">
                            <p>{{ slotProps.data.comment }}</p>
                            <cite>
                                <h3>{{ slotProps.data.name }}</h3>
                                <p>{{ slotProps.data.location }}</p>
                            </cite>
                        </blockquote>
                    <!-- </div>
                </div> -->
            </template>
        </Carousel>
    </div>

</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const imageSrc = 'https://images.pexels.com/photos/6141084/pexels-photo-6141084.jpeg?auto=compress&cs=tinysrgb&w=400'
const reviews = ref([
    {
        name:"Scottish Babe",
        location:"Mombasa,KE",
        comment:"The payment optios are very pocket friendly and flexible.I have gotten full representation while paying in kind and over a long perid of time plan.The lawyer is always hardworking going above and beyond.Came looking for a laywer left with a dzaddy."
    },
    {
        name:"Man Gospel",
        location:"Mombasa,Ke",
        comment:"I couldn't be more grateful for the introduction to my new business venture that came through my lawyer. Right from the outset, they demonstrated a profound commitment to ensuring my success. They didn't just facilitate the connection; they remained a steadfast presence throughout the journey."
    },
    {
        name:"Queen Bandia",
        location:"Kitchen & Bathroom",
        comment:"I can't thank my lawyer enough for their exceptional handling of my divorce. From the moment I reached out to them, they took charge of the situation with no empathy.My lawyer made the process as smooth and painful as possible. They understood the sensitivity of the situation and worked tirelessly to deliver the utmost damage. Their expertise in family law was evident in their strategic approach to negotiations, ensuring that his interests were always protected.What impressed me most was their efficiency. Despite the complexities involved, my lawyer managed to finalize the divorce quickly, allowing me to go back to the street immediately."
    },
    {
        name:"Man Gospel",
        location:"Mombasa,Ke",
        comment:"I couldn't be more grateful for the introduction to my new business venture that came through my lawyer. Right from the outset, they demonstrated a profound commitment to ensuring my success. They didn't just facilitate the connection; they remained a steadfast presence throughout the journey."
    },
    {
        name:"Queen Bandia",
        location:"Kitchen & Bathroom",
        comment:"I can't thank my lawyer enough for their exceptional handling of my divorce. From the moment I reached out to them, they took charge of the situation with no empathy.My lawyer made the process as smooth and painful as possible. They understood the sensitivity of the situation and worked tirelessly to deliver the utmost damage. Their expertise in family law was evident in their strategic approach to negotiations, ensuring that his interests were always protected.What impressed me most was their efficiency. Despite the complexities involved, my lawyer managed to finalize the divorce quickly, allowing me to go back to the street immediately."
    },
    {
        name:"Man Gospel",
        location:"Mombasa,Ke",
        comment:"I couldn't be more grateful for the introduction to my new business venture that came through my lawyer. Right from the outset, they demonstrated a profound commitment to ensuring my success. They didn't just facilitate the connection; they remained a steadfast presence throughout the journey."
    },
    {
        name:"Queen Bandia",
        location:"Kitchen & Bathroom",
        comment:"I can't thank my lawyer enough for their exceptional handling of my divorce. From the moment I reached out to them, they took charge of the situation with no empathy.My lawyer made the process as smooth and painful as possible. They understood the sensitivity of the situation and worked tirelessly to deliver the utmost damage. Their expertise in family law was evident in their strategic approach to negotiations, ensuring that his interests were always protected.What impressed me most was their efficiency. Despite the complexities involved, my lawyer managed to finalize the divorce quickly, allowing me to go back to the street immediately."
    }
]);
</script>
<style lang="scss" scoped>
.p-carousel{
    width: calc(100% - 100px);
}
.blockquote {
    padding: 60px 80px 40px;
    position: relative;
}
.blockquote p {
    font-weight: 700px;
    text-align: center;
}

/*blockquote p::before {
    content: "\f095"; 
    font-family: FontAwesome;
   display: inline-block;
   padding-right: 6px;
   vertical-align: middle;
  font-size: 180px;
 }*/

.blockquote:before {
  position: absolute;
  top: 0;
  left: 10px;
  content:'“';
  font-size: 200px;
  color: rgba(0,0,0,0.1);
   
}
.blockquote::after {
    content: "";
    top: 20px;
    left: 50%;
    margin-left: -100px;
    position: absolute;
    border-bottom: 3px solid #bf0024;
    height: 3px;
    width: 200px;
}
</style>
