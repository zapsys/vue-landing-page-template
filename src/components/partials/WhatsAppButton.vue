<template>
    <!-- Pin to center right corner -->
    <div
        class="fixed bottom-1/6 sm:bottom-1/6 md:bottom-1/5 lg:bottom-1/5 xl:bottom-1/5 right-2 overflow-x-hidden z-10">
        <a :href="whatsapp.link + '&text=Gostaria de mais detalhes sobre os serviços'"
            class="relative text-decoration-none" title="Entre em contato conosco" target="_blank">
            <PhWhatsappLogo
                class="size-16 sm:size-8 md:size-16 lg:size:16 xl:size-16 text-green-400 hover:text-green-500 animate-pulse focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 cursor-pointer z-2" />
        </a>
    </div>
</template>
<script setup>
import { PhWhatsappLogo } from '@phosphor-icons/vue'
import Social from './partials.yaml'

let whatsapp = Social.social[3] // Posição do WhatsApp no array de redes sociais (4ª posição)

</script>