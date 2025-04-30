<template>
  <div id="nav" class="drawer z-100">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" aria-label="Drawer" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="navbar bg-base-200 shadow-sm w-full">
        <div class="navbar-start">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <PhList class="inline-block size-6 stroke-current" />
            </label>
          </div>
          <div class="flex-none items-center justify-center">
            <a class="btn btn-ghost text-xl hover:bg-transparent" :href="navbar.links[0].link" target="_self">
              <img v-if="navbar.logo != ''" :src="navbar.logo" alt="Logo" class="w-12 h-12 p-1" />
              <img v-else src="/assets/vue.svg" alt="Logo" class="w-12 h-12 p-1" /> {{ navbar.brand }}
            </a>
          </div>
        </div>
        <div class="navbar-center hidden xl:flex lg:flex md:flex-wrap sm:hidden">
          <ul tabindex="0" class="menu menu-horizontal z-1 space-x-1">
            <li v-for="(link, index) in navbar.links" :key="index">
              <a id="nav-link" :href="link.link"
                class="text-lg active:border-b-3 hover:border-b-3 hover:bg-transparent border-indigo-500 w-fit rounded-none"
                target="_self">{{ link.texto }}</a>
            </li>
          </ul>
        </div>
        <div class="navbar-end hidden items-center md:flex lg:flex xl:flex">
          <p class="px-4">
            <a :href="empresa.github" target="_blank" rel="noopener noreferrer" title="Mais detalhes sobre o projeto">
              <PhGithubLogo class="size-6 cursor-pointer" />
            </a>
          </p>
          <p class="px-4">
            <label class="swap swap-rotate">
              <!-- this hidden checkbox controls the state -->
              <PhSun class="text-yellow-300 size-6 cursor-pointer" @click="toggleDark()" v-if="isDark" />
              <PhMoon class="text-gray-700 size-6 cursor-pointer" @click="toggleDark()" v-else />
            </label>
          </p>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
        <li>
          <a class="btn btn-ghost text-xl hover:bg-transparent" :href="navbar.links[0].link" data-active="true">
            <img v-if="navbar.logo != ''" :src="navbar.logo" alt="Logo" class="w-12 h-12 p-1" />
            <img v-else src="/assets/vue.svg" alt="Logo" class="w-12 h-12 p-1" /> {{ navbar.brand }}
          </a>
        </li>
        <li v-for="(link, index) in navbar.links" :key="index">
          <a id="drawer-link" :href="link.link"
            class="text-lg active:border-b-3 hover:border-b-3 hover:bg-transparent border-indigo-500 rounded-none"
            target="_self">
            {{ link.texto }}
          </a>
        </li>
        <li>
          <label class="swap swap-rotate place-content-start">
            <!-- this hidden checkbox controls the state -->
            <PhSun class="text-yellow-300 size-6 cursor-pointer" @click="toggleDark()" v-if="isDark" />
            <PhMoon class="text-gray-700 size-6 cursor-pointer" @click="toggleDark()" v-else />
          </label>
        </li>
        <li>
          <a :href="empresa.github" target="_blank" rel="noopener noreferrer" title="Mais detalhes sobre o projeto">
            <PhGithubLogo class="size-6 cursor-pointer" />
          </a>
        </li>
      </ul>

    </div>
  </div>
</template>
<script setup>
import { onMounted, watch } from 'vue'
import { PhList, PhSun, PhMoon, PhGithubLogo } from '@phosphor-icons/vue'
import { useDark, useToggle } from "@vueuse/core"
import Item from './partials.yaml'

// Estado do tema usando VueUse
const isDark = useDark({
  storageKey: 'vueuse-color-scheme', // Salva o tema no localStorage com esta chave
})

// Alternar tema
const toggleDark = useToggle(isDark)

// Aplicar o tema com base no valor
const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme) // Define o tema no atributo data-theme
}

// Observar mudanças no estado do tema e aplicar dinamicamente
watch(isDark, (newValue) => {
  const theme = newValue ? 'dark' : 'light'
  applyTheme(theme)
})

// Carregar o tema salvo ao montar o componente
onMounted(() => {
  const savedTheme = localStorage.getItem('vueuse-color-scheme') || 'light'
  applyTheme(savedTheme)
})

let navbar = Item.navbar
let empresa = Item.empresa

</script>
<script>
export default {
  created() {
    window.addEventListener('scroll', this.scrollY)
    window.addEventListener('scroll', this.detectSection)
  },
  watch() {
    this.applyTheme()
  },
  methods: {
    applyTheme() {
      let theme = localStorage.getItem('vueuse-color-scheme')
      if (theme == 'auto') { theme = 'dark' }
      document.documentElement.setAttribute('data-theme', theme) // Define o tema no atributo data-theme
    },
    scrollY() {
      this.detectSection()
      let navElement = document.getElementById('nav')
      if (window.scrollY > 100) {
        navElement.classList.add('sticky', 'top-0', 'transition-all', 'duration-300')
      } else {
        navElement.classList.remove('sticky', 'top-0', 'transition-all', 'duration-300')
      }
    },
    detectSection() {
      const sections = document.querySelectorAll('section')
      const navLinks = document.querySelectorAll('#nav-link')
      const drawerLinks = document.querySelectorAll('#drawer-link')

      let currentSectionIndex = -1

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionIndex = index
        }
      })

      navLinks.forEach((link, index) => {
        if (index === currentSectionIndex) {
          link.classList.add('border-b-3', 'active', 'font-bold')
        } else {
          link.classList.remove('border-b-3', 'active', 'font-bold')
        }
      })
      if (drawerLinks.length > 0) {
        drawerLinks.forEach((link, index) => {
          if (index === currentSectionIndex) {
            link.classList.add('border-b-3', 'active', 'font-bold')
          } else {
            link.classList.remove('border-b-3', 'active', 'font-bold')
          }
        })
      }
    },
  },
}
</script>
