<template>
  <div>
    <div class="d-flex justify-center mt-4 align-center" style="font-size: 2rem; color: red; z-index: 1;">
      Available Properties 
    </div>
    <v-row>  
      <v-col class="col-4 offset-2">
        <diani-crystal />
      </v-col>
      <v-col class="col-4">
        <diani-crystal />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import propertyCard from "./propertyCard.vue"
  import dianiCrystal from "../properties/dianiCrystal.vue"
  export default{
    name: 'propertiesCard',
    components:{
      propertyCard,
      dianiCrystal
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