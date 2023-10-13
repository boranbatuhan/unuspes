<script setup>
</script>


<template>
    <div class="container overflow-x-hidden flex items-center justify-start flex-col mx-auto  min-h-screen py-2">
        <beadheader class="hue"/>
        <my-button-pop :currency="'₺'" :price="'250'" />
    </div>
</template>


<style>




.hue{
    animation: huec 60s infinite linear alternate;
    animation-delay: 5s;
}

@keyframes huec {
    0%{
        filter: hue-rotate(0);
    }
    100%{
        filter: hue-rotate(1turn);
    }
}
</style>
