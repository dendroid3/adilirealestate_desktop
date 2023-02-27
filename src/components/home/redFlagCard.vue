<template>
    <div class="rounded main_blog">
      <v-row class="no-gutters grey lighten-2 rounded pa-1">
        <v-col class="col-8">
          <v-col class="col-12 d-flex justify-center text--bold" style="font-weight: 900;">
            <h2>{{"Red Flags when Buying Land"}}</h2> 
          </v-col>
          <v-col class="col-12 text--bold" style="font-weight: 900;">
            <h5>
                Buying land is currently all the hype -  many people are in the pursuit to purchase land.
                This trend is informed by the many benefits that owning land has, some of these benefits are discussed in our other blogs here.
                Scammers and fraudsters have also taken note of this trend are keen to reap where they did not sow.
                This has seen land-buying related scamming schemes rise, with some being of unimaginable scales such like the one run by Gakuyo Real Estate worth over 
                <b>1.5billion KES</b>
                and the more recent one of Lesedi Developers which conned unsuspecting land buyers upwards of a billion shillings.
                There are ways to ensure that you do not become part of these statistics.
                The following are some of the red flags that should help you to spot land scams and tips on how to avoid them.
               <v-btn x-small class="success ml-1" @click="readMore">
                read more 
              </v-btn>
            </h5>
          </v-col>
        </v-col>
        <v-col class="col-4">
          <v-img class="img rounded lighten-4 mr-1"
          :src="require(`../../assets/redflag.jpeg`)"
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
    name: 'redFlagCard',
    methods:{
      readMore(){
        let url = '/blog/red-flags'
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
  