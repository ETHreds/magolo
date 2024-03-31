<template>
    <div>

  <div class="grid-container">
    <div class="grid-item picture">
        <Card style="width: 25rem; overflow: hidden" class="border-noround">
            <template #header>
                <img alt="user header" src="https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </template>
            <template #footer>
                <div class="flex gap-3 mt-1">
                    <!-- <Button label="Cancel" severity="secondary" outlined class="w-full" />
                    <Button label="Save" class="w-full" /> -->
                </div>
            </template>
        </Card>
    </div>
    <div class="grid-item name">
        <h3 class="lawyer-name">
            Joe N. Magolo
        </h3>
        <h5 class="title text-primary">
            Junior Partner
        </h5>
    </div>
    <div class="grid-item accomplishments">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde aliquid culpa adipisci quaerat laudantium, illum, enim provident quia, rem facilis autem neque nobis iste sequi ab corporis quos voluptas necessitatibus rerum cupiditate? Ullam sit quaerat nisi sequi possimus eaque fugiat quis temporibus quam itaque. Beatae itaque totam quisquam quas, non architecto ullam laudantium consequatur necessitatibus explicabo, sequi nisi eius officia. Fugit asperiores consectetur minima eius dolorem vero tempora itaque nulla neque sit. Inventore, alias iure. Quis quaerat voluptas dolore sint commodi impedit nostrum vitae quasi enim odio. Tempore, sit ab cum earum autem nam nemo provident aliquid ipsam temporibus ea eos, quod rerum sed ut nisi odio maiores tempora aperiam dolore est? Modi minus soluta quo ipsa et quibusdam maiores in totam. Corrupti ipsam molestias eum molestiae reprehenderit quisquam sapiente repudiandae voluptatum, alias, expedita possimus fugit fuga iure deleniti assumenda dolor ullam quae. Possimus accusantium perferendis eos, accusamus animi rerum sed, ratione, aperiam et atque officiis fugit illo. Delectus esse magnam dolor asperiores recusandae neque minima sint, molestias, eos rem eum repellendus modi! Suscipit tenetur cumque sequi quo ad maxime corrupti, ab explicabo voluptas dolore iusto impedit provident? Quasi ab esse deserunt sequi aspernatur quaerat veritatis quia optio aperiam suscipit.</div>
        <div>
            <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            <AccordionTab>
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap">Education</span>
                    </span>
                </template>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap">Associations</span>
                    </span>
                </template>
                <p class="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap">Probono Activities</span>
                    </span>
                </template>
                <p class="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
        </div>
    </div>
  </div>



    </div>
</template>

<script setup>

</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 30vw 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas: 
    "picture name"
    "picture accomplishments"
    "picture accomplishments"
    ". accomplishments"
    ". accomplishments"

}

.grid-item {
  text-align: center;
}

.picture {
  grid-area: picture;
  border: 2px red solid;
}

.name {
  grid-area: name;
  border: 2px red solid;

}
.lawyer-name{
    font-size: 55px;
    line-height: 65px;
    text-align: left;
    margin-top: 18px;
    border: 2px red solid;

}
.title{
    text-align: left;
    margin: 0;
    border: 2px red solid;
}
.accomplishments {
  grid-area: accomplishments; /* Assign grid area for accomplishments */
  border: 2px red solid;

}

.picture img {
  max-width: 100%; /* Ensure the image fits within its container */
}
</style>
