<template>
    <div class="rounded main_blog">
      <v-card class="grey lighten-4">
        <v-card-title class="d-flex justify-center text-center">
          <p class="my-0" style="width: 100%;">
            Land Processes: 
          </p> <br>
          <p class="my-0">
            Process of Buying Land
          </p>
        </v-card-title>
    
        <v-img class="rounded"
          :src="require(`../../assets/genuine.jpeg`)"
          :aspect-ratio="2/1"
          contain
        />

        <v-card-text>
          {{ `
            A few malicious land-selling enterprises have painted the buying process to be confusing. 
            However, the confusion is a deliberate tactic, “if you cannot convince them, confuse them.” 
            The process of buying land need not be rocket science, and if it seems so, then it should be a red flag, other red flags here. 
            Here are the ten steps to get you to the 'land owner' status.
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
    name: 'howtobuyCard',
    filters: {
      sizeUp(text){
        return text.slice(0, 200) + '...'
      }
    },


    methods:{
      readMore(){
        let url = '/blog/process-of-buying-land'
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
  