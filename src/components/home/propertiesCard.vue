<template>
  <div class="pale-blue py-4">
    <div class="d-flex justify-center mt-4 align-center heading blue--text" style="z-index: 1;">
      Available Properties 
    </div>
    <v-row class="mb-4">  
      <v-col class="col-5 offset-1">
        <diani-crystal />
      </v-col>
      <v-col class="col-5">
        <diani-sunrise />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import propertyCard from "./propertyCard.vue"
  import dianiCrystal from "../properties/dianiCrystal.vue"
  import dianiSunrise from "../properties/dianiSunrise.vue"

  export default{
    name: 'propertiesCard',
    components:{
      propertyCard,
      dianiCrystal,
      dianiSunrise
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