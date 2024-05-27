<template>
  <div class="grid h-16rem w-28rem m-2">
    <div class="col-6 overflow-hidden bg-cover bg-center"
      :style="{ 'background-image': 'url(' + imageSrc + ')', 'clip-path': 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }">
    </div>
    <div class="col-6 ">
      <div class="flex flex-column justify-content-center py-3">
        <i :class="iconClass" class="text-2xl"></i>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <!-- <Button label="Read More"/> -->
      </div>
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