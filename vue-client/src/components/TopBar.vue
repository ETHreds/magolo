<template>
  <div>
    <div class="top-bar">
      <div class="grid">
        <div class="md:col-3 col-12">
          <div class="logo flex sm:align-items-center lg:my-0">
            <img src="../assets/logo/logo.png" class="w-3rem">
            <h1 class="text-xl">
              <span>J.O MAGOLO</span>
              <span>& CO. ADVOCATES</span>
            </h1>

          </div>
        </div>
        <div class="md:col-9 col-12">
          <div class="top-bar-right">
            <div class="text">
              <h2>8:00 - 5:00</h2>
              <p>Opening Hour Mon - Fri</p>
            </div>
            <div class="text">
              <h2>+264 725 677 133</h2>
              <p>Call Us For Free Consultation</p>
            </div>
            <div class="social">
              <a href="" target="_blank"><i class="pi pi-whatsapp text-4xl"></i></a>
              <a href="" target="_blank"><i class="pi pi-facebook text-4xl"></i></a>
              <a href="" target="_blank"><i class="pi pi-linkedin text-4xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/**********************************/
/********** Top Bar CSS ***********/
/**********************************/
.top-bar {
  position: relative;
  height: 90px;
  background: goldenrod;
  width: 100%;
}

.top-bar .logo {
  padding: 15px 0;
  text-align: left;
  overflow: hidden;
}

.top-bar .logo h1 {
  margin: 0;
  color: #070707;
  font-size: 75px;
  line-height: 55px;
  font-weight: 800;
}

.top-bar .logo img {
  max-width: 100%;
  max-height: 60px;
}

.top-bar .top-bar-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.top-bar .text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90px;
  padding: 0 20px;
  text-align: center;
  border-left: 1px solid rgba(255, 255, 255, .15);
}

.top-bar .text h2 {
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  margin: 0;
}

.top-bar .text p {
  color: #ffffff;
  font-size: 13px;
  margin: 0;
}

.top-bar .social {
  display: flex;
  height: 90px;
  font-size: 0;
  justify-content: flex-end;
}

.top-bar .social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 100%;
  font-size: 22px;
  color: #ffffff;
  border-right: 1px solid rgba(255, 255, 255, .15);
  text-decoration: none;
}

.top-bar .social a:first-child {
  border-left: 1px solid rgba(255, 255, 255, .15);
}

.top-bar .social a:hover {
  color: #aa9166;
  background: #ffffff;

}

@media (min-width: 992px) {
  .top-bar {
    padding: 0 60px;
  }
}

@media (max-width: 991.98px) {
  .top-bar .logo {
    text-align: center;
  }

  .top-bar .social {
    display: none;
  }
}
</style>