<template lang="html">
  <div class="blue lighten-4 wrapper rounded">
    <div class="text-end w-100">
      <v-icon @click="toogleInfoBox({status: false})" class="red--text">
        mdi-close
      </v-icon>
    </div>
    <div class="text-center mb-2">
      {{getInfoBoxDetails.information}}
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'infoBox',
  computed:{
    ...mapGetters(['getInfoBoxDetails'])
  },
  methods:{
    ...mapActions(['toogleInfoBox'])
  }
}
</script>
<style lang="css" scoped>
  .wrapper{
    position: fixed;
    bottom: 0.5rem;
    width: calc(100vw - 1rem);
    left: 0.5rem;
  }
</style>
