<template lang="html">
    <v-card
    class="mx-0 mt-0 mb-2 pt-4 purple"
    outlined
    >
    <v-list-item four-line>
      <div>
        <v-list-item-avatar
          class="elevation-20"
          tile
          size="60"
          style="background-color: tomato;"
        >
        <div class="white--text text-center">
          <div class="d-flex justify-center">
            <span style="font-size:2em; font-weight: 900;" class="d-flex">
              {{initials}}
            </span>
          </div>
            <v-divider dark/>
            <span>
              {{ getUser.physical_verification ? 'verified' : 'unverified'}}
            </span>
          </div>
        </v-list-item-avatar>
      </div>
      <v-list-item-content>
        <div class="d-flex align-center white--text text-h6">
          {{getUser.first_name + ' ' + getUser.last_name}} 
          <v-spacer />
        </div>
        <div class="white--text text-">
          {{`+254` + getUser.phone_number}}  | 
          {{getUser.id_number}} 
        </div>
        <div class="white--text text-">
        <button class="white--text red pt-1 pb-1 px-4 rounded" @click="go('/account/edit')">
          edit
        </button>
        <button class="white--text red ml-4 pt-1 pb-1 px-4 rounded" @click="sendRequest" :class="{
          'grey': isVerificationRequestSent,
          'red': !isVerificationRequestSent
        }">
          {{isVerificationRequestSent ? 'verification underway' : 'verify'}}
        </button>
        </div>        
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'userCard',
  computed:{
    ...mapGetters(['getUser', 'isVerificationRequestSent']),
    initials(){
      let str = this.getUser.first_name + ' ' + this.getUser.last_name
      let matches = str.match( /\b(\w)/g )
      return matches.join('').substring(0,2)
      // return 'o'
    },
  },
  methods:{
    ...mapActions(['sendVerificationRequest']),
    sendRequest(){
      if(confirm("You are unverified. Please verify account. By proceeding you are requesting promis agents to come view your properties to verify account. Proceed?")){
        this.sendVerificationRequest()
        // alert('Request sent. We will call you to arrange the meeting.')
      } else {
        alert("no")
      }
    },
    go(code){
      this.$router.push(code)
    }
  }
}
</script>
