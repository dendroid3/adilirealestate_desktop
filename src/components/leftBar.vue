<template lang="html">
  <div class="grey">
    <v-list nav class="grey lighten-2">
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <div>
          <v-list-item-avatar
            @click="go('dashboard')"
            class="elevation-20 purple pointer lighten-2"
            tile
            size="80"
          >
          <div class="white--text text-center">
            <div class="d-flex justify-center">
              <span style="font-size:3rem; font-weight: 900;" class="d-flex">
                {{initials}}
              </span>
            </div>
              <v-divider dark/>
              <span>
                {{'unverified'}}
              </span>
            </div>
          </v-list-item-avatar>
        </div>

        <!-- <v-list-item  @click="sendRequest" small> -->
          <v-list-item-title class="pointer mb-1" @click="sendRequest" dense>Verify Account</v-list-item-title>
        <!-- </v-list-item> -->

        <!-- <v-list-item  @click="go('account/edit')"> -->
          <v-list-item-title class="pointer mb-1" @click="go('account/edit')">Edit Account</v-list-item-title>
        <!-- </v-list-item> -->

        <!-- <v-list-item  class="pointer mb-1" @click="go('add_property')"> -->
          <v-list-item-title class="pointer mb-1" @click="go('add_property')">Add Property</v-list-item-title>
        <!-- </v-list-item> -->

        <!-- <v-list-item  class="pointer mb-1" @click="go('account/properties')"> -->
          <v-list-item-title class="pointer mb-1" @click="go('account/properties')">My Properties</v-list-item-title>
        <!-- </v-list-item> -->

        <!-- <v-list-item  class="pointer mb-1" @click="go('account/units')"> -->
          <v-list-item-title class="pointer mb-1" @click="go('account/units')">My Units</v-list-item-title>
        <!-- </v-list-item> -->

        <!-- <v-list-item  class="pointer mb-1" @click="go('account/units')"> -->
          <v-list-item-title class="pointer mb-1" @click="go('account/units')">My Land</v-list-item-title>
        <!-- </v-list-item> -->

        <!-- <v-list-item  class="pointer mb-1" @click="go('')"> -->
          <v-list-item-title class="pointer mb-1" @click="go('')">Available Listings</v-list-item-title>
        <!-- </v-list-item> -->
        
        <v-list-item  @click="logOut" style="position:fixed; bottom: 0;">
          <v-list-item-title>
            <v-btn x-small class="red white--text">
              Log Out
            </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'leftBar',

    computed: {
      ...mapGetters(['getUser']),
      initials(){
        let str = this.getUser.first_name + ' ' + this.getUser.last_name
        let matches = str.match( /\b(\w)/g )
        return matches.join('').substring(0,2)
        // return "DW"
        // return 'o'
      },
    },

    methods: {
    ...mapActions(['logout']),
    sendRequest(){
      if(confirm("You are unverified. Please verify account. By proceeding you are requesting promis agents to come view your properties to verify account. Proceed?")){
        this.sendVerificationRequest()
        // alert('Request sent. We will call you to arrange the meeting.')
      } else {
        alert("no")
      }
    },

    go(code){
      this.$router.push('/' + code)
    },
    }
  }
</script>
