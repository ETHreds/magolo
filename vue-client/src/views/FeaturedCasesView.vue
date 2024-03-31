<template>
    <div>
        <SharedHero :itemsProp="customItems" heading="Featured Cases" ></SharedHero>
        <ListSection>
            <template v-slot:header>FEATURED WORK</template>
            <template v-slot:subtitle>Find Out if you have a case</template>
            <template v-slot:content> 
                <CaseCard/>    
            </template>
        </ListSection>


    </div>
</template>

<script setup>
import ListSection from '@/components/ListSection.vue'
import CaseCard from '../components/CaseCard.vue';
import SharedHero from '@/components/SharedHero.vue';

const customItems = [
  { label: 'Featured Cases', route: '/feature-cases' },
];
</script>

<style scoped>

</style>