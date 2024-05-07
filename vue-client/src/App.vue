<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menubar from '@/components/Menubar.vue'
import Footer from '@/components/Footer.vue'


</script>

<template>

  <header>

    <div class="wrapper">
      <nav>
        <Menubar />
      </nav>
    </div>
  </header>

  <RouterView/>
  <footer>
    <Footer></Footer>
  </footer>

</template>

<style lang="scss" >
header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 0;
  z-index: 1000;
}

Button{
  position: relative;
  // padding: 1em 1.5em;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  font-size: 18px;

  &.type1 {
    color: var(--gold);
    &::after,
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }

    &::after {
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: var(--orange);
      border-right-color: var(--orange);
    }

    &::before {
      top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: var(--orange);
      border-left-color: var(--orange);
    }

    &:hover::after,
    &:hover::before {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
