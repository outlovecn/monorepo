import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      mborder: 'border border-rounded border-gray-200 dark:border-gray-700',
      mbox: 'px-4 py-1 rounded',
      mbtn: 'mbox inline-block cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 disabled:text-white',
    },
    // 表单
    ['form', 'flex items-center justify-center flex-col'],
    ['form-group', 'flex justify-center items-center px-4 py-2'],
    ['form-group-label', 'mborder border-r-0 w-100px block px-4 py-2'],
    ['form-group-input', 'mborder px-4 py-2 w-250px text-left bg-transparent outline-none active:outline-none'],
    ['form-group-button', 'mbox mbtn bg-teal-600 text-white hover:bg-teal-700 w-100%'],
    // 顶部导航
    // ['nav-bar', 'flex items-center justify-start'],
    // ['nav-bar-item', 'mbox mbtn w-6em mr-2 bg-teal-600 text-white hover:bg-teal-700'],
    // ['nav-bar-item-active', 'bg-teal-700'],

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
