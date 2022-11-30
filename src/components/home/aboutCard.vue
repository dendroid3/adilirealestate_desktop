<template>
  <div>
    <!-- <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;" v-observe-visibility="visibilityChanged">
      About
    </div> -->
    <v-row class="text--center">
      <v-col class="col-6 offset-3">
        <div class="bold blue--text d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2.5rem; width:100%;"> 
          <p class="d-flex justify-center text--center">
            Affordable and strategic plots for sale in Diani-South Coast
          </p>
        </div>
        <div class="text--center d-flex justify-center" style="width:100%;"> 
          Adili Real Estate brings to you a variety of affordable and carefully chosen plots for sale in Diani- South Coast. Our land is genuine with a guaranteed return of investment.
        </div>
      </v-col>
    </v-row>
    <!-- <v-row class="text-center d-flex justify-center mt-2">
      <v-btn class="rounded elevation-20 white--text red darken-4" large @click="buyNow">
        Buy Now!
      </v-btn>
    </v-row> -->
    <!-- <div class="d-flex justify-center mt-4 align-center" style="font-size: 2rem; color: red; z-index: 1;">
      Why Us
    </div>
    <div class="px-2">
      <h3 class="blue--text d-flex align-center">
        <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
          mdi-check
        </v-icon>
        Professional
      </h3>
      <p class="px-2">
        Adili is led by surveyors with years of experience. This ensures that your interaction with us will meet all the professional standards. Having  navigated the industry, 
        we have realised the key indicators that can be applied to predict the potential return on land which we use to get you the best lands. 
        Adili promises to deliver your title deed within 3-6 months upon completion of payment.
      </p>
      <h3 class="blue--text d-flex align-center">
        <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
          mdi-check
        </v-icon>
        Flexible
      </h3>
      <p class="px-2">Adili understands, we give the option of you to pay a deposit then pay the remaining amount in 9 months</p>
      <h3 class="blue--text d-flex align-center">
        <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
          mdi-check
        </v-icon>
        Trustworthy
      </h3>
      <p class="px-2">
          Adili Real Estate is a private limited company registered by the government of Kenya. <br> 
          We bring to you a variety of affordable and carefully chosen pieces of land in emerging markets with high potential for growth.
          <a href="about"> learn more about us</a>
        </p>
    </div> -->
    <!-- <v-row class="no-gutters">
      <v-col class="col-6">

      </v-col>
      <v-col class="col-6"></v-col>
    </v-row> -->
  </div>
</template>
<script>
  export default{
    name: 'aboutCard',
    data(){
      return{
        isVisible: false
      }
    },
    methods:{
      visibilityChanged (isVisible, entry) {
        this.isVisible = isVisible
        console.log('entry')
        console.log(entry)
        console.log('entry')
      },
      buyNow(){
      let url = "https://wa.me/+254720244744?text=I%20want%20to%20buy%20this%20land%20now!"
      window.open(url,'_blank')
    }
    }
  }
</script>