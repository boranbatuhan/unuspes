<template>
    <div class="min-h-screen">
        <div class="container mx-auto p-2 flex flex-col gap-7 my-7">

            <!-- banner start -->
            <div class="w-full shadow-md shadow-stone-400 h-64 relative">
                <img src="~~/assets/images/banner.png" class="object-cover w-full h-full select-none" loading="eager" draggable="false" alt="banner">
            </div>
            <!-- banner end -->
            <!-- campaign start -->
            <div class="w-full  py-2 px-4">
                <my-h header="Kampanyalar" />
                
                <ul>
                    <li>
                        <p class="px-5 py-2">2. üründe %9999 indirim.<span class="text-xs mx-2 opacity-50">(20.11.2023)</span></p>
                    </li>
                    <li>
                        <p class="px-5 py-2">Tüm ürünlerde Kargo Bedava!<span class="text-xs mx-2 opacity-50">(02.07.2023)</span></p>
                    </li>
                    <li class="text-end">
                        <button class="text-xs ml-auto text-cyan-500 hover:underline">
                        <nuxt-link to="/campaign">Kampanyalara Git</nuxt-link>
                        </button>
                    </li>
                </ul>

            </div>
            <!-- campaign end -->
            <!-- announcement start -->
            <div class="w-full  py-2 px-4">
                <my-h header="Duyurular" />
                
                <ul>
                    <li>
                        <p class="px-5 py-2">Tadilat sebebiyle kapalıyız.<span class="text-xs mx-2 opacity-50">(20.10.2023)</span></p>
                    </li>
                    <li>
                        <p class="px-5 py-2">Hafta içi siparişler ertesi gün kargoda.<span class="text-xs mx-2 opacity-50">(10.10.2023)</span></p>
                    </li>
                    <li class="text-end">
                        <button class="text-xs ml-auto text-cyan-500 hover:underline">
                        <nuxt-link to="/announcement">Duyurulara Git</nuxt-link>
                        </button>
                    </li>
                </ul>
            </div>
            <!-- announcement end -->
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>