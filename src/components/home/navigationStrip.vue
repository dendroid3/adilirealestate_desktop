<template lang="html">
  <div>
    <div class="d-flex pa-1 w-100">
      <span class="heading">
        Vacancies
      </span>
      <v-spacer />
      <!-- <v-icon @click="toogle(true)" small class="grey  pa-1 rounded white--text" v-if="!updatingFilter">
        mdi-filter
      </v-icon> -->
      <v-progress-circular
        v-if="updatingFilter"
        indeterminate
        :value="0"
        size="25"
        class="ml-2"
      ></v-progress-circular>
      <!-- {{'getSetFilters.lowest_rent:'}}  -->
      <!-- {{getSetFilters}} -->
    </div>
    <div class="d-flex no-gutters px-2" style="overflow-x: scroll; z-index:990;">
    <v-col class="col-6" 
    v-if="getSetFilters.lowest_rent">
      <v-text-field
        small
        placeholder="lowest rent"
        v-model="getSetFilters.lowest_rent"
        @click:clear="checkNewFilter()"
        label="lowest rent"
        type="number"
        outlined
        clearable />
    </v-col>
    <v-col class="col-6"
    v-if="getSetFilters.highest_rent">
      <v-text-field
        placeholder="highest rent"
        v-model="getSetFilters.highest_rent"
        @click:clear="checkNewFilter()"
        label="highest rent"
        type="number"
        outlined
        clearable />
    </v-col>
    <v-col class="col-6"
    v-if="getSetFilters.location">
      <v-text-field
        placeholder="location"
        v-model="getSetFilters.location"
        @click:clear="checkNewFilter()"
        label="location"
        type="name"
        outlined
        clearable />
    </v-col>
    <v-col class="col-6"
    v-if="getSetFilters.type">
      <v-text-field
        placeholder="type"
        v-model="getSetFilters.type"
        @click:clear="checkNewFilter()"
        label="type"
        type="name"
        outlined
        clearable />
    </v-col>
    <v-col class="col-6" 
    v-if="getSetFilters.shared">
      <v-text-field
        placeholder="shared"
        v-model="getSetFilters.shared"
        @click:clear="checkNewFilter()"
        label="shared"
        type="name"
        outlined
        clearable />
    </v-col>
    </div>
    <div class="bold mx-4">
      {{getPropertiesView.current_page ? 'page ': null}} {{getPropertiesView.current_page}}
    </div>
    <div v-if="isFIlterOpen" class="full-page grey lighten-3 d-flex align-center">

      <div>
        <p class="px-4" style="font-size: 2.3rem;"> select filters</p>

        <v-col cols="12">
          <v-slider
            v-model="filter.lowest_rent"
            :max="20000"
            label="Lowest Rent"
            class="align-center"
          >
            <template v-slot:append>
              <v-text-field
                v-model="filter.lowest_rent"
                class="mt-0 pt-0"
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
        <v-col cols="12">
          <v-slider
            v-model="filter.highest_rent"
            :max="filter.lowest_rent + 20000"
            :min="filter.lowest_rent + 1000"
            label="Highest Rent"
            class="align-center"
          >
            <template v-slot:append>
              <v-text-field
                v-model="filter.highest_rent"
                class="mt-0 pt-0"
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
        </v-col>
        <div class="px-4">
          <v-select
          :items="getLocations"
          label="Location"
          outlined
          v-model="filter.location"
          ></v-select>
        </div>
        <div class="px-4">
          <v-select
          :items="typesOfUnits"
          label="Type"
          outlined
          v-model="filter.type"
          ></v-select>
        </div>
        <div class="d-flex px-4 align-center">
          <span class="mr-3">
            Shared:
            </span>
          <v-switch
            v-model="filter.shared"
          >
          </v-switch>
        </div>
        <div class="w-100 d-flex py-2 justify-space-between" style="width:100vw;">
          <span></span>
          <v-btn large class="white--text red" @click="toogle(false)">
            cancel
          </v-btn>
          <v-btn large class="white--text success" @click="requestFilteredVacancies" :loading="applying">
            apply
          </v-btn>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'navigationStrip',
  computed: {
    ...mapGetters(['getSetFilters', 'getPropertiesView', 'isFIlterOpen'])
  },
  data() {
    return{
      filter:{},
      getLocations: [
        'Embassy',
        'Bomas',
        'Nyeri view',
        'Nyeri town',
        "King'ong'o",
        "Skuta",
        "Classic",
        "Nyaribo",
        "Kangemi",
        'Nakuru'
      ],
      typesOfUnits:[
        'Shop',
        'Garage',
        'Hostel',
        'Office',
        'Bedsitter',
        'Warehouse',
        'Single Room House',
        'One Bedroom House',
        'Two Bedroom House'
      ],
      updatingFilter: false,
      applying: false
    }
  },
  methods: {
    ...mapActions(['fetchFilteredVacancies', 'toogleFilter', 'toogleWelcomeCard']),
    toogle(code){
      this.toogleFilter(code)
    },
    requestFilteredVacancies(){
      this.applying = true,
      this.fetchFilteredVacancies(this.filter).then((res) => {
        this.applying = res
        this.toogleFilter(res)
      })
    },
    checkNewFilter(code){
      this.updatingFilter = true
      const data = this.getSetFilters
      setTimeout(() => {
        console.log('after')
        console.log(this.getSetFilters)
        this.fetchFilteredVacancies(data).then((res) => {
          this.updatingFilter = res
        })
      }, 1000);
      this.toogleWelcomeCard(false)
      if(!code){
        this.fetchFilteredVacancies(this.getSetFilters).then((res) => {
          this.toogleFilter(res)
        })
      }
    }
  }
}
</script>
<style lang="css" scoped>
  .heading{
    font-size: 1.5rem;
    font-weight: 800;
    padding-left: 0.5rem;
  }
</style>
