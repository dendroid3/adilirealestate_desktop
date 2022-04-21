<template lang="html">
    <div class="grey lighten-3">

    <v-form ref="form" class="pa-4">
      <p style="font-size: 2.3rem;" v-if="getAddPropertyStep == 1"> add property</p>
      <p style="font-size: 2.3rem;" v-if="getAddPropertyStep == 2"> {{'add '}} {{getAddedProperty.name + "'s"}} {{' images'}}</p>
      <p style="font-size: 2.3rem;" v-if="getAddPropertyStep == 3"> add units to {{" " + getAddedProperty.name}}  {{" " + getAddedProperty.type + "s"}}</p>
      <p style="font-size: 2.3rem;" v-if="getAddPropertyStep == 4"> {{'add '}}{{getAddedUnitsDetails.type}}{{"'s images"}}</p>
      <p style="font-size: 2.3rem;" v-if="getAddPropertyStep == 5"> {{'add '}} {{getAddedProperty.type == 'Stand-Alone' ? ' property ' : ' units '}} {{' information'}}</p>
      <div v-if="getAddPropertyStep == 6" class="text-center">
        <p style="font-size: 2.7rem;" class=" success--text" > {{getAddedProperty.name}}{{' added!'}}</p>
        <v-icon class="success--text"  style="font-size: 5rem;" >
          mdi-check
        </v-icon>
      </div>
      <!-- {{getMyProperty}} -->
      <section v-if="getAddPropertyStep == 1">
        <v-text-field
        placeholder="name"
        v-model="property.name"
        label="name"
        type="name"
        outlined
        clearable />
        <v-select
        :items="typesOfProperty"
        label="Type of property"
        outlined
        v-model="property.type"
        ></v-select>
        <v-select
        :items="getLocations"
        label="Location"
        outlined
        v-model="property.location"
        ></v-select>
        <v-textarea
        placeholder="description"
        v-model="property.description"
        label="description"
        type="name"
        outlined
        clearable />
      </section>

      <section v-if="getAddPropertyStep == 2">
        <v-file-input
        @change="registerImages"
        outlined
        multiple
        label="Images"
        accept="image/*,"
        ></v-file-input>
      </section>

      <section v-if="property.type == 'Stand-Alone' && getAddPropertyStep == 1">

        <v-text-field
        placeholder="number of tenants"
        v-model="property.tenants"
        label="tenants per unit"
        type="number"
        outlined
        clearable />

        
        <v-text-field
        placeholder="rent per tenant"
        v-model="property.rent"
        label="rent per tenant"
        type="number"
        outlined
        clearable /> 

      </section>

      <section v-if="property.type != 'Stand-Alone' && getAddedProperty && getAddPropertyStep == 3">
        
        <v-select
        :items="typesOfUnits"
        label="Type of units"
        outlined
        v-model="units.type"
        ></v-select>

        <v-text-field
        placeholder="number of units"
        v-model="units.quantity"
        label="number of units"
        type="number"
        outlined
        clearable />

        <div class="d-flex">
          <v-text-field
          placeholder="prefix"
          v-model="units.prefix"
          label="prefix"
          type="name"
          outlined
          clearable />

          <v-select
          :items="unitsNomenclature"
          label="Name Type"
          outlined
          v-model="units.name_type"
          ></v-select>
          
          <v-text-field
          placeholder="suffix"
          v-model="units.suffix"
          label="suffix"
          type="name"
          outlined
          clearable />
        
        </div>

        <v-text-field
        placeholder="tenants per unit"
        v-model="units.tenants"
        label="tenants per unit"
        type="number"
        outlined
        clearable />

        
        <v-text-field
        placeholder="rent per tenant"
        v-model="units.rent"
        label="rent per tenant"
        type="number"
        outlined
        clearable />
        
      </section>

        
      <section v-if="getAddPropertyStep == 4">
        <!-- {{getAddedUnitsDetails}} -->
        <v-file-input
        @change="registerImages"
        outlined
        multiple
        label="Images"
        accept="image/*,"
        ></v-file-input>
      </section>

      <section  v-if="getAddPropertyStep == 5">
        <v-select
          v-if="(getAddedProperty.type=='Stand-Alone') && (stand_alone_type)"
          @change="setStandAloneType"
          :items="typesOfUnits"
          label="Type of property"
          outlined
          v-model="new_property_type"
          ></v-select>
        <div>
          <v-list
          class="grey lighten-3"
            subheader
            two-line
          >
            <v-list-item
              class="stripped"
              v-for="(characteristic, i) in characteristics"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="characteristic.label"></v-list-item-title>

                <v-list-item-subtitle v-text="characteristic.value"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn icon>
                  <v-icon color="grey lighten-1" @click="removeCharacteristic(i)">mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </div>
        <div v-if="additional_characteristic">
          <v-text-field
          placeholder="label"
          v-model="characteristic.label"
          label="label"
          type="name"
          outlined
          clearable />
          
          <v-text-field
          placeholder="value"
          v-model="characteristic.value"
          label="value"
          type="name"
          outlined
          clearable />

        </div>
        <div  class="d-flex justify-end mb-2">
        <v-btn small class="success mr-1"
        v-if="!additional_characteristic"> 
          <v-icon @click="additional_characteristic = true">
            mdi-plus
          </v-icon>
        </v-btn>
        <v-btn small class="red white--text mr-1"
        v-if="additional_characteristic && characteristics[0]"> 
          <v-icon @click="additional_characteristic = false">
            mdi-close
          </v-icon>
        </v-btn>

        <v-btn small class="success mr-1"
        @click="registerCharacteristic"
        :disabled="!characteristic.label || !characteristic.value" 
        v-if="additional_characteristic"> 
          <v-icon>
            mdi-check
          </v-icon>
        </v-btn>
      
      </div>
      </section>
      <section  v-if="getAddPropertyStep == 6">
        <div>
          <v-carousel
          style="z-index: 1;"
          class="pa-0"
          :continuous="true"
          :show-arrows="false"
          hide-delimiter-background
          height="270"
          >
            <v-carousel-item
            ripple
            class="pa-0 ma-0"
            active-class="red--text"
            v-for="(image, i) in getMyProperty.images"
            :key="i">
              <v-img class="img rounded  lighten-4 ma-0"
              contain
              :aspect-ratio="1/1"
              :src="fixImageUrl(image.url)"
              />
            </v-carousel-item>
          </v-carousel>
           <v-list
            class="grey lighten-3"
            subheader
            two-line
          >
            <v-list-item
              class="stripped"
            >
              <v-list-item-content>
                <v-list-item-title v-text="'property name:'"></v-list-item-title>

                <v-list-item-subtitle v-text="getMyProperty.name"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            
            <v-list-item
              class="stripped"
            >
              <v-list-item-content>
                <v-list-item-title v-text="'type:'"></v-list-item-title>

                <v-list-item-subtitle v-text="getMyProperty.type "></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              class="stripped"
            >
              <v-list-item-content>
                <v-list-item-title v-text="'location:'"></v-list-item-title>

                <v-list-item-subtitle v-text="getMyProperty.location"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              class="stripped"
            >
              <v-row class="no-gutters">
                <v-col class="col-9">
                  <v-list-item-content>
                    <v-list-item-title v-text="'units:'"></v-list-item-title>

                    <v-list-item-subtitle v-text="'types: ' + getMyProperty.units.length"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col class="col-3 d-flex align-center">
                  <v-btn class="success" small @click="setAddPropertyStep(3)">
                    add units
                  </v-btn>
                </v-col>

              </v-row>

            </v-list-item>
            <div class="px-4 stripped" 
              v-for="unit in getMyProperty.units"
              :key="unit.type">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="unit[0].type + 's'"></v-list-item-title>

                  <v-list-item-subtitle v-text="'quantity: ' + unit.length"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
                
              <v-carousel
              style="z-index: 1;"
              class="pa-0"
              :continuous="true"
              :show-arrows="false"
              hide-delimiter-background
              height="270"
              >
                <v-carousel-item
                ripple
                class="pa-0 ma-0"
                active-class="red--text"
                v-for="(image, i) in unit[0].images"
                :key="i">
                  <v-img class="img rounded  lighten-4 ma-0"
                  contain
                  :src="fixImageUrl(image.url)"
                  />
                </v-carousel-item>
              </v-carousel>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="'rent'"></v-list-item-title>

                  <v-list-item-subtitle v-text="unit[0].rent"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="'tenants/unit'"></v-list-item-title>

                  <v-list-item-subtitle v-text="unit[0].tenants"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-text="'names'"></v-list-item-title>

                  <v-list-item-subtitle v-text="unit[0].name + ' to ' + unit[(unit.length - 1)].name"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>

          </v-list>
        </div>
      </section>

      <div  class="d-flex justify-end" v-if="getAddPropertyStep !== 6">
        <v-btn class="success" @click="submitProperty" :loading="adding"> submit </v-btn>
      </div>

      
      <div  v-if="getAddPropertyStep !== 1 ">
       
        <div class="d-flex justify-center my-2">
          {{'I want to do this later!'}}
        </div>
        
        <div class="d-flex justify-space-between my-2">
          <v-btn class="grey white--text" @click="startOver"> 
            <v-icon>
              mdi-arrow-left
            </v-icon>
            add new property 
          </v-btn>
          <v-btn class="grey white--text" @click="skip" v-if="getAddPropertyStep != 6"> 
            skip
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
          <v-btn class="success white--text" @click="finish" v-if="getAddPropertyStep == 6"> 
            finish
            <v-icon>
              mdi-check
            </v-icon>
          </v-btn>
        </div>

      </div>


    </v-form>

  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AddProperty',
  computed: {
    ...mapGetters(['getAddPropertyStep', 'getAddedProperty', 'getAddedUnitsDetails', 'getMyProperty', 'getPropertyTypes', 'getUnitTypes']),
    electricity_token () {

      if (this.property.electricity_type == "token") {
      
        return true
      
      }
      
      return false
    },

    typesOfProperty () {
      const types  = []
      this.getPropertyTypes.forEach(type => {
        types.push(type.name)
      });
      return types
    },

    typesOfUnits () {
      const types  = []
      this.getUnitTypes.forEach(type => {
        types.push(type.name)
      });
      return types
    }
  },
  data(){
    return{
      adding: false,
      formdata: null,
      property: {
        vacancy: 1
      },
      units: {},
      unitsNomenclature: [
        'Alphabetic',
        'Numeric'
      ],
      additional_characteristic: true,
      getLocations: [
        'Embassy',
        'Bomas',
        'Nyeri view',
        'Nyeri town',
        "King'ong'o",
        "Skuta",
        "Classic",
        "Nyaribo",
        "Kangemi",
        'Kakuru'
      ],
      characteristic: {},
      characteristics: [],
      stand_alone_type: true,
      new_property_type: null
    }
  },
  methods:{
    ...mapActions(['addProperty', 'addUnits', 'setAddPropertyStep', 'addPropertyImages', 'addUnitsImages', 
    'addUnitsDetails', 'toogleInfoBox', 'fetchMyProperty', 'addPropertyDetails', 'getTypes']),
    startOver(){
      this.adding = false
      this.formdata = null
      this.property = {vacancy: 1}
      this.units = {}
      this.additional_characteristic = true
      this.characteristic = {}
      this.characteristics = []
      this.stand_alone_type = true
      this.new_property_type = null
      this.setAddPropertyStep(1)
    },
     finish(){
      this.adding = false
      this.formdata = null
      this.property = {vacancy: 1}
      this.units = {}
      this.additional_characteristic = true
      this.characteristic = {}
      this.characteristics = []
      this.stand_alone_type = true
      this.new_property_type = null
      this.$router.push('/dashboard')
      this.setAddPropertyStep(1)

    },
    skip(){
      this.setAddPropertyStep(this.getAddPropertyStep + 1)
    },
    registerImages(event){
      var fd = new FormData()
      let images = event.length
      for (let i = 0; i < images; i++) {
          fd.append('images[]', event[i])
      }
      this.formdata = fd;
    },
    fixImageUrl(url){
      return process.env.VUE_APP_API + '/storage/' + url
    },
    registerCharacteristic(){
      this.characteristics.push(this.characteristic)
      this.characteristic = {}
      this.additional_characteristic = false
    },
    setStandAloneType(event){
      const characteristic = {
        label: 'type',
        value: event
      }
      this.characteristics.push(characteristic)
      this.stand_alone_type = false

      console.log(event)
      console.log(this.characteristics)
    },
    removeCharacteristic(characteristic_index){
      const characteristics = []
      
      if(this.characteristics[characteristic_index].label == 'type'){
        this.stand_alone_type = true
      }
      for (let index = 0; index < this.characteristics.length; index++) {


        if(characteristic_index != index){
          characteristics.push(this.characteristics[index])
        }
        
      }
      this.characteristics = characteristics
      if(!this.characteristics[0]){
        this.additional_characteristic = true
      }
    },
    submitProperty () {
      this.adding = true
      console.log(this.property)
      switch (this.getAddPropertyStep) {
        case 1:
          this.addProperty(this.property).then((res) => {
            this.adding = res
          })
          break;

        case 2:
          //image??
          this.formdata.append('property_id', this.getAddedProperty.id)
          this.formdata.append('property_name', this.getAddedProperty.name)
          this.addPropertyImages(this.formdata).then((res) => {
            this.adding = res
            this.formdata = null
          })
          break;
          
        case 3:

          const data = {
            property_id: this.getAddedProperty.id,
            name_type: this.units.name_type,
            name_prefix: this.units.prefix ? this.units.prefix : null,
            name_suffix: this.units.suffix ? this.units.suffix : null,
            type: this.units.type,
            tenants: this.units.tenants,
            rent: this.units.rent,
            quantity: this.units.quantity
          }
          console.log(data)
          const units = []
          units.push(data)
          console.log(units)
          this.addUnits(units).then((res) => {
            this.adding = res
          })

        case 4:
          this.formdata.append('unit_ids', this.getAddedUnitsDetails.units_ids)
          this.addUnitsImages(this.formdata).then((res) => {
            this.adding = res
          })
          break;

        case 5:
          if(this.getAddedProperty.type == 'Stand-Alone'){
            let details = this.characteristics.filter(c => (c.label != 'type'))

            const data = {
              property_id: this.getAddedProperty.id,
              details: details,
              type: this.new_property_type
            }
            console.log(data)
            // console.log('la')
            // console.log(la)
            // console.log('la')
            this.addPropertyDetails(data).then((res) => {
              this.adding = res
            })

          } else {
            const data = {
              property_id: this.getAddedProperty.id,
              details: this.characteristics,
              type: this.getAddedUnitsDetails.type
            }
            console.log(this.characteristics)
            this.addUnitsDetails(data).then((res) => {
              this.adding = res
            })
          }
          break;
          
        default:
          break;
      }
    },

  },

  mounted(){
    if(this.getAddPropertyStep === 1){
       const data = {
        status: true,
        information: 'Here you are to add basic inforamtion in the property. It is the first of several steps'
      }
      this.toogleInfoBox(data)
      //get property types and unit types
      this.getTypes()
    }
  },
  beforeDestroy(){
    const data = {
      status: false,
      information: null
    }
    this.toogleInfoBox(data)
  }
}
</script>
<style lang="css" scoped>
.stripped{
  background-color: #E0E0E0;
}
.stripped:nth-child(even){
  background-color:#F5F5F5;
}
  
</style>
