<template>
    <NavBar />
    <Hero />
    <SobreNos />
    <Servicos />
    <Clientes />
    <Contato />
    <WhatsAppButton />
    <Footer />
</template>
<script setup>
import Hero from './partials/Hero.vue'
import NavBar from './partials/NavBar.vue'
import Footer from './partials/Footer.vue'
import WhatsAppButton from './partials/WhatsAppButton.vue'
import Clientes from './sections/Clientes.vue'
import SobreNos from './sections/SobreNos.vue'
import Servicos from './sections/Servicos.vue'
import Contato from './sections/Contato.vue'
</script>