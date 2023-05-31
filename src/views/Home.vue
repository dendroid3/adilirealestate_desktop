<template>
  <div>
    <!-- <footer-strip /> -->
    <div id="home">
      <top-pics />
    </div>
    <div id="about">
      <about-card />
    </div>
    <div id="properties">
      <properties-card />    
    </div>
    <div class="d-flex justify-center mt-4 align-center" style="font-size: 2rem; color: red; z-index: 1;">
      Why Invest With Us
    </div>
    <v-row class="pa-4">
      <v-col class="col-4">
        <whyInvestCard 
        :title="`Affordable`" 
        :text="`Our prices are set at an optimum without a compromise on quality of service. 
            What you see is what you get to pay, there are no hidden costs in acquiring the land. The quoted amount is all-inclusive.`"
        />
      </v-col>
      <v-col class="col-4">
        <whyInvestCard 
        :title="`Flexible Payments`" 
        :text="`Adili understands, we give the option of you to pay a deposit then pay the remaining amount in 9 months. 
            These payments can be made through a channel of your preference`"
        />
      </v-col>
      <v-col class="col-4">
        <whyInvestCard 
        :title="`Prime Selections`" 
        :text="`Adili has specialised in the rapidly developing south coas of Kenya. 
        The team, through its experience has developed a prediction framework it uses to pick out the plots with the most prospepects on return.`"
        />
      </v-col>
    </v-row>
    <div id="blogs" ref="blogs">
      <blogs-section />
    </div>
    <!-- <div id="faqs">
      <faqs-section />
    </div> -->
    <div id="contact" class="contact">
      <contact-us />
    </div>
  </div>

</template>  
<script>
import footerStrip from '../components/home/footerStrip.vue'
import propertiesCard from '../components/home/propertiesCard.vue'
import contactUs from '../components/home/contactUs.vue'
import blogsSection from '../components/home/blogsSection.vue'
import faqsSection from '../components/home/faqsSection.vue'
import whyInvestCard from '../components/home/whyInvesCard.vue'

import topPics from '../components/home/topPics.vue'
import aboutCard from '../components/home/aboutCard.vue'

import { mapActions, mapGetters } from 'vuex'
import AboutCard from '../components/home/aboutCard.vue'
import ContactUs from '../components/home/contactUs.vue'
export default {
  name: 'Home',
  components: {
    topPics,
    contactUs,
    faqsSection,
    aboutCard,
    propertiesCard,
    blogsSection,
    footerStrip,
    AboutCard,
    ContactUs,
    whyInvestCard
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
      blogs_content: ''
    }
  },
  methods:{
    ...mapActions(['fetchVacancies', 'toogleWelcomeCard']),
    goTop(){
      this.$vuetify.goTo('#top', this.options)
    },
    goToSection(element_id){
      console.log('going to section')
      document.getElementById(element_id).scrollIntoView({behavior: 'smooth', block: "end"})
    },
  },
  mounted(){
  }
}
</script>
