<template>
    <div>
        <div class="grid grid-nogutter surface-section text-800">
            <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <slot name="left"></slot>
                </section>
            </div>
            <div class="col-12 md:col-6 overflow-hidden">
                <!-- <img src="/images/blocks/hero/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" /> -->
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>