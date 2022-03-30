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

        </v-list>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

import unitCard from '../components/dashboard/unitCard.vue'
export default {
  name: 'ViewUnit',
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
  background-color:#F5F5F5;
}
  
</style>
