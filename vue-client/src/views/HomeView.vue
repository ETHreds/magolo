<template>
    <div class="">
        <HomeHero />
        <TwoColumns class="wrapper">
            <template v-slot:left>
                <ListSection>
                    <template v-slot:header>WHO WE ARE</template>
                    <template v-slot:content>

                        At J.O MAGOLO, experience, prudence, and competence are more than just words – they're the
                        guiding principles that define our practice. With a foundation built on decades of combined
                        experience, we navigate the legal landscape with a seasoned perspective that empowers us to
                        anticipate challenges and craft strategic solutions. Our commitment to prudence ensures that
                        every decision we make is carefully considered, safeguarding the interests of our clients at
                        every turn. Every member of our team is a dedicated legal scholar, continuously refining their
                        expertise and staying abreast of the latest legal developments. At J.O MAGOLO & Co. , we're not
                        just your legal representatives – we're your trusted partners in achieving success.
                        <p>Jared O. Magolo</p>
                        <p>C.E.O</p>
                    </template>
                </ListSection>
            </template>
            <template v-slot:right>
                <div class="img-container">
                    <img :src="snr" alt="Jared O Magolo" />
                </div>
            </template>
        </TwoColumns>
        <ListSection>
            <template v-slot:header>WHAT WE DO</template>
            <template v-slot:content>
                <div class="grid gap-1 justify-content-center">
                    <PracticeAreasCards v-for="(practiceArea, index) in practiceAreas" :key="index"
                        :imageSrc="practiceArea.imageSrc" :altText="practiceArea.altText" :title="practiceArea.title"
                        :description="practiceArea.description" :iconClass="practiceArea.iconClass" class="mb-6" />

                </div>
                <Button class="btn" label="See More" />
            </template>
        </ListSection>
        <div class="grid my-2 wrapper">
            <CounterCard class="col-12 lg:col-3" v-for="(achievement, index) in achievementsData" :key="index"
                :achievement="achievement" />


        </div>
        <ListSection>
            <template v-slot:header>CLIENT FEEDBACK</template>
            <template v-slot:content>
                <div class="grid">
                    <ClientFeedback></ClientFeedback>
                </div>
            </template>
        </ListSection>
        <CTA />
        <Vue3Marquee :clone="true" :duration="5" class="mt-5 mb-5">
            <Chip v-for="association in associations" :label="association.name" :image="association.avatar"
                class="mx-2" />
        </Vue3Marquee>

    </div>
</template>

<script setup>
import HomeHero from '@/components/HomeHero.vue'
import ListSection from '@/components/ListSection.vue'
import PracticeAreasCards from "@/components/PracticeAreasCards.vue"
import TwoColumns from '@/components/TwoColumns.vue'
import CounterCard from "@/components/CounterCard.vue"
import ClientFeedback from '@/components/ClientFeedback.vue'
import CTA from '@/components/CTA.vue'

import snr from '@/assets/images/snr_abt.jpg'

import { ref, onMounted } from 'vue';
import apiService from '@/apiServices/firmProfile.js'

const practiceAreas = ref([
    {
        imageSrc: "https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGF3fGVufDB8fDB8fHww",
        altText: "Family Law Image",
        title: "Family Law",
        description: "We assist clients with various family law matters, including divorce, child custody, child support, and prenuptial agreements and Kadhi courts for Muslim clients.",
        iconClass: "pi pi-users"
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaW1pbmFsfGVufDB8fDB8fHww",
        altText: "Criminal Defence Image",
        title: "Criminal Defence",
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


]);



const achievementsData = ref([
    {
        title: "Established",
        icon: "pi pi-check-circle",
        number: 2010,
        recentNumber: 65,
        time: " combined years experience",
        suffix: " "
    },
    {
        title: "Success Rate",
        icon: "pi pi-chart-line",
        number: 96,
        recentNumber: 15000,
        time: " Cases Handled",
        suffix: "%"
    },
    {
        title: "Client Satisfaction",
        icon: "pi pi-thumbs-up",
        number: 99,
        recentNumber: 250,
        time: " Clients",
        suffix: "%"
    },
    {
        title: "Claims Won",
        icon: "pi pi-money-bill",
        number: 100,
        recentNumber: 23,
        time: " since start of year",
        suffix: " M+"
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
const associations = ref([
    {
        name: "Law Society Of Kenya"
    },
    {
        name: "Mombasa Law Society"
    },
    {
        name: "Arbitrators Society of Kenya"
    },
    {
        name: " Other Bodies"
    },

])
</script>
