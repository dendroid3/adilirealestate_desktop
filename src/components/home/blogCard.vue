<template lang="html">
  <div class="rounded main_blog">
    <v-row class="no-gutters grey lighten-2 rounded pa-1">
      <v-col class="col-8">
        <v-col class="col-12 d-flex justify-center text--bold" style="font-weight: 900;">
          <h2>{{"Dongo-Kundu Byspass: The Gate to the South Coast"}}</h2> 
        </v-col>
        <v-col class="col-12 text--bold" style="font-weight: 900;">
          <h5>
            Also known as the Mombasa Southern Bypass Highway, the 17.5KM, four-lane stretch of road is a brainchild of the past government which planned it in 2004. 
            The plans to initiate the construction began in 2014 with a $110 B loan from Japan International Cooperation Agency (JICA). Its actual construction began in 2018 by the China
             Civil Engineering Construction Corporation and is set to be complete in 2024. 
             <v-btn x-small class="success ml-1" @click="readMore">
              read more 
            </v-btn>
          </h5>
        </v-col>
      </v-col>
      <v-col class="col-4">
        <v-img class="img rounded lighten-4 mr-1"
        :src="require(`../../assets/bypass_1.jpg`)"
        :aspect-ratio="1/1"
        contain
        />
        <div class="d-flex justify-end">
          
        </div>
        
      </v-col>
    </v-row>
    
        
        <!-- <v-row class="grey lighten-2 no-gutters">
      
      <v-col class="col-12 pa-4" style="font-weight: 900;">
        
      <span class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          <v-spacer />
          <span class="bold-2 mkjr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-clock
            </v-icon>
          </span>
            <span>
              {{"XT min"}}
            </span>
          <v-spacer />
          <span class="bold-2 mkjr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-eye
            </v-icon>
          </span>
            <span>
              {{"blog.views"}}
            </span>
          <v-spacer />
        </span>
      </v-col>
      <v-col class="col-6 offset-6 pa-1 d-flex justify-end" style="font-weight: 900;">
        
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
export default {
  name: 'blogCard',
  methods:{
    readMore(){
      let url = '/blog/dongo-kundu-bypass'
      window.location = url
    }
  }
}
</script>
<style lang="css" scoped>
.main_blog{
  font-family: dosis;
}

</style>
