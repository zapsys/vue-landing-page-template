<template>
  <!-- ScrollToTop component -->
  <ScrollToTop />
  <div class="footer place-items-center xl:place-items-start lg:place-items-start md:place-items-start sm:footer-horizontal bg-neutral text-neutral-content p-4 z-0">
    <div class="grid-flow-col items-center">
      <img v-if="empresa.logo != ''" :src="empresa.logo" :alt="empresa.nome" width="64" height="64" class="size-16"
        :title="empresa.nome" />
      <img v-else src="/assets/vue.svg" :alt="empresa.nome" width="64" height="64" class="size-16"
        :title="empresa.nome" />
    </div>
    <div class="grid-flow-row place-items-center place-self-center text-center font-semibold w-full">
      <div class="grid grid-cols-1 text-sm items-center justify-center">
        ©{{ new Date().getFullYear() }} {{ empresa.nome }} &ndash; {{ empresa.copyright }}
      </div>
      <div class="text-xs" v-if="empresa.cnpj">CNPJ {{ empresa.cnpj }}</div>
    </div>
    <nav class="grid grid-cols-1 place-content-center gap-4 md:place-self-center md:justify-self-end">
      <div class="flex flex-row items-center justify-center">
        <a class="px-1" v-for="(item, index) in social" :href="item.link" target="_blank" :title="item.nome"
          rel="noopener noreferrer" :key="index">
          <Icon icon="ph:twitter-logo" class="text-blue-500 size-8 cursor-pointer" v-if="index == 0" />
          <Icon icon="ph:youtube-logo" class="text-red-500 size-8 cursor-pointer" v-if="index == 1" />
          <Icon icon="ph:instagram-logo" class="text-rose-500 size-8 cursor-pointer" v-if="index == 2" />
        </a>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import Item from './partials.yaml'
import ScrollToTop from './ScrollToTop.vue'

let empresa = Item.empresa
let social = Item.social
social = social.slice(0, 3) // Shallow copy of social array (First 3 elements)

</script>