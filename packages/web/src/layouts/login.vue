<template>
  <a-layout class="w-screen h-screen bg-login">
    <a-layout-content style="margin: 16px">
      <div class="relative w-full h-full">
        <router-view />
      </div>
    </a-layout-content>
    <!-- <div class="bg-transparent text-center text-white p-8">
      综合通信调度系统 ©2022 USC
    </div> -->
  </a-layout>
</template>

<style scope>
.bg-login {
  background-color: #293146
}
</style>
