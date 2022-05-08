<template>
    <v-container>
        <h1>Nieuwe Situatie</h1>
        <v-text-field
            label="Situatie titel"
            autofocus
            required
            v-model="situatieTitel"
            :rules="[() => !!situatieTitel || 'Dit veld is verplicht']"
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

        <v-container v-for="k in kaarten" :key="k.id" :kaart="k">
            
            <v-row>
                <v-textarea
                outlined
                name="input-7-4"
                :label="k.soort"
                v-model="k.waarde"
                auto-grow
                no-resize
                autofocus
                :rules="[() => !!k.waarde || '']"
                >
                    <v-icon slot="append" @click="k.stemming='negatief'" v-if="k.stemming==='positief'" color="green">
                        mdi-emoticon-happy-outline
                    </v-icon>
                    <v-icon slot="append" @click="k.stemming='positief'" v-else-if="k.stemming==='neutraal'">
                        mdi-emoticon-neutral-outline
                    </v-icon>
                    <v-icon slot="append" @click="k.stemming='neutraal'" v-else-if="k.stemming==='negatief'" color="red">
                        mdi-emoticon-sad-outline
                    </v-icon>
                </v-textarea>
            </v-row>

            <v-divider/>

        </v-container>

        <v-row v-if="hideButtons">
            <v-col>
                <v-btn
                color="primary"
                elevation="2"
                block
                large
                :disabled="kaarten[kaarten.length-1].waarde == ''"
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
                large
                :disabled="situatieTitel == ''"
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
            situatieTitel: "",
            volgendeSoort: null,
            kaarten: [],
            situaties: []
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
                id: this.situaties.length,
                title: this.situatieTitel,
                aantalGedachten: this.kaarten.filter (({soort}) => soort === 'Gedachte').length,
                aantalEmoties: this.kaarten.filter (({soort}) => soort === 'Emotie').length,
                aantalActies: this.kaarten.filter (({soort}) => soort === 'Actie').length,
                createdAt: require('moment')().format('YYYY-MM-DD HH:mm:ss'),
                updatedAt: require('moment')().format('YYYY-MM-DD HH:mm:ss'),
                positief: this.kaarten.filter (({stemming}) => stemming === 'positief').length,
                negatief: this.kaarten.filter (({stemming}) => stemming === 'negatief').length,
                kaarten: this.kaarten
            }
            this.situaties.push(situatieToSave);
            localStorage.situaties = JSON.stringify(this.situaties);
            this.$router.push('/mijn-situaties');
        }
    },
    mounted(){
      if(localStorage.situaties){
        this.situaties = JSON.parse(localStorage.situaties);
      }
    }

}
</script>
