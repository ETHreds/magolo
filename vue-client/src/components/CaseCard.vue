<template>
  <div>
    <div class="portfolio-item">
      <div class="portfolio-wrap">
        <img :src="imageSrc" alt="Portfolio Image">
        <figure>
          <p>{{ category }}</p>
          <a href="#">{{ altText }}</a>
          <span>01-Jan-2045</span>
        </figure>
      </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  category: String,
  description: String,
  imageSrc: String,
  altText: String
});
</script>

<style lang="scss" scoped>
.portfolio .load-more .btn:hover {
  color: #121518;
  background: #aa9166;
}

.portfolio-item {
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  transition: .5s;
}

.portfolio-item:hover {
  margin-top: -10px;
}

.portfolio-wrap {
  position: relative;
  width: 100%;
}

.portfolio-wrap img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figure {
  position: absolute;
  padding: 30px;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, .0), rgba(0, 0, 0, .0), rgba(0, 0, 0, 1) 90%);
}

figure p {
  position: relative;
  margin-bottom: 5px;
  padding-bottom: 5px;
  color: #ffffff;
  font-size: 18px;
}

figure p::after {
  position: absolute;
  content: "";
  width: 50px;
  height: 2px;
  left: 0;
  bottom: 0;
  background: #ffffff;
}

figure a {
  font-family: 'EB Garamond', serif;
  color: #aa9166;
  font-size: 25px;
  font-weight: 600;
  font-style: italic;
  transition: .3s;
}

figure a:hover {
  text-decoration: none;
  color: #ffffff;
}

figure span {
  position: relative;
  color: #999999;
  font-size: 16px;
}
</style>