import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaInicial from '../views/TelaInicial.vue'
import ListaOvos from '../views/ListaOvos.vue'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import LoginUsuario from '../views/LoginUsuario.vue'
import CarrinhoUsuario from '../views/CarrinhoUsuario.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: TelaInicial
  },
  {
    path: '/listaovos',
    name: 'lista de ovos',
    component: ListaOvos
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroUsuario
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUsuario
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: CarrinhoUsuario
  }
]

const router = new VueRouter({
  routes
})

export default router
