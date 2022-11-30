<template lang="html">
  <div   style="padding-bottom: 9rem;">
    <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2.3rem; color: red;">
      Book site visit
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-6 offset-3 d-flex justify-center">
        <v-form ref="form" class="" style="width: 90%;"
          v-model="valid"
          :lazy-validation="lazy">
          <p style="font-size: 2.3rem;" class="text--center"> Book Site Visit </p>
          <v-text-field
          :rules="bookRules"
          placeholder="name"
          v-model="book_data.name"
          label="name"
          type="name"
          outlined
          clearable />
          <v-text-field
          :rules="bookRules"
          placeholder="email"
          v-model="book_data.email"
          label="email"
          type="name"
          outlined
          clearable />
          <v-text-field
          :rules="bookRules"
          placeholder="phone number"
          v-model="book_data.phone_number"
          label="phone number"
          type="number"
          outlined
          clearable />
          <v-text-field
          :rules="bookRules"
          placeholder="pick the date you are available"
          v-model="book_data.dates"
          label="availability"
          type="name"
          outlined
          clearable />
          <v-textarea
          :rules="bookRules"
          placeholder="additional comment"
          v-model="book_data.message"
          label="additional commment"
          type="name"
          outlined
          clearable />
          <p class="text-center">
            {{"Site visits are prearranged and available any day of the weekend. Fill this form to initiate the process. We will get back to you"}}
          </p>
          <div  class="d-flex justify-end">
            <v-btn class="success mb-4" :disabled="!bookValid" :loading="book_loading" @click="book"> book </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'book',
  computed:{
    bookValid(){
      if(
        !this.book_data.name ||
        !this.book_data.email ||
        !this.book_data.phone_number ||
        !this.book_data.dates ||
        !this.book_data.message 
      ){
        return false
      } else {
        return true
      }
    },
  },
  data(){
    return{
      book_data: {},
      book_loading: false,
      valid: true,
      lazy: false,
      bookRules: [
        v => !!v || 'This field is required!',
      ]
    }
  },
  methods:{
    ...mapActions(['toogleAlertBox']),
    async book(){
      try{
        console.log(this.book_data)
        this.book_loading = true
        const response = await
        axios.post('https://api.adilirealestate.com/api/book', this.book_data).then((response) => {
          console.log(response)
          const alert_box_info = {
            status: true,
            information: 'Site visit recorded successfully, we shall get in touch as soon as possible.',
            code: 'success'
          }
          this.toogleAlertBox(alert_box_info)
          this.book_data = {}
          this.book_loading = false
        })
        console.log(response)
      } catch(e){
        console.log(e)
      }
    }
  }
}
</script>
