<template lang="html">
    <div class="rounded main_blog">
      <v-row class="no-gutters grey lighten-2 rounded pa-1">
        <v-col class="col-8">
          <v-col class="col-12 d-flex justify-center text--bold" style="font-weight: 900;">
            <h2>{{"Land Location: Why Strategic Land Location Matters"}}</h2>
          </v-col>
          <v-col class="col-12 text--bold" style="font-weight: 900;">
            <h5>
                Land is homogeneous across large tracks; equally sized parcels of land should therefore, ideally, be worth the same, except they are not. 
                Different plots of land may differ in their value despite being of the same size, fertility and climate. 
                This difference is informed by several factors such as its size, proximity to amenities, underground natural resources but chiefly by its location. 
                This is the reason why an acre in the leafy suburbs of Nairobi is several folds more expensive that an acre in, say, Mandera. 
                Clichés get to be clichés since they have been deemed worth repeating having proven their truthfulness; thus, ‘location, location, location’ is as true as day. 
                This drives our discussion topic today: 
                <b><i>why is land location important? </i></b> 
               <v-btn x-small class="success ml-1" @click="readMore">
                read more 
              </v-btn>
            </h5>
          </v-col>
        </v-col>
        <v-col class="col-4">
          <v-img class="img rounded lighten-4 mr-1"
          :src="require(`../../assets/location.jpg`)"
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
    name: 'landLocationCard',
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
  