export const isDark = useDark()
export const toggleDark = useToggle(isDark)

const el = document.querySelector('body')
const { toggle } = useFullscreen(el)
export const toggleFullscreen = toggle
