<template>   
      <div>
            <header class="bg-white shadow-md fixed w-full top-0">
                <Navbar/>
            </header>
            <div class="bg-sky-50 mx-auto container mt-[91px] min-h-screen max-h-auto">
                <NuxtPage class=""/>
            </div>
      </div>
</template>

<script setup>
const url = useRuntimeConfig()
const currentUser = ref(null)




</script>
  
<style scoped>

</style>
  