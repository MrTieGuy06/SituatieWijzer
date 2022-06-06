<template>
  <v-container>
    <h1 class="mb-2">Situatie opties</h1>

    <v-divider />

    <h4 class="my-2">Ingeschakelde kaarten</h4>
    <v-checkbox class="mt-0" v-for="k in kaartSoorten" :key="k.label" :label="k.labelMeervoud" :input-value="k.enabled" v-model="k.enabled" :disabled="k.required" @change="echoen(k)"/>
  
  </v-container>
</template>

<script>
export default({
  data() {
    return{
      kaartSoorten: [],
    }
  },
  methods: {
    echoen(e = null){
      console.log(e)
  }
  },
  mounted(){
    if(localStorage.kaartSoorten){
        this.kaartSoorten = JSON.parse(localStorage.kaartSoorten);
    }
  },
  watch:{
    kaartSoorten:{
      handler(nieuweOpties){
        localStorage.kaartSoorten = JSON.stringify(nieuweOpties);
      },
      deep: true
    }
  }
})
</script>
