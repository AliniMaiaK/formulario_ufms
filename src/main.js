import { createApp } from "vue"
import App from "./App.vue"
import "vuetify/styles" // Importa os estilos do Vuetify
import { createVuetify } from "vuetify" // Função para criar uma instância do Vuetify
import * as components from "vuetify/components" // Importa componentes individuais
import * as directives from "vuetify/directives" // Importa diretivas
import router from "./router"

// Cria a instância do Vuetify com os componentes e diretivas
const vuetify = createVuetify({
  components,
  directives,
})

// Cria a aplicação Vue e registra o Vuetify
const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount("#app")
