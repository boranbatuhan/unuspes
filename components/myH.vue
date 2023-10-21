<template>
  <div class="w-full">
    <p class="text-3xl font-bold tracking-widest m-2 font-now">{{props.header}}</p>
    <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>
  </div>
</template>

<script setup>
const props = defineProps({
    header:{
        type:String,
        default:":header"
    }
})
</script>
