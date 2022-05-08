<template>
    <v-container v-if="situaties[$route.params.id]">

        <h1>
            {{ situaties[$route.params.id].title }}
        </h1>
        
        <v-card elevation="3" outlined class="mt-3" v-for="kaart in situaties[$route.params.id].kaarten" :key="kaart.id">
            
            <v-card-title>
                {{ kaart.soort }}
            </v-card-title>
            
            <v-card-text>

                <v-row>
                    
                    <v-col cols="10">
                        {{ kaart.waarde }}
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
                situaties: []
            }
        },
        mounted(){
            if(localStorage.situaties){
                this.situaties = JSON.parse(localStorage.situaties);
            }
        }
    }
</script>
