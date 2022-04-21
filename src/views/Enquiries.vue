<template lang="html">
  <div>
    <title-strip :title="`Enquiries`" :mini_tab="false" :click_url="`/account/bookings`" />
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
          :items="enquiries"
          :items-per-page="5"
          :search="search"
        >
          <template v-slot:header.created_at="{ header }">
            <v-icon x-small class="red--text">
              mdi-clock
            </v-icon>
            {{ header.text }}
          </template>
          <template v-slot:item="{ item }">

            

            <tr>
              <td class="green-border">{{ item.type }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.subject }}</td>
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
                  mark as replied
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
    name: 'Enquiries',
    components:{
      titleStrip
    },
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'Type',
            align: 'start',
            sortable: true,
            value: 'type',
          },
          { text: 'Name', value: 'name' },
          { text: 'Subject', value: 'subject' },
          { text: 'Name', value: 'user_name' },
          { text: 'Phone', value: 'phone_number' },
          { text: 'Email', value: 'email' },
          { text: 'Booked on', value: 'created_at' },
          { text: 'Action', value: null },
        ],
        enquiries: [
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          },
          {
            type: 'Property',
            name: 'King`ong`o Townhouse',
            subject: 'Question on Amenities',
            user_name: 'Dende Wanjohi',
            phone_number: '+2934859202',
            email: 'Dende@live.com',
            created_at: '2021-3-12 17:57:09'
          },
          
          {
            type: 'Land',
            name: 'Game Rock Plot',
            subject: 'Question on Water Access',
            user_name: 'Sire Boy',
            phone_number: '+2934593202',
            email: 'Sire.biy@gmail.com',
            created_at: '2021-3-13 13:37:04'
          }
        ]
      }
    }
  }
</script>
