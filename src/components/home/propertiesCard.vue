<template>
  <div>
    <div class="d-flex justify-center mt-4 align-center heading blue--text" style="z-index: 1;">
      Available Properties 
    </div>
    <v-row>  
      <v-col class="col-4 offset-2">
        <diani-crystal />
      </v-col>
      <v-col class="col-4">
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