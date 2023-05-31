<template>
    <div class="rounded main_blog">
      <v-card class="grey lighten-4">
        <v-card-title class="d-flex justify-center text-center">
          <p class="my-0" style="width: 100%;">
            Finance: 
          </p>
          <p class="my-0">
            Land as a Hedge against Inflation
          </p>
        </v-card-title>
    
        <v-img class="rounded"
          :src="require(`../../assets/infation.jpg`)"
          :aspect-ratio="2/1"
          contain
        />

        <v-card-text>
          {{ `
            People naturally pay more interest to alarming news; this can be explained from an evolutionary stand point where the need to be 
            keen on assumed imminent threats was vital to survival. With this knowledge one may argue that the current panic about inflation is 
            nothing more than hot air exacerbated by the phenomenon elaborated earlier. However, numbers do not lie, the Kenya National Bureau of
            statistics announced an acceleration in the country’s annual inflation rate to 7.9% in the month of June, 2022 which signified a 0.8%
            increase from just a month earlier. 
          ` | sizeUp }} 
        </v-card-text>

        <v-card-actions>
          <v-btn small class="success" @click="readMore">
            read more 
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </div>
  </template>
  <script>
  export default {
    name: 'inflationBlogCard',

    filters: {
      sizeUp(text){
        return text.slice(0, 200) + '...'
      }
    },

    methods:{
      readMore(){
        let url = '/blog/land-as-a-hedge-against-inflation'
        window.location = url
      }
    }
  }
  </script>
  <style lang="css" scoped>
  .main_blog{
    font-family: dosis;
  }
  
  </style>
  