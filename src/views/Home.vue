<template lang="html">
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
    <v-row class="no-gutters">
      <v-col class="col-6 offset-3">
        <v-col class="col-2">
          <h3 class="blue--text d-flex align-center">
            <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
              mdi-check
            </v-icon>
            Affordable
          </h3>
        </v-col>
        <v-col class="col-12">
          <v-img class="rounded lighten-4 my-1"
          contain
          :src="require(`../assets/saving.svg`)"
          :aspect-ratio="5/2"
          />
          <p class="px-2">
            Our prices are set at an optimum without a compromise on quality of service. What you see is what you get to pay, there are no hidden costs in acquiring the land. The quoted amount is all-inclusive
          </p>
        </v-col>
        <v-col class="col-12">
           <h3 class="blue--text d-flex align-center">
            <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
              mdi-check
            </v-icon>
            Flexible Payments
          </h3>
        </v-col>
        <v-col class="col-12">
          <v-img class="img rounded lighten-4 my-1"
            contain
            :aspect-ratio="5/2"
            :src="require(`../assets/payment.svg`)"
            />
          <p class="px-2">
            Adili understands, we give the option of you to pay a deposit then pay the remaining amount in 9 months. These payments can be made through a channel of your preference. <br>
            <span class="px-4">
              <b>
                Mpesa paybill
              </b>
            </span> <br>
            <span class="px-4">
              <b>
                Bank Account
              </b>
            </span>
          </p>
        </v-col>
        <v-col class="col-12">
          <h3 class="blue--text d-flex align-center">
            <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
              mdi-check
            </v-icon>
            Prime Selections
          </h3>
        </v-col>
        <v-col class="col-12">
          <v-img class="img rounded lighten-4 my-1"
          :aspect-ratio="5/2"
          contain
          :src="require(`../assets/prime.svg`)"
          />
          <p class="px-2">
            Adili has specialised in the rapidly developing south coas of Kenya. The team, through its experience has developed a prediction framework it uses to pick
            out the plots with the most prospepects on return. The framework considers key parameter indicators such as <br>
            <span class="px-4">
              <b>
                Nearby Amenities
              </b>
            </span> <br>
            <span class="px-4">
              <b>
                Population and Economic trends of the environs
              </b>
            </span><br>
            <span class="px-4">
              <b>
                Cost of purchase
              </b>
            </span>
          </p>
        </v-col>
      </v-col>
    </v-row>
    <div class="px-2">
    </div>
    <div id="blogs" ref="blogs">
      <blogs-section />
    </div>
    <!-- <div id="faqs">
      <faqs-section />
    </div> -->
    <div id="contact" class="contact">
      <contact-us />
    </div>
    <div class="grey text-center" style="height: 7rem;">
      (c) Adili Real Estate | 2022
    </div>
  </div>

</template>  
<script>
// import navigationStrip from '../components/home/navigationStrip.vue'
// import welcomeCard from '../components/home/welcomeCard.vue'
// import vacancyCard from '../components/home/vacancyCard.vue'
// import propertyCard from '../components/home/propertyCard.vue'
// import linksStrip from '../components/home/linksStrip.vue'
import footerStrip from '../components/home/footerStrip.vue'
import propertiesCard from '../components/home/propertiesCard.vue'
import contactUs from '../components/home/contactUs.vue'
import blogsSection from '../components/home/blogsSection.vue'
import faqsSection from '../components/home/faqsSection.vue'
// import emptyHere from '../components/widgets/emptyHere.vue'

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
    // navigationStrip,
    // welcomeCard,
    // vacancyCard,
    footerStrip
    // propertyCard,
    // linksStrip,
    // emptyHere
    ,
    AboutCard,
    ContactUs
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
