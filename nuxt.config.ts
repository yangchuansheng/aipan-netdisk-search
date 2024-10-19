export default defineNuxtConfig({
    devtools: { enabled: false },

    app: {
        // head
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            title: '盘搜搜-网盘资源搜索',
            meta: [
                {
                    name: 'description',
                    content: '盘搜搜-网盘资源搜索， 一个开源免费的网盘资源搜索程序，仅供学习使用，不支持商业用途。'
                },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'referrer',
                    content: 'no-referrer'
                },
                {
                    name: 'referrer',
                    content: 'always'
                },
                {
                    name: 'referrer',
                    content: 'strict-origin-when-cross-origin'
                }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-R8852VL17Z',
                    async: true
                },
                {
                    src: '/ga.js'
                },
                {
                    src: '/qrcode.min.js'
                },
                {
                    src: 'https://challenges.cloudflare.com/turnstile/v0/api.js'
                },
                {
                    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925981084585036',
                    async: true,
                    crossorigin: 'anonymous'
                }
            ]

        }
    },

    // build modules
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/device',
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
        '@nuxtjs/color-mode',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/sitemap'
    ],

    colorMode: {
        preference: 'light',
        classSuffix: ''
    },

    tailwindcss: {
        configPath: 'tailwind.config.js'
    },

    googleFonts: {
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: true,
        download: false,
        base64: false,
        families: {
            'Inter': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Poetsen One': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Sedan SC': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Briem Hand': [100, 200, 300, 400, 500, 600, 700, 800, 900],
            'Noto Sans Simplified Chinese': [100, 200, 300, 400, 500, 600, 700, 800, 900]
        }
    },

    i18n: {
        defaultLocale: 'cn',
        langDir: './assets/lang/',
        locales: [
            {
                code: 'en',
                name: 'English',
                language: 'en-US',
                file: 'en-US.json'
            },
            {
                code: 'cn',
                name: '中文',
                language: 'zh-CN',
                file: 'zh-CN.json'
            }
        ],
    },
    plugins: [

    ],

    nitro: {
        devProxy: {
            '/aipanme': {
                target: '',
                changeOrigin: true
            },

        },
        experimental: {
            wasm: true,
        },
    },
    runtimeConfig: {
        adminUser: process.env.ADMIN_USER,
        adminPassword: process.env.ADMIN_PASSWORD,
        adminEmail: process.env.ADMIN_EMAIL,
        jwtSecret: process.env.JWT_SECRET,
    },
    sitemap: {
        sources: [
            '/api/__sitemap__/urls',
        ],
        exclude: [
            '/admin/**'
        ]
    },
    site: {
        name: '盘搜搜-网盘资源搜索',
        url: 'https://pansou.icloudnative.io',
        description: '盘搜搜-网盘资源搜索， 一个免费的网盘资源搜索网站，可以搜索夸克网盘、阿里网盘、百度网盘、迅雷网盘等各大网盘的资源。'
    },
    compatibilityDate: '2024-09-12'
})