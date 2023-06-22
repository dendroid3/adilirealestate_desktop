<template>
<div class="pa-0 my-0"
  style="z-index:02;"> 
    <div style=" max-height: 70vh;">
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 0"
      contain
      :src="require(`../../assets/banners/01.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 1"
      :src="require(`../../assets/banners/02.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 2"
      :aspect-ration="1/1"
      :src="require(`../../assets/banners/03.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 3"
      :aspect-ration="1/1"
      :src="require(`../../assets/banners/04.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter == 4"
      contain
      :src="require(`../../assets/banners/05.png`)"
      />
      <v-img style=" max-height: 70vh;" class="rounded lighten-4 ma-0 animate__animated animate__slideInRight "
      v-if="counter >= 5"
      contain
      :src="require(`../../assets/banners/01.png`)"
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

