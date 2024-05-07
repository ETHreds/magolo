<template>
  <div>
    <a class="card4 text-left flex flex-column text-black justify-content-end bg-center bg-cover z-1" href="#" 
    :style="{ 'background-image': 'url(' + imageSrc + ')'}">
        <div class="flex flex-column p-2 " style="background-color: rgba(255, 215, 0, 0.3);" >
          <i class="pi pi-key" style="font-size: 2rem"></i>
          <h3>{{ category }}</h3>
          <p class="small">{{ description }}</p>
      
          <div class="dimmer"></div>
          <div class="go-corner" href="#">
            <div class="go-arrow">
              →
            </div>
          </div>
        </div>
    </a>
  </div>
</template>


<script setup>
const props = defineProps({
  category: String,
  description: String,
  imageSrc: String,
});
</script>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease-out;
}


h3 {
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;

  &.small {
    font-size: 14px;
  }
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: blue;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: gold;
}

.card4 {
  display: block;
  top: 0px;
  padding-top: auto;
  position: relative;
  max-width: 300px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 12px;
  text-decoration: none;
  overflow: hidden;
  // border: 1px solid #cccccc;
  
  .go-corner {
    background-color: blue;
    height: 100%;
    width: 16px;
    padding-right: 9px;
    border-radius: 0;
    transform: skew(6deg);
    margin-right: -36px;
    align-items: start;
    background-image: linear-gradient(-45deg, blue 1%, gold 100%);
  }
  
  .go-arrow {
    transform: skew(-6deg);
    margin-left: -2px;
    margin-top: 9px;
    opacity: 0;
  }

  &:hover {
    border: 1px solid blue;
  }
  
  h3 {margin-top: 8px;}
}

.card4:hover {
  .go-corner {
    margin-right: -12px;
  }
  .go-arrow {
    opacity: 1;
  }
}

</style>