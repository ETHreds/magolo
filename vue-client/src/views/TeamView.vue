<template>
    <div>
        <SharedHero :itemsProp="customItems" heading=" Team" ></SharedHero>
        <div class="grid w-10 mx-auto nested-grid pt-5">
            <div class="col-4">
                <div class="">
                    <Image :src="magoloSnr" width="100%" height="400"/>

                </div>
            </div>
            <div class="col-8">
                <div class="grid">
                    <div class="col-12">
                        <div class="">
                            <h2 class="font-bold text-6xl">Jared Magolo</h2>
                            <span>Managing Partner</span>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam doloribus deserunt ipsa? Facere in voluptatem ipsam necessitatibus id ducimus ipsum iusto delectus dolorum mollitia non, magni fugiat eaque cum doloribus maiores aspernatur rem provident, et quaerat ad! Dolor explicabo sint molestiae nihil similique ipsum, iure ducimus aperiam tempora maiores recusandae!</p>
                            <Button class="type1" label="Full Profile"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Divider align="left" type="solid">
        </Divider>
        <div class="grid pb-5 mx-auto">
        <AttorneyCard
            class="col md:col-4"
            v-for="(person, index) in team" :key="index"
            :name="person.name"
            :post="person.post"
            :imageSrc="person.pic"/>

        </div>
        <Divider align="left" type="solid">
        </Divider>
        <CTA/>
        
    </div>
</template>

<script setup>
import SharedHero from '@/components/SharedHero.vue';
import AttorneyCard from '@/components/AttorneyCard.vue';
import CTA from '@/components/CTA.vue';
import { ref } from 'vue';

import magoloSnr from '../assets/images/snr-hero.jpg'
import pwh from '../assets/images/pwh.jpg'
import snrClerk from '../assets/images/snrClerk.jpg'
import lawClerk from '../assets/images/lawClerk.jpg'
import reception from '../assets/images/reception.jpg'
import intern from '../assets/images/intern.jpg'
const customItems = [
  { label: 'Team', route: '/team' },
];
const team  = ref([
    {'name':'Paul Walter',
     'post':'Junior Partner',
     'pic': pwh,

    },
    {'name':'John Gaya',
     'post':'Snr. Law Clerk',
     'pic':snrClerk
    },
    {'name':'Sam Guy',
     'post':'Law Clerk',
     'pic':lawClerk
    },
    {'name':'Pretty Lady',
     'post':'Customer Relations',
     'pic':reception
    },
    {'name':'The Intern',
     'post':'Intern',
     'pic':intern
    
    }
])
</script>

<style scoped>
.block{
    widows: 50%;
}

</style>