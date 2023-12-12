<template>
    <div class="w-full">
       <div class="grid grid-cols-3 gap-4">
         <Card v-for="(myKard, index) in myKards.data" :key="`myKard_${index}`" :title="myKard.qrcodeUrl"/>
       </div>
    </div>
</template>

<script setup>
const url = useRuntimeConfig()
const myKards = ref('')

const getMyCards = async () => {
   const { data } = await useFetch(`${url.public.apiUrl}/my-Kards`, {
        method: 'GET',
   });
   myKards.value = data.value
}

onMounted(() => {
  getMyCards();
});


</script>