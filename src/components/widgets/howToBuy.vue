<template>
    <div class="pale-bluoe">
        <p class="blue--text text-center heading">How To Buy</p>
        
        <v-row class="pa-4 d-flex">
            <v-col class="col-1 justify-end pa-0 d-flex align-center">
                <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToLeft">
                mdi-arrow-left
                </v-icon>
            </v-col>
            <v-col class="col-10">
                <v-row class="d-flex">
                    <v-sheet class="d-flex pale-blue" style="overflow-x: scroll;" id="sheet_2">
                        <v-col class="how_to_card">
                            <div class="d-flex justify-center main my-1">
                                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                1. Site Visit
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/site_visit.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            Contact us to book a free site visit to visit our properties. We have both mega site visits and daily site visits individually planned at your convenience.
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="how_to_card">
                            <div class="d-flex justify-center main my-1">
                                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                2. Plot Selection
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/selection.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            Select your preferred plot from the amended map showing the plots layout.
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="how_to_card">
                            <div class="d-flex justify-center main my-1">
                                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                3. Due Diligence
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/due_diligence.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            We will provide a copy of title deed for the selected plot for your due diligence. 
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="how_to_card">
                            <div class="d-flex justify-center main my-1">
                                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                4. Payment
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/payment.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            Upon satisfaction, make a partial or full payment either through MPESA or Bank deposit/transfer, depending on the agreed upon payment plan.
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="how_to_card">
                            <div class="d-flex justify-center main my-1">
                                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                5. Legal Documentation
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/legal_documentation.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            Upon making the initial minimum deposit, sign the sale agreement, transfer form and other documentation to enable us to start your title transfer process
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col class="how_to_card">
                            <div class="d-flex justify-center main my-1">
                                <div class="section  elevation-3 rounded grey lighten-4 text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                6. Complete Payment
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/complete_payment.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            Complete payment according to the chosen payment plan.
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col id="longest_col">
                            <div class="d-flex justify-center main my-1">
                                <div class="section elevation-3 grey lighten-4 rounded text-center">
                                    <v-row>
                                        <v-col cols="12" class="blue--text text-">
                                            <p class="sub-heading">
                                                7. Collect Title Deed
                                            </p>
                                        </v-col>
                                        <v-col class="col-1"></v-col>
                                        <v-col
                                        class="grey lighten-3 rounded col-10"
                                        >
                                            <v-img class="mx-1"
                                            contain
                                            :aspect-ratio="2/1"
                                            :src="require(`../../assets/how_to_buy/collect_title.svg`)"
                                            />
                                        </v-col>
                                        <v-col
                                        class="d-flex pa-4 align-center"
                                        cols="12"
                                        >
                                            We will let you know once the title deed transfer process is complete and your title deed is ready for collection. You may collect from our office in person, authorize someone to collect on your behalf. Alternatively, we can send it via your preferred and trusted courier service.
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                    </v-sheet>
                </v-row>
            </v-col>
            <v-col class="col-1 d-flex align-center pa-0">        
                <v-icon class="rounded blue lighten-4" @click="scrollTheSheetToRight">
                mdi-arrow-right
                </v-icon>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'howToBuy',

    methods: {
        
      scrollTheSheetToRight(){
        let sheet = document.getElementById('sheet_2')
        for (let index = 0; index < 250; index++) {
          setTimeout(() => {
            if(index/2 > 0.5){
              sheet.scrollLeft += 2

            } else {
              sheet.scrollLeft += 1
            }
          }, index*3);
        }
      },

      scrollTheSheetToLeft(){
        let sheet = document.getElementById('sheet_2')
        for (let index = 0; index < 250; index++) {
          setTimeout(() => {
            if(index/2 > 0.5){
              sheet.scrollLeft -= 2

            } else {
              sheet.scrollLeft -= 1
            }
          }, index*2);
        }
      }
    },

    mounted() {
        let max_height = 0
        let cards = document.querySelectorAll('.section')
        cards.forEach(card => {
            if(card.offsetHeight > max_height){
                max_height = card.offsetHeight
            }
        });

        cards.forEach(card => {
            card.style.height = max_height + 'px'
        })
        if(this.$router.history.current.name == 'howToBuy'){
            setInterval(() => {
                this.scrollTheSheetToRight()
            }, 2500);
        }
    }
}
</script>
<style scoped>
    .section{
        width: calc((100vw / 3.5) - 1rem);
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        border: solid 1px grey;
        margin-bottom: 1rem;
    }
</style>
