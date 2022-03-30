<template>
  <div class="px-2 my-2"
  style="z-index:902;  border-radius: 40px;"> 
    <v-carousel
    style="z-index: 1; border-top-left-radius: 15px; border-top-right-radius: 15px; border-bottom-left-radius: 0; border-bottom-right-radius: 0;"
    class="pa-0 grey lighten-1"
    :continuous="true"
    :show-arrows="false"
    hide-delimiter-background
    height="270"
    >
      <v-carousel-item
      ripple
      class="pa-2 ma-0"
      active-class="red--text"
      v-for="(image, i) in vacancy.images"
      :key="i">
        <v-img class="img rounded lighten-4 ma-0"
        contain
        :aspect-ratio="1/1"
        :src="fixImageUrl(image.url)"
        />
      </v-carousel-item>
      <div class="d-flex align-center justify-center white"  v-if="shown"
      style="opacity: 0.9; width:100%;  height: 100%; position: absolute; top: 0;font-weight:900; font-size:1.2rem; z-index:920; left: 0;">
        <div>
          Landlord: {{'+254'}}{{vacancy.landlord}} <br>
          Location: {{vacancy.location}} <br>
          Type: {{vacancy.type}} <br>
        </div>
        <div class="col-6">
          Deposit: n/a <br>
          Rent: {{vacancy.rent}} <br>
          Tenants: {{vacancy.tenants}} <br>
        </div>
        
      </div>
    </v-carousel>
    <v-row class="grey lighten-2 no-gutters" style="border-top-left-radius: 0; border-top-right-radius: 0; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;">
      
      <v-col class="col-12 d-flex justify-center pa-1 text--bold" style="font-weight: 900;" @click="go('view/property/' + vacancy.id)">
        <h2>{{vacancy.name}}</h2> 
        <v-icon class="mx-1 green--text">
          mdi-at
        </v-icon>
        <h2> {{vacancy.location}} </h2>
      </v-col>
      <v-col class="col-12 px-4 text--bold" style="font-weight: 900;" @click="go('view/unit/' + vacancy.id)">
        <h5> {{vacancy.description}} </h5>
      </v-col>
      
      
      <v-col class="col-12 pa-4" style="font-weight: 900;">
        
      <span class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          <v-spacer />
            <span>
              {{vacancy.type}}
            </span>
          <v-spacer />
          <span class="bold-2 mr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
            <span>
              {{vacancy.units.length}}{{" vacanc"}}{{vacancy.units.length > 1 ? 'ies' : 'y'}}
            </span>
          </span>
          <v-spacer />
        </span>
      </v-col>
      <v-col class="col-6 offset-6 pa-1 d-flex justify-end" style="font-weight: 900;">
        <v-icon small class="success--text mr-4" @click="goWhatsapp">
          mdi-whatsapp
        </v-icon>
        <a :href="`sms: 0` + vacancy.landlord" style="text-decoration: none;"> 
          <v-icon small class="black--text mr-4">
            mdi-message
          </v-icon>
        </a>
        <a :href="`tel: +254` + vacancy.landlord" style="text-decoration: none;"> 
          <v-icon small class="black--text mr-4">
            mdi-phone
          </v-icon>
         </a>
        <v-icon small class="black--text mr-4" @click="go('view/property/' + vacancy.id)">
          mdi-eye
        </v-icon>
        <v-icon small class="black--text mr-4" v-if="!shown" @click="showMore(true)">
          mdi-plus
        </v-icon>
        <v-icon small class="black--text red rounded mr-4" v-if="shown" @click="showMore(false)">
          mdi-close
        </v-icon>
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
      unit_types: []
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
</style>
