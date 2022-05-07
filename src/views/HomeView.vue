<template>
  <v-container>
    
    <h1>Dashboard</h1>

    <v-subheader>Laatste situatie</v-subheader>
    <situatie-card :situatie="tempSituatie" />

  </v-container>
</template>

<script>
import SituatieCard from '../components/SituatieCard.vue'
import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    data: function(){
      return{
        tempSituatie: { id: 1, title: 'Situatie 1', aantalEmoties: 3, aantalActies: 4, createdAt: '05-05-2022', updatedAt: '05-05-2022', positief: 3, negatief: 4, kaarten:[{ id: 1, soort: "Gedachte", waarde: "Waarde van de gedachte", stemming: "positief"},{ id: 2, soort: "Emotie", waarde: "Waarde van de emotie", stemming: "neutraal"},{ id: 3, soort: "Actie", waarde: "Waarde van de actie",  stemming: "negatief"}, { id: 4, soort: "Gedachte", waarde: "Nulla enim sit commodo elit exercitation consectetur. Irure est pariatur irure nisi dolor cillum.",  stemming: "positief"}, { id: 5, soort: "Emotie", waarde: "Excepteur dolor elit qui non. Exercitation ad minim anim dolor minim dolore culpa ut magna aliqua elit incididunt deserunt nostrud. Sit laborum nulla elit aute nostrud ex ea. Non elit enim mollit labore id ullamco magna amet consectetur laborum laboris. Non pariatur eu sunt laborum consectetur excepteur laborum laborum laborum ea occaecat cupidatat.", stemming:"neutraal"}]},
      }
    },
    components: {
      HelloWorld,
      SituatieCard,
    },
  }
</script>
