<template>
    <div class="surface-card col-12 shadow-2 p-3 border-round">
        <div class="flex justify-content-between mb-3">
            <div>
                <span class="block text-500 font-medium mb-3">{{ achievement.title }}</span>
                <div class="text-900 text-4xl font-bold">
                    <vue3-autocounter :startAmount="0" :endAmount="achievement.number" :duration="3" :autoinit="true" suffix="M+" />
                </div>
            </div>
            <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                <i class="pi" :class="achievement.icon + ' text-blue-500 text-xl'"></i>
            </div>
        </div>
        <span class="text-green-500 font-medium">{{ achievement.recentNumber }} </span>
        <span class="text-500">{{ achievement.time }}</span>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        achievement: Object
    });
</script>

<style scoped>
/* Add your scoped styles here */
</style>
