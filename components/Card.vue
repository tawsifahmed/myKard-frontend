<template>
    <div class="card bg-white shadow-md flex gap-4 items-center w-full h-50 divide-x p-4 cursor-pointer">
        <div class="w-1/2 text-center">
            <h1 class="link-title">{{title}}</h1>
        </div>
        <div class="w-1/2 mx-auto flex justify-center">
           <QrCodeGenerator class="w-40 h-40" :title="title"/> 
        </div>
        
    </div>
</template>

<script setup>
  const {title} = defineProps(['title'])

</script>

<style lang="scss" scoped>

.link-title{
    word-wrap: break-word;
}

</style>