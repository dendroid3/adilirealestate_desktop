<template>
<div class="px-2 my-2"
  style="z-index:02;"> 
    <v-carousel
    style="z-index: 1;"
    class="pa-0 g-1"
    :continuous="true"
    :show-arrows="true"
    delimiter-icon="mdi-minus"
    hide-delimiter-background
    height="540"
    >
      <v-carousel-item
      ripple
      class="pa-2 ma-0"
      active-class="red--text"
      v-for="c in counter"
      :key="c">
        <v-img class="img rounded lighten-4 ma-0"
        :aspect-ratio="16/9"
        contain
        :src="require(`../../assets/land_1.jpg`)"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'topPic',
  data(){
    return {
      counter: 2
    }
  }
}
</script>

<style>

</style>