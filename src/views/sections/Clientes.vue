<template>
    <section id="clientes">
        <div class="flex flex-col items-center justify-center bg-base-200 min-h-screen pt-16" data-aos="fade-up"
            data-aos-duration="1000">
            <h1 class="text-5xl font-bold py-4">Clientes</h1>
            <h2 class="text-lg mb-3 text-center text-indigo-300">Aqui estão alguns dos nossos clientes satisfeitos</h2>
            <div
                class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 xl:gap-8 lg:gap-8 md:gap-6 sm:gap-4 py-8 px-4">
                <div class="card bg-base-100 w-fit xl:w-105 lg:w-82 md:w-100 sm:w-80 max-h-130 shadow-lg"
                    v-for="(cliente, index) in clientes" :key="index">
                    <figure>
                        <img v-if="cliente.imagem != ''" :src="cliente.imagem" :alt="cliente.nome"
                            class="w-full h-50 object-cover" :title="cliente.nome" width="400" height="200" />
                        <img v-else :src="cliente.defaultImage" :alt="cliente.nome" class="w-full h-50 object-cover"
                            :title="cliente.nome" width="400" height="200" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ cliente.nome }} - {{ cliente.descricao }}</h2>
                        <ul class="my-3 flex flex-col gap-2 text-xs">
                            <li v-for="(servico, i) in cliente.servicos" :key="i">
                                <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-sm">{{ servico }}</span>
                            </li>
                        </ul>
                        <div class="card-actions justify-end">
                            <a :href="cliente.website" class="btn btn-primary" type="button" target="_blank">Ver</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import Clientes from './sections.yaml'

let clientes = Clientes.clientes

</script>