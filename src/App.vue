<template>
  <v-app class="body">
    <v-app-bar
      class="purple lighten-2"
      app
      dense
      color="white"
      dark
      flat
    >
      <div v-if="getUser.first_name">
        <v-img
        class="white pa-2 my-h2 rounded"
        :src="require(`./assets/logo.svg`)"
        max-height="40"
        @click="go('/dashboard')"
        max-width="40"
        contain
      ></v-img>
      </div>

      <v-spacer></v-spacer>
      <section v-if="!getUser.first_name">
        <v-btn text small class="purple white--text mx-2"
        @click="go('/login')">
          Login
        </v-btn>
        <v-btn text small class="purple white--text mx-2"
        @click="go('/register')">
          Register
        </v-btn>
      </section>
      <section v-else>
        <v-btn text small class="purple white--text mx-2"
        @click="go('/dashboard')">
          {{getUser.email}}
        </v-btn>
      </section>
    </v-app-bar>

    <v-main class="main">
      <alert-box />
      <v-row class="no-gutters">
        <v-col class="col-1 grey lighten-2">
          <left-bar></left-bar>
          <!-- <home-navdrawer /> -->
        </v-col> 
        <v-col class="col-3 grey lighten-2">
          
          <v-row class="grey lighten-2 pt-4 no-gutters">
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`properties`" :value="(getMyProperties ? getMyProperties.length : 0)" :loading="fetching_my_properties" :click_url="`/account/properties`"/>
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`units`" :value="(getMyUnits ? getMyUnits.length : 0 )" :loading="fetching_my_units" :click_url="`/account/units`"/>
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`vacancies`" :value="vacancies" />
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`on sale`" :value="0" />
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`bookings`" :value="(getMyProperties ? getMyProperties.length : 0)" :loading="fetching_my_properties" :click_url="`/account/properties`"/>
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`land`" :value="(getMyUnits ? getMyUnits.length : 0 )" :loading="fetching_my_units" :click_url="`/account/land`"/>
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`enquiries`" :value="vacancies" />
            </v-col>
            <v-col class="col-3 px-1 mb-1 bold" > 
              <dashboardTab :title="`logs`" :value="0" />
            </v-col>
          </v-row>
          
        <p style="font-size: 2.3rem;" class="backg--text"> Logs </p>
          <log-card v-for="c in counter" :key="c"/>
        </v-col>
        <v-col  style="overflow: scroll; height: 100vh; margin-bottom:5rem;" > 
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <info-box v-if="getInfoBoxDetails && getInfoBoxDetails.status"/>
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

export default {
  name: 'App',

  components:{
    infoBox,
    alertBox,
    homeNavdrawer,
    leftBar,
    LogCard,
    dashboardTab
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
  },
  data(){
    return{
      fetching_my_properties: true,
      fetching_my_units: true,
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
      font-family: dosis;
      /* width: 70vw; */
      /* overflow: auto; */
  }
  #app{
      padding: 0;
      margin: 0;
      font-family: dosis;
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
  background: purple;
} 
</style>
