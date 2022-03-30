<template lang="html">
  <v-row class="d-flex justify-center py-2 no-gutters">
    <v-col class="col-1 rounded blue darken-2 d-flex justify-center" :class="{
      'blue': (getPropertiesView.current_page - 1 != 0),
      'grey': (getPropertiesView.current_page - 1 == 0),
    }" @click="go(getPropertiesView.current_page - 1)">
      <v-icon small class="white--text" v-if="getPropertiesView.last_page > 1">
        mdi-arrow-left
      </v-icon>
    </v-col>
    <v-col class="col-1 rounded  white--text darken-2 text-center mx-1" v-for="link in first_links" :key="link" :class="{
      'blue': link != getPropertiesView.current_page,
      'grey': link == getPropertiesView.current_page,
    }" @click="go(link)">
      {{!(link == fetching_link) ? link : null}}
      <v-progress-circular
      v-if="link == fetching_link"
      indeterminate
      color="white"
      size="20"
      ></v-progress-circular>
    </v-col>
    <v-col class="col-1 rounded grey white--text darken-2 text-center mx-1" v-if="!mid_dots">
      {{getPropertiesView.current_page}}
    </v-col>
    <v-col class="col-1 rounded grey white--text darken-2 text-center mx-1" v-if="mid_dots && this.getPropertiesView.last_page>3"  @click="go(Math.floor (getPropertiesView.last_page/2))">
      {{'...'}}
    </v-col>
    <v-col class="col-1 rounded  white--text darken-2 text-center mx-1" v-for="link in last_links" :key="link" :class="{
      'blue': link != getPropertiesView.current_page,
      'grey': link == getPropertiesView.current_page,
    }" @click="go(link)">
      {{!(link == fetching_link) ? link : null}}
      <v-progress-circular
      v-if="link == fetching_link"
      indeterminate
      color="white"
      size="20"
      ></v-progress-circular>
    </v-col>
    <v-col class="col-1 rounded blue white--text darken-2 d-flex justify-center" :class="{
        'blue': (getPropertiesView.current_page != getPropertiesView.last_page),
        'grey': (getPropertiesView.current_page == getPropertiesView.last_page),
      }" @click="go(getPropertiesView.current_page + 1)">
      <v-icon small class="white--text" v-if="getPropertiesView.last_page > 1">
        mdi-arrow-right
      </v-icon>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'linksStrip',
  computed: {
    ...mapGetters(['getPropertiesView']),
    first_links(){
      if(this.getPropertiesView.last_page > 3){
        return 3
      } else {
        return this.getPropertiesView.last_page
      }
    },
    last_links(){
      const values = []
      for (let index = 4; index <= this.getPropertiesView.last_page; index++) {
        values.push(index)
      }
      return values.splice(-3)
    },
    mid_dots(){
      if(
        this.getPropertiesView.last_page>3 &&
        this.getPropertiesView.current_page>3 &&
        this.getPropertiesView.last_page - 2 > this.getPropertiesView.current_page
      ){
        return false
      } else {
        return true
      }
    }
  },
  data(){
    return {
      fetching_link: false
    }
  },
  methods: {
    ...mapActions(['fetchVacancies']),
    go(link){
      this.fetching_link = link
      this.fetchVacancies({page: link}).then(() => {
        this.fetching_link = false
      })
    }
  }
}
</script>
