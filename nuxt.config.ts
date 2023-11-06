// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    routeRules: {},
    devtools: {
        enabled: false,
    },
    typescript: {
        typeCheck: true,
    },
    app: {
        pageTransition: { name: 'rotate', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Client APP',
            htmlAttrs: {
                class: 'h-full bg-gray-100',
            },
            bodyAttrs: {
                class: 'h-full',
            },
        },
    },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: 'first',
        viewer: true,
    },
    colorMode: {
        classSuffix: '',
    },
    devServer: {
        port: 3007,
    },
})
