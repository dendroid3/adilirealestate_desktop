<template lang="html">
  <div>
    <!-- I am edit account <br> -->
      <p class="px-4" style="font-size: 2.3rem;"> Edit Account</p>
   <!-- {{getUser}} -->
  <v-list
    class="s  lighten-3"
    subheader
    two-line
  >    
    <v-list-item class="stripped" @click="change_names = true">
      <v-list-item-content>
        <v-list-item-title v-text="'name:'"></v-list-item-title>
        <v-list-item-subtitle v-text=" getUser.first_name + ' ' + getUser.last_name "></v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="d-flex pa-1" v-if="change_names">
      <v-text-field
      placeholder="first_name"
      v-model="first_name"
      label="first name"
      type="name"
      outlined
      clearable />
      <v-text-field
      placeholder="last_name"
      v-model="last_name"
      label="last name"
      type="name"
      outlined
      clearable />
    </div>
    <div class="d-flex pa-1 justify-end" @click="closeNames" v-if="change_names">
      <v-btn small class="red white--text mr-1"> 
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>

      <v-btn small class="success mr-1"> 
        <v-icon>
          mdi-check
        </v-icon>
      </v-btn>
    </div>
    
    <v-list-item class="stripped"  @click="change_email = true">
      <v-list-item-content>
        <v-list-item-title v-text="'email:'"></v-list-item-title>
        <v-list-item-subtitle v-text=" getUser.email "></v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="d-flex pa-1" v-if="change_email">
      <v-text-field
      placeholder="id number"
      v-model="email"
      label="email"
      type="name"
      outlined />
    </div>
    <div class="d-flex pa-1 justify-end" v-if="change_email">
      <v-btn small class="red white--text mr-1" @click="closeEmail"> 
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>

      <v-btn small class="success mr-1"> 
        <v-icon>
          mdi-check
        </v-icon>
      </v-btn>
    </div>
    <v-list-item class="stripped" @click="change_phone_number = true">
      <v-list-item-content>
        <v-list-item-title v-text="'phone number:'"></v-list-item-title>
        <v-list-item-subtitle v-text=" getUser.phone_number "></v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="d-flex pa-1" v-if="change_phone_number">
      <v-text-field
      placeholder="phone number"
      v-model="phone_number"
      label="phone number"
      type="number"
      outlined />
    </div>
    <div class="d-flex pa-1 justify-end" @click="closePhoneNumber"  v-if="change_phone_number">
      <v-btn small class="red white--text mr-1"> 
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>

      <v-btn small class="success mr-1"> 
        <v-icon>
          mdi-check
        </v-icon>
      </v-btn>
    </div>
    <v-list-item class="stripped" @click="change_id_number = true">
      <v-list-item-content>
        <v-list-item-title v-text="'id_number:'"></v-list-item-title>
        <v-list-item-subtitle v-text=" getUser.id_number "></v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <div class="d-flex pa-1" v-if="change_id_number">
      <v-text-field
      placeholder="id number"
      v-model="id_number"
      label="id number"
      type="number"
      outlined />
    </div>
    <div class="d-flex pa-1 justify-end" v-if="change_id_number">
      <v-btn small class="red white--text mr-1" @click="closeIdNumber">  
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>

      <v-btn small class="success mr-1"> 
        <v-icon>
          mdi-check
        </v-icon>
      </v-btn>
    </div>
  </v-list>
</div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name: 'EditAccount',
  computed:{
    ...mapGetters(['getUser'])
  },
  data(){
    return {
      first_name: null,
      last_name: null,
      id_number: null,
      phone_number: null,
      password: null,
      new_password: null,
      email: null,
      change_names: false,
      change_email: false,
      change_phone_number: false,
      change_id_number: false
    }
  },
  methods: {
    ...mapActions(['']),
    closeNames(){
      this.change_names = false 
      this.first_name = null
      this.last_name = null
    },
    closeEmail(){
      this.change_email = false 
      this.email = null
    },
    closePhoneNumber(){
      this.change_phone_number = false 
      this.phone_number = null
    },
    closeIdNumber(){
      this.change_id_number = false,
      this.id_number = null
    }
  }
}
</script>
<style lang="css" scoped>

.stripped{
  background-color: #E0E0E0;
}
.stripped:nth-child(even){
  background-color:#dbc8c8;
}
  

</style>