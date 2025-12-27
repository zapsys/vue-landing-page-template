<template>
    <section id="servicos">
        <div class="flex flex-col items-center justify-center bg-base-200 min-h-screen pt-16" data-aos="fade-up"
            data-aos-duration="1000">
            <h1 class="text-5xl font-bold py-4">Serviços</h1>
            <h2 class="text-lg mb-3 text-center text-indigo-300">Aqui estão alguns dos nossos serviços</h2>
            <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 xl:gap-8 lg:gap-8 md:gap-6 sm:gap-4 py-8 px-4">
                <div class="card bg-base-100 w-full xl:w-105 lg:w-82 md:w-100 sm:w-80 max-h-100 shadow-lg"
                    v-for="(servico, index) in servicos" :key="index">
                    <div class="card-body">
                        <span class="badge badge-xs badge-info p-2 font-semibold" :title="servico.categoria">{{
                            servico.categoria }}</span>
                        <div class="flex justify-between">
                            <h2 class="text-3xl font-bold">{{ servico.nome }}</h2>
                            <span class="text-lg font-medium">{{ servico.preco }}</span>
                        </div>
                        <ul class="my-6 flex flex-col gap-2 text-xs">
                            <li v-for="(detalhe, i) in servico.detalhes" :key="i" :data-id="i">
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{{ detalhe }}</span>
                            </li>
                        </ul>
                        <div class="mt-6">
                            <a :href="social.link + '&text=Gostaria de mais detalhes sobre o ' + servico.nome"
                                target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block"
                                type="button">
                                Mais detalhes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Servicos from './sections.yaml'
import Social from '/src/views/partials/partials.yaml'

let servicos = Servicos.servicos
let social = Social.social[3] // Posição do WhatsApp no array de redes sociais (4ª posição)

</script>