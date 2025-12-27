<template>
    <section id="contato">
        <div class="grid grid-cols-1 xl:lg:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-h-screen" data-aos="fade-up"
            data-aos-duration="1000">
            <div class="flex flex-col items-center justify-center bg-base-200">
                <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold pt-2 pb-4">Onde estamos</h1>
                <div class="flex flex-row items-center mb-3 p-3 justify-around w-full" v-if="contato.telefone || contato.email">
                    <p class="flex flex-wrap text-sm xl:text-lg lg:text-lg md:text-sm sm:text-sm"><b class="pr-2">Telefone:</b> {{ contato.telefone }}</p>
                    <p class="flex flex-wrap text-sm xl:text-lg lg:text-lg md:text-sm sm:text-sm"><b class="pr-2">Email:</b> {{ contato.email }}</p>
                </div>
                <!-- GoogleMap Component -->
                <GoogleMapLoader />
            </div>
            <div class="flex flex-col items-center justify-center min-h-screen bg-base-200">
                <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold pt-2 pb-4 px-4">{{ contato.titulo }}
                </h1>
                <h2 class="text-lg mb-4 text-indigo-300">{{ contato.subtitulo }}</h2>
                <form id="formBox" ref="form" @submit.prevent="sendEmail" class="w-full max-w-xl px-4">
                    <div class="mb-4">
                        <label for="nome"
                            class="block text-sm font-bold mb-2 after:ml-0.5 after:text-red-500 after:content-['*']">Nome</label>
                        <input type="text" id="nome" placeholder="Seu nome"
                            class="input input-primary w-full capitalize" name="nome" autocomplete="Seu-nome"
                            aria-label="Nome" required />
                    </div>
                    <div class="mb-4">
                        <label for="email"
                            class="block text-sm font-bold mb-2 after:ml-0.5 after:text-red-500 after:content-['*']">Email</label>
                        <input type="email" id="email" name="email" placeholder="Seu email"
                            class="input input-primary w-full" autocomplete="Seu email" aria-label="Email" required />
                    </div>
                    <div class="join items-center w-full">
                        <div class="flex-1 mb-4 pr-3">
                            <label for="tel"
                                class="block text-sm font-bold mb-2 after:ml-0.5 after:text-red-500 after:content-['*']">Telefone</label>
                            <input type="tel" id="tel" name="telefone" placeholder="Seu telefone" v-maska
                                data-maska="['(##) ####-####','(##) #####-####']" v-model="phoneValue"
                                class="input input-primary rounded w-full" autocomplete="(##) #####-####"
                                aria-label="Telefone" required />
                        </div>
                        <div class="mb-4">
                            <label for="whatsapp" class="block text-sm font-bold mb-2">WhatsApp?</label>
                            <input type="checkbox" id="whatsapp" name="whatsapp" aria-label="É WhatsApp"
                                class="checkbox checkbox-primary" autocomplete="É whatsapp" v-model="checked" /> {{
                                    checked ? 'Sim' : 'Não' }}
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="message"
                            class="block text-sm font-bold mb-2 after:ml-0.5 after:text-red-500 after:content-['*']">Mensagem</label>
                        <textarea id="message" rows="4" placeholder="Sua mensagem"
                            class="textarea textarea-primary w-full" name="mensagem" aria-label="Mensagem"
                            autocomplete="Sua mensagem" required></textarea>
                    </div>
                    <input type="hidden" id="dataHora" name="dataHora" :value="dataAtual" autocomplete="Data/Hora"
                        aria-label="Data/Hora" />
                    <button type="submit" class="btn btn-primary" v-if="loading" disabled>
                        <span class="loading loading-spinner loading-sm"></span>
                        Enviando...
                    </button>
                    <button type="submit" class="btn btn-primary" v-else>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import Contato from './sections.yaml'
import GoogleMapLoader from '/src/components/partials/GoogleMap.vue'
import { vMaska } from 'maska/vue'
import emailjs from '@emailjs/browser'

const form = ref(null)

let contato = Contato.contato

</script>
<script>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

export default {
    data: () => ({
        loading: false,
        checked: false,
        phoneValue: '',
        isChecked: 'Não',
        dataAtual: new Date().toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }),
    }),
    created() {
        this.checked
    },
    mounted() {
        this.checked
    },
    methods: {
        sendEmail() {
            let formBox = document.getElementById('formBox')
            const tempDiv = document.createElement('div')
            tempDiv.setAttribute('role', 'alert')
            this.loading = true
            emailjs
                .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, this.$refs.form, {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                })
                .then(
                    (success) => {
                        tempDiv.classList.add('alert', 'alert-success', 'alert-outline', 'mb-4', 'w-full', 'w-max-lg')
                        tempDiv.innerHTML =
                            '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />' +
                            '</svg>' +
                            '<span>Sua mensagem foi enviada com sucesso!</span>'
                        formBox.insertAdjacentElement(
                            'afterbegin',
                            tempDiv
                        )
                        this.phoneValue = '' // Limpa o campo de telefone após o envio
                        this.$refs.form.reset() // Limpa o formulário após o envio
                        console.log('SUCCESS!', success.text)
                        this.loading = false
                        setTimeout(() => {
                            formBox.removeChild(tempDiv)
                        }, 5000)
                    },
                    (error) => {
                        tempDiv.classList.add('alert', 'alert-error', 'alert-outline', 'mb-4', 'w-full', 'w-max-lg')
                        tempDiv.innerHTML =
                            '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />' +
                            '</svg>' +
                            '<span>Houve um erro ao enviar a sua mensagem. Por favor tente novamente.</span>'
                        formBox.insertAdjacentElement(
                            'afterbegin',
                            tempDiv
                        )
                        console.log('FAILED...', error.text)
                        this.loading = false
                        setTimeout(() => {
                            formBox.removeChild(tempDiv)
                        }, 5000)
                    },
                )
        },
    },
};
</script>