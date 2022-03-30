<template>
  <div class="wrapper">
    <v-alert
      dismissible
      :value="getAlertBoxDetails.status"
      :class="{
        'pink': getAlertBoxDetails.code == 'error',
        'success': getAlertBoxDetails.code == 'success'
      }"
      dark
      border="top"
      transition="scroll-y-transition"
    >
    <div class="d-flex">
      
    <v-icon v-if="getAlertBoxDetails.code == 'error'">
      mdi-alert
    </v-icon>
    <v-icon v-if="getAlertBoxDetails.code == 'success'">
      mdi-check
    </v-icon>
    <div class="text-center" style="font-size: 0.8rem;">
      {{getAlertBoxDetails.information}}
    </div>
      </div>
    </v-alert>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'alertBox',
  computed:{
    ...mapGetters(['getAlertBoxDetails'])
  },
  data () {
    return {
      alert: true,
    }
  },
  methods:{
    ...mapActions(['toogleAlertBox'])
  },
  updated(){
    setTimeout(() => {
      this.toogleAlertBox({status: false})
    }, 2000);
  }
}
</script>
<style lang="css" scoped>
 .wrapper{
  position: fixed;
  top: 0;
  z-index: 999;
} 
  
</style>
