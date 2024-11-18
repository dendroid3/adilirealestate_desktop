<template>
  <div class="pale-blue py-4">
    <div class="d-flex justify-center mt-4 align-center heading blue--text" style="z-index: 1;">
      Available Properties 
    </div>
    <v-row class="mb-4">  
      <v-col class="col-1"></v-col>
      <v-col class="col-10">
        <v-row>
          <v-col class="col-4">
            <diani-crystal />
          </v-col>
          <v-col class="col-4">
            <diani-sunrise />
          </v-col>
          <v-col class="col-4">
            <diani-sunrise-two />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-1"></v-col>
    </v-row>
  </div>
</template>
<script>
  import propertyCard from "./propertyCard.vue"
  import dianiCrystal from "../properties/dianiCrystal.vue"
  import dianiSunrise from "../properties/dianiSunrise.vue"
  import dianiSunriseTwo from "../properties/dianiSunriseTwo.vue"

  export default{
    name: 'propertiesCard',
    components:{
      propertyCard,
      dianiCrystal,
      dianiSunrise,
      dianiSunriseTwo
    },
    data(){
      return{
        counter: 1
      }
    },
    methods:{
      viewAll(){
        this.$router.push('/properties')
      }
    }
  }
</script>