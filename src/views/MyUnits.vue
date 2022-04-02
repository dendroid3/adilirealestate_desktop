<template lang="html">
  <div>
    <title-strip :title="`My Units`" :mini_tab="true" :click_url="`/account/units`" />
    <div>
        <v-card>
          <v-card-title class="d-flex justify-end">
            <v-text-field
              style="max-width: 15rem;"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              dense
              hide-details
            ></v-text-field>
          </v-card-title>
            <v-data-table
              dense
              :headers="headers"
              :items="units"
              :items-per-page="5"
              :search="search"
              :item-class="{
                'red-border': vacancy,
                'green-border': !vacancy
              }"
            >
            <template v-slot:header.location="{ header }">
              <v-icon x-small class="red--text">
                mdi-pin
              </v-icon>
              {{ header.text }}
            </template>
              <template v-slot:item="{ item }">
                <tr
                >
                  <td :class="{
                  'red-border  ': item.vacancy_count > 0,
                  'green-border': !item.vacancy_count == 0
                  }">
                    {{ item.property }}
                  </td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.location }}</td>
                  <td>{{ item.tenants }}</td>
                  <td>{{ item.rent }}</td>
                  <td>
                    <v-btn
                    class="red white--text"
                      dense
                      x-small
                      inset
                      ripple
                    > vacate
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table> 
        </v-card>
      <!-- <unit-card  v-for="my_unit in units" :key="my_unit.id" :unit="my_unit" /> -->
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
    },
  },
  data(){
    return {
      search: '',
      headers: [
        { text: 'Property', value: 'units_count' },
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Type', value: 'type' },
        { text: 'Location', value: 'location' },
        { text: 'Tenants', value: 'tenants' },
        { text: 'Rent', value: 'rent' },
      ],
    }
  }
}
</script>

<style lang="css" scoped>

  .green-border{
    border-left: solid 4px green;
  }
  
</style>
