<template lang="html">
  <div>
    <div class="white rounded elevation-1" @click="go">
      <div class="d-flex justify-center black--text bold">
        {{title}}
      </div>
      <v-divider inset/>
      <div class="d-flex justify-end align-center px-1 black--text">
        <span> {{value}} </span>
      </div>
      <v-progress-linear
      v-if="loading"
        indeterminate
        rounded
        color="grey darken-2"
        height="1"
      ></v-progress-linear>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashboardTab',
  props:[
    'title',
    'value',
    'loading',
    'click_url'
  ],
  methods:{
    go(){
      if(!this.click_url){
        return
      }
      this.$router.push(this.click_url)
    }
  }
}
</script>
