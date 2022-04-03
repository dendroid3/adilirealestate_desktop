<template lang="html">
  <div class="grey lighten-3 d-flex align-center justify-center" style="height: 100%;">
    <v-form ref="form" class="pa-4">
      <p style="font-size: 2.3rem;"> login</p>
      <v-text-field
      placeholder="email"
      v-model="email"
      label="email"
      type="name"
      outlined
      clearable />
      <v-text-field
      placeholder="password"
      v-model="password"
      label="password"
      type="password"
      outlined
      clearable />
      <p>
        {{getLoginMessage}}
      </p>
      <div  class="d-flex justify-end">
        <v-btn class="success" @click="loginUser"  :loading="proceeding" :disabled="!valid"> proceed </v-btn>
      </div>
      <div  class="text-center pa-2">
        {{'Do no have an account?'}} <br>
        <v-btn class="success" @click="go('/register')" :disabled="proceeding"> register </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Login',
  data(){
    return {
      email: null,
      password: null,
      proceeding: false
    }
  },
  computed:{
    ...mapGetters(['getLoginMessage']),
    valid(){
      if(
        this.email &&
        this.password
      ){
        return true
      }
      return false
    }
  },
  methods:{
    ...mapActions(['login']),
    loginUser(){
      this.proceeding = true
      const data = {
        email: this.email,
        pass: this.password
      }
      console.log(data)
      this.login(data).then((res) => {
        this.proceeding = res
      })
    },
    go(code){
      this.$router.push(code)
    }
  }
}
</script>
