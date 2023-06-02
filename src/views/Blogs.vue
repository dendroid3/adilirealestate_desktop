<template>
  <div style="margin-bottom: 5rem;">
    <div class="d-flex align-center justify-center animate__animated animate__zoomIn heading mt-4 mb-2 blue--text">
      Blogs and Tips
    </div>
    
    <v-row class="pa-4 mx-4">
      <v-col class="col-4">
        <inflationBlogCard />
      </v-col>
      <v-col class="col-4">
        <howtobuyCard />
      </v-col>
      <v-col class="col-4">
        <landLocationCard />
      </v-col>
      <v-col class="col-4">
        <redFlagCard />
      </v-col>
      <v-col class="col-4">
        <blog-card />
      </v-col>
      
    </v-row>
    
  </div>
</template>
<script>
import blogCard from "../components/home/blogCard.vue"
import inflationBlogCard from "../components/home/inflationBlogCard.vue";
import landLocationCard from "../components/home/landLocationCard.vue";
import redFlagCard from "../components/home/redFlagCard.vue";
import howtobuyCard from "../components/home/howtobuyCard.vue";
  export default {
    name: 'Blogs',
    components:{
      blogCard, inflationBlogCard, landLocationCard, redFlagCard, howtobuyCard
    }
  }
</script>
