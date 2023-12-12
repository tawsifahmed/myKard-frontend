<template>
    <div  class="w-full h-full">
      <div  class="w-full h-full">
        <div  class="w-full h-full">
          <canvas class="image-render-pixel h-full w-full" ref="canvas"></canvas>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">


  import { type RGBA, generate } from "lean-qr";

  const qrCodeUrl = defineProps({
    title: String,
  })
  
  const blackRGBA: RGBA = [0, 0, 0, 255],
    whiteRGBA: RGBA = [255, 255, 255, 255],
    qrConfig = {
      on: blackRGBA,
      off: whiteRGBA,
    },
  
    canvas = ref<HTMLCanvasElement>(),
    text = ref(qrCodeUrl.title ?? ''),
    filename = ref(""),
    size = ref(300);
  
  let code = generate(qrCodeUrl.title ?? '');
  
  onMounted(() => {
    watch(text, (newText) => {
      code = generate(newText);
      code.toCanvas(canvas.value!, qrConfig);
      console.log('text=', text)
      console.log('newText=', newText)
    });
  
    code.toCanvas(canvas.value!, qrConfig);
  });
  
  async function download() {
    size.value = Math.min(Math.max(size.value, 32), 2000);
  
    const canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d")!,
      imgData = code.toImageData(ctx, qrConfig);
  
    canvas.width = canvas.height = size.value;
    ctx.putImageData(imgData, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.globalCompositeOperation = "copy";
  
    ctx.drawImage(
      canvas,
      0,
      0,
      imgData.width,
      imgData.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
  
    const link = document.createElement("a");
    link.download = filename.value || "qrcode.png";
    link.href = canvas.toDataURL("image/png", 1);
  
    link.click();
  }
  </script>

  <style scoped>
  .image-render-pixel {
    image-rendering: pixelated;
}
</style>
  