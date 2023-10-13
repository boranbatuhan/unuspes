<template>
    <div class="w-full ">
        <div class="container mx-auto h-9 flex items-center justify-between gap-2 px-2 py-px">
            <!-- logo start -->
            <div class="h-full w-fit select-none">
                <img class="w-fit h-full" src="~~/assets/images/unuspes.png" loading="eager" draggable="false" alt="logo">
            </div>
            <!-- logo end -->

            <!-- brandname start -->
            <h1 class="text-xs font-thin mr-auto"><strong class="uppercase">unuspes</strong> <strong>Handmade</strong> <strong>Beadworks</strong></h1>
            <!-- brandname end -->

            <!-- buttons start -->
            <my-button :name="'Shop now'" :wrapperclass="'p-1'" class="ml-auto"/>

            <!-- buttons end -->
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>