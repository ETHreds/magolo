<template>
    <div>
        <div class="formgrid grid p-6">
            <div class="field col-12 md:col-6">
                <label for="firstname6">Firstname</label>
                <input id="firstname6" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
            </div>
            <div class="field col-12 md:col-6">
                <label for="lastname6">Lastname</label>
                <input id="lastname6" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
            </div>
            <div class="field col-12 md:col-6">
                <label for="city">Email</label>
                <input id="city" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
            </div>
            <div class="field col-12 md:col-3">
                <label for="zip">Phone Number</label>
                <input id="zip" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
            </div>
            <div class="field col-12 md:col-3">
                <label for="state">Case Type</label>
                <select id="state" class="w-full text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round outline-none focus:border-primary" style="appearance: auto">
                    <option>Fresh</option>
                    <option>On-going</option>
                    <option>Appeal</option>
                </select>
            </div>
            <div class="field col-12">
                <label for="address">Message</label>
                <textarea id="address" placeholder="Give a brief Description of the inquiry..." type="text" rows="4" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"></textarea>
            </div>
        
        </div>
        <div class="flex justify-content-center pb-5">
            <Button label="Submit"/>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>