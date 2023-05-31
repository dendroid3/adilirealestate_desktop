<template>
  <div class="mb-2">
    <div class="d-flex align-center justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;">
      Blogs and Tips
    </div>
    <v-row class="pa-4 d-flex">
      <v-col class="col-1 justify-end pa-0 d-flex align-center">
        <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToLeft">
          mdi-arrow-left
        </v-icon>
      </v-col>
      <v-col class="col-10">
        <v-row>
          <v-sheet class="d-flex" style="overflow-x: scroll;" id="sheet">
            <v-col class="col-4">
              <redFlagCard />
            </v-col>
            <v-col class="col-4">
              <landLocationCard />
            </v-col>
            <v-col class="col-4">
              <howtobuyCard />
            </v-col>
            <v-col class="col-4">
              <inflationBlogCard />
            </v-col>
            <v-col class="col-4">
              <blog-card />
            </v-col>
          </v-sheet>
          
        </v-row>
      </v-col>
      <v-col class="col-1 d-flex align-center pa-0">        
        <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToRight">
          mdi-arrow-right
        </v-icon>
      </v-col>
<!-- 
      <v-col class="col-3">
        <redFlagCard />
      </v-col>
      <v-col class="col-3">
        < />
      </v-col> -->
    </v-row>
  </div>
</template>
<script>
  import blogCard from "./blogCard.vue"
  import inflationBlogCard from "./inflationBlogCard.vue";
  import landLocationCard from "./landLocationCard.vue";
  import redFlagCard from "./redFlagCard.vue";
  import howtobuyCard from "./howtobuyCard.vue";
  export default{
    name: 'blogsSection',
    components:{
      blogCard,
      inflationBlogCard,
      landLocationCard,
      redFlagCard,
      howtobuyCard,
    },
    data: () => {
      return {
        // left_scroll: 0,
      }
    },
    methods:{
      viewAll(){
        this.$router.push('/blogs')
      },

      scrollTheSheetToRight(){
        let sheet = document.getElementById('sheet')
        sheet.scrollLeft += 100
      },

      scrollTheSheetToLeft(){
        let sheet = document.getElementById('sheet')
        sheet.scrollLeft -= 100 
      }
    }
  }
</script>

