<template>
  <div>
      <SharedHero :itemsProp="customItems" heading="Case Review" ></SharedHero>
      <div class="grid nested-grid grid-nogutter">
          <div class="col-11 mx-auto">
              <div class="">
                <h2>Financial Crimes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic modi corrupti sequi doloribus vero laboriosam magni voluptates. Similique obcaecati minima repudiandae quam quos. Optio natus voluptatem fugit numquam, repellendus porro omnis, eligendi nulla consequuntur quaerat libero sint, ipsum distinctio aliquid ratione culpa. Cupiditate repudiandae asperiores odit nemo corrupti vitae.</p>
              </div>
          </div>
        <div class="col-7 mx-auto">
            <div class="grid">
                <div class="col-12">
                    <div class="">
                      <h3>Particulars</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem nostrum minima sit praesentium doloremque ex deserunt magni perferendis ab dolores, quas libero necessitatibus nihil dolor totam distinctio ea beatae eligendi excepturi molestiae? Soluta nobis magnam quam repudiandae ratione saepe, nemo praesentium mollitia labore enim, minima expedita accusamus assumenda dolor.</p>        
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="text-center">

              <div class="card">
                <DataTable :value="caseInfo" :paginator="false" :rows="1">
                    <template #header>
                              <span class="text-xl text-900 font-bold">Case Info</span>
                      </template>

                        <Column field="key"></Column>
                        <Column field="value"></Column>
                      <template #footer>
                        <Button label="View Case" />
                    </template>
                  </DataTable>
              </div>
            </div>
        </div>
    </div>
    <div class="col-11 mx-auto">
        <div class="col-11 mx-auto">
          <h3>Conclusion</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem nostrum minima sit praesentium doloremque ex deserunt magni perferendis ab dolores, quas libero necessitatibus nihil dolor totam distinctio ea beatae eligendi excepturi molestiae? Soluta nobis magnam quam repudiandae ratione saepe, nemo praesentium mollitia labore enim, minima expedita accusamus assumenda dolor.</p>        
        </div>
    </div>
  </div>
  <CTA/>
  <div class="">
    <ClientFeedback/>       
  </div>

</template>

<script setup>
import ClientFeedback from '@/components/ClientFeedback.vue';
import SharedHero from '@/components/SharedHero.vue';
import CTA from '../components/CTA.vue'
import { ref, onMounted } from 'vue';
// import { ProductService } from '@/service/ProductService';
const customItems = [
  { label: 'Feature Cases', route: '/feature-cases' },
  { label: 'Case', route: '/feature-cases/:case' },
];

const caseInfo = ref([
      { key: 'Advocate', value: 'Paul Walter Magolo' },
      { key: 'Category', value: 'Criminal Defence' },
      { key: 'Start Date', value: '15 June 2021' },
      { key: 'End Date', value: '03 January 2022' },
      { key: 'Address', value: 'Mombasa' },
      { key: 'Tags', value: 'civil, criminal' }
    ]);



// onMounted(() => {
//     ProductService.getProductsMini().then((data) => (products.value = data));
// });

const products = ref([
{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
]);


</script>

<style lang="scss" scoped>

</style>
