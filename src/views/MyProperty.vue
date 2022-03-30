<template lang="html">
  <div>
    <v-progress-circular
       v-if="!loaded"
      indeterminate
      :value="0"
      size="40"
      class="ml-2"
    ></v-progress-circular>
    <section v-if="loaded">
      <div>
        <v-row class="d-flex grey lighten-2 align-center no-gutters">
          <v-col class="col-19 pl-4 backg--text">
            {{getMyProperty.name}}
          </v-col>
          <v-col class="col-3 d-flex justify-end align-center px-4">
            <!-- <v-icon small class="mx-1" @click="askDeleteProperty">
              mdi-delete  
            </v-icon> -->
          </v-col>
        </v-row>
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
          v-for="(image, i) in getMyProperty.images"
          :key="i">
            <v-img class="img rounded  lighten-4 ma-0"
            contain
            :aspect-ratio="1/1"
            :src="fixImageUrl(image.url)"
            />
          </v-carousel-item>
        </v-carousel>
          <v-list
          class="grey lighten-3"
          subheader
          two-line
        >          
          <v-list-item
            class="stripped"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'type:'"></v-list-item-title>

              <v-list-item-subtitle v-text="getMyProperty.type "></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            class="stripped"
          >
            <v-list-item-content>
              <v-list-item-title v-text="'location:'"></v-list-item-title>

              <v-list-item-subtitle v-text="getMyProperty.location"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            class="stripped"
            v-if="getMyProperty.units"
          >
            <v-row class="no-gutters">
              <v-col class="col-9">
                <v-list-item-content>
                  <v-list-item-title v-text="'units:'"></v-list-item-title>

                  <v-list-item-subtitle v-text="'types: ' + getMyProperty.units.length"></v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
              <v-col class="col-3 d-flex align-center">
                <v-btn class="success" small @click="goAddUnit">
                  add units
                </v-btn>
              </v-col>

            </v-row>

          </v-list-item>
          <div class="px-4 stripped" 
            v-for="unit in getMyProperty.units"
            :key="unit.type">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="unit[0].type + 's'"></v-list-item-title>
                <v-list-item-subtitle v-text="'quantity: ' + unit.length"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <div class="px-4 red--text d-flex align-center "
            v-if="!unit[0].images[0]"
            >
              
              <v-col class="col-9 d-flex align-center">  
                <v-icon large class="red--text">
                  mdi-alert
                </v-icon>
                <span class="px-4">
                  No Images!
                </span>
              </v-col>
              <v-col class="col-3 d-flex align-center">
                <v-btn class="success" small @click="goAddImages(unit[0])">
                  add images
                </v-btn>
              </v-col>
            </div>
            <v-carousel
            style="z-index: 1;"
            class="pa-0"
            v-if="unit[0].images[0]"
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
                v-if="image"
                :aspect-ratio="1/1"
                :src="fixImageUrl(image.url)"
                />
              </v-carousel-item>
            </v-carousel>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="'rent'"></v-list-item-title>

                <v-list-item-subtitle v-text="unit[0].rent"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="'tenants/unit'"></v-list-item-title>

                <v-list-item-subtitle v-text="unit[0].tenants"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-text="'names'"></v-list-item-title>

                <v-list-item-subtitle v-text="unit[0].name + ' to ' + unit[(unit.length - 1)].name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
            <div v-for="single_unit in unit" :key="single_unit.id">
              <unit-card :unit="single_unit" />
            </div>
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
  name: 'MyProperty',
  components:{
    unitCard
  },
  computed:{
    ...mapGetters(['getMyProperty', 'getAddedProperty'])
  },
  data(){
    return {
      loaded: false
    }
  },
  methods: {
    ...mapActions(['fetchMyProperty', 'setAddedProperty', 'setAddPropertyStep', 'setAddedUnits', 'deleteProperty']),
    fixImageUrl(url){
      return process.env.VUE_APP_API + '/storage/' + url
    },
    goAddUnit(){
      this.setAddedProperty(this.getMyProperty)
      this.setAddPropertyStep(3)
      this.$router.push('/add_property')
    },
    goAddImages(units){
      console.log("units")
      console.log(units)
      console.log("units")
      this.setAddedUnits(units)
      this.setAddPropertyStep(4)
      this.$router.push('/add_property')
    },
    askDeleteProperty(){
      if(confirm("You are about to delete this property, proceed?")){
        this.deleteProperty({property_id: this.getMyProperty.id})
      }
    }
  },
  mounted(){
    console.log(this.$router.history.current.params.id)
    
      const details = {property_id: this.$router.history.current.params.id}
      this.fetchMyProperty(details).then((res) => {
        this.loaded = res
      })
  }
}
</script>
