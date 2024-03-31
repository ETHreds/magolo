<template>
    <div>
        <SharedHero :itemsProp="customItems" heading="Feature Case" ></SharedHero>
    </div>
</template>

<script setup>
import SharedHero from '@/components/SharedHero.vue';

const customItems = [
  { label: 'Featured Cases', route: '/feature-cases' },
  { label: 'Case', route: '/feature-cases/case' }
];


</script>

<style lang="scss" scoped>

</style>