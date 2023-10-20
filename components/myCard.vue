<template>
    <!-- <nuxt-link :to="`/${p.id}`"> -->
        <div class="graborder-anim p-2 rounded-lg text-center w-52  font-now flex flex-col items-center justify-start" style="--turn:1">
            <!-- card header start -->
            <div class="flex items-center justify-between w-full">
                <h1 class="text-xs cursor-pointer opacity-50 hover:opacity-100">Marvel </h1>
                <h1 class="text-xs cursor-pointer opacity-50 hover:opacity-100">spiderman</h1>
            </div>
            <!-- card header end -->
            <div class=" w-full flex items-center justify-end gap-2"> <p class="truncate text-center w-full">{{p.title}}</p> <span>#{{p.series}}</span></div>
            <div class="w-48 h-48  graborder-anim my-2 p-px">
                <img :src="p.image" loading="lazy" alt="product.photo" draggable="false" class="w-full h-full select-none object-contain">
            </div>
            <my-button-pop :price="p.price" class="shrink-0 mt-auto !inline"/>
        </div>
    <!-- </nuxt-link> -->
</template>

<script setup>
const props = defineProps({
    p:{
        type:Object,
        default:{
            id:111,
            image:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
            title:"Product",
            series:1,
            price:200
        }
    }
})
</script>

<style>
    
</style>
