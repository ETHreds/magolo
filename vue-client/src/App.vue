<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from '@/components/Menubar.vue'
import Footer from '@/components/Footer.vue';
import TopBar from './components/TopBar.vue';

</script>

<template>
    <TopBar/>
      <nav>
        <Menubar />
      </nav>

  <RouterView/>
  <footer>
    <Footer></Footer>
  </footer>

</template>

<style lang="scss" >
</style>
