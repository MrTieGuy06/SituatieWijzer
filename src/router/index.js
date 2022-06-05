import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SituatieView from '../views/SituatieView.vue'
import NieuweSituatieView from '../views/NieuweSituatieView.vue'
import MijnSituatiesView from '../views/MijnSituatiesView.vue'
import VoortgangView from '../views/VoortgangView.vue'
import SituatieOptiesView from '../views/opties/SituatieOptiesView.vue'

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
  },
  {
    path: '/situatie-opties',
    name: 'situatie-opties',
    component: SituatieOptiesView
  }
]

const router = new VueRouter({
  routes
})

export default router
