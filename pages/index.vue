<script setup>
</script>


<template>
    <div class="container overflow-x-hidden flex items-center justify-start flex-col mx-auto border border-black min-h-screen py-2">
        <beadheader class="hue"/>
    </div>
</template>


<style>
.hues{
    animation: huec 5s infinite linear alternate;
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
