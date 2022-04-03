<template lang="html">
  <div>
    <title-strip :title="`Bookings on My Properties`" :mini_tab="false" :click_url="`/account/bookings`" />
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
          :items="bookings"
          :items-per-page="5"
          :search="search"
        >
          <template v-slot:header.name="{ header }">
            <v-icon x-small class="red--text">
              mdi-home
            </v-icon>
            {{ header.text }}
          </template>
          <template v-slot:header.user_name="{ header }">
            <v-icon x-small class="red--text">
              mdi-account
            </v-icon>
            {{ header.text }}
          </template>
          <template v-slot:header.phone_number="{ header }">
            <v-icon x-small class="red--text">
              mdi-phone
            </v-icon>
            {{ header.text }}
          </template>
          <template v-slot:header.email="{ header }">
            <v-icon x-small class="red--text">
              mdi-mail
            </v-icon>
            {{ header.text }}
          </template>
          <template v-slot:header.created_at="{ header }">
            <v-icon x-small class="red--text">
              mdi-clock
            </v-icon>
            {{ header.text }}
          </template>
          <template v-slot:item="{ item }">
            <tr>
              <td class="green-border">{{ item.name }}</td>
              <td>{{ item.user_name }}</td>
              <td>{{ item.phone_number }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.created_at }}</td>
              <td>
                <v-btn
                  class="mx-1 success white--text"
                  dense
                  x-small
                  inset
                  ripple
                > 
                  call
                </v-btn>
                <v-btn
                  class="mx-1 success white--text"
                  dense
                  x-small
                  inset
                  ripple
                > 
                  text
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
    name: 'Bookings',
    components: {
      titleStrip
    },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Property Name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Username', value: 'user_name' },
          { text: 'Phone Number', value: 'phone_number' },
          { text: 'Email', value: 'email' },
          { text: 'Booked on', value: 'created_at' },
          { text: 'Action', value: null },
        ],
        bookings:[
          {
            name: 'Some name',
            user_name: 'Dende Wanjo',
            phone_number: '+254788909988',
            email: 'denniswanjohi.m@live.com',
            created_at: '2022-04-17 18:02:00',
          },
          {
            name: 'Some name',
            user_name: 'Dende Wanjo',
            phone_number: '+254788909988',
            email: 'denniswanjohi.m@live.com',
            created_at: '2022-04-17 18:02:00',
          },
        ]
      }
    },
  }
</script>
