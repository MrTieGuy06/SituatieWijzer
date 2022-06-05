<template>

  <v-card class="mx-auto" max-width="400" v-if="situatie">

    <v-card-title>

      <span class="text-h5 font-weight-bold">
        {{ situatie.title }}
      </span>


      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-col class="pa-0">
            <v-icon class="float-right"
              v-bind="attrs"
              v-on="on">
              mdi-dots-vertical
            </v-icon>
          </v-col>
        </template>

        <v-list>
          <v-list-item @click="deleteSituatie(situatie.id)">
            <v-list-item-title class="red--text">Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-card-title>

    <v-card-text>
      {{ situatie.updatedAt }}
    </v-card-text>

    <v-card-actions>

      <v-list-item class="grow">

        <v-btn text color="blue accent-4 ps-0" v-bind:to="'/situatie/' + situatie.id">
            Bekijk Nu
        </v-btn>

        <v-row align="center" justify="end">

          <v-tooltip top>

            <template v-slot:activator="{ on, attrs }">

              <v-icon class="mr-1" v-bind="attrs" v-on="on">
                mdi-notebook-outline
              </v-icon>

              <span class="subheading mr-2">
                {{ situatie.kaarten.length }}
              </span>

            </template>

            <span>

              <v-icon class="mr-1" color="white">
                mdi-thought-bubble-outline
              </v-icon>

              <span class="subheading mr-2">
                {{ situatie.kaarten.filter (({soort}) => soort === 'Gedachte').length }}
              </span>
              
              <span class="mr-1">
                ·
              </span>
              
              <v-icon class="mr-1" color="white">
                mdi-emoticon-happy-outline
              </v-icon>

              <span class="subheading mr-2">
                {{situatie.kaarten.filter (({soort}) => soort === 'Emotie').length}}
              </span>

              <span class="mr-1">
                ·
              </span>

              <v-icon class="mr-1" color="white">
                mdi-movie-outline
              </v-icon>

              <span class="subheading mr-2">
                {{ situatie.kaarten.filter (({soort}) => soort === 'Actie').length }}
              </span>

            </span>
          
          </v-tooltip>

          <span class="mr-1">·</span>

          <v-icon class="mr-1" color="green">
            mdi-emoticon-happy-outline
          </v-icon>

          <span class="subheading mr-2 green--text">
            {{ situatie.kaarten.filter (({stemming}) => stemming === 'positief').length }}
          </span>
          
          <span class="mr-1">
            ·
          </span>

          <v-icon class="mr-1" color="red">
            mdi-emoticon-sad-outline
          </v-icon>

          <span class="subheading red--text">
            {{ situatie.kaarten.filter (({stemming}) => stemming === 'negatief').length }}
          </span>
        
        </v-row>

      </v-list-item>

    </v-card-actions>

  </v-card>

</template>

<script>

  export default {
    data: () => ({ 
      situaties: [],
    }),
    props: ['situatie'],
    methods:{
      deleteSituatie: function(id){
        if(confirm('Weet je zeker dat je deze situatie wilt verwijderen?')){
          this.situaties = this.situaties.filter(function(item) {
              return item.id != id;
          });
          location.reload();
        }
      }
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