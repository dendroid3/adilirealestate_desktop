<template lang="html">
  <div class="bottom-line">
      <v-col class="col-12  pa-2" :class="{
        'red-border': vacancy,
        'green-border': !vacancy
      }">
        <div class="username d-flex bold-1">
          <span @click="go('unit/id')">
            {{unit.property}}
          </span>
          <v-spacer />
        </div>
        <div class="username d-flex bold-1">
          <span @click="go('unit/id')">
            {{unit.type}}
            {{": "}}
            {{unit.name}}
          </span>
          <v-spacer />
          <span class="bold mx-3 pa-1 rounded  white--text" :class="{
            'red': vacancy,
            'success': !vacancy
          }">
            {{vacancy ? 'vacant': 'occupied'}}
          </span>

        </div>
        
        <span class="d-flex mr-2 white align-center my-0 rounded pa-0 justify-center black--text" style="font-weight:900;">
          <section v-if="!bookable" class="d-flex align-center ma-0 pa-0">
            <span class="bold mx-3">{{'vacancy:'}}</span>
          
            <v-switch
              :loading="changing"
              dense
              ripple
              :success-messages="changed ? 'success' : false"
              @change="log"
              v-model="vacancy"
            >
            </v-switch>

            <v-spacer />
          </section>

          <span class="bold-2  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
            {{unit.tenants}}{{' tenant'}}
          </span>
          <v-spacer />
          <span class="bold-2 mr-2  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
            {{unit.rent}}{{"/= pm"}}
          </span>
        </span>
      </v-col>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'unitCard',
  props:[
    'unit',
    'bookable'
  ],
  computed:{
    initial_vacancy(){
      return this.unit.vacancy
    }
  },
  data() {
    return {
      vacancy: this.unit.vacancy,
      changing: false,
      changed: false
    }
  },
  methods:{
    ...mapActions(['changeUnitVacancyStatus']),
    go(code){
      this.$router.push('/' + code)
    },
    log(){
      this.changing = true
      const data = {
        unit_id: this.unit.id,
        property_id: this.unit.property_id,
        vacancy: (this.vacancy === false) ? 0 : 1
      }
      console.log(this.vacancy)
      console.log(data)
      this.changeUnitVacancyStatus(data).then((res) => {
        this.changing = false
        this.vacancy = res
        this.changed = true
        setTimeout(() => {
          this.changed = false
        }, 2000);
      })

    }
  },
}
</script>
<style lang="css" scoped>
  
  .red-border{
    background-color: rgb(231, 231, 231); 
    border-left: solid 4px red;
  }
  .green-border{
    background-color: rgb(231, 231, 231); 
    border-left: solid 4px green;
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
