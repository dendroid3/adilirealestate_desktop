<template lang="html">
  <div>
    <v-row class="d-flex grey lighten-2 align-center no-gutters">
      <v-col class="col-9 pl-4 backg--text" @click="goClickUrl"> {{title}}
      </v-col>
      <v-col class="col-3 d-flex justify-end align-center px-4">
        <v-icon class="mx-1" @click="add" v-if="add_url">
          mdi-plus  
        </v-icon>
      </v-col>
      
      <div class="w-100 d-flex justify-center" v-if="mini_tab">
        <div class="mx-4 bold" >
          <v-btn class="white--text" small color="rgba(21,110,82,1)" @click="showOccupied"
          :disabled="((getUnitsFilter === 0) && title == 'my units') || ((getPropertiesFilter === 1) && title == 'my properties')">
            occupied
          </v-btn>
        </div>
        <div class="mx-4 bold mb-4" > 
          <v-btn class="white--text" small color="red" @click="showVacant"
          :disabled="((getUnitsFilter === 1) && title == 'my units')  || ((getPropertiesFilter === 0) && title == 'my properties')">
            vacant
          </v-btn>
        </div>
      </div>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'titleStrip',
  props: [
    'title',
    'mini_tab',
    'add_url',
    'click_url'
  ],
  computed:{
    ...mapGetters(['getUnitsFilter', 'getPropertiesFilter'])
  },
  methods: {
    ...mapActions(['setUnitsFilter', 'setPropertiesFilter']),
    add(){
      this.$router.push(this.add_url)
    },
    goClickUrl(){
      this.$router.push(this.click_url)
    },
    showOccupied(){
      if(this.title == 'my units'){
        this.setUnitsFilter(0)
      }
        this.setPropertiesFilter(0)

    },
    showVacant(){
      if(this.title == 'my units'){
        this.setUnitsFilter(1)
        this.setPropertiesFilter(1)
      }
    }
  }
}
</script>
