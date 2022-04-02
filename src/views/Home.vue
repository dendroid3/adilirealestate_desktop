<template lang="html">
  <div>

    <navigation-strip id="top"/>
    <!-- {{getVacancies}} -->
    <v-row class="no-gutters">
      <v-col class="col-12">
        <div  v-for="vacancy in getVacancies" :key="vacancy.id">
          <div v-if="!vacancy.units">
            <vacancy-card :vacancy="vacancy" />
          </div>
          <div v-if="vacancy.units && vacancy.units[0]">
            <property-card :vacancy="vacancy" />
          </div>
    </div>
      </v-col>
    </v-row>
    <div v-if="!getVacancies[0]"> 
      <empty-here />
      <p class="text-center text-grey">
        {{"No Vacancies Listed"}}
      </p>
    </div>
    
    <links-strip />
    <div  style="position: fixed; right:0.25rem; bottom: 5rem; z-index:900; border-radius: 50%;" class="rounded purple pa-1" @click="goTop">
      <v-icon color="white">
        mdi-arrow-up
      </v-icon>
    </div>

    <footer-strip />
  </div>
</template>  
<script>
import navigationStrip from '../components/home/navigationStrip.vue'
import welcomeCard from '../components/home/welcomeCard.vue'
import vacancyCard from '../components/home/vacancyCard.vue'
import propertyCard from '../components/home/propertyCard.vue'
import linksStrip from '../components/home/linksStrip.vue'
import footerStrip from '../components/home/footerStrip.vue'
import emptyHere from '../components/widgets/emptyHere.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    navigationStrip,
    welcomeCard,
    vacancyCard,
    footerStrip,
    propertyCard,
    linksStrip,
    emptyHere
  },
  computed:{
    ...mapGetters(['getVacancies', 'isWelcomeCardOpen', 'getPropertiesView']),
    options () {
      return {
        duration: 1000,
        offset: 0,
        easing: 'easeInOutCubic',
      }
    }
  },
  data(){
    return {
      counter: 5,
      page_counter: [1,2,3,4,5,6],
    }
  },
  methods:{
    ...mapActions(['fetchVacancies', 'toogleWelcomeCard']),
    goTop(){
      this.$vuetify.goTo('#top', this.options)
    },
  },
  mounted(){
    this.fetchVacancies().then((res) => {
      this.goTop()
    })
    this.toogleWelcomeCard(true)
  }
}
</script>
