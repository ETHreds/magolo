
<template>
    <div class="nav-bar sticky">
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
                <Button class="btn">Free Consultation</Button>
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
<style>
.nav-bar {
  position: relative;
  padding: 20px 0;
  transition: .3s;
  color: white;
}


.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  padding: 10px 10px 8px 10px;
  color: #ffffff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  color: #aa9166;
  transition: none;
}

.nav-bar .dropdown-menu {
  margin-top: 0;
  border: 0;
  border-radius: 0;
  background: #f8f9fa;
}
.p-menuitem-link{
  color: #aa9166;
}

.nav-bar .btn {
  color: #ffffff;
  border: 2px solid #aa9166;
  border-radius: 0;
}

.nav-bar .btn:hover {
  background: #aa9166;
}

@media (min-width: 992px) {
  .nav-bar {
      padding: 20px 60px;
  }
  
  .nav-bar.nav-sticky {
      padding: 10px 60px;
  }
  
  .nav-bar,
  .nav-bar .navbar,
  .nav-bar .p-menubar {
      background: #121518 !important;
  }
  
  
  .nav-bar a.nav-link {
      padding: 8px 15px;
      font-size: 15px;
      text-transform: uppercase;
  }
}

@media (max-width: 991.98px) {   
  .nav-bar,
  .nav-bar .navbar ,
  .nav-bar .p-menubar{
      padding: 3px 0;
      background: #121518 !important;
  }
  

}

</style>