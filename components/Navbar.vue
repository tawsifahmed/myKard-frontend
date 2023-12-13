<template>
    <div class="container mx-auto p-4 relative" >
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="title text-3xl font-bold">
          <img src="../assets/images/singularity-logo.png" class="w-24" alt="" />
        </NuxtLink>
        <div>
          <!-- <h1 class="text-3xl font-semibold text-sky-600">My<span class="text-red-500">Kards</span></h1> -->
        </div>
        <div class="" >
          <div @click="toggleDropdown" class="flex items-center gap-2 hover:text-sky-500 cursor-pointer">
            <span class="text-xl text-black hover:text-sky-500">Login</span>
            <img  src="../assets/images/Profile-Male-Transparent.png" class="w-8 relative" alt="" />
          </div>
          <div v-show="isDropdownOpen" class="absolute right-0 mt-2 bg-white dropdown rounded-md overflow-hidden transition duration-300 w-48 divide-y">
              <div class="w-full p-4 text-left text-sm text-gray-800 hover:bg-sky-500 hover:text-white transition duration-300 flex items-center gap-2">
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>Profile</span>
              </div>
              <div class="w-full p-4 text-left text-sm text-gray-800 hover:bg-red-500 hover:text-white transition duration-300 flex items-center gap-2">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>
                      
                </span>
                <span>Logout</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  const showUserDropdown = ref(false)
  const isDropdownOpen = ref(false);
  
  const toggleDropdown = () => {
    if(showUserDropdown.value){
      isDropdownOpen.value = !isDropdownOpen.value;
    }
  };
  
  </script>
  
  <style lang="scss" scoped>
  .title {
    color: rgb(94, 94, 94);
  }

  .dropdown{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  </style>