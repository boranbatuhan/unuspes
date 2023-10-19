<template>
    <div class="min-h-screen">
        <p class="text-3xl font-bold tracking-widest m-2">Tasarım Aracı</p>
        <div class="h-px w-full bg-gradient-to-r from-transparent my-2 via-purple-600 to-transparent"></div>

        <div class="container mx-auto p-2">
            <input type="color" id="colorPicker" value="#0000ff"> <!-- Renk seçici ekleniyor -->
            <canvas id="canvas" width="600" height="180" class="border border-black"></canvas>
        </div>
    </div>
</template>

<script setup>
onMounted(()=>{

    const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const kareGenislik = 12;
        const kareYukseklik = 12;
        const colorPicker = document.getElementById('colorPicker');
        let isDrawing = false;

        // Renk seçici olayı
        colorPicker.addEventListener('input', function() {
            ctx.fillStyle = colorPicker.value;
        });

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
        });
        canvas.addEventListener('mouseover', function() {
            isDrawing = false;
        });
        for (let x = 0; x < 600; x += kareGenislik) {
    for (let y = 0; y < 180; y += kareYukseklik) {
        ctx.strokeStyle = 'gray';
        ctx.stor
      ctx.strokeRect(x, y, kareGenislik, kareYukseklik);

    }
  }

})
</script>
