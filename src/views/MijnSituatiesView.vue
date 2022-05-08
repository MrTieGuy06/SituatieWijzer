<template>
    <v-container >
        <h1>Mijn Situaties</h1>

        <div v-if="situaties.length==0">
          <p class="font-weight-light text-grey text-darken-2 text-center">Je hebt nog geen situaties. Maak een situatie om je voortgang bij te houden!</p>
          <v-btn
          class="mt-3"
          color="primary"
          elevation="2"
          block
          large
          to="/nieuwe-situatie"
          >
          Maak een situatie
          </v-btn>
        </div>

        <situatie-card v-for="item in situaties.slice().reverse()" :key="item.id" :situatie="item" class="mb-4" />
    </v-container>
</template>

<script>
  import SituatieCard from '../components/SituatieCard'

  export default {
    name: 'mijn-situaties',

    data: () => ({ 
      situaties: []
    }),
    components: {
      SituatieCard,
    },
    mounted(){
      if(localStorage.situaties){
        this.situaties = JSON.parse(localStorage.situaties);
      }
    },
    watch:{
      situaties:{
        handler(updatedSituaties){
          localStorage.situaties = JSON.stringify(updatedSituaties);
        },
        deep: true
      }
    }
  }
</script>