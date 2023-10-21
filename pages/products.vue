<template>
    <div class="min-h-screen">
      <my-h header="Tüm Ürünler" />
        <ul class="w-full flex items-center justify-end gap-4 text-xs my-8">
            <li @click="filter='low'" :class="{'font-bold underline':filter=='low'}" class="hover:underline cursor-pointer">Artan fiyat</li>
            <li @click="filter='high'" :class="{'font-bold underline':filter=='high'}" class="hover:underline cursor-pointer">Azalan fiyat</li>
            <li @click="filter='popi'" :class="{'font-bold underline':filter=='popi'}" class="hover:underline cursor-pointer">Popüler</li>
        </ul>
        <div class="container mx-auto  p-2 flex items-start justify-center flex-wrap gap-10">
            <my-card v-for="p in products" :p="p" :key="p.id"/>
        </div>
    </div>
</template>

<script setup>
const filter=ref("")

const products = useProductsStore().getProducts
</script>

<style  scoped>

</style>