<template>
  <div  style="padding-bottom: 9rem;">
    <div class="d-flex justify-center animate__animated animate__zoomIn heading blue--text">
      Contact Us
    </div>
    
    <v-row>
      <v-col class="col-2 d-flex justify-center">
        <v-row class="no-gutters">
          <v-col class="col-12 d-flex justify-center">
            <a  href="tel: +254720244744">
              <v-icon class="mx-2 blue--text">
                mdi-phone
              </v-icon>
            </a>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
            <a  href="tel: +254720244744">
              <span>
                0720 244 744
              </span>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-2">
        <v-row class="no-gutters">
          <v-col class="col-12 d-flex justify-center">
            <a href="sms: 0720244744">
              <v-icon class="mx-2 blue--text">
                mdi-message
              </v-icon>
            </a>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
            <a href="sms: 0720244744">
              <span>
                0720 244 744
              </span>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-2">
        <v-row class="no-gutters">
          <v-col class="col-12 d-flex justify-center">
            <v-icon class="mx-2 black--text">
              mdi-whatsapp
            </v-icon>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
            <span>
              0720 244 744
            </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-2">
        <v-row class="no-gutters">
          <v-col class="col-12 d-flex justify-center">
            <a href="mailto: 'Info@adilirealestate.com'">
              <v-icon class="mx-2 green--text">
                mdi-email
              </v-icon>
            </a>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
          <a href="mailto: 'Info@adilirealestate.com'">
            <span>
              info@adilirealestate.com
            </span>
          </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-2">
        <v-row class="no-gutters">
          <v-col class="col-12 d-flex justify-center">
            <a href="https://www.facebook.com/AdiliRealEstate/" target="_blank">
              <v-icon class="mx-2 blue--text">
                mdi-facebook
              </v-icon>
            </a>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
            <a href="https://www.facebook.com/AdiliRealEstate/" target="_blank">
              <span>
                Adili Real Estate
              </span>
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="col-2">
        <v-row class="no-gutters">
          <v-col class="col-12 d-flex justify-center">
            <a href="https://www.twitter.com/AdiliRealEstate/" target="_blank">
              <v-icon class="mx-2 blue--text">
                mdi-twitter
              </v-icon>
            </a>
          </v-col>
          <v-col class="col-12 d-flex justify-center">
            <a href="https://www.twitter.com/AdiliRealEstate/" target="_blank">
              <span>
                Adili Real Estate
              </span>
            </a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="no-gutters mb-3">
      <v-col class="col-3 offset-2 d-flex justify-center" style="border-right: solid 3px white;">
        <v-form ref="form" class="" style="width: 90%;"
          v-model="valid"
          :lazy-validation="lazy">
          <p class="text-center sub-heading"> Book Site Visit </p>
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
      <v-col class="col-3 offset-2 d-flex justify-center">
        <v-form ref="form" class="" style="width: 90%;"
          v-model="valid"
          :lazy-validation="lazy">
          <p class="text-center sub-heading"> Quick Message</p>
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
  import axios from 'axios'
  import { mapActions } from 'vuex'
  export default{
    name: 'Contact',
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
        book_data: {},
        book_loading: false,
        valid: true,
        lazy: false,
        rules: {
          requiredRule: [
            v => !!v || 'This field is required!',
          ]
        } ,
        bookRules: [
          v => !!v || 'This field is required!',
        ]
      }
    },
    methods: {
      ...mapActions(['toogleAlertBox']),
      goWhatsapp(){
        let url = "https://wa.me/+254720244744?text=I'm%20interested%20in%20your%20land%20for%20sale"
        window.open(url,'_blank')
      },
      async enquire(){
        try{
          console.log(this.contact_data)
          this.enquire_loading = true
          const response = await
          axios.post('https://api.adilirealestate.com/api/enquire', this.contact_data).then((response) => {
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