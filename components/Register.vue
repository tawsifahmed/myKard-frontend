<template>
    <div class="flex justify-center items-center w-full h-screen inset-0 fixed bg-[#201e1e70]">
        <div class="shadow-md rounded-lg xl:w-2/6 lg:w-[50%] md:w-[75%] w-[90%] bg-white relative">

            <!-- close button -->
            <div @click="closeModal" class="absolute -top-3 -right-3 cursor-pointer bg-red-500 text-white rounded-full p-1 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>    
            </div>
            <h1 class="lg:text-2xl md:text-base text-md text-center font-semibold text-black mt-8">{{isRegistered ? 'Login':'Sign Up'}}</h1>
            <form v-if="isRegistered" @submit.prevent="handleLogin" class="flex flex-col items-center gap-5 mt-10 mb-20">
                <div class="md:w-2/3 w-[80%]">
                    <input v-model="loginEmail" type="email" class="custom-shadow px-4 py-2 outline-none rounded w-full" placeholder="Enter Email">
                    <span v-if="loginError.email" class="text-xs mt-1 text-red-500 text-left w-full">Enter a valid email!</span>  
                </div>
                <div class="md:w-2/3 w-[80%]">
                    <input v-model="loginPassword" type="password" class="custom-shadow px-4 py-2 outline-none rounded w-full" placeholder="Set Password" >
                    <span v-if="loginError.password" class="text-xs mt-1 text-red-500 text-left w-full">Enter a valid password!</span>
                </div>
                
                <button type="submit" class="bg-sky-500 px-6 py-2 text-white rounded-lg uppercase font-semibold mt-1">Login</button>
            </form>
            
            <form v-else @submit.prevent="handleRegistration" class="flex flex-col items-center gap-5 mt-10 mb-20">
                <div class="md:w-2/3 w-[80%]">
                    <input v-model="userName" type="text" class="custom-shadow px-4 py-2 outline-none rounded w-full" placeholder="Enter Name">
                    <span v-if="error.userName" class="text-xs mt-1 text-red-500 text-left w-full">User name is empty!</span>  
                </div>
                <div class="md:w-2/3 w-[80%]">
                    <input v-model="email" type="email" class="custom-shadow px-4 py-2 outline-none rounded w-full" placeholder="Enter Email">
                    <span v-if="error.email" class="text-xs mt-1 text-red-500 text-left w-full">Enter a valid email!</span>  
                </div>
                <div class="md:w-2/3 w-[80%]">
                    <input v-model="password" type="password" class="custom-shadow px-4 py-2 outline-none rounded w-full" placeholder="Set Password" >
                    <span v-if="error.password" class="text-xs mt-1 text-red-500 text-left w-full">Enter a valid password!</span>
                </div>
                
                <button type="submit" class="bg-sky-500 px-6 py-2 text-white rounded-lg uppercase font-semibold mt-1">Register</button>
            </form>
        </div>
    </div>
</template>

<script setup>
const url = useRuntimeConfig()
const {closeModal} = defineProps(['closeModal'])
const { $swal } = useNuxtApp()

const userName = ref(null)
const email = ref(null)
const password = ref(null)
const error = ref({
    userName: false,
    email: false,
    password: false
})
const isRegistered = ref(false)


const loginEmail = ref(null)
const loginPassword = ref(null)

const loginError = ref({
    
    email: false,
    password: false
})


const handleRegistration = async () => {
    
    userName?.value ? error.value.userName = false : error.value.userName = true
    email.value ? error.value.email = false : error.value.email = true
    password.value ? error.value.password = false : error.value.password = true

    if(error.value.userName || error.value.email || error.value.password){
        console.log('error')
    }else{
        const object = {
            "username": userName?.value,
            "email": email?.value,
            "password": password?.value
        }

        const { data: res, error: err } = await useFetch(`${url.public.apiUrl}/user/register`, {
                method: 'POST',
                body: object
            })

            if(res?.value?.status === 'success'){
                userName.value = null
                email.value = null
                password.value = null
                isRegistered.value = true
                $swal.fire({
                    toast: true,
                    icon: 'success',
                    title: res?.value?.message,
                    animation: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', $swal.stopTimer)
                        toast.addEventListener('mouseleave', $swal.resumeTimer)
                    }
                 })
            }

            if(res?.value?.status === 'error'){
                $swal.fire({
                    toast: true,
                    icon: 'error',
                    title: res?.value?.message,
                    animation: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', $swal.stopTimer)
                        toast.addEventListener('mouseleave', $swal.resumeTimer)
                    }
                 })
            }
    }

}

const handleLogin = async () => {
    loginEmail.value ? loginError.value.email = false : loginError.value.email = true
    loginPassword.value ? loginError.value.password = false : loginError.value.password = true

    if(loginError.value.email || loginError.value.password){
        console.log('login error')
    }else{
        const object = {
            "email": loginEmail?.value,
            "password": loginPassword?.value
        }

        const { data: res, error: err } = await useFetch(`${url.public.apiUrl}/user/login`, {
            method: 'POST',
            body: object
        })

        console.log(res?.value)

        if(res?.value?.status === 'success'){
                loginEmail.value = null
                loginPassword.value = null
                const token = res?.value?.data?.accessToken
                localStorage.setItem('token', token)
                closeModal()
                $swal.fire({
                    toast: true,
                    icon: 'success',
                    title: res?.value?.message,
                    animation: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', $swal.stopTimer)
                        toast.addEventListener('mouseleave', $swal.resumeTimer)
                    }
                 })
            }
    }
}

</script>

<style lang="scss" scoped>

</style>