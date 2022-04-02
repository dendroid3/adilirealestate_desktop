<template lang="html">
  <div class="bottom-line">
      <v-col class="col-12 pa-2"  :class="{
        'red-border': vacancy,
        'green-border': !vacancy
      }">
        <div class="username d-flex bold-1">
          <span @click="go('property/' + property.id)">
            {{property.name}}
          </span>
        </div>
        <div class="username d-flex bold-1">
          <span >
            {{property.type}}
          </span>
        </div>
        
        <div class="2 align-center d-flex justify-start">
          <!-- <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img :src="fixImageUrl(property.image.url)" v-if="property.image"></v-img>
          </v-avatar> -->
          <div>
            <span class="">
              <v-icon small class="red--text">
                mdi-pin
              </v-icon>
              {{property.location}}
            </span>
            <br>

            <span class="card">
              {{property.description}}
            </span> 
          </div>
        </div>
        <span v-if="!property.rent" class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          <v-spacer />
          <span class="bold-2 mr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
            <span>
              {{property.units_count}}{{" units"}}
            </span>
          </span>
          <v-spacer />
          <span class="bold-2 mr-1  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
              {{property.vacancies_count}}{{" vacancies"}}
          </span>
          <v-spacer />
        </span>
        <span v-if="property.rent" class="d-flex mr-2 white align-center rounded justify-center black--text" style="font-weight:900;">
          <span class="bold mx-3">{{'vacancy:'}}</span>
          
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

          <span class="bold-2  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
            {{property.tenants}}{{' tenant'}}
          </span>
          <v-spacer />
          <span class="bold-2 mr-2  d-flex justify-end">
            <v-icon x-small class="mx-1 green--text">
              mdi-circle
            </v-icon>
            {{property.rent}}{{"/= pm/pt"}}
          </span>
        </span>
      
      </v-col>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'propertyCard',
  props:[
    'property'
  ],
  data() {
    return {
      changing: false,
      changed: false,
      vacancy: Number(this.property.vacancy)
    }
  },
  methods:{
    ...mapActions(['changePropertyVacancyStatus']),
    go(code){
      this.$router.push('/' + code)
    },
    fixImageUrl(url){
      return process.env.VUE_APP_API + '/storage/' + url
    },
    log(){
      this.changing = true
      const data = {
        property_id: this.property.id,
        vacancy: (this.vacancy === false) ? 0 : 1
      }
      console.log(this.vacancy)
      console.log(data)
      this.changePropertyVacancyStatus(data).then((res) => {
        this.changing = false
        this.vacancy = res
        this.changed = true
        setTimeout(() => {
          this.changed = false
        }, 2000);
      })

    }
  }
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
  .card{
    font-size: 0.8rem;
  }
  .bottom-line::after{
    content: '';
    display: inline;
    border-bottom: solid 1px white;
    position: absolute;
    bottom: 0;
    width: 80%;
    left: 10%;
  }
</style>
