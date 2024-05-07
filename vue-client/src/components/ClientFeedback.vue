
<template>

<div class="grid grid-nogutter h-28rem ">
    <div class="col-4 overflow-hidden bg-cover bg-left text-6xl font-bold text-orange-500 flext align-items-center " :style="{ 'background-image': 'url(' + imageSrc + ')', 'clip-path': 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }">
        <p class="w-full h-full  p-5 m-0" style="background-color: rgba(0, 0, 139, 0.3);">What our clients have to say</p>
    </div>
    <div class="col-8 h-full">
    <div class="card">
        <Carousel :value="reviews" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000">
            <template #item="slotProps">
                <div class="border-1 h-20rem surface-border border-round flex flex-column justify-content-center">
                    <div class="mb-3 "><h3>{{ slotProps.data.name }}</h3></div>
                    <div class="flex align-items-center">
                        <div class="mt-0">{{ slotProps.data.comment }}</div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
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
    }
]);
</script>
