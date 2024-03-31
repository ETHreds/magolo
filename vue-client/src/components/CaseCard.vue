<template>
  <div class="overflow-hidden w-6">
    <div class="back relative bg-no-repeat bg-cover border-primary-500"
        style="background-image: url('https://cdn.pixabay.com/photo/2017/03/28/12/06/chairs-2181916__340.jpg'); height: 30rem">
      <div class="overlay fadein animation-duration-1000 absolute top-0 left-0 w-full h-full flex flex-column justify-content-between">
        <div class="h-4rem w-4rem bg-white font-bold text-center">1</div>
        <div class="text-left text-white pl-3">
          <h6 class="title">Civil Law</h6>
          <p>Property Rights</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fadein {
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.5s ease;
}

.fadein:hover {
  opacity: 1;
}
</style>