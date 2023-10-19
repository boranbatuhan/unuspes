<template>
    <div class="min-h-screen font-now">
        <p class="text-3xl font-bold tracking-widest m-2">Tasarım Aracı</p>
        <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>

        <div class="container mx-auto p-2 flex items-center justify-center flex-col">
            <div class="w-full flex items-center justify-end p-2">
                <button @click="paintBucket" class=""><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="currentColor" d="m19.228 18.732l1.767-1.768l1.768 1.768a2.5 2.5 0 1 1-3.535 0ZM8.878 1.08l11.314 11.313a1 1 0 0 1 0 1.414l-8.485 8.486a1 1 0 0 1-1.414 0l-8.485-8.486a1 1 0 0 1 0-1.414l7.778-7.778l-2.122-2.121L8.88 1.08ZM11 6.03L3.929 13.1H18.07L11 6.03Z"/></g></svg></button>
                <button @click="resetCanvas" class=""><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"/></svg></button>
                <button @click="downloadCanvas" class=""><svg class="hover:text-sky-400 text-purple-950 scale-100 hover:scale-105 shrink-0 mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13v5c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1zm-6-.33l1.88-1.88a.996.996 0 1 1 1.41 1.41l-3.59 3.59a.996.996 0 0 1-1.41 0L7.7 12.2a.996.996 0 1 1 1.41-1.41L11 12.67V4c0-.55.45-1 1-1s1 .45 1 1v8.67z"/></svg></button>
            </div>
            <canvas id="canvas" width="600" height="180" class="border border-black"></canvas>
            <p class="text-xs">*Görüntülenen renkler ile gerçek renk arasında ekranlardan kaynaklı farklılık olabilir.</p>
            <color-palette :selectColor="selectColor"/>
        </div>
    </div>
</template>

<script setup>
const selectedColor = ref("#141414")
const selectColor =(colorcode)=>{
    selectedColor.value=colorcode
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
        ctx.strokeStyle = 'gray';
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
