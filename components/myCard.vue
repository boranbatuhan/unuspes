<template>
        <div  class="graborder-anim p-2 rounded-lg text-center w-52  font-now flex flex-col items-center justify-start" style="--turn:1">
            <!-- card header start -->
            <div class="flex items-center justify-between w-full">
                <h1 class="text-xs cursor-pointer opacity-50 hover:opacity-100">{{props.p.series}} </h1>
                <h1 class="text-xs cursor-pointer opacity-50 hover:opacity-100">{{props.p.subSeries}}</h1>
            </div>
            <!-- card header end -->
            <div class=" w-full flex items-center justify-end gap-2"> <p class="truncate text-center w-full">{{props.p.title}}</p> <span>#</span></div>
            <div class="w-48 h-48  graborder-anim my-2 overflow-hiddens flex relative">
                <div @click="prevImg" class="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 cursor-pointer custom-shadow">
                    <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"/></g></svg>
                </div>
                <div @click="nextImg" class="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 cursor-pointer custom-shadow">
                    <svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(90 12 12)"><path fill="currentColor" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"/></g></svg>
                </div>
                <div  class="absolute bottom-0 left-1/2 -translate-x-1/2  h-6 cursor-pointer bg-zinc-400/50 rounded-full flex items-center justify-center gap-2 px-2">
                    <div class="w-3 h-3 rounded-lg " :class="{'bg-white': imgindex==i , 'bg-white/50':imgindex != i}" v-for="i in props.p.images.length" :key="i" :id="i" @click="imgindex=i"></div>
                </div>
                <div class="h-full w-full shrink-0 " >
                    <NuxtImg  :src="props.p.images[imgindex-1]" class="w-full h-full object-cover transition-all" draggable="false"  placeholder="_nuxt/assets/images/unuspes.png" />
                </div>
            </div>
            <my-button-pop :price="props.p.price" class="shrink-0 mt-auto !inline"/>
        </div>
</template>

<script setup>

const imgindex=ref(1)

const props = defineProps({
    p:{
        type:Object,
        default:{title:"Product",
        series:"Series",
        subSeries:"SubSeries",
        price:999,
        id:0,
        images:["https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"]},

    }
})

const nextImg =()=>{
    if( imgindex.value + 1> props.p.images.length){
        imgindex.value=1
    }else{
        imgindex.value+=1
    }
}
const prevImg =()=>{
    if( imgindex.value - 1 < 1 ){
        imgindex.value=props.p.images.length
    }else{
        imgindex.value-=1
    }
    
}

</script>

<style scoped>
.custom-shadow{
    filter: drop-shadow(0px 2px 3px #330009);
}
    
</style>
