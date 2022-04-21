<template lang="html">
  <div>
    <!-- <footer-strip /> -->
    <div id="home">
      <top-pics />
      <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('home')">
        Home
      </v-btn>
      <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('blogs')">
        Blogs
      </v-btn>
    </div>
    <div id="about">
      <about-card />
    </div>
    <div id="properties">
      <properties-card />    
    </div>
    <div id="blogs" ref="blogs">
      <blogs-section />
    </div>
    <div id="faqs">
      <faqs-section />
    </div>
    <div id="contact" class="contact">
      <!-- Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum beatae modi incidunt iste id deserunt numquam molestias aliquam perspiciatis. In mollitia animi minima? Sit ducimus minus id eaque soluta. Ex quia quasi ad eveniet eaque placeat doloremque sunt vel quas, accusamus sint doloribus nostrum sed praesentium eius id ducimus iste consequatur, voluptatem eligendi molestias illo atque! Pariatur possimus dolore voluptatum quas molestiae et quisquam veniam atque ea mollitia aspernatur molestias fuga officiis aliquam sint facilis excepturi, libero culpa hic nemo omnis provident in temporibus. Sunt magni recusandae excepturi provident dolor. -->
      <contact-us />
    </div>
    <div class="grey text-center" style="height: 10rem;">
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
      // this.$vuetify.goTo(this.blogs_content, this.options)
    },
  },
  mounted(){
    this.fetchVacancies().then((res) => {
      this.goTop()
    })
    this.toogleWelcomeCard(true)
    this.blogs_content = this.$refs.blogs
    console.log('this.blogs_content')
    console.log(this.blogs_content)
    console.log('this.blogs_content')
  }
}
</script>
