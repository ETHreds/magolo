<template>
    <div>
        <SharedHero :itemsProp="customItems" heading="Team" ></SharedHero>
        <ListSection>
            <template v-slot:header>OUR TEAM</template>
            <template v-slot:subtitle>Top proffesional lawyers secure your interest</template>
            <template v-slot:content> 
                <div>
                    <div class="big-boss" style="height: 100vh;">
                     <LawyerInfoLayout style="height: 100vh;"></LawyerInfoLayout>
                    </div>
                    <div class="legal bg-primary">
                        <Card style="width: 25rem; overflow: hidden; height: auto;" class="border-noround">
                            <template #header>
                                <img alt="user header" style="width: 20rem; overflow: hidden; height: 30rem;" src="https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=600" />
                            </template>
                            <template #footer>
                                <div class="">
                                    <h3>Paul Walter</h3>
                                    <p text-primary> Mtu wa mkono</p>
                                </div>
                            </template>
                        </Card>
                    </div>
                    <div class="clerk"></div>
                </div>
            </template>
        </ListSection>

    </div>
</template>

<script setup>
import ListSection from '@/components/ListSection.vue';
import SharedHero from '@/components/SharedHero.vue';
import LawyerInfoLayout from '@/components/LawyerInfoLayout.vue';
const customItems = [
  { label: 'Team', route: '/team' },
];

</script>

<style scoped>
.block{
    widows: 50%;
}

</style>