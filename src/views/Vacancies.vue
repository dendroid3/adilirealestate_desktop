<template>
  <div>
    <title-strip :title="`My Vacancies`" :add_url ="`/add_land`" :mini_tab="false" :click_url="`/account/land`" />
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
          <template v-slot:item="{ item }">
            <tr
            >
              <td class="red-border">
                {{ item.property }}
              </td>
              <td>{{ item.type }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.tenants }}</td>
              <td>{{ item.rent }}</td>
              <td>
                <v-btn
                class="green white--text"
                  dense
                  x-small
                  inset
                  ripple
                > occupy
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table> 
      </v-card>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  import titleStrip from "../components/dashboard/titleStrip.vue"
  export default {
    name: 'Vacancies',
    components:{
      titleStrip
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
          { text: 'Type', value: 'type' },
          {
            text: 'Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Tenants', value: 'tenants' },
          { text: 'Rent', value: 'rent' },
          { text: 'Action' },
        ],
      }
    }
  }
</script>
