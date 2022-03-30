<template>
  <v-app >
    <v-app-bar
      v-if="showNavBar"
      class="d-sm-none grey lighten-3"
      app
      dense
      color="white"
      dark
      flat
    >
      <div v-if="!getUser.first_name">
        <v-img
        class="white pa-2 my-2 rounded"
        :src="require(`./assets/logo.svg`)"
        height="40"
        @click="go('/')"
        width="40"
        contain
      ></v-img>
        <!-- <p @click="go('')" class="title">ProMIS</p> -->
      </div>

      <div v-if="getUser.first_name">
        <v-img
        class="white pa-2 my-h2 rounded"
        :src="require(`./assets/logo.svg`)"
        max-height="40"
        @click="go('/dashboard')"
        max-width="40"
        contain
      ></v-img>
        <!-- <p @click="goDashboard()" class="title">ProMIS</p> -->
      </div>

      <v-spacer></v-spacer>
          <!-- <select class="bold search-2" @change="requestFilteredVacancies($event)" v-model="filter.type" v-if="showDiscover">
            <option v-for="type in typesOfProperty" :key="type" :value="type" :disabled="type=='Check out what we have!'" 
            :selected="type=='Discover!'">
              {{(type == 'Discover!' || type == 'Show me everything!') ? type : type  + 's' }}
            </option>
          </select> -->
      <v-spacer></v-spacer>
      <!-- <v-icon 
      v-if="getUser.id"
      class="ml-1 mr-2"
      @click="go('')"
      dark>
        mdi-home
      </v-icon> -->
      
      <!-- <v-menu 
          transition="slide-y-transition"
          bottom
          open-on-hover>
          <template v-slot:activator="{ on, attrs }">
          <v-icon 
          class="mr-1 "
          v-bind="attrs"
          v-on="on">
              mdi-account
          </v-icon>
          </template>
              
          <v-list v-if="!getUser.id">
              <v-list-item
              @click="go('login')"
              class="pointer">
                  Login
              </v-list-item>
              <v-list-item 
              @click="go('register')"
              class="pointer">
                  Register
              </v-list-item>
          </v-list>    
          <v-list v-if="getUser.id">
              <v-list-item
              @click="go('login')"
              class="pointer">
                  Logout
              </v-list-item>
          </v-list>

          <v-list v-if="getUser.status" > -->
          <!--<v-list-item
              @click="logout"
              class="pointer">
                  Logout
              </v-list-item>
          </v-list> -->
      <!-- </v-menu> -->

    <div class="filter pa-2" @click="toogle" v-if="showDiscover"
    style="border-top-left-radius: 5px; border-top-right-radius: 0; border-bottom-left-radius: 5px; border-bottom-right-radius: 0;">
       <v-icon class="black--text">
        mdi-filter
      </v-icon>
    </div>
    <div class="white pa-2" @click="home_drawer = true" v-if="showDiscover"
    style="border-top-left-radius: 0; border-top-right-radius: 5px; border-bottom-left-radius: 0; border-bottom-right-radius: 5px;">
      <v-icon class="purple--text">
        mdi-menu
      </v-icon>
    </div>
    <div class="white pa-2" @click="home_drawer = true" v-if="!showDiscover"
    style="border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;">
      <v-icon class="purple--text">
        mdi-menu
      </v-icon>
    </div>
    </v-app-bar>
    <div class="white--text white rounded menu" @click="drawer = true" v-if="!showNavBar && !drawer">
      <v-icon>
        mdi-menu
      </v-icon>
    </div>
    <div class="white--text white rounded menu" @click="drawer = true" v-if="!showNavBar && drawer">
      <v-icon class="red--text">
        mdi-close
      </v-icon>
    </div>
    <v-navigation-drawer
      class="grey lighten-2"
      v-model="home_drawer"
      temporary
      clipped 
      right
      fixed
      width = '90%'
    >
    <div class="d-flex justify-end">
      <div class="white pa-2 rounded" @click="home_drawer = false">
       <v-icon class="red--text">
        mdi-close
      </v-icon>
    </div>

    </div>
      <home-navdrawer />
    </v-navigation-drawer>

    
    <v-navigation-drawer
      class="pt-4"
      v-model="drawer"
      temporary
      clipped 
      fixed
      width = '200'
    >
      <v-list
        nav
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <div>
            <v-list-item-avatar
              class="elevation-20"
              tile
              size="80"
              style="background-color: tomato;"
            >
            <div class="white--text text-center">
              <div class="d-flex justify-center">
                <span style="font-size:3rem; font-weight: 900;" class="d-flex">
                  {{initials}}
                </span>
              </div>
                <v-divider dark/>
                <span>
                  {{'standard'}}
                </span>
              </div>
            </v-list-item-avatar>
          </div>
          <v-list-item @click="go('/')">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="go('account/edit')">
            <v-list-item-title>Edit Account</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="go('add_property')">
            <v-list-item-title>Add Property</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="go('account/properties')">
            <v-list-item-title>My Properties</v-list-item-title>
          </v-list-item>

          <v-list-item  @click="go('account/units')">
            <v-list-item-title>My Units</v-list-item-title>
          </v-list-item>

          
          <v-list-item  @click="logOut" style="position:fixed; bottom: 0;">
            <v-list-item-title>
              <v-btn class="red white--text">
                Log Out
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card class="red pa-4 white--text d-none d-sm-block" style="margin-top: 9rem;  position: fixed; top: 20%;left: 10%;">
      <span>
        {{'sorry.. this demo is intended for small screens. Kindly switch to a mobile phone to proceed'}}
      </span>
    </v-card>
    <v-main class="main d-sm-none">
      <alert-box />

      <router-view />
    </v-main>
    <info-box v-if="getInfoBoxDetails && getInfoBoxDetails.status"/>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import infoBox from './components/widgets/infoBox.vue'
import alertBox from './components/widgets/alertBox.vue'
import homeNavdrawer from './components/widgets/homeNavdrawer.vue'

export default {
  name: 'App',

  components:{
    infoBox,
    alertBox,
    homeNavdrawer
  },

  computed: {
  ...mapGetters(['getUser', 'getInfoBoxDetails', 'getUser']),
    initials(){
      let str = this.getUser.first_name + ' ' + this.getUser.last_name
      let matches = str.match( /\b(\w)/g )
      return matches.join('').substring(0,2)
      // return 'o'
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
      showDiscover: true
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
      overflow: auto;
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
    font-size: 2rem;
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

.filter{
  border-left: solid purple 1px;
  border-top: solid purple 1px;
  border-bottom: solid purple 1px;
}

</style>
