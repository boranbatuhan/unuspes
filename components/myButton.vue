<template>
  <div>
    <button class="text-center cursor-pointer w-full bg-gradient-to-t from-sky-400 via-sky-600 to-sky-400 hover:to-blue-400 hover:from-blue-400 hover:via-blue-600  py-2 rounded-lg transition-all border-2 border-purple-500/50  font-bold scale-100 hover:scale-105 active:scale-100 text-white">{{props.name}}</button>

  </div>
</template>

<script setup>
const props = defineProps({
  name:{
    type:String,
    default:"Button"
  }
})
</script>
