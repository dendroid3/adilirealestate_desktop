<template lang="html">
  <div class="no-gutters" style="margin-bottom: 5rem;">
    <div class="d-flex align-center justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;" v-observe-visibility="visibilityChanged">
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
  import propertyCard from "../../components/home/propertyCard.vue"
  export default {
    name: 'ViewAllProperties',
    components:{
      propertyCard
    },
    data(){
      return {
        count: 30
      }
    }
  }
</script>
