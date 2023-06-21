<template>
    <div>
        <p class="blue--text text-center heading">How To Buy</p>
        <v-container>
            <v-timeline
                dense
                clipped
            >
                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                1. Site Visit
                            </p>
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/site_visit.svg`)"
                            />
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                            Contact us to book a free site visit to visit our properties. We have both mega site visits and daily site visits individually planned at your convenience.
                        </v-col>
                    </v-row>
                </v-timeline-item>
                
                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                2. Plot Selection
                            </p>
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                            Select your preferred plot from the amended map showing the plots layout. 
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/selection.svg`)"
                            />
                        </v-col>
                    </v-row>
                </v-timeline-item>
                
                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                3. Due diligence
                            </p>
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/due_diligence.svg`)"
                            />
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                        We will provide a copy of title deed for the selected plot for your due diligence. 
                        </v-col>
                    </v-row>
                </v-timeline-item>
                
                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                4. Payment
                            </p>
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                            Upon satisfaction, make a partial or full payment either through MPESA or Bank deposit/transfer, depending on the agreed upon payment plan.
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/payment.svg`)"
                            />
                        </v-col>
                    </v-row>
                </v-timeline-item>
                
                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                5. Legal Documentation
                            </p>
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/legal_documentation.svg`)"
                            />
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                            Upon making the initial minimum deposit, sign the sale agreement, transfer form and other documentation to enable us to start your title transfer process.
                        </v-col>
                    </v-row>
                </v-timeline-item>
                
                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                6. Complete Payment
                            </p>
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                            Complete payment according to the chosen payment plan.  
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/complete_payment.svg`)"
                            />
                        </v-col>
                    </v-row>
                </v-timeline-item>

                <v-timeline-item
                class="mb-4"
                color="red"
                small
                >
                    <v-row justify="space-between">
                        <v-col cols="12" class="blue--text text-">
                            <p class="sub-heading">
                                6. Collect Title Deed
                            </p>
                        </v-col>
                        <v-col
                        class="grey lighten-3 rounded"
                        cols="6"
                        >
                            <v-img class="img my-1"
                            contain
                            :aspect-ratio="5/1"
                            :src="require(`../../assets/how_to_buy/collect_title.svg`)"
                            />
                        </v-col>
                        <v-col
                        class="d-flex align-center"
                        cols="6"
                        >
                        We will let you know once the title deed transfer process is complete and your title deed is ready for collection. You may collect from our office in person, authorize someone to collect on your behalf. Alternatively, we can send it via your preferred and trusted courier service.
 
                        </v-col>
                    </v-row>
                </v-timeline-item>

            </v-timeline>
        </v-container>
    </div>
</template>
<script>
export default {
    name: 'howToBuy'
}
</script>
