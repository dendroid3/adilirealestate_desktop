<template lang="html">
  <div>
    <!-- <user-card /> -->
    <title-strip :title="`My Properties`" :add_url ="`add_property`" :mini_tab="false" :click_url="`/account/properties`" />
    <div class="dashboard-section-wrapper">
      <property-card v-for="my_property in getMyProperties" :key="my_property.id" :property="my_property" />
      <div v-if="!getMyProperties[0]"> 
        <empty-here />
        <p class="text-center text-grey">
          {{"You have listed properties no units yet."}}
        </p>
      </div>
    </div>
    
    <title-strip :title="`My Units`" :mini_tab="true" :click_url="`/account/units`"/>
    <!-- {{getMyUnits}} -->
    <div class="dashboard-section-wrapper">
      <unit-card  v-for="my_unit in units" :key="my_unit.id" :unit="my_unit" />
      <div v-if="!units[0]"> 
        <empty-here />
        <p class="text-center text-grey">
          {{"You have listed no "}}
          {{ getUnitsFilter ? " vancant  " : " occupied "}}
          {{"units."}} <br>
          {{" Press "}}
          <v-btn 
          small
          class="white--text"
          :class="{
            'red': !getUnitsFilter,
            'success': getUnitsFilter
          }">
          {{ getUnitsFilter ? " occupied " : " vancant "}}
          </v-btn>
          {{" above."}}

        </p>
      </div>
    </div>

    <footer-strip />

  </div>
</template>
<script>
import userCard from '../components/dashboard/userCard.vue'
import dashboardTab from '../components/dashboard/dashboardTab.vue'
import titleStrip from '../components/dashboard/titleStrip.vue'
import propertyCard from '../components/dashboard/propertyCard.vue'
import unitCard from '../components/dashboard/unitCard.vue'
import footerStrip from '../components/home/footerStrip.vue'
import emptyHere from '../components/widgets/emptyHere.vue'


import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  components:{
    userCard,
    dashboardTab,
    titleStrip,
    propertyCard,
    unitCard,
    emptyHere,
    footerStrip
  },
  computed:{
    ...mapGetters(['getMyProperties', 'getMyUnits', 'getUnitsFilter']),
    units(){
      // if(!this.getMyUnits){
      //   return
      // }
      const units = this.getMyUnits
      const filtered_units =  units.filter((unit) =>  (
        unit.vacancy == Number(this.getUnitsFilter)
      ))
      return filtered_units
    }
  },
  data(){
    return {
      fetching_my_properties: true,
      fetching_my_units: true
    }
  },
  methods: {
    ...mapActions(['fetchMyProperties', 'fetchMyUnits']),
    async boot(){
      try{
        this.fetchMyProperties()
        this.fetching_my_properties = false
        this.fetchMyUnits()
        this.fetching_my_units = false

      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted(){
    this.boot()
  }
}
</script>
<style lang="css" scoped>
  .dashboard-section-wrapper{
    max-height: 70vh;
    overflow-y: scroll;
  }
</style>
