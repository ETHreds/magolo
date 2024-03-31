<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from '@/components/Menubar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <Menubar class="sticky top-0"/>
      </nav>
    </div>
  </header>

  <RouterView />
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>
</style>
