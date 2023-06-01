<template>
  <div class="rounded main_blog"> 
    <v-card class="grey lighten-4">
      <v-card-title class="d-flex justify-center text-center">
        <p class="my-0 sub-heading"  style="width: 100%;">
          Dongo-Kundu Byspass: 
        </p>
        <p class="my-0">
          The Gate to the South Coast
        </p>
      </v-card-title>
  
      <v-img class="rounded"
        :src="require(`../../assets/bypass_1.jpg`)"
        :aspect-ratio="2/1"
        contain
      />

      <v-card-text>
        <span class="body-text">
          {{ `
          Also known as the Mombasa Southern Bypass Highway, the 17.5KM, four-lane stretch of road is a brainchild of the past government which planned it in 2004. 
          The plans to initiate the construction began in 2014 with a $110 B loan from Japan International Cooperation Agency (JICA). Its actual construction began in 2018 by the China
          Civil Engineering Construction Corporation and is set to be complete in 2024. 
          ` | sizeUp }}
        </span>
      </v-card-text>

      <v-card-actions>
        <v-btn small class="success" @click="readMore">
          read more 
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'blogCard',
  filters: {
    sizeUp(text){
      return text.slice(0, 200) + '...'
    }
  },

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
