<template>
    <v-container >
        <situatie-card v-for="item in items" :key="item.id" :situatie="item" class="mb-4" />
    </v-container>
</template>

<script>
  import SituatieCard from '../components/SituatieCard'

  export default {
    name: 'Mijn Situaties',

    data: () => ({ 
      items: [
        { id: 1, title: 'Situatie 1', aantalGedachten: 3, aantalEmoties: 3, aantalActies: 4, datum: '05-05-2022', positief: 3, negatief: 4},
        { id: 2, title: 'Situatie 2', aantalGedachten: 3, aantalEmoties: 2, aantalActies: 2, datum: '05-05-2022', positief: 2, negatief: 1},
        { id: 3, title: 'Situatie 3', aantalGedachten: 1, aantalEmoties: 1, aantalActies: 2, datum: '05-05-2022', positief: 5, negatief: 2},
        { id: 4, title: 'Situatie 4', aantalGedachten: 3, aantalEmoties: 2, aantalActies: 2, datum: '05-05-2022', positief: 4, negatief: 2}
      ]
    }),
    components: {
      SituatieCard,
    },
  }
</script>