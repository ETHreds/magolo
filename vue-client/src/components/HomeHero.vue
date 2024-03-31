
<template>
    <div>
        <Carousel :value="products"  :numVisible="1" :numScroll="1">
            <template #item="slotProps">
                <div  class=" grid grid-nogutter">
                <div class="col-6 p-6 text-center md:text-left flex align-items-center ">
                    <div class="mb-3">
                        <section>
                            <span class="block text-6xl font-bold mb-1">{{ slotProps.data.message }}</span>
                            <div class="text-6xl text-primary font-bold mb-3">{{ slotProps.data.heading }}</div>
                            <p class="mt-0 mb-4 text-700 line-height-3">{{ slotProps.data.description }}</p>
                            
                            <Button label="Learn More" type="button" class="mr-3 p-button-raised"></Button>
                            <Button label="Contact Us" type="button" class="p-button-outlined"></Button>
                        </section>
                    </div>
                </div>
                <div class="card col-6 flex justify-content-center">
                    <Image :src="snrHeroImage" alt="Image" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);height: 80dvh;width: 100%;" />
                </div>
            </div>
            </template>
        </Carousel>
       
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import snrHeroImage from "../assets/images/snr-hero.jpg"

const products = ref([
{
    id: '1000',
    message: 'Welcome to J.O MAGOLO & Co.',
    heading: 'Navigate The Legal Landscape with Confidence',
    description: ' Expert Legal Representation in Mombasa. Protecting Your Interests Across All Areas.',
    bgImage: 'bamboo-watch.jpg',
    button:{
        name:'Contact Us',
        route:'/contact'
    }

},
{
    id: '1000',
    message: 'Welcome to J.O MAGOLO & Co.',
    heading: 'Experience Across All Legal Matters',
    description: 'We offer comprehensive legal services to meet your unique needs.',
    bgImage: 'bamboo-watch.jpg',
    button:{
        name:'View Cases',
        route:'/feature-cases'
    }

},
{
    id: '1000',
    message: 'Welcome to J.O MAGOLO & Co.',
    heading: 'Experience Across All Legal Matters',
    description: 'We offer comprehensive legal services to meet your unique needs.',
    bgImage: 'bamboo-watch.jpg',
    button:{
        name:'View Cases',
        route:'/feature-cases'
    }

},
{
    id: '1000',
    message: 'Welcome to J.O MAGOLO & Co.',
    heading: 'Experience Across All Legal Matters',
    description: 'We offer comprehensive legal services to meet your unique needs.',
    bgImage: 'bamboo-watch.jpg',
    button:{
        name:'View Cases',
        route:'/feature-cases'
    }

},
]);
</script>
<style scoped>
/* .border-solid{
    height: 500px;
} */
</style>
