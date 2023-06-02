<template>
  <div style="min-height: 75vh;" class="d-flex align-center justify-center">
    <div class="rounded red lighten-4">
      <div class="d-flex justify-center ma-4 pa-4 red lighten-4">
        <v-img class="rounded lighten-4 red"
          style="width:25vw; height: 25vh;"
          contain
          :src="require('../assets/pageNotFound.svg')"
          />
      </div>
      <div class="d-flex justify-center ma-4 pa-4">
        Page Not Found
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'AddLand'
  }
</script>
