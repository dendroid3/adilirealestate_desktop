<template lang="html">
  <div>
    <div class="d-flex justify-center animate__animated animate__zoomIn" style="font-size: 2.3rem; color: red;">
      Book site visit on propertyxyz
    </div>
    <v-row class="no-gutters mb-3">
      <v-col class="col-6 d-flex justify-center align-center pa-4" style="border-right: solid 3px white;">
        You can talk to us, we can talk back. Rules of engagements, disclaimers, perhaps an icon <br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus modi alias deleniti. Assumenda ut nisi doloremque quidem animi sunt reprehenderit unde error cumque corrupti dicta provident cum dolor, ex asperiores accusantium aut voluptates et corporis molestiae rerum odio, ipsum culpa. Amet, labore autem voluptatem laboriosam pariatur vero quos fuga. Corrupti!
      </v-col>
      <v-col class="col-6 d-flex justify-center">
        <v-form ref="form" class="" style="width: 90%;">
          <p style="font-size: 2.3rem;" class="text--center"> Book Site Visit </p>
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
          placeholder="pick the date you are available"
          v-model="contact_data.dates"
          label="availability"
          type="name"
          outlined
          clearable />
          <v-textarea
          placeholder="additional comment"
          v-model="contact_data.message"
          label="additional commment"
          type="name"
          outlined
          clearable />
          <div  class="d-flex justify-end">
            <v-btn class="success mb-4"> book </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'book',
  data(){
    return{
      contact_data: {}
    }
  }
}
</script>
