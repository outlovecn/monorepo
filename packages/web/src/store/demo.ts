export const useStoreForDemo = defineStore('web', () => {
  const count = ref(0)

  const increment = () => {
    count.value += 1
  }

  return { increment, count }
})
