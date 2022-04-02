<template>
  <div class="px-2 my-2"
  style="z-index:902;"> 
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
        <v-img class="img rounded  lighten-4 ma-0"
        contain
        :src="fixImageUrl(image.url)"
        />
      </v-carousel-item>
      
          <!-- <v-carousel-item
          ripple
          class="pa-0 ma-0"
          active-class="red--text"
          v-for="(image, i) in getMyProperty.images"
          :key="i">
            <v-img class="img rounded  lighten-4 ma-0"
            contain
            :src="fixImageUrl(image.url)"
            />
          </v-carousel-item> -->
      <div class="d-flex align-center justify-center j--text white"  v-if="shown"
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
      <v-col class="col-12 d-flex justify-center pa-1 text--bold" style="font-weight: 900;" @click="go('view/unit/' + vacancy.id)">
        <span>{{vacancy.name}}</span> 
        <v-icon class="mx-1 green--text">
          mdi-at
        </v-icon>

        <span> {{vacancy.location}} </span>
      </v-col>
      <v-col class="col-12 px-4 min" @click="go('view/unit/' + vacancy.id)">
        <span> {{vacancy.description}} </span>
      </v-col>
      <v-col class="col-6 px-4" style="font-weight: 900;">
        {{vacancy.rent}} {{'/= pm'}}
      </v-col>
      <v-col class="col-6 pa-1 d-flex justify-end" style="font-weight: 900;">
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
        <v-icon small class="black--text mr-4" @click="go('view/unit/' + vacancy.id)">
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
  name: 'vacancyCard',
  props:[
    'vacancy'
  ],
  data(){
    return{
      counter: [1,2,3],
      shown: false
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
      console.log(this.vacancy)
      return process.env.VUE_APP_API + '/storage/' + url
    },
    goWhatsapp(){
      window.location = 'https://wa.me/+254' + this.vacancy.landlord
    }
  }
}
</script>
<style lang="css" scoped>
  .min{
    font-size: 0.8rem;
  }
</style>

