<template>
  <div class="no-gutters" style="margin-bottom: 5rem;">
    <div class="d-flex align-center justify-center mt-4 mb-2 animate__animated animate__zoomIn heading blue--text">
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
  import dianiCrystal from '../../components/properties/dianiCrystal.vue';
  import dianiSunrise from '../../components/properties/dianiSunrise.vue';

  export default {
    name: 'ViewAllProperties',
    components:{
      dianiCrystal, dianiSunrise
    },
    data(){
      return {
        count: 30
      }
    }
  }
</script>
