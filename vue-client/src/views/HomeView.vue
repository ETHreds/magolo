<template>
    <div class="home-hero">
        <HomeHero />
        <ListSection v-if="data">
            <template v-slot:header>WHAT WE DO</template>
            <template v-slot:subtitle>Protecting Your Interests and Achieving Your Goals</template>
            <template v-slot:content>
                <div class="grid gap-2 justify-content-center">
                <PracticeAreasCards
                    v-for="(practiceArea, index) in practiceAreas" :key="index"
                    :imageSrc="practiceArea.imageSrc"
                    :altText="practiceArea.altText"
                    :title="practiceArea.title"
                    :description="practiceArea.description"
                    :iconClass="practiceArea.iconClass"
                    class="mb-2"
                    />
                </div>
            </template>
        </ListSection>
        <TwoColumns class="mt-8">
            <template v-slot:left>
                <ListSection v-if="data">
                    <template v-slot:header>WHAT WE ARE ABOUT</template>
                    <template v-slot:subtitle> {{ data.tag }}</template>
                    <template v-slot:content>
                        <p>{{ data.ceoMessage }}</p>
                        <p>Signature</p>
                        <p>J.O Magolo - (C.E.O)</p>
                    </template>
                </ListSection>
            </template>
            <template v-slot:right>
                <div class="card flex justify-content-center">
                    <img :src="snr" alt="Jared O Magolo" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);height: 80dvh;width: 100%;" />
                </div>
            </template>
        </TwoColumns>
        <ListSection v-if="data">
            <template v-slot:header>The Impact Equation</template>
            <template v-slot:subtitle>Quantifying the Value We Bring to Clients.</template>
            <template v-slot:content>
                <div class="grid justify-content-center gap-4 py-4 border-primary" >
                    <CounterCard class="" style="width: 22%;" v-for="(achievement, index) in achievementsData" :key="index" :achievement="achievement" />
                </div>

            </template>
        </ListSection>
        <TwoColumns>
            <template v-slot:left>
                <div class="">
                    <ClientFeedback v-if="data"></ClientFeedback>

                </div>
            </template>
            <template v-slot:right>
                <div class="justify-content-center align-items-center">
                    <ListSection v-if="data">
                        <template v-slot:header>GET IN TOUCH</template>
                        <template v-slot:subtitle>Find Out if you have a case</template>
                        <template v-slot:content> Call today to get a free evaluation {{ data.phone }} </template>
                    </ListSection>
                </div>
            </template>
        </TwoColumns>
        <Vue3Marquee :clone="true" :duration="5">
            <Chip 
            v-for="association in data.associations"
            :label="association.name" :image="association.avatar" 
            class="mx-2"/>
        </Vue3Marquee>
        
        <ListSection v-if="data">
            <template v-slot:header>GET IN TOUCH</template>
            <template v-slot:subtitle>Find Out if you have a case</template>
            <template v-slot:content> Call today to get a free evaluation {{ data.phone }} </template>
        </ListSection>

    </div>
</template>

<script setup>
import HomeHero from '@/components/HomeHero.vue'
import ListSection from '@/components/ListSection.vue'
import PracticeAreasCards from "@/components/PracticeAreasCards.vue"
import TwoColumns from '@/components/TwoColumns.vue'
import CounterCard from "@/components/CounterCard.vue"
import ClientFeedback from '@/components/ClientFeedback.vue'

import snr from '@/assets/images/snr_abt.jpg'

import { ref, onMounted } from 'vue';
import apiService from '@/apiServices/firmProfile.js'

const practiceAreas = ref([
  {
    imageSrc: "https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGF3fGVufDB8fDB8fHww",
    altText: "Family Law Image",
    title: "Family Law",
    description: "We assist clients with various family law matters, including divorce, child custody, child support, and prenuptial agreements.",
    iconClass: "pi pi-users"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaW1pbmFsfGVufDB8fDB8fHww",
    altText: "Criminal Law Image",
    title: "Criminal Law",
    description: "Our skilled criminal defense attorneys believe in exploring all options, including negotiation, trial defense, and appeals.",
    iconClass: "pi pi-shield" 
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29vcGVyYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
    altText: "Corporate Law Image",
    title: "Corporate Law",
    description: "We offer guidance on formation, contracts,  regulatory compliance, mergers and acquisitions, and dispute resolution.",
    iconClass: "pi pi-briefcase"
  },
  {
    imageSrc: "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    altText: "Real Estate Image",
    title: "Real Estate Law",
    description: "We ensure your legal interests are protected throughout the process, providing experienced guidance and negotiating favorable terms.",
    iconClass: "pi pi-home" 
  },
//   {
//     imageSrc: "https://plus.unsplash.com/premium_photo-1661773084348-cbb7bd5d7c47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXN0YXRlJTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
//     altText: "Estate Planning",
//     title: "Estate Planning & Probate",
//     description: "Our services include drafting wills, trusts, and powers of attorney, as well as assisting with probate matters to facilitate a smooth and efficient inheritance process.",
//     iconClass: "pi pi-file" 
//   },

]);



const achievementsData = ref([
    {
        title: "Established",
        icon: "pi pi-money-bill",
        number: 2010,
        recentNumber: 65,
        time: " combined attorney experience"
    },
    {
        title: "Success Rate",
        icon: "pi pi-money-bill",
        number: 96,
        recentNumber: 15000,
        time: " Cases Handled"
    },
    {
        title: "Client Satisfaction",
        icon: "pi pi-money-bill",
        number: 98,
        recentNumber: 250,
        time: " Clients"
    },
    {
        title: "Claims Won",
        icon: "pi pi-money-bill",
        number: 100,
        recentNumber: 23,
        time: " since start of year"
    }
])
const data = ref(null);

onMounted(() => {
    apiService.getData()
        .then(response => {
            data.value = response.data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
</script>
