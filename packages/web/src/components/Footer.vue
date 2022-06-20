<template>
  <nav text-xl inline-flex gap-2 absolute top-6 right-6>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
  </nav>
</template>
