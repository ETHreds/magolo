
<template>
    <div class="">
        <div class="hero2">
            <fieldset class="hero2-text border-solid">
                <legend class="border-text">&nbsp; J.O MAGOLO & CO. ADVOCATES</legend>
                <h1 class="text-white">Navigate any legal challenge with confidence.</h1>
                <p class="text-white" >Where competence meets prudence and  intertwines with experience. With a legacy of successful outcomes and a dedication to our clients' best interests, we stand as stalwarts of legal advocacy in Mombasa - Kenya at large.</p>
                <div class="flex gap-2 p-3">
                  <a href="#"><Button class="btn" label="Consult with Our Seasoned Attorneys"/></a>
                  <!-- <a href="#"><Button class="type1" label="Download Criminal Defence Checklist"/></a> -->
                </div>
            
              </fieldset>
        </div>
    </div>
</template>

<script setup>

</script>
<style lang="scss" scoped>

.hero2{
  height: calc(100vh - 170px);
   background-size: cover;
  background-image: linear-gradient(to top right,
      rgba(11, 9, 167, 0.4),
      var(--blue)
    ), url("../assets/images/pwsnrbrown.png");
  background-position: center;
  filter: grayscale(40%);
  margin: 0;
  padding: 0;
}

 .border-text{
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 1.8px;
    color: var(--orange);
    text-align: left;
  }

.hero2-text{
  width: 65%;
  top: 40%;
  position: relative;
  border: solid var(--gold) 2px;
  margin-left: 5%;
}

</style>
