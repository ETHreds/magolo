
<template>
    <div class="menu-container">
        <Menubar :model="items">
            <template #item="{ item, props}">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
            <template #end>
                <Button>Free Consultation</Button>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Practice Areas',
    icon: 'pi pi-list',
    route: '/practice-areas'
  },
  {
    label: 'Feature Cases',
    icon: 'pi pi-file',
    route: '/feature-cases'
  },
  {
    label: 'Team',
    icon: 'pi pi-user',
    route: '/team'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    route: '/contact'
  },
  
]);
</script>