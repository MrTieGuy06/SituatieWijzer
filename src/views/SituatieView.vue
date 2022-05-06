<template>
    <v-container>
        
        
        <h1>{{title}}</h1>
        
        <v-card
            elevation="3"
            outlined
            class="mt-3"
            v-for="kaart in kaarten"
            :key="kaart.id"
            >
            <v-card-title>
                {{kaart.soort}}
            </v-card-title>
            
            <v-card-text>
                <v-row>
                    <v-col cols="10">
                        {{kaart.waarde}}
                    </v-col>
                    <v-col cols="2" align-self="end">
                        <v-icon v-if="kaart.stemming==='positief'" color="green">
                            mdi-emoticon-happy-outline
                        </v-icon>
                        <v-icon v-else-if="kaart.stemming==='neutraal'">
                            mdi-emoticon-neutral-outline
                        </v-icon>
                        <v-icon v-else-if="kaart.stemming==='negatief'" color="red">
                            mdi-emoticon-sad-outline
                        </v-icon>
                    </v-col>
                </v-row>
            </v-card-text>

        </v-card>
    </v-container>
</template>

<script>

export default {
    data: function() { 
        return{
            id: 1,
            title: 'Situatie 4',
            aantalGedachten: 3,
            aantalEmoties: 3,
            aantalActies: 4,
            datum: '05-05-2022',
            positief: 3,
            negatief: 4,
            kaarten: [
                { id: 1, soort: "Gedachte", waarde: "Waarde van de gedachte", stemming: "positief"},
                { id: 2, soort: "Emotie", waarde: "Waarde van de emotie", stemming: "neutraal"},
                { id: 3, soort: "Actie", waarde: "Waarde van de actie",  stemming: "negatief"},
                { id: 4, soort: "Gedachte", waarde: "Nulla enim sit commodo elit exercitation consectetur. Irure est pariatur irure nisi dolor cillum.",  stemming: "positief"},
                { id: 5, soort: "Emotie", waarde: "Excepteur dolor elit qui non. Exercitation ad minim anim dolor minim dolore culpa ut magna aliqua elit incididunt deserunt nostrud. Sit laborum nulla elit aute nostrud ex ea. Non elit enim mollit labore id ullamco magna amet consectetur laborum laboris. Non pariatur eu sunt laborum consectetur excepteur laborum laborum laborum ea occaecat cupidatat.", stemming:"neutraal"}
            ]
        }
    }
}
</script>
