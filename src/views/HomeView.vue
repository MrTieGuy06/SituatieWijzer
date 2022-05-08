<template>

  <v-container>
    
    <h1>Dashboard</h1>

    <v-subheader>
      Laatste situatie
    </v-subheader>

    <situatie-card :situatie="situaties[situaties.length-1]" />

  </v-container>
  
</template>

<script>
import SituatieCard from '../components/SituatieCard.vue'

  export default {
    name: 'Home',
    data: function(){
      return{
        situaties: []
      }
    },
    mounted(){
      if(localStorage.situaties){
        this.situaties = JSON.parse(localStorage.situaties);
      }
    },
    components: {
      SituatieCard,
    },
  }
</script>
