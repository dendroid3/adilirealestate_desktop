<template>
  <div>
    <v-row class="text--center">
      <v-col class="col-6 offset-3">
        <div class="bold blue--text d-flex justify-center animate__animated animate__zoomIn heading" style="width:100%;"> 
          <p class="d-flex justify-center text--center">
            Affordable Plots Within Diani
          </p>
        </div>
        <div class="d-flex justify-center" style="width:100%;"> 
          <p class="text-center p sub-heading">
            We bring to you a varierty of affordable and carefully chosen plots for sale in Diani, South Coast with ready title deeds.
          </p>
        </div>
      </v-col>
    </v-row>
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
      },
      buyNow(){
      let url = "https://wa.me/+254720244744?text=I%20want%20to%20buy%20this%20land%20now!"
      window.open(url,'_blank')
    }
    }
  }
</script>

<style scoped>
  .p{
    line-height: 1.75rem;
    font-size: 18px;
    font-weight: 400;
  }
</style>
