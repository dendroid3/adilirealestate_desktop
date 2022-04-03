<template lang="html">
  <div>
    <title-strip :title="`My Properties on Sale`" :add_url ="`/add_property_for_sale`" :mini_tab="false" :click_url="`/account/bookings`" />
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
        :items="onsale"
        :items-per-page="5"
        :search="search"
      >
        <template v-slot:item="{ item }">
          <tr
          >
            <td class="red-border">
              {{ item.property }}
            </td>
            <td>{{ item.type }}</td>
            <td>{{ item.location }}</td>
            <td>{{ item.enquiries }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.status }}</td>
            <td>
              <v-btn
              class="green white--text"
                dense
                x-small
                inset
                ripple
              > mark sold
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
    name: 'Onsale',
    components:{
      titleStrip
    },
    data(){
      return {
        search: '',
        headers: [
          { text: 'Property', value: 'property' },
          { text: 'Type', value: 'type' },
          {
            text: 'Location',
            align: 'start',
            sortable: true,
            value: 'location',
          },
          { text: 'Enquiries', value: 'enquiries' },
          { text: 'Price', value: 'price' },
          { text: 'Status', value: 'status' },
          { text: 'Action', value: null },
        ],
        onsale: [
          {
            property: 'Some Name',
            type: 'Bungalow',
            location: 'Kisumu',
            enquiries: 6,
            price: 1200000,
            status: 'on sale'
          },
          {
            property: 'Some Other Name',
            type: 'Duplex',
            location: 'Kakamega',
            enquiries: 16,
            price: 3400000,
            status: 'on sale'
          },
          
          {
            property: 'Some Name Three',
            type: 'Two Bedroom House',
            location: 'Nyeri',
            enquiries: 6,
            price: 8100000,
            status: 'on sale'
          }
        ]
      }
    }
  }
</script>
