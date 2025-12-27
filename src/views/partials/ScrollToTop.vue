<template>
  <div id="scrollToTop" class="sticky w-full flex justify-end bottom-0 py-3 pr-5 bg-base-200">
    <div class="text-gray-400 hover:text-blue-400 transition">
      <button @click="scrollToTop" class="btn btn-circle btn-primary" title="Voltar ao topo">
        <Icon icon="ph:caret-up" class="text-white size-8 cursor-pointer" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
</script>
<script>
export default {
  name: 'ScrollToTop',
  data: () => ({
    scrollTopButton: null
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  onUnmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollToTop = document.querySelector('#scrollToTop')
      if (window.scrollY > 500) {
        scrollToTop.classList.remove('invisible')
      } else {
        scrollToTop.classList.add('invisible')
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>