<template>
    <div class="contact">
      <div class="container">
        <div class="section-header">
          <h2>Contact Us</h2>
        </div>
        <div class="grid">
          <div class="md:col-6">
            <div class="contact-info">
              <div class="contact-item">
                <i class="pi pi-map-marker"></i>
                <div class="contact-text">
                  <h2>Location</h2>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="pi pi-phone"></i>
                <div class="contact-text">
                  <h2>Phone</h2>
                  <p>+012 345 67890</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="pi pi-envelope"></i>
                <div class="contact-text">
                  <h2>Email</h2>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-6">
            <ContactForm/>
          </div>

        </div>
      </div>
    </div>
  </template>
 

<script setup>
import SharedHero from '../components/SharedHero.vue'
import ContactForm from '../components/ContactForm.vue';
const customItems = [
  { label: 'Contact Us', route: '/contact' },
  ];

</script>

<style lang="scss" scoped>
/*******************************/
/********* Contact CSS *********/
/*******************************/
.contact {
    position: relative;
    width: 100%;
    padding: 45px 0 15px 0;
}

.contact .contact-info {
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    padding: 30px;
    background: #121518;
}

.contact .contact-item {
    position: relative;
    margin-bottom: 30px;
    padding: 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    border: 2px solid #aa9166;
}

.contact .contact-item i {
    display: inline-block;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #aa9166;
    border: 2px solid #aa9166;
}

.contact .contact-text {
    position: relative;
    width: auto;
    padding-left: 15px;
}

.contact .contact-text h2 {
    color: #aa9166;
    font-size: 25px;
    font-weight: 600;
}

.contact .contact-text p {
    margin: 0;
    color: #999999;
    font-size: 16px;
}

.contact .contact-item:last-child {
    margin-bottom: 0;
}




</style>