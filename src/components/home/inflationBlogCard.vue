<template lang="html">
    <div class="rounded main_blog">
      <v-row class="no-gutters grey lighten-2 rounded pa-1">
        <v-col class="col-8">
          <v-col class="col-12 d-flex justify-center text--bold" style="font-weight: 900;">
            <h2>{{"Land as a Hedge against Inflation"}}</h2> 
          </v-col>
          <v-col class="col-12 text--bold" style="font-weight: 900;">
            <h5>
                People naturally pay more interest to alarming news; this can be explained from an evolutionary stand point where the need to be 
                keen on assumed imminent threats was vital to survival. With this knowledge one may argue that the current panic about inflation is 
                nothing more than hot air exacerbated by the phenomenon elaborated earlier. However, numbers do not lie, the Kenya National Bureau of
                statistics announced an acceleration in the country’s annual inflation rate to 7.9% in the month of June, 2022 which signified a 0.8%
                increase from just a month earlier. 
               <v-btn x-small class="success ml-1" @click="readMore">
                read more 
              </v-btn>
            </h5>
          </v-col>
        </v-col>
        <v-col class="col-4">
          <v-img class="img rounded lighten-4 mr-1"
          :src="require(`../../assets/infation.jpg`)"
          :aspect-ratio="1/1"
          contain
          />
          <div class="d-flex justify-end">
            
          </div>
          
        </v-col>
      </v-row>
      
    </div>
  </template>
  <script>
  export default {
    name: 'inflationBlogCard',
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
  