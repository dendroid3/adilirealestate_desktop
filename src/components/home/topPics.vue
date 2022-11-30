<template>
<div class="px-2 my-2"
  style="z-index:02;"> 
    <div style=" max-height: 70vh;">
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 0"
      :aspect-ration="1/1"
      contain
      :src="require(`../../assets/real_land_4.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 1"
      :aspect-ration="1/1"
      :src="require(`../../assets/real_land.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 2"
      contain
      :aspect-ration="1/1"
      :src="require(`../../assets/real_land_2.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 3"
      contain
      :aspect-ration="1/1"
      :src="require(`../../assets/real_land_3.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 4"
      :aspect-ration="1/1"
      contain
      :src="require(`../../assets/real_land_0.jpeg`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter >= 5"
      :aspect-ration="1/1"
      contain
      :src="require(`../../assets/poster.jpeg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'topPic',
  data(){
    return {
      counter: 5
    }
  },
  methods:{
    
  },
  mounted(){
    setInterval(() => {
      if(this.counter < 7){
        this.counter ++
      } else {
        this.counter = 0
      }
    }, 3500);
  }
}
</script>

