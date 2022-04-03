<template lang="html">
  <div>
    <title-strip :title="`Logs`" :mini_tab="false" :click_url="`/account/units`" />

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
          :items="logs"
          :items-per-page="5"
          :search="search"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td class="green-border">{{ item.action }}</td>
              <td>{{ item.affected_type }}</td>
              <td>{{ item.affected_item }}</td>
              <td>{{ item.created_at }}</td>
              <td>
                <v-btn
                  class="red white--text"
                  dense
                  x-small
                  inset
                  ripple
                > 
                  delete
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
    name: 'Logs',
    components: {
      titleStrip
    },
    data(){
      return {
        headers: [
          {
            text: 'Action',
            align: 'start',
            sortable: true,
            value: 'action',
          },
          { text: 'Affected Type', value: 'affected_type' },
          { text: 'Affected Item', value: 'affected_item' },
          { text: 'Date', value: 'created_at' },
          { text: 'Action', value: null },
        ],
        logs: [
          {
            action: 'Addition',
            affected_type: 'Rental',
            affected_item: 'Nyeri Townhouse',
            created_at: '2022-2-4 17:01:45'
          },
          {
            action: 'Addition',
            affected_type: 'For Sale',
            affected_item: 'Nyeri Duplex',
            created_at: '2022-3-4 17:01:45'
          },
          {
            action: 'Mark sold',
            affected_type: 'Land',
            affected_item: 'King`ong`o quater plot',
            created_at: '2022-1-4 17:01:45'
          }
        ]
      }
    }
  }
</script>
