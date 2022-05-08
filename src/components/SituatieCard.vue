<template>

  <v-card class="mx-auto" max-width="400">

    <v-card-title>

      <span class="text-h5 font-weight-bold">
        {{ situatie.title }}
      </span>

    </v-card-title>

    <v-card-text>
      {{ situatie.updatedAt }}
    </v-card-text>

    <v-card-actions>

      <v-list-item class="grow">

        <v-btn text color="blue accent-4 ps-0" v-bind:to="/situatie/ + situatie.id">
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
                {{ situatie.aantalGedachten }}
              </span>
              
              <span class="mr-1">
                ·
              </span>
              
              <v-icon class="mr-1" color="white">
                mdi-emoticon-happy-outline
              </v-icon>

              <span class="subheading mr-2">
                {{situatie.aantalEmoties}}
              </span>

              <span class="mr-1">
                ·
              </span>

              <v-icon class="mr-1" color="white">
                mdi-movie-outline
              </v-icon>

              <span class="subheading mr-2">
                {{ situatie.aantalActies }}
              </span>

            </span>
          
          </v-tooltip>

          <span class="mr-1">·</span>

          <v-icon class="mr-1" color="green">
            mdi-emoticon-happy-outline
          </v-icon>

          <span class="subheading mr-2 green--text">
            {{ situatie.positief }}
          </span>
          
          <span class="mr-1">
            ·
          </span>

          <v-icon class="mr-1" color="red">
            mdi-emoticon-sad-outline
          </v-icon>

          <span class="subheading red--text">
            {{ situatie.negatief }}
          </span>
        
        </v-row>

      </v-list-item>

    </v-card-actions>

  </v-card>

</template>

<script>

  export default {
    props: ['situatie']
  }

</script>