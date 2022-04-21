<template lang="html">
  <div>
    <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;" v-observe-visibility="visibilityChanged">
      Blog Articles
    </div>
    <v-row>
      <v-col class="col-3"></v-col>
      <v-col class="col-2">
        <blog-card />
      </v-col>
      <v-col class="col-2">
        <blog-card />
      </v-col>
      <v-col class="col-2">
        <blog-card />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import blogCard from "./blogCard.vue"
  export default{
    name: 'blogsSection',
    components:{
      blogCard
    }
  }
</script>
