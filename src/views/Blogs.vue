<template lang="html">
  <div style="margin-bottom: 5rem;">
    <div class="d-flex align-center justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;" v-observe-visibility="visibilityChanged">
      Blogs and Tips
    </div>
    
    <v-row>
      <v-col class="col-6 offset-3">
        <blog-card />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-6 offset-3">
        <inflationBlogCard />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="col-6 offset-3">
        <landLocationCard />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import blogCard from "../components/home/blogCard.vue"
import inflationBlogCard from "../components/home/inflationBlogCard.vue";
import landLocationCard from "../components/home/landLocationCard.vue";
  export default {
    name: 'Blogs',
    components:{
      blogCard, inflationBlogCard, landLocationCard
    }
  }
</script>
