<template>
    <div v-if="isVisible" class="flex justify-center items-center w-full h-screen inset-0 fixed bg-[#201e1e70]">
        <div class="shadow-md rounded-lg xl:w-2/6 lg:w-[50%] md:w-[75%] w-[90%] bg-white relative">

            <!-- close button -->
            <div @click="closeModal" class="absolute -top-3 -right-3 cursor-pointer bg-red-500 text-white rounded-full p-1 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>    
            </div>
            <h1 class="lg:text-2xl md:text-base text-md text-center font-semibold text-black mt-8">Sign Up</h1>
            <form class="flex flex-col items-center gap-7 mt-10 mb-20">
                <input type="text" class="shadow-inner md:w-2/3 w-[80%] px-4 py-2 outline-none rounded" placeholder="Enter Name">
                <input type="email" class="shadow-inner md:w-2/3 w-[80%] px-4 py-2 outline-none rounded" placeholder="Enter Email" >
                <input type="password" class="shadow-inner md:w-2/3 w-[80%] px-4 py-2 outline-none rounded" placeholder="Set Password" >
                <button class="bg-sky-500 px-6 py-2 text-white rounded-lg uppercase font-semibold mt-1">Register</button>
            </form>
        </div>
    </div>
</template>

<script setup>
const isVisible = ref(true);

const closeModal = () => {
  isVisible.value = false;
};

</script>

<style lang="scss" scoped>

</style>