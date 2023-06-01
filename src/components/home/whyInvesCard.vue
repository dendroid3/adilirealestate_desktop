<template>
    <div>
        <v-card class="grey lighten-4">
            <v-card-title class="blue--text d-flex align-center ">
                <v-icon class="blue rounded bold white--text mr-1" style="font-weigth: 800;">
                    mdi-check
                </v-icon>
                <span class="sub-heading">
                    {{title}}
                </span>
            </v-card-title>
            <v-img class="rounded lighten-4"
            v-if="title == `Affordable`"
            contain
            :src="require('../../assets/saving.svg')"
            :aspect-ratio="5/2"
            />
            <v-img class="rounded lighten-4"
            v-if="title == `Flexible Payments`"
            contain
            :src="require('../../assets/payment.svg')"
            :aspect-ratio="5/2"
            />
            <v-img class="rounded lighten-4"
            v-if="title == `Prime Selections`"
            contain
            :src="require('../../assets/prime.svg')"
            :aspect-ratio="5/2"
            />
            <v-card-text class="text-center">
                <span v-html="text"></span>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default {
    name: 'whyInvestCard',
    props:[
        'title',
        'text',
        'image'
    ]
}
</script>
<style lang="">
    
</style>