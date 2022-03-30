<template>
  <div>
    I am configure property
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ConfigureProperty',
  computed: {
    ...mapGetters(['getAddedProperty'])
  }
}
</script>
