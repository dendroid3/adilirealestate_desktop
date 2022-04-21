<template lang="html">
  <div class="grey lighten-3 d-flex justify-center pb-4">
    <v-form ref="form" class="pa-4" style="width: 50%;">
      <p style="font-size: 2.3rem;"> register</p>
      <div class="d-flex">
        <v-text-field
        placeholder="first_name"
        v-model="user.first_name"
        label="first name"
        type="name"
        outlined
        clearable />
        <v-text-field
        placeholder="last_name"
        v-model="user.last_name"
        label="last name"
        type="name"
        outlined
        clearable />
      </div>
      <v-text-field
      placeholder="email"
      v-model="user.email"
      label="email"
      type="email"
      outlined
      clearable />
      <v-text-field
      prefix="+254"
      placeholder="phone number"
      v-model="user.phone_number"
      label="phone number"
      type="number"
      outlined />
      <v-text-field
      placeholder="id number"
      v-model="user.id_number"
      label="id number"
      type="number"
      outlined />
      
      <v-text-field
      placeholder="password"
      v-model="user.pass"
      label="password"
      type="password"
      outlined />
      <v-text-field
      placeholder="confirm password"
      v-model="user.c_password"
      label="confirm password"
      type="password"
      outlined
      clearable />
      <p> {{getRegisterMessage}}</p>
      <div  class="d-flex justify-end">
        <v-btn class="success" @click="registerUser" :loading="registering" :disabled="!valid"> proceed </v-btn>
      </div>
      <div  class="text-center pa-2">
        {{'Already have an account?'}} <br>
        <v-btn class="success" @click="go('/login')" :disabled="registering"> login </v-btn>
      </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Register',
  computed:{
    ...mapGetters(['getRegisterMessage']),
    valid(){
      if(
        this.user.first_name &&
        this.user.last_name &&
        this.user.email &&
        this.user.phone_number &&
        this.user.id_number &&
        this.user.pass &&
        this.user.c_password && 
        (this.user.pass == this.user.c_password) 
      ){
        return true
      }
      return false
    }
  },
  data(){
    return {
      user: {},
      registering: false
    }
  },
  methods:{
    ...mapActions(['register']),
    registerUser(){
      this.user.role_id = 2
      console.log(this.user)
      this.registering = true
      this.register(this.user).then( (response) => {
        this.registering = response
      })
    },
    go(code){
      this.$router.push(code)
    }
  }
}
</script>
