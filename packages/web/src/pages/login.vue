<script setup lang="ts">
</script>

<template>
  <div class="container relative h-full py-2 mx-auto sm:px-10">
    <div class="flex h-full">
      <div class="flex w-full h-full py-5 xl:h-auto">
        <div
          class="bg-white relative w-sm px-5 py-8 mx-auto my-auto rounded-md shadow-md sm:px-8 xl:p-4 xl:shadow-none"
        >
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
</route>
