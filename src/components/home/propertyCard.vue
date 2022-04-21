<template>
  <div class="px-2 my-2 main_property"
  style="z-index:902;  border-radius: 40px;"> 
    <!-- <div class="red" style="height: 100vh; width: 100vw; position: fixed; top: 0;">
      hello
    </div> -->
    <v-carousel
    style="z-index: 1; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
    class="pa-0 grey lighten-3"
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
        :aspect-ratio="1/1"
        :src="require(`../../assets/land_1.jpg`)"
        />
      </v-carousel-item>
    </v-carousel>
    <v-row class="grey lighten-2 no-gutters" style="border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
      
      <v-col class="col-12 d-flex justify-center pa-1 text--bold" style="font-weight: 900;" @click="go('view/property/' + vacancy.id)">
        <h2>{{"property.name"}}</h2> 
        <v-icon class="mx-1 green--text">
          mdi-at
        </v-icon>
        <h2> {{"property.location"}} </h2>
      </v-col>
      <v-col class="col-12 px-4 text--bold" style="font-weight: 900;" @click="go('view/unit/' + vacancy.id)">
        <h5> {{"property.description"}} </h5>
      </v-col>
      
      
      <v-col class="col-12 pa-4" style="font-weight: 900;">
        
      <span class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          <v-spacer />
            <span>
              {{"propertyy.type"}}
            </span>
          <v-spacer />
          <span class="bold-2 mr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
          </span>
          <v-spacer />
        </span>
      </v-col>
      <v-col class="col-6 offset-6 pa-1 d-flex justify-end" style="font-weight: 900;">
        <v-btn x-small class="success ml-1" @click="go('book')">
          book site visit
        </v-btn>
        <v-btn x-small class="success ml-1" @click="go('enquire')">
          enquire
        </v-btn>
        <v-btn x-small class="success ml-1"  @click="go('property/id')">
          view 
        </v-btn>
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
      booking_form: false
    }
  },
  methods:{
    showMore(code){
      this.shown = code
    },
    go(code){
      this.$router.push('/' + code)
    },
    fixImageUrl(url){
      return process.env.VUE_APP_API + '/storage/' + url
    },
    goWhatsapp(){
      window.location = 'https://wa.me/+254' + this.vacancy.landlord
    },
    toogleBookingForm(data){
      this.booking_form = data
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
