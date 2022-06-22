<script setup lang="ts">
const demo = useStoreForDemo()
const { count } = storeToRefs(demo)
const { increment } = demo
</script>

<template>
  <div text-center w-320px p-8>
    <div i-carbon-pedestrian text-4xl inline-block />
    <p>
      Hi, {{ count }}
    </p>

    <div>
      <button
        class="inline-block cursor-pointer w-30px h-30px mt-8 bg-gray-300 rounded-full"
        @click="increment()"
      >
        +
      </button>
    </div>
  </div>
</template>
