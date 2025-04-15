<template>
    <section id="home" class="relative">
        <!-- Vídeo de fundo -->
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover blur-xs -z-10">
            <source src="/assets/videos/cover.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
        </video>
        <!-- Conteúdo da seção -->
        <div class="hero min-h-screen relative z-10" data-aos="fade-up" data-aos-duration="2000">
            <div class="hero-content text-center flex flex-wrap">
                <div class="max-w-md sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-2xl">
                    <h1 class="text-5xl font-bold mb-4 text-white">{{ hero.titulo }}</h1>
                    <p class="text-xl mb-5 text-white">
                        {{ hero.texto }}
                    </p>
                    <a :href="hero.botao_link" class="btn btn-primary rounded-full" type="button" target="_self">
                        {{ hero.botao_acao }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Hero from './partials.yaml'

let hero = Hero.hero

</script>