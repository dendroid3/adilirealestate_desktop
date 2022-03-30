<template lang="html">
  <div>
    <title-strip :title="`my properties`" :add_url ="`add_property`" :mini_tab="false" :click_url="`/account/properties`" />
    <div>
      <property-card v-for="my_property in getMyProperties" :key="my_property.id" :property="my_property" />
      <div v-if="!getMyProperties[0]"> 
        <empty-here />
        <p class="text-center text-grey">
          {{"You have listed no properties yet."}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>

import titleStrip from '../components/dashboard/titleStrip.vue'
import propertyCard from '../components/dashboard/propertyCard.vue'
import emptyHere from '../components/widgets/emptyHere.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'MyProperties',
  components: {
    titleStrip,
    propertyCard,
    emptyHere
  },
  computed:{
    ...mapGetters(['getMyProperties', 'getPropertiesFilter']),
    properties(){
      const properties = this.getMyProperties
      const filtered_properties =  properties.filter((unit) =>  (
        unit.vacancy == Number(this.getPropertiesFilter)
      ))
      return filtered_properties
    }
  }
}
</script>
