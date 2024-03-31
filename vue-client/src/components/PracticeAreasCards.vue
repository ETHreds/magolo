<template>
    <div class="col-5 grid h-14rem">
      <div class="col-6 m-0">
        <img :src="imageSrc" :alt="altText" style="width: 100%;height: 100%;"/>
      </div>
      <div class="col-6 text-center hover:surface-700">
        <i :class="iconClass" style="font-size: 2rem;"></i>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <Button label="Read More"></Button>
      </div>
    </div>
  </template>
  
<script setup>

  const props = defineProps({
    imageSrc: String,
    altText: String,
    title: String,
    description: String,
    iconClass: {
      type: String,
      default: 'pi pi-user'
    }
  });
</script>
  
<style scoped>
  /* Add your scoped styles here */
</style>
  