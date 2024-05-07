<template>
    <div class="card  h-24rem  bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400');">
      <div class="h-full w-full flex flex-column align-items-center justify-content-center" style="background-color: rgba(0, 0, 100, 0.3);">
          <h2 class="text-white">{{ heading }} </h2> 
        <Breadcrumb :home="home" :model="itemsProp" class="bg-transparent inline-block">
          <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="[item.icon, 'text-primary', 'font-3xl']"></span>
                <span class="text-primary font-bold">{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
              <span class="text-color">{{ item.label }}</span>
            </a>
          </template>
        </Breadcrumb>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from "vue";
  
  const props = defineProps({
    itemsProp: Array,
    heading: String 
  });
  
  const home = ref({
    icon: 'pi pi-home',
    route: '/'
  });
  
  const items = ref(props.itemsProp);
  </script>
  