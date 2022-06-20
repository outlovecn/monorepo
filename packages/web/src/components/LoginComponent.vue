<script setup lang="ts">
const name = $ref('')
const password = $ref('')

let nextStep = $ref(false)

const canGoNext = computed(() => name && password)
const goNext = () => {
  if (canGoNext)
    nextStep = true
}
</script>

<template>
  <div i-carbon-campsite text-4xl inline-block />
  <p>
    <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
      Login
    </a>
  </p>
  <p>
    <em text-sm op75>Feathers</em>
  </p>

  <div class="form">
    <div class="form-group">
      <label for="name" class="form-group-label">Name</label>
      <input id="name" v-model="name" placeholder="What's your name?" autocomplete="false" class="form-group-input" type="text">
    </div>
    <div class="form-group">
      <label for="password" class="form-group-label">Password</label>
      <input id="password" v-model="password" placeholder="Enter your password" autocomplete="false" class="form-group-input" type="password">
    </div>
    <div class="form-group">
      <button :disabled="!canGoNext" class="btn" @click="goNext()">
        Next
      </button>
    </div>
  </div>
</template>
