<template>
    
    <!-- <div class="list-component text-center">

        <h4 class="border-round border-double p-2 inline-block border-primary text-primary"></h4>
        <p class="text-4xl font-semi-bold mt-0"> <slot name="subtitle"></slot></p>
        <div> </div>
    </div> -->
   <div class="">
        <div class="section-header">
            <h2><slot name="header"></slot></h2>
        </div>
        <div class="about-text text-center">
            <slot name="content"></slot>
            <!-- <a class="btn" href="">Learn More</a> -->

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.section-header {
  margin-bottom: 30px;
}

 .about-text {
  font-size: 16px;
}

@media (max-width: 767.98px) {
  .about .about-img {
      margin-bottom: 30px;
      height: auto;
  }
}

</style>