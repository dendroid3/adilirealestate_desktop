<template lang="html">
  <div>
    <div class="grey lighten-3 pa-4">
      <div class="d-flex">
        <div class="half d-flex align-center col-6">
          <div>
            <span class="d-flex">
              <v-icon small>
                mdi-phone
              </v-icon>
              0746872399
            </span>
            <span class="d-flex">
              <v-icon small>
                mdi-email
              </v-icon>
              info@promis.co.ke
            </span>
            <span class="d-flex">
              <v-icon small>
                mdi-facebook
              </v-icon>
              promis properties
            </span>
          </div>
        </div>
        <div class="d-flex align-center c col-6">
          DeHUB, DEKUT <br>
          Kiganjo/Mathari, B5, Nyeri <br>
          P.O.Box, 657-10100
        </div>
      </div>
      <div class="d-flex justify-center">
        <a class="link" @click="go('/register')" v-if="!getUser.first_name">
          get started
        </a>
        <a class="link" @click="go('/about')">
          about us
        </a>
        <a class="link" @click="go('/contact_us')">
          contact us
        </a>
      </div>
      
      <div class="d-flex justify-center">
        <span class="" >
          made with 
          <v-icon small class="red--text">
            mdi-heart
          </v-icon>
          at 
          <a class="white px-1 rounded bold" style="font-size: 0.8rem;" href="http://dehub.dkut.ac.ke">{{`DeHUB`}}</a>
        </span>
      </div>
      <div class="d-flex align-center justify-center">
        <span class="mx-4 d-flex align-center" >
          <v-icon small>
            mdi-copyright
          </v-icon>
             2022
        <a class="mx-4" href="http://wta.nk">T&C apply</a>
        </span>
      </div>
      
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footerStrip',
  computed:{
    ...mapGetters(['getUser'])
  },
  methods: {
    go(code){
      this.$router.push(code)
    }
  }
}
</script>
<style lang="css" scoped>
.link{
  text-decoration: underline;
  margin-left:0.3rem;
  margin-right:0.3rem;
}
  
</style>
