<template>
  <div class="pale-blue py-4">
    <div class="d-flex justify-center heading blue--text align-center animate__animated animate__zoomIn mt-4">
      FAQs
    </div>  
    <v-row class="no-gutters pa-0 rounded" v-for="(question, i) in faqs" :key="i">
      <v-col class="col-8 rounded offset-2 pb-0" :class="{
        'blue lighten-4': (i == selected),
        }">
        <p class="sub-heading pointer mb-0 pl-2" :class="{
        'blue lighten-3': (i == selected),
        }"
        @click="selectQuestion(i)" v-html="question.question">
        </p>
        <p class="body-text blue lighten-4 pa-4 mt-1 rounded" v-if="selected == i" v-html="question.answer">
        </p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'faqsSection',
  data(){
    return{
      selected: null,
      faqs:[
        {
          question: '<b>Q:</b> Do your parcels have ready titles?',
          answer: 'Yes, all our parcels have ready title deeds in our name. On request, we provide copies for your due diligence processes.'
        },
        {
          question: '<b>Q:</b> When can I come see the plots?',
          answer: 'We have daily site visits from Diani. For easier planning, schedule your site visit <a href="/book">here</a>.'
        },
        {
          question: '<b>Q:</b> Are the site visits free?',
          answer: 'Yes, we have FREE site visits from Diani town.'
        },
        {
          question: '<b>Q:</b> Is the price inclusive of title deed processing?',
          answer: 'Yes, we cater for title deed processing fees. No hidden charges.'
        },
        {
          question: '<b>Q:</b> How long does the title processing take?',
          answer: 'The title transfer process takes 60 to 120 days after completion of payment'
        },
        {
          question: '<b>Q:</b> What modes of payment do you have?',
          answer: 'We have a cash option and lipa pole pole installment option of up to 9 months.'
        },
        {
          question: '<b>Q:</b> Do you accept Mpesa option?',
          answer: 'Yes, we you can conveniently make your payment through our Mpesa Till number 244744.'
        },
        {
          question: '<b>Q:</b> What size are the plots?',
          answer: 'Our plots are 50X100 or an eighth of an acre.'
        },
        {
          question: '<b>Q:</b> What documents do I need for the purchase?',
          answer: 'You need a national ID or a valid Kenyan passport, KRA pin & Passport photo for legal agreement drafting and preparation of transfer forms'
        },
        {
          question: '<b>Q:</b> How can we contact you?',
          answer: 'You can call or WhatsApp via our official number 0720244744 or write to us through <a href="mailto: `Info@adilirealestate.com`">info@adilirealestate.com</a> We are also on <a target="blank" href="http://facebook.com/adilirealestate"> Facebook</a>, <a target="blank" href="http://twitter.com/adilirealestate"> Twitter</a> and <a target="blank" href="http://instagram.com/adilirealestate"> Instagram</a> '
        }
      ]
    }
  },
  methods:{
    viewAll(){
      this.$router.push('/faqs')
    },

    selectQuestion(i){
      if(this.selected == i){
        this.selected = null
      } else {
        this.selected = i
      }
    }
  }

}
</script>


