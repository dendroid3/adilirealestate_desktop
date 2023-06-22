<template>
  <div class="pale-blue py-4">
    <div class="d-flex justify-center animate__animated animate__zoomIn heading blue--text">
      Contact Us
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-6">
        <div>
          <div>
            <v-img class="img my-1"
            contain
            :aspect-ratio="5/1"
            :src="require(`../../assets/contact_us.svg`)"
            />
          </div>
          <div class="pa-4 ">
            <div class="mx-4">
              <p class="text-center">
                We would like to get in touch with you. Get a hold of us through:
              </p>
              <v-row>
                <v-col class="col-6">
                  <h3 class="text-center mb-4 pb-4">Our Contacts</h3>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="call">
                    <v-col class="col-12 mt-4">
                        <div class="mr-1 px-2 white--text">
                          <v-icon large class="white--text">
                            mdi-phone
                          </v-icon> 
                        </div> 
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        0720 244 744
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goEmail">
                    <v-col class="col-12 mt-4">
                        <div class="mr-1 px-2 white--text">
                          <v-icon large class="white--text">
                            mdi-mail
                          </v-icon> 
                        </div> 
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        info@adilirealestate.com
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goSMS">
                    <v-col class="col-12 mt-4">
                        <div class="mr-1 px-2 white--text">
                          <v-icon large class="white--text">
                            mdi-message
                          </v-icon> 
                        </div> 
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        0720 244 744
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="col-6">
                  <h3 class="text-center mb-4 pb-4">Our Socials</h3>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goWhatsapp">
                    <v-col class="col-12 mt-4">
                        <div class="mr-1 px-2 white--text">
                          <v-icon large class="white--text">
                            mdi-whatsapp
                          </v-icon> 
                        </div> 
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        0720 244 744
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goFacebook">
                    <v-col class="col-12 mt-4">
                        <div class="mr-1 px-2 white--text">
                          <v-icon large class="white--text">
                            mdi-facebook
                          </v-icon> 
                        </div> 
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        Adili Real Estate
                      </div>
                    </v-col>
                  </v-row>
                  <v-row class="mt-4 no-gutters text-center rounded blue darken-1 pa-4 pointer" @click="goTwitter">
                    <v-col class="col-12 mt-4">
                        <div class="mr-1 px-2 white--text">
                          <v-icon large class="white--text">
                            mdi-twitter
                          </v-icon> 
                        </div> 
                    </v-col>
                    <v-col class="col-12 white--text">
                      <div>
                        @AdiliRealEstate
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
        <!-- <v-form ref="form" class="" style="width: 90%;"
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
        </v-form> -->
      </v-col>
      <v-col class="col-5 offset-1 d-flex justify-center">
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
 import { mapActions } from 'vuex'
 import axios from 'axios'
  export default{
    name: 'contatUs',
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
      call(){
        let url = `tel: +254720244744`
        window.open(url, '_blank')
      },

      goEmail(){
        let url = `mailto:'Info@adilirealestate.com'`
        window.open(url, '_blank')
      },

      goSMS(){
        let url = `sms: +254720244744`
        window.open(url, '_blank')
      },

      goWhatsapp(){
        let url = "https://wa.me/+254720244744?text=I'm%20interested%20in%20your%20land%20for%20sale"
        window.open(url,'_blank')
      },

      goFacebook(){
        let url = `https://www.facebook.com/AdiliRealEstate/`
        window.open(url, '_blank')
      },

      goTwitter(){
        let url = `https://www.twitter.com/AdiliRealEstate/`
        window.open(url, '_blank')
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