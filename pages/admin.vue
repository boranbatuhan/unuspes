<template>
    <div class="min-h-screen flex items-center justify-center ">
        <myCard/>
    </div>
</template>

<script setup>
const {x,y} = useMouse()

definePageMeta({
    layout:'Admin'
})
</script>
<style >

</style>
