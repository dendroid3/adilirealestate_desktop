<template lang="html">
  <div class="mt-4 bold-2">
    <div class="text-center px-4">
      ProMIS helps you find vacancies, select a type here
    </div>
    <v-list
      class=" text-uppercase"
      nav
    >
      <v-list-item-group
       style="z-index: 90;"
        class="row no-gutters"
        active-class="deep-purple--text"
      >
      
        <v-list-item class="grey lighten-1" @click='go("/dashboard")' v-if="getUser.first_name">
          <v-list-item-title class="text-center" >
            {{ 'Dashboard'}}
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="col-6 grey lighten-1" v-for="type in propertyTypes" :key="type" @click="searchType(type)" >
          <v-list-item-title class="text-center" >
            {{ type  != applying ? type + 's' : null}}
            <v-progress-circular
            v-if="applying  == type"
            indeterminate
            color="purple"
            size="20"
            ></v-progress-circular>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
        <v-list-item style="position:fixed; bottom: 0; right: 0.5rem;"  v-if="!getUser.first_name">
          <v-list-item-title>
            <v-btn class="green white--text" @click="go('/login')" style="z-index: 990;">
              Log In
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item style="position:fixed; bottom: 0; right: 0.5rem;"  v-if="getUser.first_name">
          <v-list-item-title>
            <v-btn class="green white--text"  style="z-index: 990;">
              Log out
            </v-btn>
          </v-list-item-title>
        </v-list-item>
    </v-list>

    
      <!-- <v-row class=" no-gutters mx-2">

        <v-col class="col-6">
          <v-list-item class="">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-col>
        
        <v-col class="col-6">
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </v-col>

      </v-row> -->
      
    <div class="text-center px-4">
      Use ProMIS as a landlord to showcase your vacancies
    </div>
    
    <v-list
      class=" text-uppercase"
      nav
    >
      <v-list-item-group
        class="row no-gutters"
        active-class="deep-purple--text white--text"
      >
      
        <v-list-item class="red" @click="go('/register')" v-if="!getUser.first_name">
          {{'get started'}}
          <v-spacer />
          <v-icon class="white--text">
            mdi-arrow-right
          </v-icon>
        </v-list-item>
        <v-list-item class="green lighten-3" @click="go('/register')" v-if="!getUser.first_name">
          {{'start listing'}}
          <v-spacer />
          <v-icon class="white--text">
            mdi-plus
          </v-icon>
        </v-list-item>
        <v-list-item class="green lighten-3" @click="go('/add_property')" v-if="getUser.first_name">
          {{'start listing'}}
          <v-spacer />
          <v-icon class="white--text">
            mdi-plus
          </v-icon>
        </v-list-item>
        <v-list-item class="blue lighten-3" @click="faqs_open = !faqs_open">
          {{'learn more'}} 
          <v-spacer />
          <v-icon class="white--text" v-if="!faqs_open">
            mdi-arrow-down
          </v-icon>
          <v-icon class="white--text" v-if="faqs_open">
            mdi-arrow-up
          </v-icon>
        </v-list-item>
      </v-list-item-group>
      
        <v-list-item-group
          v-if="faqs_open"
          class="row no-gutters mx-4"
          active-class="deep-purple--text white--text"
        >
          <v-list-item class="lighten-3" v-for="faq in faqs" :key="faq" @click="go('/about')">
            {{faq}} 
          </v-list-item>
        </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'homeNavdrawer',
  computed:{
    ...mapGetters(['getUser'])
  },
  data(){
    return{
      propertyTypes: [
        'Single House',
        'Bedsitter',
        'One Bedroom House',
        'Two Bedroom House',
        'Shop',
        'Office',
        'Warehouse',
        'Garage'
      ],
      faqs: [
        {
          question: 'WHAT IS PROMIS',
          answer: 'ProMIS is a smart cloud-based property management and advertising software, a product of ADHOME SOLUTIONS, a company established in 2022 dedicated to bridging the gaps in the housing sector by uniting all stakeholders, ensuring maximum benefits to all.We provide property owners with our software to aid in managing their properties with various services such as; tenant screening, accounting, organization of tasks to be done, and online advertising of their room vacancies. We provide the house hunters with adverts of real-time housing vacancies.ProMIS is tailored, so property owners have total control over the advertising and management of their properties.'
        }
      ],
      faqs_open: false,
      filter: {},
      applying: null
    }
  },
  methods:{
    ...mapActions(['fetchFilteredVacancies', 'toogleAlertBox']),
    go(code){
      this.$router.push(code)
    },
    searchType(code){
      this.applying = code,
      this.fetchFilteredVacancies({type: code}).then((res) => {
        this.applying = res
        this.$router.push('/')

        const alert_box_info = {
          status: true,
          information: 'Results for ' + code + ' vacancies fetched.',
          code: 'success'
        }
        this.toogleAlertBox(alert_box_info)
        })
    },
    
  }
}
</script>
