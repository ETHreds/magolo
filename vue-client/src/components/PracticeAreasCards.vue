<template>
  <div class="grid grid-nogutter h-14rem w-28rem">
    <div class="col-6 overflow-hidden bg-cover bg-center"
      :style="{ 'background-image': 'url(' + imageSrc + ')', 'clip-path': 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)' }">
    </div>
    <div class="col-6 ">
      <div class="text-center">
        <i :class="iconClass"></i>
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