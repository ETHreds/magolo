<template>
    <div class="list-component text-center">
        <h4 class="border-round border-double p-2 inline-block border-primary text-primary"><slot name="header"></slot></h4>
        <p class="text-4xl font-semi-bold mt-0"> <slot name="subtitle"></slot></p>
        <div> <slot name="content"></slot> </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>