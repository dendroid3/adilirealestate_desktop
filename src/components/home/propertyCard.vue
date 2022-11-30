<template>
  <div class="px-2 my-2 main_property"
  style="z-index:1;  border-radius: 15px;"> 
  <v-row class="grey lighten-2 no-gutters">
    <v-col class="col-8">
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
      <!-- <v-carousel
      class="pa-0 grey lighten-2"
      :continuous="true"
      :show-arrows="true"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="150"
      >
      
        <v-carousel-item
        ripple
        class="pt-2 d-flex align-center ma-0"
        active-class="red--text">
          <v-img class="img rounded lighten-4 ma-0"
          contain
          :height="800"
          :src="require(`../../assets/real_land_0.jpeg`)"
          />
        </v-carousel-item>
        <v-carousel-item
        ripple
        class="pt-2 d-flex align-center ma-0"
        active-class="red--text">
          <v-img class="img rounded lighten-4 ma-0"
          contain
          :height="800"
          :src="require(`../../assets/real_land.jpeg`)"
          />
        </v-carousel-item>
        <v-carousel-item
        ripple
        class="pt-2 d-flex align-center ma-0"
        active-class="red--text">
          <v-img class="img rounded lighten-4 ma-0"
          contain
          :height="800"
          :src="require(`../../assets/real_land_2.jpeg`)"
          />
        </v-carousel-item>
        <v-carousel-item
        ripple
        class="pt-2 d-flex align-center ma-0"
        active-class="red--text">
          <v-img class="img rounded lighten-4 ma-0"
          contain
          :height="800"
          :src="require(`../../assets/real_land_3.jpeg`)"
          />
        </v-carousel-item>
        <v-carousel-item
        ripple
        class="pt-2 d-flex align-center ma-0"
        active-class="red--text">
          <v-img class="img rounded lighten-4 ma-0"
          contain
          :height="800"
          :src="require(`../../assets/real_land_4.jpeg`)"
          />
        </v-carousel-item>
      </v-carousel> -->
    </v-col>
    <v-col class="col-4">
      <v-col class="col-12 d-flex justify-center pa-1 text--bold" style="font-weight: 900;">
        <h2>{{"Diani Crystal Gardens"}}</h2> 
      </v-col>
      
      <v-col class="col-12 d-flex px-4">
        <div>
          <span class="d-flex mr-2 white align-center red rounded justimmfy-center black--text" style="font-weight:900;">
            <v-spacer />
              <span style="font-size: 1.5rem;" class="px-3">
                {{"350,000"}}
              </span>
            <v-spacer />
          </span>
        </div>
      </v-col>
      
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
      <v-col class="col-6 offset-6 pa-1 d-flex justify-end" style="font-weight: 900;">
        <v-btn x-small class="blue white--text ml-1" @click="go('book')">
          book site visit
        </v-btn>
        <v-btn x-small class="blue white--text ml-1" @click="go('enquire')">
          enquire
        </v-btn>
        <v-btn x-small class="blue white--text ml-1"  @click="go('property/diani-crystal-gardens')">
          view 
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
  </div>
</template>
<script>
export default {
  name: 'propertyVacancyCard',
  props:[
    'vacancy',
  ],
  data(){
    return{
      counter: [1,2,3],
      shown: false,
      unit_types: [],
      booking_form: false,
      img_source: "real_land_0.jpeg"
    }
  },
  methods:{
    showMore(code){
      this.shown = code
    },
    go(code){
      // this.$router.push()
      let url = '/' + code
      window.location = url

    },
    fixImageUrl(url){
      return process.env.VUE_APP_API + '/storage/' + url
    },
    goWhatsapp(){
      window.location = 'https://wa.me/+254' + this.vacancy.landlord
    },
    toogleBookingForm(data){
      this.booking_form = data
    },
    changeSource(code){
      this.img_source = code
    }
  },
  mounted(){
    // function doesNotExist(type){
    //   !this.unit_types.includes(type)
    // }


    // result = this.vacancy.units.type.filter(doesNotExist)
    // console.log(result)
  }
}
</script>

<style lang="css" scoped>
  .bottom-curves{
    
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  }
  .main_property{
      font-family: dosis;
  }
</style>
