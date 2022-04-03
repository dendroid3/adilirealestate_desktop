<template lang="html">
  <div>
    <title-strip :title="`My Land`" :add_url ="`/add_land`" :mini_tab="false" :click_url="`/account/land`" />
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
          :items="lands"
          :items-per-page="5"
          :search="search"
        >
        <template v-slot:header.location="{ header }">
          <v-icon x-small class="red--text">
            mdi-pin
          </v-icon>
          {{ header.text }}
        </template>
          <template v-slot:item="{ item }">
            <tr>
              <td class="green-border">{{ item.name }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.size }}</td>
              <td>{{ item.units }}</td>
              <td>{{ item.enquiries }}</td>
              <td>{{ item.status }}</td>
              <td>
                <v-btn v-if="item.status == 'on sale'"
                  class="red white--text"
                  dense
                  x-small
                  inset
                  ripple
                > 
                  mark sold
                </v-btn>
              </td>
            </tr>
          </template>
        </v-data-table> 
    </v-card>
  </div>
</template>
<script>
  import titleStrip from "../components/dashboard/titleStrip.vue"

  export default{
    name: 'Lands',
    components:{
      titleStrip
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
          { text: 'Location', value: 'location' },
          { text: 'Size', value: 'size' },
          { text: 'Units', value: 'units' },
          { text: 'Enquiries', value: 'enquiries' },
          { text: 'Status', value: 'status' },
          { text: 'Action', value: null },
        ],
        lands:[
          {
            name: 'Some name',
            location: 'Some Location',
            size: '50X50',
            units: 'feet',
            enquiries: 3,
            status: 'on sale'
          },
          {
            name: 'Some other name',
            location: 'Some other Location',
            size: '2',
            units: 'acres',
            enquiries: 14,
            status: 'sold'
          }
        ]
      }
    },
  }
</script>
