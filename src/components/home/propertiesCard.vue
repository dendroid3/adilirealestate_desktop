<template>
  <div>
    <div class="d-flex justify-center mt-4 align-center" style="font-size: 2rem; color: red; z-index: 1;">
      Available Properties 
    </div>
    <v-row class="no-gutters">  
      <v-col class="col-6 offset-3">
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