<template>
    <div>
    <v-card class="pale-blue" style="background-color:  #48aaf912;">
        <v-card-title class="d-flex justify-center text-center">
            <p class="my-0 heading"  style="width: 100%; color: #ec2027;">
                Diani Crystal Gardens
            </p>
        </v-card-title>
        <v-row>
            <!-- <div class="d-flex justify-center"> -->
                
                <v-col class="col-12 pa-2" style="position: relative;">
                    <span
                    @click="previousPhoto"
                    class="pointer"
                    style="
                        position: absolute;
                        top: 50%;
                        left: 5%;
                        z-index: 99;
                    ">
                        <v-icon class="rounded grey">
                            mdi-arrow-left
                        </v-icon>
                    </span>

                    <v-img class="img rounded lighten-4 ma-4"
                    v-if="img_source == 'real_land_0.png'"
                    contain
                    :src="require(`../../assets/real_land_0.png`)"
                    />
                    <v-img class="img rounded lighten-4 ma-4"
                    v-if="img_source == 'real_land_1.png'"
                    contain
                    :src="require(`../../assets/real_land_1.png`)"
                    />
                    <v-img class="img rounded lighten-4 ma-4"
                    v-if="img_source == 'real_land_2.png'"
                    contain
                    :src="require(`../../assets/real_land_2.png`)"
                    />
                    <v-img class="img rounded lighten-4 ma-4"
                    v-if="img_source == 'real_land_3.png'"
                    contain
                    :src="require(`../../assets/real_land_3.png`)"
                    />
                    <v-img class="img rounded lighten-4 ma-4"
                    v-if="img_source == 'real_land_4.png'"
                    contain
                    :src="require(`../../assets/real_land_4.png`)"
                    />
                    <span 
                    @click="nextPhoto"
                    class="pointer"
                    style="
                        position: absolute;
                        top: 50%;
                        right: 5%;
                    ">
                        <v-icon class="rounded grey">
                            mdi-arrow-right
                        </v-icon>
                    </span>
                </v-col>
            
            <!-- </div> -->
            <v-col class="col-12 d-flex justify-center ">
                <v-img class="pointer rounded mx-1"
                :class="{
                'red': img_source == 'real_land_0.png'
                }"
                contain
                :width="30"
                :height="20"
                @click="changeSource('real_land_0')"
                :src="require(`../../assets/real_land_0.png`)"
                />
                <v-img class="pointer rounded mx-1"
                :class="{
                'red': img_source == 'real_land_1.png'
                }"
                @click="changeSource('real_land_1')"
                contain
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_1.png`)"
                />
                <v-img class="pointer rounded mx-1"
                :class="{
                'red': img_source == 'real_land_2.png'
                }"
                contain
                @click="changeSource('real_land_2')"
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_2.png`)"
                />
                <v-img class="pointer rounded mx-1"
                :class="{
                'red': img_source == 'real_land_3.png'
                }"
                contain
                @click="changeSource('real_land_3')"
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_3.png`)"
                />
                <v-img class="pointer rounded mx-1"
                :class="{
                'red': img_source == 'real_land_4.png'
                }"
                @click="changeSource('real_land_4')"
                contain
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_4.png`)"
                />
            </v-col>
            <v-col class="col-12 px-4 text--bold" style="font-weight: 900;">
                <h3 class="d-flex align-center mr-2"> 
                <v-icon small class="red--text">
                    mdi-pin
                </v-icon>
                Diani
                </h3>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"400M off tamarc."}} 
                </h5>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"1KM from Technical University of Mombasa."}} 
                </h5>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"15Min Drive to Ukunda Airstrip."}} 
                </h5>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"20Min Drive to Diani Beach."}} 
                </h5>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"Water and Electricity on-site."}} 
                </h5>
            </v-col>
            <v-col class="col-12 d-flex px-4">
                <v-col class="col-5 offset-1">
                    <span class="d-flex mr-2 cta tex-center d-flex justify-center align-center red rounded white--text">
                        <span class="body-text px-3">
                            {{"350,000"}}
                        </span>
                    </span>
                </v-col>
                <v-col class="col-5 offset-1">
                    <span class="d-flex mr-2 pointer cta tex-center d-flex justify-center align-center red rounded white--text" @click="go('property/diani-crystal-gardens')">
                        <span class="body-text px-3">
                            {{"View"}}
                        </span>
                    </span>
                </v-col>
            </v-col>
        </v-row>

    </v-card>
    </div>
</template>
<script>
export default {
    name: 'dianiCrystal',

    data: () => {
        return {
            img_source: "real_land_0.png",
            counter: 0
        }
    },

    methods: {
        changeSource(code, counter_already_set){
            let last_character = code.slice(-1)
            if(!counter_already_set){
                this.counter = Number(last_character)
            }
            this.img_source = code + '.png'
        },
        go(code){
            let url = '/' + code
            // this.$router.push(url)
            window.location = url
        },
        nextPhoto(){
            console.log(this.counter)
            if(this.counter == 4){
                this.counter = 0
            } else {
                this.counter ++
            }
            
            let image_name = 'real_land_' + this.counter
            this.changeSource(image_name, true)
        },
        previousPhoto(){
            console.log(this.counter)
            if(this.counter == 0){
                this.counter = 4
            } else {
                this.counter --
            }
            
            let image_name = 'real_land_' + this.counter
            this.changeSource(image_name, true)
        }
    }
}
</script>
<style lang="css" scoped>
    .img{
        /* height: 50px; */
        /* width: 50px; */
    }
</style>