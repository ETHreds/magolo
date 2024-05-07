<template>
    <div>
        <SharedHero :itemsProp="customItems" heading=" Contact Us" ></SharedHero>
        <div class="grid text-center mx-auto p-5">
            <div class="col-11 md:col-4 mb-4 px-5">
                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                    <i class="pi pi-phone text-4xl text-blue-500"></i>
                </span>
                <div class="text-900 text-xl mb-3 font-medium">Call Us</div>
                <span class="text-700 line-height-3">+254 711 185 569</span>
            </div>
            <div class="col-10 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-envelope text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Email Us</div>
            <span class="text-700 line-height-3">magoloadvocate@gmail.com</span>
        </div>
        <div class="col-10 md:col-4 mb-4 px-5">
            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                <i class="pi pi-map-marker text-4xl text-blue-500"></i>
            </span>
            <div class="text-900 text-xl mb-3 font-medium">Our Offices</div>
            <span class="text-700 line-height-3">5th floor,Stima House</span>
        </div>
        </div>
        <ContactForm/>

    </div>
</template>

<script setup>
import SharedHero from '../components/SharedHero.vue'
import ContactForm from '../components/ContactForm.vue';
const customItems = [
  { label: 'Contact Us', route: '/contact' },
  ];

</script>

<style lang="scss" scoped>

</style>