<template>
    <div>
        <SharedHero :itemsProp="customItems" heading="Featured Cases" ></SharedHero>
        <ListSection>
            <template v-slot:header>FEATURED WORK</template>
            <template v-slot:subtitle>Find Out if you have a case</template>
            <template v-slot:content> 
                <div class="grid">
                    <CaseCard
                    class="col md:col-4"
                    v-for="(casep, index) in cases" :key="index"
                    :imageSrc="casep.imageSrc"
                    :category="casep.category"
                    :description="casep.description"
                /> 
                </div>   
            </template>
        </ListSection>

        <CTA/>


    </div>
</template>

<script setup>
import { ref } from 'vue';

import ListSection from '@/components/ListSection.vue'
import CaseCard from '../components/CaseCard.vue';
import SharedHero from '@/components/SharedHero.vue';
import CTA from '@/components/CTA.vue';

const customItems = [
  { label: 'Featured Cases', route: '/feature-cases' },
];
const cases = ref([
  {
    imageSrc: "https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGF3fGVufDB8fDB8fHww",
    altText: "Family Law Image",
    category: "Family Law",
    description: "We assist clients with various family law matters, including divorce, child custody, child support, and prenuptial agreements and Kadhi courts for Muslim clients.",
    iconClass: "pi pi-users"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGF3fGVufDB8fDB8fHww",
    altText: "Family Law Image",
    category: "Family Law",
    description: "We assist clients with various family law matters, including divorce, child custody, child support, and prenuptial agreements and Kadhi courts for Muslim clients.",
    iconClass: "pi pi-users"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGF3fGVufDB8fDB8fHww",
    altText: "Family Law Image",
    category: "Family Law",
    description: "We assist clients with various family law matters, including divorce, child custody, child support, and prenuptial agreements and Kadhi courts for Muslim clients.",
    iconClass: "pi pi-users"
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1504439268584-b72c5019471e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwbGF3fGVufDB8fDB8fHww",
    altText: "Family Law Image",
    category: "Family Law",
    description: "We assist clients with various family law matters, including divorce, child custody, child support, and prenuptial agreements and Kadhi courts for Muslim clients.",
    iconClass: "pi pi-users"
  },
]);
</script>

<style scoped>

</style>