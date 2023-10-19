<template>
    <div class="min-h-screen">
        <p class="text-3xl font-bold tracking-widest m-2">Tasarım Aracı</p>
        <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>

        <div class="container mx-auto p-2 flex items-center justify-center flex-col">
            <canvas id="canvas" width="600" height="180" class="border border-black"></canvas>
            <color-palette :selectColor="selectColor"/>
        </div>
    </div>
</template>

<script setup>
const selectedColor = ref("#0CD4E4")
const selectColor =(colorcode)=>{
    selectedColor.value=colorcode
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
           ctx.stor
         ctx.strokeRect(x, y, kareGenislik, kareYukseklik);

       }
     }
}
    // Renk seçici olayı
    ctx.fillStyle = selectedColor.value;
    watchEffect(()=>{
        ctx.fillStyle = selectedColor.value;

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
