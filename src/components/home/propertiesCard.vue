<template>
  <div>
    <div class="d-flex justify-center mt-4" style="font-size: 2rem; color: red;">
      Property Listings
    </div>
    <v-row class="no-gutters">  
      <v-col class="col-3">
      </v-col>
      <v-col class="col-3" v-for="c in counter" :key="c">
      <property-card />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import propertyCard from "./propertyCard.vue"
  export default{
    name: 'propertiesCard',
    components:{
      propertyCard
    },
    data(){
      return{
        counter: 2
      }
    }
  }
</script>