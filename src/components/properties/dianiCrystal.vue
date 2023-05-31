<template>
    <div>
    <v-card class="grey lighten-4">
        <v-card-title class="d-flex justify-center text-center">
            <p class="my-0"  style="width: 100%;">
                Diani Crystal Gardens
            </p>
        </v-card-title>
        <v-row>
            <v-col class="col-12 pa-2">
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
            </v-col>
            <v-col class="col-12 d-flex justify-center ">
                <v-img class="rounded mx-1"
                :class="{
                'red': img_source == 'real_land_0.png'
                }"
                contain
                :width="30"
                :height="20"
                @click="changeSource('real_land_0')"
                :src="require(`../../assets/real_land_0.png`)"
                />
                <v-img class="rounded mx-1"
                :class="{
                'red': img_source == 'real_land_1.png'
                }"
                @click="changeSource('real_land_1')"
                contain
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_1.png`)"
                />
                <v-img class="rounded mx-1"
                :class="{
                'red': img_source == 'real_land_2.png'
                }"
                contain
                @click="changeSource('real_land_2')"
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_2.png`)"
                />
                <v-img class="rounded mx-1"
                :class="{
                'red': img_source == 'real_land_3.png'
                }"
                contain
                @click="changeSource('real_land_3')"
                :width="30"
                :height="20"
                :src="require(`../../assets/real_land_3.png`)"
                />
                <v-img class="rounded mx-1"
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
                {{"15Min drive from Ukunda Airstrip."}} 
                </h5>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"6KM off Diani White Sands."}} 
                </h5>
                <h5 class="d-flex"> 
                <v-icon x-small class="green--text mx-1">
                    mdi-circle
                </v-icon>
                {{"Ideal for residential homes or speculative purposes."}} 
                </h5>
            </v-col>
            <v-col class="col-12 d-flex px-4">
                <v-col class="col-5 offset-1">
                    <span class="d-flex mr-2 success tex-center d-flex justify-center align-center red rounded white--text" style="font-weight:900;">
                        <span style="font-size: 1.5rem;" class="px-3">
                            {{"350,000"}}
                        </span>
                    </span>
                </v-col>
                <v-col class="col-5 offset-1">
                    <span class="d-flex mr-2 pointer success tex-center d-flex justify-center align-center red rounded white--text" style="font-weight:900;" @click="go('property/diani-crystal-gardens')">
                        <span style="font-size: 1.5rem;" class="px-3">
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

        triggerChanges(){
            setInterval(() => {
                if(this.counter < 4){
                    this.counter ++
                } else {
                    this.counter = 0
                }
                let image_name = 'real_land_' + this.counter
                this.changeSource(image_name, true)
            }, 2000);
        },
        go(code){
            let url = '/' + code
            // this.$router.push(url)
            window.location = url
            },
    },  

    mounted(){
        this.triggerChanges()
    }
}
</script>
<style lang="css" scoped>
    .img{
        /* height: 50px; */
        /* width: 50px; */
    }
</style>