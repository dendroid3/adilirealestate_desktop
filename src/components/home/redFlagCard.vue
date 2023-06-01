<template>
    <div class="rounded main_blog">
      <v-card class="grey lighten-4">
        <v-card-title class="d-flex justify-center text-center">
          <p class="my-0 sub-heading"  style="width: 100%;">
            Land Fraud: 
          </p> <br>
          <p class="my-0">
            Red Flags when Buying Land
          </p>
        </v-card-title>
    
        <v-img class="rounded"
          :src="require(`../../assets/redflag.jpeg`)"
          :aspect-ratio="2/1"
          contain
        />

        <v-card-text>
          <span class="body-text">
          {{ `
          Buying land is currently all the hype -  many people are in the pursuit to purchase land.
          This trend is informed by the many benefits that owning land has, some of these benefits are discussed in our other blogs here.
          Scammers and fraudsters have also taken note of this trend are keen to reap where they did not sow.
          This has seen land-buying related scamming schemes rise, with some being of unimaginable scales such like the one run by Gakuyo Real Estate worth over 
          ` | sizeUp }}
          </span>
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
    name: 'redFlagCard',

    filters: {
      sizeUp(text){
        return text.slice(0, 200) + '...'
      }
    },

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
  