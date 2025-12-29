# Vue landing page template
Um belo e completo *template* para website desenvolvido com **Vue 3** e outras ferramentas com fácil personalização.

## Motivação
Decidi desenvolver esse template devido à falta de soluções completas e funcionais desenvolvidas em *Vue*. Esse modelo fornece a possibilidade de implementar um site completo, totalmente funcional, apenas substituindo o conteúdo dos arquivos *.yaml*. Além disso, possibilita a adição de novas páginas, menus, serviços e clientes de maneira descomplicada, podendo ser facilmente estendido adicionando novos componentes.

## Características
- Layout responsivo
- Animações ao acessar as seções
- Modo **claro/escuro** automático (a partir das definiçoes do navegador) e persistente
- Totalmente SEO *friendly*
- Formulario de contato funcional (necessário se cadastrar na plataforma *EmailJS*)

## Ferramentas utilizadas
- [Vue 3](https://vuejs.org/) - The progressive Javascript framework
- [Vite](https://vite.dev/guide/) - Build Tool for the web
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [daisyUI](https://daisyui.com/docs/intro/) - TailwindCSS plugin for faster, easer and cleaner development
- ~~[Phosphor Icons](https://phosphoricons.com/) - A flexible icon family for interfaces, diagrams, presentations~~ [removed]
- [Iconify](https://iconify.design/) - All popular icon sets, one framework [added]
- [maska](https://beholdr.github.io/maska/v3/#/) - Simple zero-dependency input mask library
- [vite-plugin-yaml](https://github.com/Modyfi/vite-plugin-yaml) - Transform YAML file into Javascript object
- [vite-html-plugin](https://www.npmjs.com/package/vite-plugin-html-template) - A vite plugin for processing html
- [vue-google-map](https://vue3-google-map.com/getting-started/) - Composable components for easy use of Google Maps in Vue 3
- [vue-router](https://router.vuejs.org/installation.html) - Expressive, configurable and convenient routing for Vue.js [added]
- [VueUse](https://v8-9-4.vueuse.org/guide/) - UseDark component for reactive dark mode with auto data persistence 
- [EmailJS](https://www.emailjs.com/) - Send Email Directly From Your Code
- [AOS](https://michalsnik.github.io/aos/) - Animate on scroll Javascript library
- [FontSource](https://fontsource.org/docs/getting-started/introduction) - Collection of open-source fonts that are packaged into individual *npm* packages

## Instalação
No terminal clone o projeto:
```
git clone https://github.com/zapsys/site-template-vuejs.git
```

Entre na pasta do projeto:

```
cd site-template-vuejs
```

Instale as dependências (use o *npm*, *yarn* ou *pnpm*):

```
npm install
```

## Execução
Rode o comando:

```
npm run dev
```
Acesse a url http://localhost:5173 no navegador para ver o resultado.

## Construção para produção
```
npm run build
```
Então execute:
```
npm run serve
```

Acesse a url http://localhost:4173 no navegador para ver o resultado.

## Configurações

Edite os arguivos [partials.yaml](/src/components/partials/partials.yaml) e [sections.yaml](/src/components/sections/sections.yaml) e adicione as suas informações. Para o conteúdo do arquivo [index.html](index.html) edite o arquvivo [vite.config.js](vite.config.js) e altere as informações da propriedade *data*, pois as mesmas serão injetadas na página inicial.

Para o envio de emails pelo formulário de contato é necessário se cadastrar na plataforma do [EmailJS](https://www.emailjs.com/) e configurar um serviço (*service_id*), um template (*template_id*) e uma chave-pública (*public key*). De posse desses valores crie um arquivo **.env** na raiz do projeto e adicione os valores como segue:

**VITE_EMAILJS_SERVICE_ID**=service_id<br>
**VITE_EMAILJS_TEMPLATE_ID**=template_id<br>
**VITE_EMAILJS_PUBLIC_KEY**=public_key<br>
**VITE_GOOGLE_MAPS_API_KEY**=google_maps_api_key

Para mostrar o mapa corretamente na seção de contato é necessário fazer login no [Google Maps Platform](https://developers.google.com/maps/documentation/javascript/get-api-key) e gerar uma *api_key* (Maps Javascript API). De posse de sua chave adicione-a no arquivo **.env** como mostrado acima.

O **Vite** ficará responsável de ler as variáveis de ambiente para usá-las no componente desejado. É usada a diretiva *import.meta.env.nome_variavel*, contudo, é importante o prefixo *VITE_* para que a mesma seja exposta no frontend.

## Demonstração
[vue-landing-page-template](https://vue-landing-page-template.vercel.app/)


## Erros e dificuldades de instalação
Para esses casos se deve abrir um [issue](https://github.com/zapsys/vue-landing-page-template/issues).

## Dúvidas e sugestões

Caso tenha alguma dúvida ou sugestão sinta-se a vontade para nos contactar e contribuir.

## To Do
- Adicionar *captcha* ao formulário de contato
- Integrar os temas do plugin *daisyUI* para serem aplicados ao site

## Licença
Este projeto está sob a licença MIT, que permite o download, execução, alteração, redistribuição, tanto para uso privado como comercial do código fonte, desde que citado o autor. 

[MIT License](LICENSE.md)
