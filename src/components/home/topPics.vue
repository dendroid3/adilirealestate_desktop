<template>
<div class="pa-0 my-0"
  style="z-index:02;"> 
    <div style=" max-height: 70vh;">
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated"
      v-show="counter == 0"
      :class="{
        'animate__slideInRight': counter == 0,
        'animate__backOutLeft': in_transit && counter == 0
      }"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/01.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated"
      v-show="counter == 1"
      :class="{
        'animate__slideInRight': counter == 1,
        'animate__backOutLeft': in_transit && counter == 1
      }"
      @click="goSunrise"
      :src="require(`../../assets/banners/02.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated"
      v-show="counter == 2"
      :class="{
        'animate__slideInRight': counter == 2,
        'animate__backOutLeft': in_transit && counter == 2
      }"
      contain
      @click="goSunrise"
      :src="require(`../../assets/banners/03.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated"
      v-show="counter == 3"
      :class="{
        'animate__slideInRight': counter == 3,
        'animate__backOutLeft': in_transit && counter == 3
      }"
      contain
      @click="goSunrise"
      :src="require(`../../assets/banners/04.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated"
      v-show="counter == 4"
      :class="{
        'animate__slideInRight': counter == 4,
        'animate__backOutLeft': in_transit && counter == 4
      }"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/05.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 pointer animate__animated"
      v-show="counter >= 5"
      :class="{
        'animate__slideInRight': counter >= 5,
        'animate__backOutLeft': in_transit && counter == 7
      }"
      @click="goSunrise"
      contain
      :src="require(`../../assets/banners/01.jpeg`)"
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
      if(this.counter < 7){
        this.counter ++
      } else {
        this.counter = 0
      }
    }, 20000);
  }
}
</script>

