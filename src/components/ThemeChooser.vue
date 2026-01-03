<template>
  <div
    class="fixed right-3 top-1/2 transform -translate-y-1/2 z-50"
    @mouseenter="openPanel"
    @mouseleave="closePanel"
  >
    <div class="flex items-center space-x-2 transition-all duration-300">
      <!-- Toggle / Pin button always visible -->
      <button
        class="btn btn-primary btn-sm"
        @click="togglePin"
        :title="pinned ? 'Unpin toolbar' : 'Pin toolbar'"
        type="button"
      >
        <span v-if="pinned">📌</span>
        <span v-else>🎛️</span>
      </button>

      <!-- Expanded panel (shows when visible or pinned) -->
      <transition name="fade-slide">
        <div
          v-show="visible"
          :style="panelStyle"
          class="ml-2 p-3 rounded-xl shadow-2xl flex flex-col gap-3 items-start modern-panel"
          role="region"
          aria-label="Theme chooser"
        >
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="text-sm font-semibold">Theme</span>
              <span class="text-xs text-muted">Pick a site theme</span>
            </div>
            <button class="btn btn-ghost btn-xs" @click="closeNow" title="Close">✕</button>
          </div>

          <div class="w-full">
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="t in themes"
                :key="t"
                @click="setTheme(t)"
                :aria-pressed="theme === t"
                class="swatch-btn"
                :title="t"
              >
                <span class="swatch-dot" :style="{ backgroundColor: previewColor(t), borderColor: panelStyle.borderColor }" aria-hidden="true"></span>
                <span class="swatch-label" :style="{ color: panelStyle.color }">{{ t }}</span>
                <span v-if="theme === t" class="swatch-check" :style="{ color: panelStyle.accent }">✓</span>
              </button>
            </div>
          </div>

          <div class="w-full flex items-center justify-between">
            <div class="text-sm">Selected: <strong>{{ theme }}</strong></div>
            <div class="flex items-center gap-2">
              <button class="btn btn-sm btn-outline" @click="setTheme('light')">Reset</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { useStorage } from '@vueuse/core'
import { ref, watch, onMounted, computed } from 'vue'

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk',
  'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury'
]

// persistent storage for theme (localStorage). key: 'daisyui-theme'
const theme = useStorage('daisyui-theme', 'light')
// persistent pin state so toolbar remains shown when pinned
const pinned = useStorage('daisyui-theme-toolbar-pin', false)

const showPanel = ref(false)
let hideTimer = null

const visible = computed(() => showPanel.value || pinned.value)

const applyTheme = (t) => {
  try {
    document.documentElement.setAttribute('data-theme', t)
  } catch (e) {
    // ignore in non-browser environments
  }
}

// determine light vs dark-ish themes for readable panel contrasts
const darkThemeSet = new Set(['dark','cyberpunk','wireframe','black','synthwave','retro','corporate'])

const panelStyle = computed(() => {
  const isDark = darkThemeSet.has(theme.value)
  if (isDark) {
    return {
      backgroundColor: 'rgba(2,6,23,0.72)', // darker glass
      color: '#e6eef8', // light text
      borderColor: 'rgba(255,255,255,0.04)',
      accent: '#7c3aed'
    }
  }
  // light themes
  return {
    backgroundColor: 'rgba(255,255,255,0.88)', // light glass
    color: '#0b1220', // dark text
    borderColor: 'rgba(2,6,23,0.06)',
    accent: '#7c3aed'
  }
})

// apply on changes and keep other storage key in sync (nav uses 'vueuse-color-scheme')
watch(theme, (val) => {
  applyTheme(val)
  try { localStorage.setItem('vueuse-color-scheme', val) } catch (e) {}
})

onMounted(() => {
  applyTheme(theme.value)
  try { localStorage.setItem('vueuse-color-scheme', theme.value) } catch (e) {}
})

const setTheme = (t) => {
  theme.value = t
}

// small map of preview colors for each theme (best-effort visual hint)
const colorMap = {
  light: '#ffffff', dark: '#0f172a', cupcake: '#fde68a', bumblebee: '#fef08a', emerald: '#10b981',
  corporate: '#1f2937', synthwave: '#7c3aed', retro: '#fb7185', cyberpunk: '#06b6d4', valentine: '#f97316',
  halloween: '#f97316', garden: '#16a34a', forest: '#065f46', aqua: '#0891b2', lofi: '#c084fc', pastel: '#fbcfe8',
  fantasy: '#f472b6', wireframe: '#374151', black: '#000000', luxury: '#b45309', emerald: '#10b981'
}

const previewColor = (t) => colorMap[t] || '#9ca3af'

const openPanel = () => {
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = null }
  showPanel.value = true
}

const closePanel = () => {
  if (pinned.value) return
  // delay hiding for a short time to avoid abrupt close
  if (hideTimer) clearTimeout(hideTimer)
  hideTimer = setTimeout(() => { showPanel.value = false; hideTimer = null }, 900)
}

const closeNow = () => {
  if (hideTimer) { clearTimeout(hideTimer); hideTimer = null }
  showPanel.value = false
}

const togglePin = () => {
  pinned.value = !pinned.value
  if (pinned.value) showPanel.value = true
}
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 220ms ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(8px) scale(0.98);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(8px) scale(0.98);
}

/* Modern panel styles */
.modern-panel {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.06);
  min-width: 220px;
}

.swatch-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: transparent;
  transition: all 160ms ease;
  position: relative;
  justify-content: flex-start;
}
.swatch-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(2,6,23,0.24);
  border-color: rgba(255,255,255,0.06);
}
.swatch-dot {
  width: 16px;
  height: 16px;
  border-radius: 9999px;
  border: 1px solid rgba(0,0,0,0.12);
  box-shadow: 0 2px 6px rgba(2,6,23,0.12) inset;
}
.swatch-label {
  font-size: 12px;
  color: var(--text-color, #e5e7eb);
  text-transform: capitalize;
}
.swatch-check {
  position: absolute;
  right: 8px;
  font-size: 12px;
  color: var(--primary, #7c3aed);
}

</style>
