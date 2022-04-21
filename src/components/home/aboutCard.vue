<template>
  <div>
    <!-- <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;" v-observe-visibility="visibilityChanged">
      About
    </div> -->
    <v-row class="text-center">
      <v-col class="col-8 offset-2 py-4 my-4 d-flex justify-center animate__animakjted animate__zoomIn" style="font-size: 1.6rem;">
        <div>
          Adili Real Estate is a private limited company registered by the government of Kenya. <br> We bring to you a variety of affordable and carefully chosen pieces of land in emerging markets with high potential for growth.
          <a href="about"> learn more</a>
        </div>
         <!-- This gives your acquired land guaranteed high appreciation rate. We are dedicated to walk with you. We are a team of highly qualified professionals in the real estate sector guided by the following core values: transparency, honesty, trust and accountability. Are you ready to be a land owner? Contact us on via adilipropertieske@gmail.com -->
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
        console.log('entry')
        console.log(entry)
        console.log('entry')
      }
    }
  }
</script>