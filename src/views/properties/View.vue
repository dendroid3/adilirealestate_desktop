<template lang="html">
  <div style="padding-bottom: 10rem;">
    <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2.3rem; color: red;">
      Diani Crystal Garden
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-8  pa-4" style="border-right: solid 3px white;">
        <!-- <v-carousel
        class="pa-0 grey lighten-2"
        :continuous="true"
        :show-arrows="true"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="270"
        >
          <v-carousel-item
          ripple
          class="pa-2 ma-0"
          active-class="red--text"
          v-for="c in counter"
          :key="c">
            <v-img class="img rounded lighten-4 ma-0"
            contain
            :aspect-ratio="16/9"
            :src="require(`../../assets/land_1.jpeg`)"
            />
          </v-carousel-item>
        </v-carousel> -->
        <v-img class="img rounded lighten-4 ma-0"
          v-if="img_source == 'real_land_0.jpeg'"
          contain
          :src="require(`../../assets/real_land_0.jpeg`)"
          />
          <v-img class="img rounded lighten-4 ma-0"
          v-if="img_source == 'real_land.jpeg'"
          contain
          :src="require(`../../assets/real_land.jpeg`)"
          />
          <v-img class="img rounded lighten-4 ma-0"
          v-if="img_source == 'real_land_2.jpeg'"
          contain
          :src="require(`../../assets/real_land_2.jpeg`)"
          />
          <v-img class="img rounded lighten-4 ma-0"
          v-if="img_source == 'real_land_3.jpeg'"
          contain
          :src="require(`../../assets/real_land_3.jpeg`)"
          />
          <v-img class="img rounded lighten-4 ma-0"
          v-if="img_source == 'real_land_4.jpeg'"
          contain
          :src="require(`../../assets/real_land_4.jpeg`)"
          />
        <div>
          <span class="d-flex white align-center red rounded justimmfy-center black--text" style="font-weight:900;">
            <v-spacer />
              <span style="font-size: 1.5rem;">
                {{"350,000"}}
              </span>
            <v-spacer />
          </span>
        </div>
      
      <!-- <v-row class="col-12 px-4 text--bold" style="font-weight: 900;">
        <v-col class="col-2" v-for="c in counter" :key="c">
          <v-img class="img rounded lighten-4 ma-0"
          contain
          :aspect-ratio="1/1"
          :src="require(`../../assets/land_1.jpeg`)"
          />
        </v-col>
      </v-row> -->
      <v-col class="col-12 d-flex justify-center ">
            <v-img class="rounded  mx-1"
            :class="{
              'red': img_source == 'real_land_0.jpeg'
            }"
            contain
            :width="40"
            :height="20"
            @click="changeSource('real_land_0.jpeg')"
            :src="require(`../../assets/real_land_0.jpeg`)"
            />
            <v-img class="rounded mx-1"
            :class="{
              'red': img_source == 'real_land.jpeg'
            }"
            @click="changeSource('real_land.jpeg')"
            contain
            :width="40"
            :height="20"
            :src="require(`../../assets/real_land.jpeg`)"
            />
            <v-img class="rounded mx-1"
            :class="{
              'red': img_source == 'real_land_2.jpeg'
            }"
            contain
            @click="changeSource('real_land_2.jpeg')"
            :width="40"
            :height="20"
            :src="require(`../../assets/real_land_2.jpeg`)"
            />
            <v-img class="rounded mx-1"
            :class="{
              'red': img_source == 'real_land_3.jpeg'
            }"
            contain
            @click="changeSource('real_land_3.jpeg')"
            :width="40"
            :height="20"
            :src="require(`../../assets/real_land_3.jpeg`)"
            />
            <v-img class="rounded mx-1"
            :class="{
              'red': img_source == 'real_land_4.jpeg'
            }"
            @click="changeSource('real_land_4.jpeg')"
            contain
            :width="40"
            :height="20"
            :src="require(`../../assets/real_land_4.jpeg`)"
            />
          </v-col>
      <!-- <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
        <h5> {{"property.location"}} </h5>
        <h5> {{"property.description"}} </h5>
      </v-col> -->
      <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
        <h3 class="d-flex align-center mr-2"> 
          <v-icon small class="red--text">
            mdi-pin
          </v-icon>
          Diani
        </h3>
        <h5 class="d-flex"> 
          <v-icon x-small class="green--text mx-1">
            mdi-circle
          </v-icon>
          {{"400M off tamarc"}} 
        </h5>
        <h5 class="d-flex"> 
          <v-icon x-small class="green--text mx-1">
            mdi-circle
          </v-icon>
          {{"15Min drive from Ukunda Airstrip"}} 
        </h5>
        <h5 class="d-flex"> 
          <v-icon x-small class="green--text mx-1">
            mdi-circle
          </v-icon>
           {{"6KM off Diani White Sands"}} 
        </h5>
      </v-col>
      
      </v-col>
      <v-col class="col-4 d-flex justify-center">

        <!-- <v-form ref="form" class="" style="width: 90%;" >
          <div  class="d-flex justify-space-between">
          </div> -->

        <v-form ref="form" class="" style="width: 90%;"
          v-model="valid"
          v-if="enquire"
          :lazy-validation="lazy">
          <div  class="d-flex justify-space-between">
            <p style="font-size: 2rem;" class="text--center"> Quick Message</p>
            <v-btn sml class="success" @click="enquireFunction(false)"> Book </v-btn>
          </div>
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
            <v-btn class="success" :disabled="!enquiryValid" :loading="enquire_loading" @click="enquireMethod"> send </v-btn>
          </div>
        </v-form>
        <!-- <v-form ref="form" class="" style="width: 90%;" v-if="!enquire">
          <div  class="d-flex justify-space-between">
          <p style="font-size: 2.3rem;" class="text--center"> Book Site Visit </p>
            <v-btn class="success" @click="enquireFunction(true)"> Enquire </v-btn>
          </div> -->
       
        <v-form ref="form" class="" style="width: 90%;"
          v-model="valid"
          v-if="!enquire"
          :lazy-validation="lazy">
          <div  class="d-flex justify-space-between">
            <p style="font-size: 2.3rem;" class="text--center"> Book Site Visit </p>
            <v-btn class="success" @click="enquireFunction(true)"> Enquire </v-btn>
          </div>
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
    <v-row class="no-gutters">
      <v-col class="col-12 d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2.3rem; color: red;">
        How To Buy
      </v-col>
      <v-col class="col-8 offset-2">
        <!-- <h2 class="blue--text pl-2"></h2> -->
      <v-container>
        <v-timeline
          dense
          clipped
        >
          <v-timeline-item
            class="mb-4"
            color="red"
            small
          >
            <v-row justify="space-between">
              <v-col cols="12" class="blue--text">
                <h3>
                  Contact Us
                </h3>
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                <v-img class="img rounded lighten-4 my-1"
                contain
                :aspect-ratio="5/2"
                :src="require(`../../assets/contact_us.svg`)"
                />
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                Contact us for any enquiry or to book site visit. You may also book a site visit on one of the two forms at the end of this page.
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item
            class="mb-4"
            color="red"
            small
          >
            <v-row justify="space-between">
              <v-col cols="12" class="blue--text">
                <h3>
                  Visit Site
                </h3>
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                <v-img class="img rounded lighten-4 my-1"
                contain
                :aspect-ratio="5/2"
                :src="require(`../../assets/site_visit.svg`)"
                />
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                Site visits are arranged at an individual level and happen every day of the weekend. It is a this point where you may incorporate the services of your land surveryor of choice.
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item
            class="mb-4"
            color="red"
            small
          >
            <v-row justify="space-between">
              <v-col cols="12" class="blue--text">
                <h3>
                  Clear Payment
                </h3>
              </v-col>
              
              <v-col
                class=""
                cols="12"
              >
                <v-img class="img rounded lighten-4 my-1"
                contain
                :aspect-ratio="8/2"
                :src="require(`../../assets/clear_payment.svg`)"
                />
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                Upon satisfaction, you may pay the full amount or a deposit to clear the balance in 9 months. You may include the services of your personal advocate at this point.
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item
            class="mb-4"
            color="red"
            small
          >
            <v-row justify="space-between">
              <v-col cols="12" class="blue--text">
                <h3>
                  Get Title Deed
                </h3>
              </v-col>
              
              <v-col
                class=""
                cols="12"
              >
                <v-img class="img rounded lighten-4 my-1"
                contain
                :aspect-ratio="5/3"
                :src="require(`../../assets/title_deed.svg`)"
                />
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                You get a stand-in title deed upon completion of payment. You then may have to wait between 3-6 months fir the actual title deed to be processed.
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item
            class="mb-4"
            color="red"
            small
          >
            <v-row justify="space-between">
              <v-col cols="12" class="blue--text">
                <h3>
                  Develop
                </h3>
              </v-col>
              
              <v-col
                class=""
                cols="12"
              >
                <v-img class="img rounded lighten-4 my-1"
                contain
                :aspect-ratio="5/2"
                :src="require(`../../assets/develop.svg`)"
                />
              </v-col>
              <v-col
                class=""
                cols="12"
              >
                The land is yours, develop it or let it hibernate. 
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-container>
      
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'View',
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
      contact_data: {
        subject: '#Diani Crystal Garden'
      },
      book_data: {},
      book_loading: false,
      img_source: "real_land_0.jpeg",
      counter: [1,2,3],
      enquire: true,
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
  methods: {
    ...mapActions(['toogleAlertBox']),
    async enquireMethod(){
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
    changeSource(code){
      this.img_source = code
    },
    enquireFunction(code){
      this.enquire = code
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
