<template lang="html">
  <v-card class="pb-4 wrapper grey lighten-3 flat" flat>
    
    <div class="top d-flex align-center px-2 ">
      <div>
        <span class="text-uppercase green--text others">
          EXPLORE
        </span>
        <h1 class="text-uppercase green--text properties">
          Properties
        </h1>
        <h6 class="text-uppercase d-flex align-center purple--text others ">
          discover 
          <v-icon x-small class="mx-1 red--text">
            mdi-circle
          </v-icon>
          get
          <v-icon x-small class="mx-1 red--text">
            mdi-circle
          </v-icon>
           move
        </h6>
      </div>
    </div>
    <div class="px-2 inner-wrapper d-flex align-center mid">
      <div style="width:100%;" >
      <div class="d-flex justify-center">
        <animated-types style="max-height:12rem;"/>
      </div>
    </div>
    </div>
    <div class="d-flex align-end bottom">
        <div class="pa-3" style="width: 100%">
        <div class="text-center ">
          We have these types  of properties listed
        </div>
        <div class="d-flex align-center mb-3">
          <select class="bold search" @change="requestFilteredVacancies($event)" v-model="filter.type" v-observe-visibility="visibilityChanged" v-if="!loading">
            <option v-for="type in typesOfProperty" :key="type" :value="type" :disabled="type=='Check out what we have!'" 
            :selected="type=='Check out what we have!'">
              {{(type == 'Check out what we have!' || type == 'Show me everything!') ? type : type  + 's' }}
            </option>
          </select>
          <div class="white pa-2 bold search" style="border-radius: 20px;"  v-if="loading">
            {{!(filter.type == 'Show me everything!') ? 'Fetching ' + filter.type + 's': null }}
            {{(filter.type == 'Show me everything!') ? 'Fetching Everything!': null }}
              <v-progress-circular
              indeterminate
              color="purple"
              size="20"
              ></v-progress-circular>
          </div>
        </div>
        <div class="text-center mt-4">
          <v-icon class="info--text mr-4" @click="go('about')">
            mdi-help-circle
          </v-icon>
          <v-icon class="success--text mr-4" @click="goWhatsapp">
            mdi-whatsapp
          </v-icon>
          <a :href="`sms: +254746872399`" style="text-decoration: none;"> 
            <v-icon class="black--text mr-4">
              mdi-message
            </v-icon>
          </a>
          <a :href="`tel: +254746872399`" style="text-decoration: none;"> 
            <v-icon class="black--text mr-4">
              mdi-phone
            </v-icon>
          </a>
        </div>
        </div>  
    </div>
  </v-card>
</template>
<script>
import { mapActions } from 'vuex'

import animatedTypes from './animatedTypes'
export default {
  name: 'welcomeCard',
  components:{
    animatedTypes
  },
  data(){
    return {
      typesOfProperty: [
        'Check out what we have!',
        'Show me everything!',
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
      filter:{
        type: 'Check out what we have!'
      },
      applying: false,
      loading: false
    }
  },
  methods:{
    ...mapActions(['toogleWelcomeCard', 'fetchFilteredVacancies', 'fetchVacancies']),

    requestFilteredVacancies($event){
      this.loading = true
      this.applying = true
      
      if(this.filter.type == 'Show me everything!'){
        this.fetchVacancies().then((res) => {
          this.applying = false
          this.loading = false
          return
        })
      } else {
        this.fetchFilteredVacancies(this.filter).then((res) => {
          this.applying = res
          this.loading = false
        })
      }
    },
    goWhatsapp(){
      window.location = 'https://wa.me/+254746872399'
    },
    close(){
      this.toogleWelcomeCard(false)
    },
    go(code){
      this.$router.push('/' + code)
    },
    visibilityChanged(){
      alert('rt')
    }
  }
}
</script>
<style lang="css" scoped>
.top{
  width: 100vw;
  min-height: 20vh;
}
.mid{
  width: 100vw;
  min-height: 40vh;
}

.bottom{
  width: 100vw;
  min-height: 15vh;
}

.wrapper{
  background-color: #0000;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 100vw;
}
.img{
  height: 8 0px;
  width: 8  0px;
}

.search:focus{
  border: white;

}

.search{
  text-align: center;
  width: 100%; 
  height: 3rem; 
  border-radius: 20px;
  border: 0;
  border: solid purple 1px;
  outline: 0;
  background-color: url(../../assets/logo.svg) no-repeat scroll 7px 7px;
  background-color: white;
}

.properties{
  font-size: 2.5rem;
}

.others{
  font-family: roboto;
}
</style>
