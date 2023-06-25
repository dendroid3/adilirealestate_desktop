<template>
<div class="pa-0 my-0"
  style="z-index:02;"> 
    <div style=" max-height: 70vh;">
      <v-img style="min-width: 100vw; max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
      v-show="counter < 3"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/01.jpeg`)"
      />
      <v-img style="min-width: 100vw; max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
      v-show="counter == 3"
      @click="goSunrise"
      :src="require(`../../assets/banners/02.png`)"
      />
      <v-img style="min-width: 100vw; max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
      v-show="counter == 4"
      contain
      @click="goSunrise"
      :src="require(`../../assets/banners/03.png`)"
      />
      <v-img style="min-width: 100vw; max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
      v-show="counter == 5"
      contain
      @click="goSunrise"
      :src="require(`../../assets/banners/04.png`)"
      />
      <v-img style="min-width: 100vw; max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__fadeIn"
      v-show="counter == 6"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/05.png`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'topPic',
  data(){
    return {
      counter: 0,
      in_transit: false
    }
  },
  methods:{
    goSunrise(){
      this.$router.push('/property/diani-sunrise-estate')
    }
  },
  mounted(){
    
    // setInterval(() => {
    //     this.in_transit = true
    //   }, 1000);
    setInterval(() => {
      if(this.counter < 6){
        this.counter ++
      } else {
        this.counter = 0
      }
    }, 4000);
  }
}
</script>

