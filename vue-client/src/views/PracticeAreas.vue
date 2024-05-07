<template>
    <div>

        <SharedHero :itemsProp="customItems" heading="Practice Areas" ></SharedHero>
        
        <ListSection >
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
                    class="mb-6"
                    />
                   
                </div>
            </template>
        </ListSection>

        <CTA/>
        <CaseTimeline/>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import CTA from '../components/CTA.vue'
import SharedHero from '../components/SharedHero.vue'
import CaseTimeline from '@/components/CaseTimeline.vue'
import ListSection from '@/components/ListSection.vue'
import PracticeAreasCards from '@/components/PracticeAreasCards.vue';

const customItems = [
  { label: 'Practice Areas', route: '/practice-areas' },
];
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

</script>

<style scoped>

</style>