<template>
    <div class="wrapper">
        <div class="twocols">
            <div class="grid align-items-center"
                :style="{ gridTemplateColumns: reverseColumns ? '1fr 1fr' : '1fr 1fr' }">
                <div class="lg:col-7" v-if="!reverseColumns">
                    <slot name="left"></slot>
                </div>
                <div class="lg:col-5" v-if="!reverseColumns">
                    <slot name="right"></slot>
                </div>
                <div class="lg:col-7" v-if="reverseColumns">
                    <slot name="right"></slot>
                </div>
                <div class="lg:col-5" v-if="reverseColumns">
                    <slot name="left"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const reverseColumns = ref(false);
</script>

<style lang="scss" scoped>
.twocols {
    position: relative;
    width: 100%;
    padding: 45px 0;
}
</style>