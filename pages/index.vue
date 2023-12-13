<template>
  <div class="">
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

const token = ref(null)

const getMyCards = async () => {
 const { data } = await useFetch(`${url.public.apiUrl}/my-Kards`, {
      method: 'GET',
 });
 myKards.value = data.value
 token.value = localStorage.getItem('token')
}

getMyCards();

const handleClickCard = (myKard) => {
  if(!token.value){
    showRegisterComp.value = true

  }else{
    showRegisterComp.value = false
  }
}

const closeModal = () => {
  showRegisterComp.value = false;
};


</script>