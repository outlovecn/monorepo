<script setup lang="ts">
const router = useRouter()
const loading = ref(false)
const formData = reactive({
  account: '6006',
  password: '123456',
})

async function validForm() {
  return true
}

async function handleLogin() {
  const data = await validForm()
  if (!data)
    return
  try {
    loading.value = true
    const { data } = await useFetch('api/login').post().json()
    const { token } = data.value
    if (token) {
      sessionStorage.token = token
      router.push('/power/dispatch')
    }
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <h2 class="mb-3 text-2xl font-bold text-center">
    登录系统
  </h2>
  <a-form
    ref="formRef"
    class="p-4"
    :model="formData"
    @keypress.enter="handleLogin"
  >
    <a-form-item name="account">
      <a-input
        v-model:value="formData.account"
        size="large"
        placeholder="账号"
        class="fix-auto-fill"
      />
    </a-form-item>
    <a-form-item name="password">
      <a-input-password
        v-model:value="formData.password"
        size="large"
        visibility-toggle
        placeholder="密码"
      />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" size="large" block :loading="loading" @click="handleLogin">
        登录
      </a-button>
    </a-form-item>

    <a-divider>
      .
    </a-divider>

    <div class="flex justify-evenly">
      综合通信调度系统 ©2022 USC
    </div>
  </a-form>
</template>
