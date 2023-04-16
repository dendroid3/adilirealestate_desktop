<template lang="html">
    <div class="rounded main_blog">
      <v-row class="no-gutters grey lighten-2 rounded pa-1">
        <v-col class="col-8">
          <v-col class="col-12 d-flex justify-center text--bold" style="font-weight: 900;">
            <h2>{{"Process of Buying Land"}}</h2>
          </v-col>
          <v-col class="col-12 text--bold" style="font-weight: 900;">
            <h5>
                A few malicious land-selling enterprises have painted the buying process to be confusing. 
                However, the confusion is a deliberate tactic, “if you cannot convince them, confuse them.” 
                The process of buying land need not be rocket science, and if it seems so, then it should be a red flag, other red flags here. 
                Here are the ten steps to get you to the `land owner` status.
               <v-btn x-small class="success ml-1" @click="readMore">
                read more 
              </v-btn>
            </h5>
          </v-col>
        </v-col>
        <v-col class="col-4">
          <v-img class="img rounded lighten-4 mr-1"
          :src="require(`../../assets/genuine.jpeg`)"
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
    name: 'howtobuyCard',
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
  