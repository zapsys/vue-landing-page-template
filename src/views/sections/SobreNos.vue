<template>
    <section id="sobre-nos">
        <div class="flex flex-col items-center justify-center bg-base-200 min-h-screen pt-16" data-aos="fade-up"
            data-aos-duration="1000">
            <h1 class="text-5xl font-bold py-4 text-center">{{ sobre.titulo }}</h1>
            <h2 class="flex flex-wrap px-4 text-center text-lg mb-8 text-indigo-300">{{ sobre.descricao }}</h2>
            <div
                class="flex justify-around leading-7 text-justify mb-3 px-3 xl:px-3 lg:px-3 md:px-4 sm:px-3 mx-auto max-w-7xl lg:max-w-5xl md:max-w-4xl">
                <p
                    class="lh-2 text-sm xl:text-xl lg:text-xl md:text-lg sm:text-lg px-5 xl:px-0 lg:px-0 md:px-6 sm:px-3">
                    {{ sobre.historia }}
                </p>
            </div>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 xl:gap-8 lg:gap-8 md:gap-6 sm:gap-4 py-8 px-4">
                <div class="card bg-base-100 w-fit xl:w-105 lg:w-82 md:w-100 sm:w-80 max-h-110 shadow-lg"
                    v-for="(detalhe, index) in detalhes" :key="index">
                    <figure>
                        <img v-if="detalhe.imagem != ''" class="max-h-75" :src="detalhe.imagem" :alt="detalhe.nome" width="300" height="300"/>
                        <img v-else class="max-h-75" :src="'/assets/about/' + detalhe.defaultImage"
                            :alt="detalhe.nome" width="300" height="300"/>
                    </figure>
                    <div class="card-body justify-center items-center px-auto">
                        <h2 class="card-title text-2xl">{{ detalhe.nome }}</h2>
                        <p class="leading-7">{{ detalhe.descricao }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Item from './sections.yaml'

let sobre = Item.sobre.principal
let detalhes = Item.sobre.detalhes

</script>