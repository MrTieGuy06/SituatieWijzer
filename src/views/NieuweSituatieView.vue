<template>
    <v-container>
        <h1>Nieuwe Situatie</h1>
        <v-text-field
            label="Situatie titel"
            autofocus
            required
          ></v-text-field>
        
        <span v-show="!hideButtons" class="grey--text text--darken-1">Toevoegen:</span>

        <v-row v-show="!hideButtons">
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                @click="hideButtons=true, nieuweKaart('Gedachte')"
                >
                Gedachte
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                @click="hideButtons=true, nieuweKaart('Emotie')"
                >
                Emotie
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                @click="hideButtons=true, nieuweKaart('Actie')"
                >
              Actie</v-btn>
            </v-col>
        </v-row>
        
        <!--<textbox-kaart v-for="k in kaarten" :key="k.id" :kaart="k"/>-->
        <v-container v-for="k in kaarten" :key="k.id" :kaart="k">
            
            <v-row>
                <v-textarea
                outlined
                name="input-7-4"
                :label="k.soort"
                no-resize
                ></v-textarea>
            </v-row>

        </v-container>

        <v-row v-show="hideButtons">
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                @click="nieuweKaart(volgendeSoort)"
                >
                {{ volgendeSoort }}
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                @click="opslaan()"
                >
                Opslaan
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

export default {
    name: 'NieuweGedachte',

    data: function () {
        return {
            hideButtons: false,
            volgendeSoort: "",
            kaarten: []
        };
    },

    methods:{
        nieuweKaart(kaartSoort = null){
                
            this.kaarten.push({ id: this.kaarten.length+1, soort: kaartSoort, waarde: "", stemming: "neutraal" });

            switch(kaartSoort){
                case 'Gedachte':
                    this.volgendeSoort = 'Emotie';
                    break;
                case 'Emotie':
                    this.volgendeSoort = 'Actie';
                    break;
                case 'Actie':
                    this.volgendeSoort = 'Gedachte';
                    break;
            }
        },
        opslaan(){
            let situatieToSave = {
                id: 1,
                title: "",
                aantalGedachten: this.kaarten.filter (({soort}) => soort === 'Gedachte').length,
                aantalEmoties: this.kaarten.filter (({soort}) => soort === 'Emotie').length,
                aantalActies: this.kaarten.filter (({soort}) => soort === 'Actie').length,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                positief: this.kaarten.filter (({stemming}) => stemming === 'positief').length,
                negatief: this.kaarten.filter (({stemming}) => stemming === 'negatief').length,
                kaarten: this.kaarten
            }
            console.log(situatieToSave);
        }
    },

    computed: {
        now() {
            return Date.now()
        }
    }

}
</script>
