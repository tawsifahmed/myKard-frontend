<template>
  <div class="h-screen min-h-screen max-h-auto">
    <Register v-if="showRegisterComp" :closeModal="closeModal"/>
    <div class="w-full p-5">
      <div class="grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1">
        <Card @click="handleClickCard(myKard)" v-for="(myKard, index) in myKards?.data" :key="`myKard_${index}`" :title="myKard?.qrcodeUrl"/>
      </div>
   </div>
  </div>
</template>

<script setup>
const url = useRuntimeConfig()
const myKards = ref(null)
const showRegisterComp = ref(false)

const getMyCards = async () => {
 const { data } = await useFetch(`${url.public.apiUrl}/my-Kards`, {
      method: 'GET',
 });
 myKards.value = data.value
}

getMyCards();

const handleClickCard = (myKard) => {
  
  showRegisterComp.value = true
  console.log("mykard, = >", myKard)
}

const closeModal = () => {
  showRegisterComp.value = false;
  
};


</script>