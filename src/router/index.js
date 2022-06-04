import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SituatieView from '../views/SituatieView.vue'
import NieuweSituatieView from '../views/NieuweSituatieView.vue'
import MijnSituatiesView from '../views/MijnSituatiesView.vue'
import VoortgangView from '../views/VoortgangView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/situatie/:situatieId',
    name: 'situatie',
    component: SituatieView,
    props: true
  },
  {
    path: '/nieuwe-situatie',
    name: 'nieuwe-situatie',
    component: NieuweSituatieView
  },
  {
    path: '/mijn-situaties',
    name: 'mijn-situaties',
    component: MijnSituatiesView
  },
  {
    path: '/mijn-voortgang',
    name: 'mijn-voortgang',
    component: VoortgangView
  }
]

const router = new VueRouter({
  routes
})

export default router
