<template>
    <div class="container">
        <div class="card">
            <h2>{{ name }}</h2>
            <i class="pi pi-arrow-right"></i>
            <p>{{ post }}</p>
            <div class="pic" 
            :style="{ 'background-image': 'url(' + imageSrc + ')'}"></div>
            <div class="social">
            <i class="pi pi-linkedin"></i>
            <i class="pi pi-facebook"></i>
            <i class="pi pi-envelope"></i>
            <i class="pi pi-phone"></i>
            </div>
            <button>
            </button>
          </div>
    </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  post: String,
  imageSrc: String,
});

</script>

<style lang="scss" scoped>
$bg-color: #E6E5E1;
$orange: rgba(253, 237, 7, 0.322);


i {
  opacity: 0;
  font-size: 18px;
  color: #fff;
  will-change: transform;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

h2{
  pointer-events:none;
}


.card {
  position: relative;
  width: 350px;
  height: 400px;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 4px;

  &:before {
    content: "";
    z-index: 99;
    position: absolute;
    top: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: $bg-color;
  }
  &:after {
    content: "";
    z-index: 99;
    position: absolute;
    bottom: -10px;
    left: 32px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: $bg-color;
  }
  ul {
    z-index: 99;
    position: absolute;
    left: 39px;
    top: 5px;
    list-style-type: none;
    li {
      width: 2px;
      height: 2px;
      border-radius: 2px;
      margin: 6px 0;
      background-color: $bg-color;
    }
  }
  h2 {
    z-index: 99;
    font-family: "Poppins", sans-serif;
    position: absolute;
    bottom: 0;
    right: 130px;
    font-size: 35px;
    font-weight: 700;
    color: #fff;
  }

  .pi-arrow-right {
    z-index: 100;
    position: absolute;
    right: 75px;
    bottom: 25px;
    font-size: 40px;
    cursor: pointer;
  }
  p {
    z-index: 99;
    position: absolute;
    top: 20px;
    right: 0;
    color: #333;
    opacity: 0.7;
    font-size: 12px;
    letter-spacing: 1px;
    writing-mode: vertical-lr;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .pic {
    z-index: 100;
    width: 320px;
    height: 400px;
    background-size: 100% 100%;
    filter: grayscale(100%);
  }

  .social {
    position: absolute;
    left: 60px;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 180px;
    height: 64px;
    border-radius: 80px;
  }

  .social i:nth-of-type(1) {
    -webkit-transition-delay: 0.4s;
    transition-delay: 0.4s;
  }

  .social i:nth-of-type(2) {
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
  }

  .social i:nth-of-type(3) {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
  }

  .social i:nth-of-type(4) {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }

  &:hover i {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  button {
    position: absolute;
    right: 14px;
    bottom: 14px;
    width: 30px;
    height: 30px;
    background-color: $orange;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    outline:none;
    transition: all 0.3s ease;
    mix-blend-mode: hard-light;

    i {
      font-size: 3rem;
    }
  }

  &:hover button {
    transform: scale(16.5);
  }
  
  &:hover .pic {
    filter: grayscale(0);
    
  }
}
  


.dr {
position: absolute;
  bottom: 16px; 
  right: 16px;
  width:100px;
}
 

</style>