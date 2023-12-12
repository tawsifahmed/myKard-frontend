<template>
    <div class="container mx-auto p-4 ">
        <div class="flex justify-between items-center">
            <NuxtLink to="/" class="title text-3xl font-bold">
                <img src="../assets/images/singularity-logo.png" class="w-24" alt="">
            </NuxtLink>
            
            <NuxtLink to="/login" class="text-xl text-black hover:text-sky-500">Login</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.title{
    color: rgb(94, 94, 94);
}

</style>