<template>
    <div class="rounded main_blog">
      <v-card class="grey lighten-4">
        <v-card-title class="d-flex justify-center text-center">
          <p class="my-0" style="width: 100%;">
            Land Location: 
          </p> <br>
          <p class="my-0">
            Why Land Location Matters
          </p>
        </v-card-title>
    
        <v-img class="rounded"
          :src="require(`../../assets/location.jpg`)"
          :aspect-ratio="2/1"
          contain
        />

        <v-card-text>
          {{ `
          Land is homogeneous across large tracks; equally sized parcels of land should therefore, ideally, be worth the same, except they are not. 
          Different plots of land may differ in their value despite being of the same size, fertility and climate. 
          This difference is informed by several factors such as its size, proximity to amenities, underground natural resources but chiefly by its location. 
          This is the reason why an acre in the leafy suburbs of Nairobi is several folds more expensive that an acre in, say, Mandera. 
          Clichés get to be clichés since they have been deemed worth repeating having proven their truthfulness; thus, ‘location, location, location’ is as true as day. 
          This drives our discussion topic today:
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
    name: 'landLocationCard',

    filters: {
      sizeUp(text){
        return text.slice(0, 200) + '...'
      }
    },

    methods:{
      readMore(){
        let url = '/blog/why-land-location-matters'
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
  