<template lang="html">
  <div class="mb-2">
    <div class="d-flex align-center justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;">
      Blogs and Tips
    </div>
    <v-row>
      <!-- <v-col class="col-3"></v-col> -->
      <v-col class="col-6 offset-3">
        <blog-card />
      </v-col>
      <v-col class="col-6 offset-3">
        <inflationBlogCard />
      </v-col>
      <v-col class="col-6 offset-3">
        <landLocationCard />
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import blogCard from "./blogCard.vue"
  import inflationBlogCard from "./inflationBlogCard.vue";
  import landLocationCard from "./landLocationCard.vue";
  export default{
    name: 'blogsSection',
    components:{
      blogCard,
      inflationBlogCard,
      landLocationCard
    },
    methods:{
      viewAll(){
        this.$router.push('/blogs')
      }
    }
  }
</script>
