<template>
    <div class="h-fit w-fit max-w-2xl  page-item-container rounded-md p-[2px] gap-7 flex flex-col">
        <div class="h-full w-full page-item rounded-md p-1">
            <slot/>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.page-item-container{
  background-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);

}
.page-item{
    @apply
    border border-rose-600/50
    bg-neutral-50

}
</style>