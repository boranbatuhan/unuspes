<template>
    <!-- <nuxt-link :to="`/${p.id}`"> -->
        <div class="graborder-anim p-2 rounded-lg text-center w-52  font-now flex flex-col items-center justify-start" style="--turn:1">
            <!-- card header start -->
            <div class="flex items-center justify-between w-full">
                <h1 class="text-xs cursor-pointer opacity-50 hover:opacity-100">{{props.p.series}} </h1>
                <h1 class="text-xs cursor-pointer opacity-50 hover:opacity-100">{{props.p.subSeries}}</h1>
            </div>
            <!-- card header end -->
            <div class=" w-full flex items-center justify-end gap-2"> <p class="truncate text-center w-full">{{props.p.title}}</p> <span>#</span></div>
            <div class="w-48 h-48  graborder-anim my-2 p-px">
                <img :src="productimg" loading="lazy" alt="product.photo" draggable="false" class="w-full h-full select-none object-contain">
            </div>
            <my-button-pop :price="props.p.price" class="shrink-0 mt-auto !inline"/>
        </div>
    <!-- </nuxt-link> -->
</template>

<script setup>
const props = defineProps({
    p:{
        type:Object,
        default:{title:"Product",
        series:"Series",
        subSeries:"SubSeries",
        price:999,
        id:0,
        images:"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"},

    }
})

const productimg = computed(()=>{
    
    return props.p.images !="noimg" ? props.p.images : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
})
</script>

<style>
    
</style>
