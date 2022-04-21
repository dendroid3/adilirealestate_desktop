<template lang="html">
  <div class="rounded main_blog">
    
        <v-img class="img rounded lighten-4 ma-0"
        contain
        :aspect-ratio="1/1"
        :src="require(`../../assets/land_1.jpg`)"
        />
        <v-row class="grey lighten-2 no-gutters">
      <v-col class="col-12 d-flex justify-center pa-1 text--bold" style="font-weight: 900;" @click="go('view/property/' + vacancy.id)">
        <h2>{{"blog.title"}}</h2> 
      </v-col>
      <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
        <h5> {{"blog.description"}} </h5>
      </v-col>
      <v-col class="col-12 pa-4" style="font-weight: 900;">
        
      <span class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          <v-spacer />
            <span>
              {{"blog.date"}}
            </span>
          <v-spacer />
          <span class="bold-2 mr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
          </span>
            <span>
              {{"blog.views"}}
            </span>
          <v-spacer />
        </span>
      </v-col>
      <v-col class="col-6 offset-6 pa-1 d-flex justify-end" style="font-weight: 900;">
        <v-btn x-small class="success ml-1">
          read more 
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'blogCard'
}
</script>
<style lang="css" scoped>
.main_blog{
  font-family: dosis;
}

</style>
