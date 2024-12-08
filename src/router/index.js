import { createRouter, createWebHistory } from "vue-router"
import Formulario from "@/components/Formulario/FormularioUfms.vue"
import Relatorio from "@/components/Relatorio/RelatorioUfms.vue"

const routes = [
  {
    path: "/",
    name: "Formulario",
    component: Formulario,
  },
  {
    path: "/relatorio",
    name: "Relatorio",
    component: Relatorio,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
