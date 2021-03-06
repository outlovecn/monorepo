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

    ['app-main', 'font-sans px-4 py-10 text-gray-700 dark:text-gray-200 text-center'],
    ['form', 'flex flex-col items-center justify-center'],
    ['form-group', 'flex justify-center items-center px-4 py-2'],
    ['form-group-label', 'mborder border-r-0 w-100px block text-right px-4 py-2'],
    ['form-group-input', 'mborder px-4 py-2 w-250px text-left bg-transparent outline-none active:outline-none'],
    ['btn', 'mbox mbtn bg-teal-600 text-white hover:bg-teal-700 w-100%'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
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
