<template lang="html">
  <div>
    <title-strip :title="`My Properties`" :add_url ="`/add_property`" :mini_tab="false" :click_url="`/account/properties`" />
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
              :items="getMyProperties"
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
                
                :class="{
                'red-border  transparent lighten-4': item.vacancy,
                'green': !item.vacancy
                }">
                  <td @click="goProperty(item)" class="green-border">{{ item.name }}</td>
                  <td @click="goProperty(item)" >{{ item.type }}</td>
                  <td @click="goProperty(item)" >{{ item.location }}</td>
                  <td @click="goProperty(item)" >{{ item.tenants }}</td>
                  <td @click="goProperty(item)" >{{ item.units_count }}</td>
                  <td @click="goProperty(item)" >{{ item.units_count }}</td>
                  <td @click="goProperty(item)" >{{ item.vacancies_count }}</td>
                  <td>
                    <v-btn
                      class="red white--text"
                      dense
                      x-small
                      inset
                      ripple
                    > 
                      vacate
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table> 
        </v-card>
      <!-- <property-card v-for="my_property in getMyProperties" :key="my_property.id" :property="my_property" /> -->
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
  },
    data () {
      return {
        search: '',
        headers: [
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
          { text: 'Units', value: 'units_count' },
          { text: 'Vacancies', value: 'vacancies_count' },
          { text: 'Status', value: 'null' },
        ],
      }
    },
    methods:{
      goProperty(property){
        console.log('property')
        console.log(property)
        console.log('property')
        this.$router.push('/property/' + property.id)
      },
    }
}
</script>
<style lang="css" scoped>

  .red-border{
    border-left: solid 4px red !important;
  }
  .green-border{
    border-left: solid 4px green;
  }
  .rounded-major{
    border-top-left-radius: 5rem;
  }
  
</style>