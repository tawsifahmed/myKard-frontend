<template>
    <div>
        <h1 class="text-center text-2xl">
            Profile Section - ID [{{ profileId }}]
        </h1>
        <div>
            ID - {{ qrCard._id }}
        </div>
        <div>
            QR Serial - {{ qrCard.qrcodeUrl }}
        </div>
    </div>
</template>

<script setup>

const url = useRuntimeConfig()
 const { profileId } = useRoute().params

 const allKards = ref(null)
 const qrCard = ref(null)


const getAllCards = async () => {
 const { data } = await useFetch(`${url.public.apiUrl}/my-Kards`, {
      method: 'GET',
 });
 allKards.value = data.value

 qrCard.value = allKards.value.data.find(item => item.qrcodeUrl === profileId.toString())
 console.log('qrCard.value', qrCard.value)

}

getAllCards();




</script>

<style scoped>

</style>