<template lang="html">
  <div class="bottom-line">
      <v-col class="col-12 list pa-2">
        <div class="username d-flex bold-1">
          <span @click="go('unit/id')">
            {{"Kaloleni Hse3k"}}
          </span>
          <v-spacer />
        </div>
        
        <div class="bold-2 align-center d-flex justify-end">
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
          <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
          <span class="username">
            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content
          </span>
        </div>
        <span class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          
          <span class="bold mx-3">vacant</span>
          
          <v-progress-circular
            v-if="changing"
            indeterminate
            :value="0"
            size="24"
            class="ml-2"
          ></v-progress-circular>
          
          <v-icon color="green" v-if="changed">
            mdi-check
          </v-icon>
          <v-switch
            v-if="!changing && !changed"
            @change="log"
            v-model="vacancy"
          >
          </v-switch>
        <v-spacer />
        <span class="bold-2 mr-1  d-flex justify-end">
          <v-icon x-small class="mx-1 green--text">
            mdi-circle
          </v-icon>
          1 tenant
        </span>
        <v-spacer />
        <span class="bold-2 mr-1  d-flex justify-end">
          <v-icon x-small class="mx-1 green--text">
            mdi-circle
          </v-icon>
          9000/= pm
        </span>
        </span>
      </v-col>
  </div>
</template>
<script>
export default {
  name: 'vacancyCard',
  data() {
    return {
      vacancy: false,
      changing: false,
      changed: false
    }
  },
  methods:{
    go(code){
      this.$router.push('/' + code)
    },
    log(){
      this.changing = true
      this.vacancy = !this.vacancy
      setTimeout(() => {
        this.changing = false
        this.changed = true
        this.vacancy = !this.vacancy
      }, 3000);
      setTimeout(() => {
        this.changed = false
      }, 5000);

    }
  }
}
</script>
<style lang="css" scoped>
  
  .list{
    background-color: rgb(231, 231, 231); 
    border-left: solid 4px red;
  }
  .bottom-line{
    position: relative;

  }
  .bottom-line::after{
    content: '';
    display: inline;
    border-bottom: solid 1px green;
    position: absolute;
    bottom: 0;
    width: 80%;
    left: 10%;
  }
</style>
