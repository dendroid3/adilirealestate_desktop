<template lang="html">
  <div>
    <title-strip :title="`my units`" :mini_tab="true" :click_url="`/account/units`" />
    <div>
      <unit-card  v-for="my_unit in units" :key="my_unit.id" :unit="my_unit" />
      <div v-if="!getMyUnits[0]"> 
        <empty-here />
        <p class="text-center text-grey">
          {{"You have listed no units yet."}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import titleStrip from '../components/dashboard/titleStrip.vue'
import unitCard from '../components/dashboard/unitCard.vue'
import emptyHere from '../components/widgets/emptyHere.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'MyUnits',
  components: {
    titleStrip,
    unitCard,
    emptyHere
  },
  computed:{
    ...mapGetters(['getMyUnits', 'getUnitsFilter']),
    units(){
      const units = this.getMyUnits
      const filtered_units =  units.filter((unit) =>  (
        unit.vacancy == Number(this.getUnitsFilter)
      ))
      return filtered_units
    }
  }
}
</script>
