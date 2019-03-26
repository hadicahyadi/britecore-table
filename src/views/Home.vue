<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row">
      <div class="col-md-12">
        <DataTable :items="items" :fields="fields" @descriptionUpdated="updateDescription" v-if="items.length" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from '@/components/DataTable.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    DataTable
  },
  data () {
    return {
      fields: ['ID', 'Name', 'Description', 'Date', 'Amount']
    }
  },
  computed: {
    ...mapState([
      'items'
    ])
  },
  methods: {
    updateDescription(item) {
      this.$store.dispatch('updateItem', item)
    }
  },
  created () {
    this.$store.dispatch('getItems')
  }
}
</script>
