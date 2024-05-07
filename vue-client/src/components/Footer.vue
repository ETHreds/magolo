<template>
    <div class="footer pt-6 px-6">
    
<div class=" ">
    <div class="text-700 text-xl mb-6 text-center line-height-3">
        <InputGroup class="flex justify-content-center">
            <div class="flex flex-row gap-2 border-noround align-items-center">
                <label for="username" class="font-bold text-primary">Subscribe to Newsletter</label>
                <InputText id="username" v-model="subEmail" placeholder="Enter Email" class="border-noround"/>
            </div>
            <Button label="Subscribe" class="type1" severity="warning" />
        </InputGroup>
    </div>
    <div class="">
        <div class="grid nested-grid">
            <div class="col-6">
                <div class="grid grid-nogutter">
                    <div class="col w-5rem ">
                        <img src="../assets/logo/logo.png" alt="" class="w-full" >
                    </div>
                    <div class="col-10 ">
                        <div class="grid grid-nogutter">
                            <div class="col-12 font-bold text-3xl">J.O MAGOLO &amp; Co. Advocates</div>
                            <div class="col-12">Experience. Competence. Prudence</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
   

    <div class="grid">
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="p-3 h-full flex flex-column">
                    <div class="text-900 font-medium text-xl mb-2">Contact Information</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <!-- <div class="text-600">Plan description</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />
                    <div class="flex align-items-center">
                        <span class="font-bold text-2xl text-900">$9</span>
                        <span class="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" /> -->
                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-phone mr-2"></i>
                            <span>+254 725 677 133</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-envelope mr-2"></i>
                            <span>pwalter@gmail.com</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-map-marker mr-2"></i>
                            <span>Electricity House, 5th Floor</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="p-3 h-full flex flex-column">
                    <div class="text-900 font-medium text-xl mb-2">Resources</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />

                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-phone mr-2"></i>
                            <span>FAQs</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-envelope mr-2"></i>
                            <span>Case Studies</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-map-marker mr-2"></i>
                            <span>Practice Areas</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4">
            <div class="p-3 h-full">
                <div class="p-3 h-full flex flex-column">
                    <div class="text-900 font-medium text-xl mb-2">Useful Links</div>
                    <hr class="my-3 mx-0 border-top-1 border-none surface-border" />

                    <ul class="list-none p-0 m-0 flex-grow-1">
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-phone mr-2"></i>
                            <span>Check Your Lawyer Status</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-envelope mr-2"></i>
                            <span>Constitution of Kenya</span>
                        </li>
                        <li class="flex align-items-center mb-3">
                            <i class="pi pi-map-marker mr-2"></i>
                            <span>Latest Law Development</span>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        
    </div>
</div>
        
    <div class="text-gray-100 p-3 flex justify-content-between  align-items-center ">
        <div class="">&copy; 2024, J.O MAGOLO &amp; Co. ADVOCATES </div>
        <div class="align-items-center flex">
            <span class="line-height-3">Terms of Use | Privacy Policy | Disclaimer </span>
        </div>

        <div class="flex align-items-center">
            <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
                <i class="pi pi-facebook"></i>
            </a>
            <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
                <i class="pi pi-linkedin"></i>
            </a>
            <a v-ripple class="flex align-items-center no-underline justify-content-center border-circle text-gray-50 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150 p-ripple" style="width:2rem; height: 2rem">
                <i class="pi pi-tiktok"></i>
            </a>
        </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
    background-color: var(--blue);
}

</style>