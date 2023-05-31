<template>
  <div>
    <v-row class="blue mt-2" style="width: 80vw; margin-left: 10vw; line-height: 1px; position: absolute;">.</v-row>    
    <div style="padding-bottom: 5rem;" class="blue footer-wrapper mt-4">
      <v-row class="white">
        <v-col class="col-6 offset-3 d-flex justify-center">
          <div>
            <h3 class="text-center">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <p>Submit your email to get updates on our latest properties for sale</p>
            <div class="white rounded pa-4 d-flex" style="width: 100%;">
              <v-text-field
              small
              placeholder="email"
              class="white"
              v-model="email"
              label="email"
              type="name"
              outlined
              clearable />
              <div class="d-flex justify-center mt-2">
                <v-btn text class="success bold white--text mx-2">
                  Subscribe
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="blue pa-4 white--text">
        <v-col class="col-3 d-flex justify-center footer-block">
          <div>
            <h3 class="text-center">About Us</h3>
            <v-row class="mt-2 mb-4 pa-4">
              <p>
                Adili Real Estate is a private limited company registered by the government of Kenya. We bring to you a variety of affordable and carefully chosen pieces of land in 
                emerging markets with high potential for growth. This gives your acquired land guaranteed high appreciation rate. 
                We are dedicated to walk with you. We are a team of highly qualified professionals with years of experience in the real estate sector.
              </p>
              <v-btn small>
                Learn more
              </v-btn>
            </v-row>
            
          </div>
        </v-col>
        <v-col class="col-3 d-flex justify-center footer-block">
          <div>
            <h3 class="text-center">Our Properties</h3>
            <div class="d-flex align-center" style="height: 100%;">
              <div>
                <v-row class="mt-2 no-gutters mb-2">
                  <v-col class="col-12 pb-0 ma-0 d-flex justify-center">
                    <v-img class="img pointer rounded lighten-4"
                    :src="require(`../../assets/real_land_0.png`)"
                    > 
                    <span style="font-weight: 800;">
                      Diani Crystal Gardens
                    </span>
                  </v-img>
                  </v-col>
                  <v-col class="col-12 pointer">
                    Diani Crystal Gardens
                  </v-col>
                </v-row>
                <v-row class="mt-2 no-gutters mb-2">
                  <v-col class="col-12 pb-0 ma-0 d-flex justify-center">
                    <v-img class="img pointer rounded lighten-4"
                    :src="require(`../../assets/real_land_0.png`)"
                    > 
                    <span style="font-weight: 800;">
                       Daini Sunrise Estate
                    </span>
                  </v-img>
                  </v-col>
                  <v-col class="col-12 pointer">
                     Daini Sunrise Estate
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-col>
        <v-col class="col-3 d-flex justify-center footer-block">
          <div>
            <h3 class="text-center">Our Contacts</h3>
            <v-row class="mt-2">d</v-row>
            <v-row class="mb-4">d</v-row>
          </div>
        </v-col>
        <v-col class="col-3 d-flex justify-center">
          <div>
            <h3 class="text-center">Our Socials</h3>
            <v-row class="mt-2">d</v-row>
            <v-row class="mb-4">d</v-row>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="col-12 d-fl;;ex justify-center">
          <div class="d-flex justify-center">
            <span class="" >
              Made with 
              <v-icon small class="red--text">
                mdi-heart
              </v-icon>
              by 
              <a class="white px-1 rounded bold" style="font-size: 0.8rem;" href="http://dehub.dkut.ac.ke">{{`WAZO TANK`}}</a>
            </span>
          </div>
          <div class="d-flex align-center justify-center">
            <span class="mx-4 d-flex align-center" >
              <v-icon small>
                mdi-copyright
              </v-icon>
                {{new Date().getFullYear()}}
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footerStrip',
  computed:{
    ...mapGetters(['getUser'])
  },
  data: () => {
    return{
      email: null
    }
  },
  methods: {
    go(code){
      this.$router.push(code)
    }
  }
}
</script>
<style lang="css" scoped>
.link{
  text-decoration: underline;
  margin-left:0.3rem;
  margin-right:0.3rem;
}


.footer-block{
  position: relative;
}
  
.footer-block:after{
  content: "";
  position: absolute;
  background-color: white;
  height: 80%;
  width: 1px;
  bottom: 0; 
  right: 0; 
}

.img{
  width: 5rem;
  height: 5rem;
  padding: 2rem;
  margin: 2rem;
}

</style>
