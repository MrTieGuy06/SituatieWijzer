<template>
    <v-container >
        <h1>Mijn Situaties</h1>

        <situatie-card v-for="item in items" :key="item.id" :situatie="item" class="mb-4" />
    </v-container>
</template>

<script>
  import SituatieCard from '../components/SituatieCard'

  export default {
    name: 'Mijn Situaties',

    data: () => ({ 
      items: [
        { id: 1, title: 'Situatie 1', aantalGedachten: 3, aantalEmoties: 3, aantalActies: 4, createdAt: '05-05-2022', updatedAt: '05-05-2022', positief: 3, negatief: 4, kaarten:[{ id: 1, soort: "Gedachte", waarde: "Waarde van de gedachte", stemming: "positief"},{ id: 2, soort: "Emotie", waarde: "Waarde van de emotie", stemming: "neutraal"},{ id: 3, soort: "Actie", waarde: "Waarde van de actie",  stemming: "negatief"}, { id: 4, soort: "Gedachte", waarde: "Nulla enim sit commodo elit exercitation consectetur. Irure est pariatur irure nisi dolor cillum.",  stemming: "positief"}, { id: 5, soort: "Emotie", waarde: "Excepteur dolor elit qui non. Exercitation ad minim anim dolor minim dolore culpa ut magna aliqua elit incididunt deserunt nostrud. Sit laborum nulla elit aute nostrud ex ea. Non elit enim mollit labore id ullamco magna amet consectetur laborum laboris. Non pariatur eu sunt laborum consectetur excepteur laborum laborum laborum ea occaecat cupidatat.", stemming:"neutraal"}]},
        { id: 2, title: 'Situatie 2', aantalGedachten: 3, aantalEmoties: 2, aantalActies: 2, createdAt: '05-05-2022', updatedAt: '05-05-2022', positief: 2, negatief: 1, kaarten:[{ id: 1, soort: "Gedachte", waarde: "Waarde van de gedachte", stemming: "positief"},{ id: 2, soort: "Emotie", waarde: "Waarde van de emotie", stemming: "neutraal"},{ id: 3, soort: "Actie", waarde: "Waarde van de actie",  stemming: "negatief"}, { id: 4, soort: "Gedachte", waarde: "Nulla enim sit commodo elit exercitation consectetur. Irure est pariatur irure nisi dolor cillum.",  stemming: "positief"}, { id: 5, soort: "Emotie", waarde: "Excepteur dolor elit qui non. Exercitation ad minim anim dolor minim dolore culpa ut magna aliqua elit incididunt deserunt nostrud. Sit laborum nulla elit aute nostrud ex ea. Non elit enim mollit labore id ullamco magna amet consectetur laborum laboris. Non pariatur eu sunt laborum consectetur excepteur laborum laborum laborum ea occaecat cupidatat.", stemming:"neutraal"}]},
        { id: 3, title: 'Situatie 3', aantalGedachten: 1, aantalEmoties: 1, aantalActies: 2, createdAt: '05-05-2022', updatedAt: '05-05-2022', positief: 5, negatief: 2, kaarten:[{ id: 1, soort: "Gedachte", waarde: "Waarde van de gedachte", stemming: "positief"},{ id: 2, soort: "Emotie", waarde: "Waarde van de emotie", stemming: "neutraal"},{ id: 3, soort: "Actie", waarde: "Waarde van de actie",  stemming: "negatief"}, { id: 4, soort: "Gedachte", waarde: "Nulla enim sit commodo elit exercitation consectetur. Irure est pariatur irure nisi dolor cillum.",  stemming: "positief"}, { id: 5, soort: "Emotie", waarde: "Excepteur dolor elit qui non. Exercitation ad minim anim dolor minim dolore culpa ut magna aliqua elit incididunt deserunt nostrud. Sit laborum nulla elit aute nostrud ex ea. Non elit enim mollit labore id ullamco magna amet consectetur laborum laboris. Non pariatur eu sunt laborum consectetur excepteur laborum laborum laborum ea occaecat cupidatat.", stemming:"neutraal"}]},
        { id: 4, title: 'Situatie 4', aantalGedachten: 3, aantalEmoties: 2, aantalActies: 2, createdAt: '05-05-2022', updatedAt: '05-05-2022', positief: 4, negatief: 2, kaarten:[{ id: 1, soort: "Gedachte", waarde: "Waarde van de gedachte", stemming: "positief"},{ id: 2, soort: "Emotie", waarde: "Waarde van de emotie", stemming: "neutraal"},{ id: 3, soort: "Actie", waarde: "Waarde van de actie",  stemming: "negatief"}, { id: 4, soort: "Gedachte", waarde: "Nulla enim sit commodo elit exercitation consectetur. Irure est pariatur irure nisi dolor cillum.",  stemming: "positief"}, { id: 5, soort: "Emotie", waarde: "Excepteur dolor elit qui non. Exercitation ad minim anim dolor minim dolore culpa ut magna aliqua elit incididunt deserunt nostrud. Sit laborum nulla elit aute nostrud ex ea. Non elit enim mollit labore id ullamco magna amet consectetur laborum laboris. Non pariatur eu sunt laborum consectetur excepteur laborum laborum laborum ea occaecat cupidatat.", stemming:"neutraal"}]}
      ]
    }),
    components: {
      SituatieCard,
    },
  }
</script>