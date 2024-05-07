
<template>
    <div class=" h-screen w-screen">
        <div class="hero2">
            <fieldset class="hero2-text border-solid">
                <legend class="border-text">&nbsp; J.O MAGOLO & CO. ADVOCATES</legend>
                <h1 class="text-white">Navigate any legal challenge with confidence.</h1>
                <p >Where competence meets prudence and  intertwines with experience. With a legacy of successful outcomes and a dedication to our clients' best interests, we stand as stalwarts of legal advocacy in Mombasa - Kenya at large.</p>
                <div class="flex gap-2 p-3">
                  <a href="#"><Button class="type1" label="Consult with Our Seasoned Attorneys"/></a>
                  <a href="#"><Button class="type1" label="Download Criminal Defence Checklist"/></a>
                </div>
            
              </fieldset>
        </div>
    </div>
</template>

<script setup>

</script>
<style lang="scss" scoped>

.hero2{
  height: 100%;
   background-size: cover;
  background-image: linear-gradient(to top right,
      rgba(11, 9, 167, 0.4),
      var(--blue)
    ), url("../assets/images/pwsnrbrown.png");
  background-position: center;
  filter: grayscale(40%);
  margin: 0;
  padding: 0;
  overflow: hidden;
}

 .border-text{
    text-transform: uppercase;
    z-index: 1;
    font-size: 18px;
    letter-spacing: 1.8px;
    color: var(--orange);
    text-align: left;
   overflow: hidden;
  }

.hero2-text{
  z-index: 0;
  width: 65%;
  top: 40%;
  position: relative;
  border: solid var(--gold) 2px;
  margin-left: 5%;
}

</style>
