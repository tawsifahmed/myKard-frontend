<template>
  <div class="h-screen min-h-screen max-h-auto">
    <div class="w-full p-5">
      <div class="grid xl:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-1">
        <Card v-for="(myKard, index) in myKards?.data" :key="`myKard_${index}`" :title="myKard?.qrcodeUrl"/>
      </div>
   </div>
  </div>
</template>

<script setup>
const url = useRuntimeConfig()
const myKards = ref(null)


const getMyCards = async () => {
 const { data } = await useFetch(`${url.public.apiUrl}/my-Kards`, {
      method: 'GET',
 });
 myKards.value = data.value
}

// const getCurrentUser = async () =>{
//   const token = localStorage.getItem('token')
//   const {data: res, error: err} = await useFetch(`${url.public.apiUrl}/user/current`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${token}`
//         },
//    })
//    console.log('responsi=>', res)  
// }

// getCurrentUser()

getMyCards();


</script>