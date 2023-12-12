<template>
  <div class="h-screen min-h-screen max-h-auto">
    <div class="w-full p-5">
      <div class="grid grid-cols-4 gap-4">
        <Card v-for="(myKard, index) in myKards.data" :key="`myKard_${index}`" :title="myKard.qrcodeUrl"/>
      </div>
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

getMyCards();


</script>