<template>
  <!-- ScrollToTop component -->
  <ScrollToTop />
  <div class="footer place-items-center xl:place-items-start lg:place-items-start md:place-items-start sm:footer-horizontal bg-neutral text-neutral-content p-4 z-0">
    <div class="grid-flow-col items-center">
      <img v-if="empresa.logo != ''" :src="empresa.logo" :alt="empresa.nome" width="64" height="64" class="size-16" :title="empresa.nome" />
      <img v-else src="/assets/vue.svg" :alt="empresa.nome" width="64" height="64" class="size-16" :title="empresa.nome" />
    </div>
    <div class="flex flex-col flex-wrap items-center justify-center font-semibold w-full">
      <div class="grid text-sm place-self-center text-center">
        ©{{ new Date().getFullYear() }} {{ empresa.copyright }}
      </div>
      <div class="text-xs" v-if="empresa.cnpj">CNPJ {{ empresa.cnpj }}</div>
    </div>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <!-- Apenas os 3 primeiros links são carregados de 'partials.yaml' -->
      <a v-for="(item, index) in social" :href="item.link" target="_blank" :title="item.nome" rel="noopener noreferrer"
        :key="index">
        <PhTwitterLogo class="text-blue-500 size-8 cursor-pointer" v-if="index == 0" />
        <PhYoutubeLogo class="text-red-500 size-8 cursor-pointer" v-if="index == 1" />
        <PhInstagramLogo class="text-rose-500 size-8 cursor-pointer" v-if="index == 2" />
      </a>
    </nav>
  </div>
</template>
<script setup>
import { PhTwitterLogo, PhInstagramLogo, PhYoutubeLogo } from '@phosphor-icons/vue'
import Item from './partials.yaml'
import ScrollToTop from './ScrollToTop.vue'

let empresa = Item.empresa
let social = Item.social
social = social.slice(0, 3) // Shallow copy of social array (First 3 elements)

</script>