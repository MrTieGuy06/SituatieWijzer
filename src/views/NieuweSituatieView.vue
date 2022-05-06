<template>
    <v-container>
        <h1>{{ situatieTitel }}</h1>
        <v-text-field
            label="Situatie titel"
            autofocus
            required
            v-model="titelInput"
            @keyup="situatieTitel = titelInput"
          ></v-text-field>
        
        <span v-show="!hideButtons" class="grey--text text--darken-1">Toevoegen:</span>

        <v-row v-show="!hideButtons">
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                large
                @click="hideButtons=true"
                >
                Gedachte
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                large
                >
                Emotie
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                large
                >
              Actie</v-btn>
            </v-col>
        </v-row>
        <gedachte-textbox />
    </v-container>
</template>

<script>

import GedachteTextbox from '../components/GedachteTextbox.vue'

export default {
    name: 'NieuweGedachte',

    data: function () {
        return {
            situatieTitel: "Nieuwe Situatie",
            hideButtons: false,
        };
    },

    components:{
        GedachteTextbox
    }
}
</script>
