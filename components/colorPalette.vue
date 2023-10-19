<template>
        <div class="flex items-center justify-center p-12 ">
            <div class="flex flex-col items-center justify-center gap-3  relative group rounded-full bg-gradient-to-br from-stone-200 to-stone-400">
            <div class="border  rounded-full relative border-black flex items-center justify-center cursor-pointer w-20 h-20 group-hover:scale-110 group-hover:border-4 transition-all" :style="`border-color:${selectedColor};`">
                <svg :style="`color:${selectedColor};`" class="drop-shadow-sm" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512"><path fill="currentColor" d="M167.02 309.34c-40.12 2.58-76.53 17.86-97.19 72.3c-2.35 6.21-8 9.98-14.59 9.98c-11.11 0-45.46-27.67-55.25-34.35C0 439.62 37.93 512 128 512c75.86 0 128-43.77 128-120.19c0-3.11-.65-6.08-.97-9.13l-88.01-73.34zM457.89 0c-15.16 0-29.37 6.71-40.21 16.45C213.27 199.05 192 203.34 192 257.09c0 13.7 3.25 26.76 8.73 38.7l63.82 53.18c7.21 1.8 14.64 3.03 22.39 3.03c62.11 0 98.11-45.47 211.16-256.46c7.38-14.35 13.9-29.85 13.9-45.99C512 20.64 486 0 457.89 0z"/></svg>
            </div>
            <div @click="setColor('#ff0000')" class="bg-[#ff0000] invisible group-hover:visible delay-[50ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute -top-8 -left-8 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#f86402')" class="bg-[#f86402] invisible group-hover:visible delay-[100ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute -top-12  left-5 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#ebfc00')" class="bg-[#ebfc00] invisible group-hover:visible delay-[150ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute -top-8 -right-8 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#32fc00')" class="bg-[#32fc00] invisible group-hover:visible delay-[200ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute top-5 -right-12 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#01ffb3')" class="bg-[#01ffb3] invisible group-hover:visible delay-[250ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute -bottom-8 -right-8 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#0011ff')" class="bg-[#0011ff] invisible group-hover:visible delay-[300ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute -bottom-12  left-5 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#8401ff')" class="bg-[#8401ff] invisible group-hover:visible delay-[350ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute -bottom-8 -left-8 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            <div @click="setColor('#fc009b')" class="bg-[#fc009b] invisible group-hover:visible delay-[400ms] scale-90 hover:scale-100 hover:delay-0 transition-all absolute top-5 -left-12 rounded-full cursor-pointer drop-shadow-md w-10 h-10"></div>
            
            <div  class="invisible group-hover:visible delay-[400ms] scale-100 hover:delay-0 transition-all absolute top-0 left-0 rounded-full cursor-pointer drop-shadow-md w-20 h-20 flex items-center justify-center overflow-hidden rotate-45 border-black border">
                <div  @click="setColor('#141414')" class="bg-[#141414] w-32 h-32 shrink-0 hover:ml-10 ml-0 transition-all"></div>
                <div @click="setColor('#f8f5f7')" class="bg-[#f8f5f7] w-32 h-32 shrink-0 hover:mr-10 mr-0 transition-all"></div>
            </div>
        </div>
        </div>
</template>

<script setup>
const selectedColor = ref("#0CD4E4")
const props = defineProps({
    selectColor:Function
})
const setColor = (colorcode)=>{
    selectedColor.value=colorcode
    props.selectColor(colorcode)
}
</script>
