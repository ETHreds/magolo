<template>
    <div>
        <SharedHero :itemsProp="customItems" heading=" Attorney" ></SharedHero>
        <div class="grid nested-grid">
            <div class="col-4">
                <div class="grid">
                    <div class="col-12">
                        <div class="">
                            <Image src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300" alt="Image" width="100%" height="400"/>
                            <Button label="Wins"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="grid">
                    <div class="col-12">
                        <div class="">
                            <div class="text-900 font-bold text-5xl mb-3">Paul Walter</div>
                            <h4>Junior Partner</h4>
                        </div>
                        <div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo placeat quos, veniam modi magni sapiente natus eligendi vel, ullam aliquid corrupti! Vitae veritatis error fugit blanditiis quae illum dolor sint temporibus officia mollitia. Odit illo, expedita ratione id amet architecto totam cumque eum consequatur ad. Earum nulla ipsum voluptas. Enim assumenda itaque aut qui! Delectus veniam provident aliquam, pariatur dolores consequuntur eius perspiciatis quibusdam! Excepturi delectus maiores corrupti ullam sit ex mollitia, sapiente quasi! Deserunt error accusantium inventore consectetur voluptatem distinctio magnam quos assumenda nisi rerum et nulla minus blanditiis sit, minima vitae, veritatis molestias expedita in aliquid tempora alias suscipit dolores. Quo soluta provident recusandae illum asperiores iure numquam aliquid error, tempora labore odio, adipisci nisi sed amet animi architecto eaque suscipit voluptates dolores ab esse voluptas quisquam commodi alias. Laudantium est molestias fugiat dolore nam hic ipsa tempore velit reiciendis sunt sed cupiditate nostrum unde fugit minima officia, ex doloremque recusandae voluptate id sit doloribus accusamus! Velit eligendi cumque eos, soluta obcaecati iste reprehenderit distinctio exercitationem harum eum, earum voluptatibus assumenda debitis labore fuga sunt? Repellat repudiandae in excepturi odio ducimus tempore nihil, ipsum, maxime sunt eaque consectetur a earum iure vel veritatis? Doloribus culpa nihil, a totam fugit itaque dolores, quisquam natus sequi nemo ipsum, numquam accusantium id voluptates quibusdam eos veniam nam excepturi. Ut natus unde ea, quas possimus adipisci minima a mollitia vero nemo dolor commodi dicta ratione tempora fugit eos harum. Voluptatem unde quidem earum temporibus sit culpa. Voluptatibus blanditiis illum in porro consectetur.</p>
                        </div>
                        <div>

                            <div class="card">
                                <Accordion :activeIndex="0">
                                    <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                                        <p class="m-0">{{ tab.content }}</p>
                                    </AccordionTab>
                                </Accordion>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <CTA/>
    </div>
</template>


<script setup>
import { ref } from 'vue';

import CTA from '../components/CTA.vue'
import SharedHero from '@/components/SharedHero.vue';

const customItems = [
  { label: 'Team', route: '/team' },
  { label: 'Attorney', route: '/team/:name' },
];

const tabs = ref([
    { title: 'Education', content: 'jkghs dlhgksd sdgsdjgjkhg dksd sdlijkhehe eie eiuew weisdisdg sdifj disd eijef ies iowejg ewiog weiog egiowe ioowe fioe efiefefube fioefb efof eief efuf euie euief efue euk f' },
    { title: 'Awards', content: 'jkghs dlhgksd sdgsdjgjkhg dksd sdlijkhehe eie eiuew weisdisdg sdifj disd eijef ies iowejg ewiog weiog egiowe ioowe fioe efiefefube fioefb efof eief efuf euie euief efue euk f' },
    { title: 'Publications', content: 'jkghs dlhgksd sdgsdjgjkhg dksd sdlijkhehe eie eiuew weisdisdg sdifj disd eijef ies iowejg ewiog weiog egiowe ioowe fioe efiefefube fioefb efof eief efuf euie euief efue euk f' },
    { title: 'Pro Bono', content: 'jkghs dlhgksd sdgsdjgjkhg dksd sdlijkhehe eie eiuew weisdisdg sdifj disd eijef ies iowejg ewiog weiog egiowe ioowe fioe efiefefube fioefb efof eief efuf euie euief efue euk f' },
]);
</script>


<style scoped>

</style>