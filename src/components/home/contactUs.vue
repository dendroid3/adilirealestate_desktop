<template>
  <div class="grey lighten-4">
    <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2rem; color: red;">
      Contact Us
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-6 d-flex justify-center" style="border-right: solid 3px white;">
        <v-form ref="form" class="" style="width: 90%;">
          <p style="font-size: 2.3rem;" class="text--center"> Book Site Visit </p>
          <v-text-field
          placeholder="email"
          v-model="book_data.email"
          label="email"
          type="name"
          outlined
          clearable />
          <v-text-field
          placeholder="phone number"
          v-model="book_data.phone_number"
          label="phone number"
          type="number"
          outlined
          clearable />
          <v-text-field
          placeholder="pick the date you are available"
          v-model="book_data.dates"
          label="availability"
          type="name"
          outlined
          clearable />
          <v-textarea
          placeholder="additional comment"
          v-model="book_data.message"
          label="additional commment"
          type="name"
          outlined
          clearable />
          <p class="text-center">
            {{"Site visits are prearranged and available any day of the weekend. Fill this form to initiate the process. We will get back to you"}}
          </p>
          <div  class="d-flex justify-end">
            <v-btn class="success mb-4"> book </v-btn>
          </div>
        </v-form>
      </v-col>
      <v-col class="col-6 d-flex justify-center">
        <v-form ref="form" class="" style="width: 90%;">
          <p style="font-size: 2.3rem;" class="text--center"> Quick Message</p>
          <v-text-field
          placeholder="email"
          v-model="contact_data.email"
          label="email"
          type="name"
          outlined
          clearable />
          <v-text-field
          placeholder="phone number"
          v-model="contact_data.phone_number"
          label="phone number"
          type="number"
          outlined
          clearable />
          <v-text-field
          placeholder="subject"
          v-model="contact_data.subject"
          label="subject"
          type="name"
          outlined
          clearable />
          <v-textarea
          placeholder="message"
          v-model="contact_data.message"
          label="message"
          type="name"
          outlined
          clearable />
          <p class="text-center">
            {{"We will get back to you via email or SMS in the shortest time"}}
          </p>
          <div  class="d-flex justify-end">
            <v-btn class="success"> send </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  export default{
    name: 'contatUs',
    data(){
      return{
        contact_data: {},
        book_data: {}
      }
    }
  }
</script>