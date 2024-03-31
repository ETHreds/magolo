<template>
    <div class="card  justify-content-center">
        <h2 border-left-2>{{ heading }} </h2>
      <Breadcrumb :home="home" :model="itemsProp">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']"></span>
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span class="text-color">{{ item.label }}</span>
          </a>
        </template>
      </Breadcrumb>
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
  