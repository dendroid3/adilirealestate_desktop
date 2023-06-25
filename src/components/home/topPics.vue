<template>
<div class="pa-0 my-0"
  style="z-index:02;"> 
    <div style=" max-height: 70vh;">
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__slideInRight"
      v-show="counter == 0"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/01.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__slideInRight"
      v-show="counter == 1"
      @click="goSunrise"
      :src="require(`../../assets/banners/02.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__slideInRight"
      v-show="counter == 2"
      contain
      @click="goSunrise"
      :src="require(`../../assets/banners/03.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__slideInRight"
      v-show="counter == 3"
      contain
      @click="goSunrise"
      :src="require(`../../assets/banners/04.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__slideInRight"
      v-show="counter == 4"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/01.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated animate__slideInRight"
      v-show="counter >= 5"
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
      counter: 5,
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
    }, 2500);
  }
}
</script>

