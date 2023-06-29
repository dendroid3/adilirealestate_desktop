<template lang="html">
  <div style="padding-bottom: 9rem;">
    <!-- <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2.3rem; color: red;">
      Equiry on propertyxyz
    </div> -->
    <v-row class="no-gutters mb-3">
      <v-col class="col-6 offset-3 d-flex justify-center">
        <v-form ref="form" class="" style="width: 90%;"
          v-model="valid"
          :lazy-validation="lazy">
          <p style="font-size: 2.3rem;" class="text--center"> Quick Message</p>
          <v-text-field
          :rules="rules.requiredRule"
          placeholder="name"
          v-model="contact_data.name"
          label="name"
          type="name"
          outlined
          clearable />
          <v-text-field
          :rules="rules.requiredRule"
          placeholder="email"
          v-model="contact_data.email"
          label="email"
          type="name"
          outlined
          clearable />
          <v-text-field
          :rules="rules.requiredRule"
          placeholder="phone number"
          v-model="contact_data.phone_number"
          label="phone number"
          type="number"
          outlined
          clearable />
          <v-text-field
          :rules="rules.requiredRule"
          placeholder="subject"
          v-model="contact_data.subject"
          label="subject"
          type="name"
          outlined
          clearable />
          <v-textarea
          :rules="rules.requiredRule"
          placeholder="message"
          v-model="contact_data.message"
          label="message"
          type="name"
          outlined
          clearable />
          <p class="text-center">
            {{"We will get back to you via email or SMS in the shortest time"}}
          </p>
          <div  class="d-flex justify-end">
            <v-btn class="success" :disabled="!enquiryValid" :loading="enquire_loading" @click="enquire"> send </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  name: 'enquire',
  computed:{
    enquiryValid(){
      if(
        !this.contact_data.name ||
        !this.contact_data.email ||
        !this.contact_data.phone_number ||
        !this.contact_data.subject ||
        !this.contact_data.message 
      ){
        return false
      } else {
        return true
      }
    }
  },
  data(){
    return{
      contact_data: {},
      enquire_loading: false,
      rules: {
        requiredRule: [
          v => !!v || 'This field is required!',
        ]
      },
      valid: true,
      lazy: false,
    }
  },
  methods:{
    ...mapActions(['toogleAlertBox']),
    async enquire(){
      try{
        console.log(this.contact_data)
        this.enquire_loading = true
        const response = await
        axios.post(process.env.VUE_APP_API + '/api/enquire', this.contact_data).then((response) => {
          console.log(response)
          const alert_box_info = {
            status: true,
            information: 'Enquiry recorded successfully, we shall get in touch as soon as possible.',
            code: 'success'
          }
          this.toogleAlertBox(alert_box_info)
          this.contact_data = {
            subject: '#Diani Crystal Garden'
          }
          this.enquire_loading = false
        })
        console.log(response)
      } catch(e){
        console.log(e)
      }
    },
  }
}
</script>
