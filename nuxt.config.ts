// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@vueuse/nuxt', 
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@nuxt/image',
    '@formkit/auto-animate/nuxt'
  ],
  pinia: {
    storesDirs: ['./store/**', './custom-folder/store/**'],
  },
  tailwindcss: {
    exposeConfig: true,
  },
  image: {
    dir: '_nuxt/assets/images/'
  },
  app:{
    head:{
    title:"Unuspes | Handmade, Beadworks.",
    meta:[{name:'description',content:'Unuspes, handmade illustrated bead accessories, bracelets, necklaces, paintings, special order and designs.'}],
    link:[{rel:'icon' , type: 'image/png', href:'_nuxt/assets/images/unuspes.png'}]
  }
  }

})
