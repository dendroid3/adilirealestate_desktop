<template lang="html">
  <div>
    <div class="d-flex justify-center align-center animate__animated animate__zoomIn mt-4" style="font-size: 2rem; color: red;">
      FAQs
      <v-btn x-small text class="blue--text" @click="viewAll">
        view all
      </v-btn>

    </div>
    <v-row class="no-gutters" v-for="(question, i) in faqs" :key="i">
      <v-col class="col-8 offset-2">
        <span style="font-size: 1.5rem; color: red;">
          {{question.question}}
        </span> <br>
        <span class="ml-2" v-html="question.answer">
          <!-- {{}} -->
        </span>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'faqsSection',
  data(){
    return{
      faqs:[
        {
          question: 'When can I book a site visit?',
          answer: 'Our team is ready to take you for a site visit every Saturday and Sunday.  Contact us today to schedule your site visit or click on the book section.'
        },
        {
          question: 'Do you have a flexible mode of payment?',
          answer: 'Yes. You choose the cash option where you pay the full amount or the installment option where you pay a deposit and clear the balance in 9 months.'
        },
        {
          question: 'What mode of payment do you accept?',
          answer: 'We accept payment through: <br> <span class="ml-4"> a) Our MPESA Paybill No: ****Acc: Your two names.</span> <br> <span class="ml-4"> b) Back deposits to DTB Account No: **** Branch: Mombasa. <span>'
        },
        {
          question: 'When can I book a site visit?',
          answer: 'Our team is ready to take you for a site visit every Saturday and Sunday.  Contact us today to schedule your site visit or click on the book section.'
        },
        {
          question: 'Do your parcels have titles deeds?',
          answer: 'All our plots have ready freehold title deeds.'
        },
        {
          question: 'After how long will the transfer process be complete?',
          answer: 'The land transfer process takes 3-6 months from when the full payment is made.'
        },
        {
          question: 'Can I use my personal advocate?',
          answer: 'Yes. A purchaser is free to seek the services of their advocate.'
        },
        {
          question: 'Do you sell land to Kenyans in the diaspora?',
          answer: 'Yes. Investors living outside the country are welcome to buy land with us. Get in touch with our sales team via the various contact platforms. The projects catalogue will be sent to you after which we will schedule a site visit with your trusted representative in Kenya. The rest of the correspondence is between the company and the purchaser/representative/advocate. '
        },
        {
          question: 'How can we contact you?',
          answer: 'You can call or WhatsApp via our official number 0700000000 or write to us through adilipropertieske@gmail.com. We are also on <a target="blank" href="http://facebook.com/adiliRealEstateKe"> Facebook</a>, <a target="blank" href="http://twitter.com/adiliRealEstateKe"> Twitter</a> and <a target="blank" href="http://instagram.com/adiliRealEstateKe"> Instagram</a> '
        }
      ]
    }
  },
  methods:{
    viewAll(){
      this.$router.push('/faqs')
    }
  }

}
</script>
