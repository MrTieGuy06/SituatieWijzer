import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  mounted(){
    if(localStorage.mijnSituaties){
      this.mijnSituaties = localStorage.mijnSituaties;
    }
  },
  watch:{
    mijnSituaties(UpdatedSituaties){
      localStorage.mijnSituaties = UpdatedSituaties;
    }
  },
  render: h => h(App)
}).$mount('#app')
