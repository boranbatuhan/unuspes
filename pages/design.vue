<template>
    <div class="min-h-screen font-now">
        <my-h header="Tasarım Aracı" />
        <div class="container mx-auto p-2 flex items-center justify-center flex-col">
            <div class="w-full flex items-center justify-end p-2">
                <label for="customColor" class="cursor-pointer flex items-center justify-center">
                    <input @change="logla($event)" v-model="selectedColor" type="color" id="customColor" class=" cursor-pointer" >
                    <svg :style="`color:${selectedColor}`" class=" scale-100 hover:scale-105 shrink-0 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6Z"/></svg>
                </label>
                <div class="flex items-center flex-row justify-start gap-2 overflow-hidden">
                    <div @click="selectColor(color)" :class="{'hidden':color=='#FFFFFF'}" v-for="color in colorHistory" :key="color" :style="`background:${color};`" class="w-5 h-5 border shrink-0 border-black rounded-md cursor-pointer hover:scale-105"></div>
                </div>
                <button @click="selectColor('#FFFFFF')" class="mr-auto"><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M497.941 273.941c18.745-18.745 18.745-49.137 0-67.882l-160-160c-18.745-18.745-49.136-18.746-67.883 0l-256 256c-18.745 18.745-18.745 49.137 0 67.882l96 96A48.004 48.004 0 0 0 144 480h356c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12H355.883l142.058-142.059zm-302.627-62.627l137.373 137.373L265.373 416H150.628l-80-80l124.686-124.686z"/></svg></button>
                <button v-if="isHorizontal" @click="isHorizontal=false" ><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><path fill="currentColor" d="m7 8l-4.5 4L7 16V8m10 0v8l4.5-4L17 8m-5 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/></g></svg></button>
                <button v-if="!isHorizontal" @click="isHorizontal=true" ><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(-90 12 12) translate(24 0) scale(-1 1)"><path fill="currentColor" d="M12 2.5L8 7h8l-4-4.5m0 7.5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4 7l4 4.5l4-4.5H8Z"/></g></svg></button>
                <button @click="paintBucket" ><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"/></g></svg></button>
                <button @click="resetCanvas" ><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/></svg></button>
                <button @click="downloadCanvas" ><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-6-.33l1.88-1.88a.996.996 0 1 1 1.41 1.41l-3.59 3.59a.996.996 0 0 1-1.41 0L7.7 12.2a.996.996 0 1 1 1.41-1.41L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1v8.67z"/></svg></button>
            </div>
            <div class="w-fit  flex items-center justify-center transition-all" :class="{'h-[600px] rotate-90':isHorizontal==false,'h-fit rotate-0':isHorizontal==true,}">
                <canvas id="canvas" width="600" height="180" class="border border-black"></canvas>
            </div>
            <p class="text-xs select-none">*Görüntülenen renkler ile gerçek renk arasında ekranlardan kaynaklı farklılık olabilir.</p>
        </div>
    </div>
</template>

<script setup>
const selectedColor = ref("#141414")
const colorHistory = ref(["#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF"])
const counter = ref(0)
const isHorizontal = ref(true)
const selectColor =(colorcode)=>{
    selectedColor.value=colorcode
}

const logla=(color)=>{
    selectColor(color.target.value)
    if(counter.value >=11)
    {
        colorHistory.value[counter.value]=color.target.value
        counter.value=0
    }
    else{
        colorHistory.value[counter.value]=color.target.value
        counter.value +=1
    }
}

const downloadCanvas =()=> {
    var link = document.createElement('a');
    link.download = 'unuspes_custom_miracle.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}
const  paintBucket=()=> {
    const canvasres = document.getElementById('canvas');
    const ctxres = canvasres.getContext('2d');
    ctxres.fillStyle = selectedColor.value; // İstediğiniz renk
    ctxres.fillRect(0, 0, canvasres.width, canvasres.height);
    
}
const resetCanvas =()=> {
    const canvasres = document.getElementById('canvas');
    const ctxres = canvasres.getContext('2d');
    ctxres.fillStyle = "white"; // İstediğiniz renk
    ctxres.fillRect(0, 0, canvasres.width, canvasres.height);
    ctxres.fillStyle = selectedColor.value; // İstediğiniz renk
}
onMounted(()=>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const kareGenislik = 12;
    const kareYukseklik = 12;
    let isDrawing = false;


    const bgDraw = ()=>{
    for (let x = 0; x < 600; x += kareGenislik) {
       for (let y = 0; y < 180; y += kareYukseklik) {
        ctx.strokeStyle = 'rgb(177, 177, 177)';
        ctx.strokeRect(x, y, kareGenislik, kareYukseklik);
       }
     }
}
bgDraw()
    // Renk seçici olayı
    ctx.fillStyle = selectedColor.value;
    watchEffect(()=>{
        ctx.fillStyle = selectedColor.value;
        bgDraw()

    })


    // Mouse basıldığında
    canvas.addEventListener('mousedown', function() {
        isDrawing = true;
    });
    canvas.addEventListener('click', function() {
        isDrawing = false;
    });
    canvas.addEventListener('dblclick', function() {
        isDrawing = true;
    });
    // Mouse taşındığında
    canvas.addEventListener('mousemove', function(event) {
        if (!isDrawing) return;
        const x = Math.floor(event.offsetX / kareGenislik) * kareGenislik;
        const y = Math.floor(event.offsetY / kareYukseklik) * kareYukseklik;
        ctx.fillRect(x, y, kareGenislik, kareYukseklik);
    });
    // Mouse bırakıldığında
    canvas.addEventListener('mouseup', function() {
        isDrawing = false;
        bgDraw()
    });
    canvas.addEventListener('mouseover', function() {
        isDrawing = false;
    });
    
})
</script>
