<template>
  <v-app class="body">
    <!-- <div class="d-flex justify-end blue white--text">
      <v-icon class="mr-1 white--text">
        mdi-phone
      </v-icon>
      087656789876
      <v-icon class="ml-4 mr-1 white--text">
        mdi-mail
      </v-icon>
      kjhgfghjk@lkiutghjk.clkjhg
    </div> -->
    <v-app-bar
      class="blue"
      color="white"
      dark
      flat
      app
  >
      <div>
        <v-img
        class="blue pa-2 my-h2 rounded"
        :src="require(`./assets/logo.png`)"
        max-height="60"
        @click="go('/')"
        max-width="150"
        contain
        ></v-img>
      </div>
      <v-spacer></v-spacer>
      <section>
        <div class="d-flex justify-end mb-1 rounded">
          <div class="mr-1 px-2  rounded blue black--text lighten-4">
            <v-icon small class="black--text">
              mdi-phone
            </v-icon> 072673362
          </div> 
          <div class="mr-1 px-2  rounded blue black--text lighten-4">
            <v-icon small class="black--text">
              mdi-mail
            </v-icon> info@adilirealestate.co.ke
          </div> 
        </div>
        <!-- <a href="#home"> -->
        <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('home')">
          Home
        </v-btn>
        <!-- </a> -->
        <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('about')">
          About
        </v-btn>
        <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('properties')">
          Properties
        </v-btn>
        <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('blogs')">
          Blog
        </v-btn>
        <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('faqs')">
          FAQ
        </v-btn>
        <v-btn text small class="blue lighten-2 bold white--text mx-2" @click="goToSection('contact')">
          Contact Us
        </v-btn>
      </section>
    </v-app-bar>

    <v-main class="main">
      <alert-box />
      <v-row class="no-gutters">
        <v-col  style="overflow-y: scroll; overflow-x:hidden; height: 100vh; margin-bottom:5rem;" > 
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <info-box v-if="getInfoBoxDetails && getInfoBoxDetails.status"/>
    <div style="position: fixed; bottom: 1rem; left: 1rem; z-index: 50;" class="">
      <v-icon class="mx-1 white--text success pa-3 rounded">
        mdi-whatsapp
      </v-icon>
      <v-icon class="mx-1 white--text success pa-3 rounded">
        mdi-phone
      </v-icon>
      <v-icon class="mx-1 white--text success pa-3 rounded">
        mdi-message
      </v-icon>
    </div>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import infoBox from './components/widgets/infoBox.vue'
import leftBar from './components/leftBar.vue';
import alertBox from './components/widgets/alertBox.vue'
import homeNavdrawer from './components/widgets/homeNavdrawer.vue'
import LogCard from './components/logCard.vue';
import dashboardTab from './components/dashboard/dashboardTab.vue';
import propertyCard from './components/dashboard/propertyCard.vue'

export default {
  name: 'App',

  components:{
    infoBox,
    alertBox,
    homeNavdrawer,
    leftBar,
    LogCard,
    dashboardTab,
    propertyCard
  },

  computed: {
  ...mapGetters(['getUser', 'getInfoBoxDetails', 'getUser', 'getMyProperties', 'getMyUnits']),
    initials(){
      let str = this.getUser.first_name + ' ' + this.getUser.last_name
      let matches = str.match( /\b(\w)/g )
      return matches.join('').substring(0,2)
      // return 'o'
    },
    vacancies(){
      if(!this.getMyUnits){
        return 0
      }
      return this.getMyUnits.filter((unit) => (Number(unit.vacancy) == 1)).length
    },
    options () {
      return {
        duration: 500,
        offset: 0,
        easing: 'easeInOutCubic',
      }
    },
    route(){
      return this.$router.history.current.path
    }
  },
  data(){
    return{
      fetching_my_properties: false,
      fetching_my_units: false,
      drawer: false,
      home_drawer: false,
      group: null,
      showNavBar: true,
      typesOfProperty: [
        'Discover!',
        'Show me everything!',
        'Single Room House',
        'Bedsitter',
        'One Bedroom House',
        'Two Bedroom House',
        'Shop',
        'Office',
        'Warehouse',
        'Garage'
      ],
      filter:{
        type: 'Discover!'
      },
      applying: false,
      showDiscover: true,
      counter: 10
    }
  },
  
    watch: {
      group () {
        this.drawer = false
      },
    },
  methods:{
    ...mapActions(['toogleFilter','logout']),
    go(code){
      this.$router.push(code)
    },
    toogle(){
      this.toogleFilter(true)
    },
    goToSection(element_id){
      // console.log('going to section')
      if((this.$router.history.current.path == '/') || (this.$router.history.current.path == '/home')){
        document.getElementById(element_id).scrollIntoView({behavior: 'smooth', block: "center"})
      } else {
        this.go(element_id)
      }
    },
    goDashboard(){
        this.go('dashboard')
    },
    
    requestFilteredVacancies($event){
      console.log($event)
      console.log(this.filter)
      this.applying = true,
      this.fetchFilteredVacancies(this.filter).then((res) => {
        this.applying = res,
        this.open_filter = res
      })
    },

    logOut(){
      if(confirm("You are about to log out. Continue?")){
        // alert('login out')
        this.logout()

      } else {
        // alert("nope")
      }
    }
  },
  mounted(){
    console.log(this.$router.history.current.path)
    this.showDiscover = (this.$router.history.current.path == '/')

    console.log(this.$router.history.current.path == '/dashboard')
    this.showNavBar = !(this.$router.history.current.path == '/dashboard')
  },
  updated(){
    console.log(this.$router.history.current.path)
    this.showDiscover = (this.$router.history.current.path == '/')

    console.log(this.$router.history.current.path == '/dashboard')
    this.showNavBar = !(this.$router.history.current.path == '/dashboard')
  }
//a7d98b2e21a38e553e564fced22647bf
};
</script>
<style lang="css">

  html{
      /* font-family: dosis; */
      width: 100vw;
      font-family: 'EB Garamond', serif;
      /* width: 70vw; */
      overflow: auto;
  }
  #app{
      padding: 0;
      margin: 0;
      /* font-family: dosis; */
      font-family: 'EB Garamond', serif;

  }
  .bold-1{
    font-weight: 900;
    font-size: 1.1rem;
  }
  body{
    overflow-y: hidden;
    height: 100vh;
    pointer-events: auto;
  }
  
  .bold-2{
    font-weight: 900;
  }
  
  .main{
    overflow-x: hidden;
    margin: 0;
  }
  .title{
    display: flex;
    width: 100%;
    text-justify: center;
    justify-content: center;
    justify-items: center;
  }
  .app-bar{
    z-index: 920;
  }
  .bold{
    font-weight: 800;
    font-size: 1rem;
  }

  .backg{
    background-color: #c4c4c4;
  }
  .backg--text{
    color: rgba(21,110,82,1);
    font-size: 2.3rem;
  }
  
  .half{
    border-right: solid 1px white;
  }

  .backg-2{
    background-color: rgb(15,14,56);
  }

  .w-100{
    width: 100%;
  }

  .full-page{
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 901;
    top: 0;
  }
  
.menu{
  position: fixed;
  top: o;
  z-index: 900;
}

   @keyframes fixed-1 {
        0%{         
    
         }
        25%{ }
        50%{  color: rgb(98, 0, 255);}
        100%{ }
    }

    
.search-2{
  text-align: center;
  max-width: 30%; 
  height: 2rem; 
  border-radius: 15px;
  border: solid purple 1px;
  outline: 0;
  /* background-color: url(../../assets/logo.svg) no-repeat scroll 7px 7px; */
  background-color: white;
}

.pointer{
  cursor: pointer;
}

  .red-border{
    border-left: solid 4px red !important;
  }
  .green-border{
    border-left: solid 4px green;
  }
.filter{
  border-left: solid purple 1px;
  border-top: solid purple 1px;
  border-bottom: solid purple 1px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  direction:rtl;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  direction:rtl;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;
  direction:rtl;
} 

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: red;
} 
a{
  text-decoration: none;
}
</style>
