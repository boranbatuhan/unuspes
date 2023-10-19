<template>
    <div class="min-h-screen">
        <p class="text-3xl font-bold tracking-widest m-2">Tüm ürünler</p>
        <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
        <ul class="w-full flex items-center justify-end gap-4 text-xs my-8">
            <li @click="filter='low'" :class="{'font-bold underline':filter=='low'}" class="hover:underline cursor-pointer">Artan fiyat</li>
            <li @click="filter='high'" :class="{'font-bold underline':filter=='high'}" class="hover:underline cursor-pointer">Azalan fiyat</li>
            <li @click="filter='popi'" :class="{'font-bold underline':filter=='popi'}" class="hover:underline cursor-pointer">Popüler</li>
        </ul>
        <div class="container mx-auto  p-2 flex items-start justify-center flex-wrap gap-7">
            <my-card v-for="i in 5" :key="i"/>
        </div>
    </div>
</template>

<script setup>
const filter=ref("")


</script>

<style  scoped>

</style>