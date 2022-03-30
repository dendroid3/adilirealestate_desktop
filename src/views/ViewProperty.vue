<template lang="html">
  <div>
    <v-progress-circular
       v-if="!fetched"
      indeterminate
      :value="0"
      size="40"
      class="ml-2"
    ></v-progress-circular>
    <section v-if="fetched">
      <!-- {{getPropertyViewPage}} -->
      <div>
        <v-row class="d-flex grey lighten-2 align-center no-gutters">
          <v-col class="col-9 pl-4 backg--text">
            {{getPropertyViewPage.name}}
          </v-col>
        </v-row>
        <v-carousel
        style="z-index: 1;"
        class="pa-0 grey lighten-2"
        :continuous="true"
        :show-arrows="false"
        hide-delimiter-background
        height="270"
        >
          <v-carousel-item
          ripple
          class="pa-2 ma-0"
          active-class="red--text"
          v-for="(image, i) in getPropertyViewPage.images"
          :key="i">
            <v-img class="img rounded  lighten-4 ma-0"
            contain
            :aspect-ratio="1/1"
            :src="fixImageUrl(image.url)"
            />
          </v-carousel-item>
        </v-carousel>
        <!-- <v-btn @click="getUnitsDetailsFunc('Bedsitter')">
          xz
        </v-btn> -->
        <v-list
          class="grey stripped lighten-3"
          subheader
          two-line
        >          
        
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="'landlord:'"></v-list-item-title>

              <v-list-item-subtitle v-text="'name: ' + getPropertyViewPage.landlord.first_name + ' ' + getPropertyViewPage.landlord.last_name "></v-list-item-subtitle>
              <v-list-item-subtitle v-text="'number: 0' + getPropertyViewPage.landlord.phone_number"></v-list-item-subtitle>
              <v-list-item-subtitle >
                
              <v-icon class="success--text mr-4" @click="goWhatsapp">
                mdi-whatsapp
              </v-icon>
              <a :href="`sms: 0` + getPropertyViewPage.landlord.phone_number" style="text-decoration: none;"> 
                <v-icon class="black--text mr-4">
                  mdi-message
                </v-icon>
              </a>
              <a :href="`tel: +254` + getPropertyViewPage.landlord.phone_number" style="text-decoration: none;"> 
                <v-icon class="blue--text mr-4">
                  mdi-phone
                </v-icon>
              </a>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="'type:'"></v-list-item-title>

              <v-list-item-subtitle v-text="getPropertyViewPage.type"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title v-text="'location:'"></v-list-item-title>

              <v-list-item-subtitle v-text="getPropertyViewPage.location"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item v-for="detail in getPropertyViewPage.details" :key="detail.value">
            <v-list-item-content>
              <v-list-item-title v-text="detail.value + ':'"></v-list-item-title>

              <v-list-item-subtitle v-text="detail.value"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-row class="no-gutters">
              <v-col class="col-9">
                <v-list-item-content>
                  <v-list-item-title v-text="'units:'"></v-list-item-title>

                  <v-list-item-subtitle v-text="'types: ' + getPropertyViewPage.units.length"></v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>

          </v-list-item>
          <!-- {{filteredUnits(getPropertyViewPage.units)}} -->
          <div class="px-4 stripped" 
            v-for="unit in getPropertyViewPage.units"
            :key="unit.type">
            <section>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="unit[0].type + 's'"></v-list-item-title>

                  <v-list-item-subtitle v-text="'quantity: ' + unit.length"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-carousel
              style="z-index: 1;"
              class="pa-0"
              :continuous="true"
              :show-arrows="false"
              hide-delimiter-background
              height="270"
              >
                <v-carousel-item
                ripple
                class="pa-0 ma-0"
                active-class="red--text"
                v-for="(image, i) in unit[0].images"
                :key="i">
                  <v-img class="img rounded  lighten-4 ma-0"
                  contain
                  :aspect-ratio="1/1"
                  :src="fixImageUrl(image.url)"
                  />
                </v-carousel-item>
              </v-carousel>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="'rent:'"></v-list-item-title>

                  <v-list-item-subtitle v-text="unit[0].rent"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="'tenants/unit:'"></v-list-item-title>

                  <v-list-item-subtitle v-text="unit[0].tenants"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="'names:'"></v-list-item-title>

                  <v-list-item-subtitle v-text="unit[0].name + ' to ' + unit[(unit.length - 1)].name"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-for="detail in getUnitsDetails(unit.type)" :key="detail.value">
                <v-list-item-content>
                  <v-list-item-title v-text="detail.value + ':'"></v-list-item-title>

                  <v-list-item-subtitle v-text="detail.value"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              
              <div v-for="single_unit in unit" :key="single_unit.id">
                <unit-card :unit="single_unit" :bookable="true"/>
              </div>
            </section>
          </div>

        </v-list>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import unitCard from '../components/dashboard/unitCard.vue'
export default {
  name: 'ViewProperty',
  components:{
    unitCard
  },
  computed:{
    ...mapGetters(['getPropertyViewPage'])
  },
  data(){
    return {
      fetched: false
    }
  },
  methods: {
    ...mapActions(['fetchViewProperty']),
    fixImageUrl(url){
      return process.env.VUE_APP_API + '/storage/' + url
    },
    getUnitsDetails(type){
      return
      if(!this.getPropertyViewPage.unit_types_details[0]){
        return
      }
      const all_details = []
      this.getPropertyViewPage.unit_types_details.forEach(units_details => {
        if(units_details[0]){
          const details = units_details.filter((unit_detail) => unit_detail[0].type == type)
          all_details.push(details)
        }
      });
      return all_details
    },

    getUnitsDetailsFunc(type){
      // console.log(this.getPropertyViewPage.unit_types_details)
      // if(!this.getPropertyViewPage.unit_types_details[0]){
      //   console.log('nkr')
      // }
      const all_details = []
      // console.log(this.getPropertyViewPage.unit_types_details)
      this.getPropertyViewPage.unit_types_details[0].forEach(units_details => {
        console.log('units_details')
        console.log(units_details)
        console.log('units_details')
        // if(units_details[0]){
          const details = units_details.filter((unit_detail) => true)
          console.log('dfor')
          all_details.push('details')
        // }
      });
      console.log(all_details)
    },
    goWhatsapp(){
      window.location = 'https://wa.me/+254' + this.getPropertyViewPage.landlord.phone_number
    }
  },
  mounted(){
    console.log(this.$router.history.current.params.id)

    this.fetchViewProperty({property_id: this.$router.history.current.params.id}).then((res) => {
      this.fetched = res
    })
  }
}
</script>

<style lang="css" scoped>

.stripped{
  background-color: #E0E0E0;
}
.stripped:nth-child(even){
  background-color:#dbc8c8;
}
  
</style>
