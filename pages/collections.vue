<template>
    <div class="min-h-screen flex items-start justify-start flex-col bg-stone-50">
        <my-h header="Koleksiyonlar" @click="selectedSeries=''"/>
        <ul class="my-5 px-7 flex items-center justify-start gap-7 flex-wrap">
            <li class="w-6 h-6 ">
                <div v-show="selectedSeries!=''" class="w-6 h-6 cursor-pointer" @click="selectedSeries=''"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 1.586L21.414 20L20 21.414l-5.5-5.5V21h-5v-8.182L4.933 6.347L1.586 3L3 1.586Zm8.5 11.328V19h1v-5.086l-1-1ZM6.545 3H21.43l-6.034 8.549l-1.634-1.153L17.57 5H9.51l-.899.018L6.545 3Z"/></svg></div>
            </li>
            <li v-for="s in series" :key="s" class="shrink-0">
                <p @click="selectedSeries = s" class="text-xl font-extrabold opacity-100 cursor-pointer flex items-center justify-center" :class="{'font-extrabold opacity-100':selectedSeries==s && selectedSeries =='','font-thin opacity-40':selectedSeries !='' && selectedSeries !=s}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><g transform="rotate(-90 8 8) translate(16 0) scale(-1 1)"><path fill="currentColor" d="M4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z"/></g></svg>{{s}}</p>
            </li>
        </ul>
        <ul class="my-5 px-7 flex items-center justify-start gap-7 flex-wrap">
            <li v-for="s in subSeries" :key="s"><p class="opacity-100 cursor-pointer flex items-center justify-center" :class="{'font-bold opacity-100':selectedSeries==s.series, 'font-normal opacity-100':selectedSeries != s.series && selectedSeries == '', 'font-normal opacity-40':selectedSeries != s.series && selectedSeries != ''}"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><path fill="currentColor" d="M10 15a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4m6.5 4a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5Z"/></g></svg>{{s.subSeries}}</p></li>
        </ul>

    </div> 
</template>

<script setup>
const selectedSeries = ref("")
const series = useProductsStore().getSeries
const subSeries = useProductsStore().getSubSeries

</script>

<style lang="scss" scoped>

</style>